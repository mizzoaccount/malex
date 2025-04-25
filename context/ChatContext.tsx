
"use client"
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message, Conversation, User } from '../types';
import { useAuth } from './AuthContext';

interface ChatContextType {
  socket: Socket | null;
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  onlineUsers: string[];
  setCurrentConversation: (conv: Conversation | null) => void;
  sendMessage: (content: string) => Promise<void>;
  markAsRead: (messageId: string) => void;
  getOrCreateConversation: (participantId: string) => Promise<Conversation>;
  fetchMessages: (conversationId: string) => Promise<void>;
  fetchConversations: () => Promise<void>;
 
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useAuth();

  // Initialize socket connection
  useEffect(() => {
    if (!user) return;

    const newSocket = io(process.env.NEXT_PUBLIC_API_URL!, {
      auth: { userId: user.id },
      withCredentials: true,
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // Socket event listeners
  useEffect(() => {
    if (!socket || !user) return;

    const handleReceiveMessage = (message: Message) => {
      setMessages(prev => {
        // Replace optimistic message if exists
        const existingIndex = prev.findIndex(m => 
          m.isOptimistic && 
          m.content === message.content && 
          m.sender === message.sender
        );
        
        if (existingIndex >= 0) {
          const newMessages = [...prev];
          newMessages[existingIndex] = message;
          return newMessages;
        }
        
        // Or add new message if not duplicate
        if (!prev.some(m => m._id === message._id)) {
          return [...prev, message];
        }
        
        return prev;
      });

      // Update conversation list
      setConversations(prev => 
        prev.map(conv => 
          conv._id === message.conversationId 
            ? { ...conv, updatedAt: new Date(), lastMessage: message }
            : conv
        ).sort((a, b) => 
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        )
      );
    };

    socket.on('receiveMessage', handleReceiveMessage);
    socket.on('onlineUsers', (users: string[]) => setOnlineUsers(users));

    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
      socket.off('onlineUsers');
    };
  }, [socket, user]);

  const fetchConversations = useCallback(async () => {
    if (!user) return;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversations`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setConversations(data);
    } catch (err) {
      console.error('Error fetching conversations:', err);
    }
  }, [user]);

  const fetchMessages = async (conversationId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${conversationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };



  const getOrCreateConversation = async (participantId: string): Promise<Conversation> => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversations/find-or-create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ participantId })
      });
      const data = await res.json();
      
      if (socket) {
        socket.emit('joinConversation', data._id);
      }
      
      return data;
    } catch (err) {
      console.error('Error getting or creating conversation:', err);
      throw err;
    }
  };

  const sendMessage = async (content: string) => {
    if (!socket || !currentConversation || !user?.id) {
      console.error('Missing required data for sending message');
      return;
    }

    // Create optimistic message
    const optimisticMessage: Message = {
      _id: `temp-${Date.now()}`,
      conversationId: currentConversation._id,
      sender: user.id,
      content,
      readBy: [user.id],
      createdAt: new Date().toISOString(),
      isOptimistic: true
    };

    // Optimistically update UI
    setMessages(prev => [...prev, optimisticMessage]);

    try {
      // Find recipient
      const recipient = currentConversation.participants.find(p => {
        const participantId = typeof p.userId === 'string' ? p.userId : p.userId._id;
        return participantId !== user.id;
      });

      if (!recipient) {
        throw new Error('Recipient not found');
      }

      const recipientId = typeof recipient.userId === 'string' 
        ? recipient.userId 
        : recipient.userId._id;

      // Emit message with acknowledgement
      await new Promise<void>((resolve, reject) => {
        socket.emit('sendMessage', {
          conversationId: currentConversation._id,
          sender: user.id,
          content,
          recipientId
        }, (response: { success: boolean, error?: string }) => {
          if (response.success) {
            resolve();
          } else {
            reject(response.error || 'Failed to send message');
          }
        });
      });

    } catch (error) {
      console.error('Error sending message:', error);
      // Roll back optimistic update
      setMessages(prev => prev.filter(msg => msg._id !== optimisticMessage._id));
    }
  };

  const markAsRead = async (messageId: string) => {
    if (!user?.id) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${messageId}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setMessages(prev => 
        prev.map(msg => 
          msg._id === messageId && !msg.readBy.includes(user.id)
            ? { ...msg, readBy: [...msg.readBy, user.id] }
            : msg
        )
      );
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  // Join conversation room when current conversation changes
  useEffect(() => {
    if (socket && currentConversation) {
      socket.emit('joinConversation', currentConversation._id);
    }
  }, [socket, currentConversation]);

  // Initial data fetch
  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const contextValue = useMemo(() => ({
    socket,
    conversations,
    currentConversation,
    messages,
    onlineUsers,
    setCurrentConversation,
    sendMessage,
    markAsRead,
    getOrCreateConversation,

    fetchMessages,
    fetchConversations
  }), [
    socket,
    conversations,
    currentConversation,
    messages,

    onlineUsers
  ]);

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);

// use client
/*"use client"
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message, Conversation, User } from '../types';
import { useAuth } from './AuthContext';

interface ChatContextType {
  socket: Socket | null;
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  onlineUsers: string[];
  setCurrentConversation: (conv: Conversation | null) => void;
  sendMessage: (content: string) => Promise<void>;
  markAsRead: (messageId: string) => void;
  getOrCreateConversation: (participantId: string) => Promise<Conversation>;
  fetchMessages: (conversationId: string) => Promise<void>;
  fetchConversations: () => Promise<void>;
  loadInitialData: () => Promise<void>;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useAuth();

  const fetchConversations = useCallback(async () => {
    if (!user) return;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversations`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setConversations(data);
    } catch (err) {
      console.error('Error fetching conversations:', err);
    }
  }, [user]);

  const fetchMessages = useCallback(async (conversationId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${conversationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  }, []);

  const loadInitialData = useCallback(async () => {
    await fetchConversations();
    if (currentConversation) {
      await fetchMessages(currentConversation._id);
    }
  }, [fetchConversations, fetchMessages, currentConversation]);

  // Initialize socket connection
  useEffect(() => {
    if (!user) return;

    const newSocket = io(process.env.NEXT_PUBLIC_API_URL!, {
      auth: { userId: user.id },
      withCredentials: true,
    });
    setSocket(newSocket);

    // Load initial data when socket connects
    newSocket.on('connect', () => {
      loadInitialData();
    });

    return () => {
      newSocket.disconnect();
    };
  }, [user, loadInitialData]);

  // ChatContext.tsx
/*useEffect(() => {
  if (!socket || !user) return;

  const handleConversationUpdate = (updatedConversation: Conversation) => {
    setConversations(prev => 
      prev.map(conv => 
        conv._id === updatedConversation._id ? updatedConversation : conv
      )
    );
    
    if (currentConversation?._id === updatedConversation._id) {
      setCurrentConversation(updatedConversation);
    }
  };

  socket.on('conversationUpdated', handleConversationUpdate);

  return () => {
    socket.off('conversationUpdated', handleConversationUpdate);
  };
}, [socket, user, currentConversation]);*

  // Rest of your existing ChatContext implementation...
  const getOrCreateConversation = async (participantId: string): Promise<Conversation> => {
    if (!user) throw new Error('User not authenticated');
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conversations/find-or-create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ participantId })
      });
      const data = await res.json();
      
      if (socket) {
        socket.emit('joinConversation', data._id);
      }
      
      return data;
    } catch (err) {
      console.error('Error getting or creating conversation:', err);
      throw err;
    }
  };

  const sendMessage = async (content: string) => {
    if (!socket || !currentConversation || !user?.id) {
      console.error('Missing required data for sending message');
      return;
    }

    // Create optimistic message
    const optimisticMessage: Message = {
      _id: `temp-${Date.now()}`,
      conversationId: currentConversation._id,
      sender: user.id,
      content,
      readBy: [user.id],
      createdAt: new Date().toISOString(),
      isOptimistic: true
    };

    // Optimistically update UI
    setMessages(prev => [...prev, optimisticMessage]);

    try {
      // Find recipient
      const recipient = currentConversation.participants.find(p => {
        const participantId = typeof p.userId === 'string' ? p.userId : p.userId._id;
        return participantId !== user.id;
      });

      if (!recipient) {
        throw new Error('Recipient not found');
      }

      const recipientId = typeof recipient.userId === 'string' 
        ? recipient.userId 
        : recipient.userId._id;

      // Emit message with acknowledgement
      await new Promise<void>((resolve, reject) => {
        socket.emit('sendMessage', {
          conversationId: currentConversation._id,
          sender: user.id,
          content,
          recipientId
        }, (response: { success: boolean, error?: string }) => {
          if (response.success) {
            resolve();
          } else {
            reject(response.error || 'Failed to send message');
          }
        });
      });

    } catch (error) {
      console.error('Error sending message:', error);
      // Roll back optimistic update
      setMessages(prev => prev.filter(msg => msg._id !== optimisticMessage._id));
    }
  };

  const markAsRead = async (messageId: string) => {
    if (!user?.id) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${messageId}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setMessages(prev => 
        prev.map(msg => 
          msg._id === messageId && !msg.readBy.includes(user.id)
            ? { ...msg, readBy: [...msg.readBy, user.id] }
            : msg
        )
      );
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  const contextValue = useMemo(() => ({
    socket,
    conversations,
    currentConversation,
    messages,
    onlineUsers,
    setCurrentConversation,
    sendMessage,
    markAsRead,
    getOrCreateConversation,
    fetchMessages,
    fetchConversations,
    loadInitialData
  }), [
    socket,
    conversations,
    currentConversation,
    messages,
    onlineUsers,
    loadInitialData,
    fetchMessages,
    fetchConversations
  ]);

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);*/