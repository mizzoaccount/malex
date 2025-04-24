// context/ChatContext.tsx
/*"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message, Conversation } from '../types';
import { useAuth } from './AuthContext';

interface ChatContextType {
  socket: Socket | null;
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  onlineUsers: string[];
  setCurrentConversation: (conv: Conversation | null) => void;
  sendMessage: (content: string) => void;
  markAsRead: (messageId: string) => void;
  getOrCreateConversation: (participantId: string) => Promise<Conversation>;
  fetchMessages: (conversationId: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Initialize socket connection
    const newSocket = io(process.env.NEXT_PUBLIC_API_URL!, {
      auth: { userId: user._id }
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket || !user) return;

    // Join user's room
    socket.emit('joinUser', user._id);

    // Listen for new messages
    socket.on('receiveMessage', (message: Message) => {
      if (message.conversationId === currentConversation?._id) {
        setMessages(prev => [...prev, message]);
      }
      // Update conversation list with latest message
      setConversations(prev => 
        prev.map(conv => 
          conv._id === message.conversationId 
            ? { ...conv, updatedAt: new Date(), lastMessage: message }
            : conv
        ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      );
    });

    // Listen for typing indicators
    socket.on('userTyping', ({ userId, isTyping }) => {
      // Handle typing indicator UI
    });

    // Listen for online users
    socket.on('onlineUsers', (users: string[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('userTyping');
      socket.off('onlineUsers');
    };
  }, [socket, currentConversation, user]);

  const fetchConversations = async () => {
    if (!user) return;
    
    try {
      const res = await fetch('/api/conversations', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setConversations(data);
    } catch (err) {
      console.error('Error fetching conversations:', err);
    }
  };

  const fetchMessages = async (conversationId: string) => {
    try {
      const res = await fetch(`/api/messages/${conversationId}`, {
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
      const res = await fetch('/api/conversations/find-or-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ participantId })
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error getting or creating conversation:', err);
      throw err;
    }
  };

  const sendMessage = async (content: string) => {
    if (!socket || !currentConversation || !user) return;
    
    const message = {
      conversationId: currentConversation._id,
      sender: user._id,
      content,
      recipientId: currentConversation.participants
        .find((p) => typeof p.userId !== 'string' && p.userId._id !== user._id)?.userId._id
    };

    socket.emit('sendMessage', message);
  };

  const markAsRead = async (messageId: string) => {
    try {
      await fetch(`/api/messages/${messageId}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setMessages(prev => 
        prev.map(msg => 
          msg._id === messageId && !msg.readBy.includes(user?._id || '')
            ? { ...msg, readBy: [...msg.readBy, user?._id || ''] }
            : msg
        )
      );
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  return (
    <ChatContext.Provider value={{
      socket,
      conversations,
      currentConversation,
      messages,
      onlineUsers,
      setCurrentConversation: setCurrentConversation,
      sendMessage,
      markAsRead,
      getOrCreateConversation,
      fetchMessages
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);*/


// context/ChatContext.tsx
// context/ChatContext.tsx
"use client"
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message, Conversation } from '../types';
import { useAuth } from './AuthContext';

interface ChatContextType {
  socket: Socket | null;
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  onlineUsers: string[];
  setCurrentConversation: (conv: Conversation | null) => void;
  sendMessage: (content: string) => void;
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

  useEffect(() => {
    if (!user) return;

    // Initialize socket connection
    const newSocket = io(process.env.NEXT_PUBLIC_API_URL!, {
      auth: { userId: user.id }
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socket || !user) return;

    // Join user's room
    socket.emit('joinUser', user.id);

    // Listen for new messages
    /*socket.on('receiveMessage', (message: Message) => {
      if (message.conversationId === currentConversation?._id) {
        setMessages(prev => [...prev, message]);
      }
      // Update conversation list with latest message
      setConversations(prev => 
        prev.map(conv => 
          conv._id === message.conversationId 
            ? { ...conv, updatedAt: new Date(), lastMessage: message }
            : conv
        ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      );
    });*/

    // Listen for typing indicators
    socket.on('userTyping', ({ userId, isTyping }) => {
      // Handle typing indicator UI
    });

    const handleReceiveMessage = (message: Message) => {
      console.log('Received new message:', message);
      
      // Update messages for current conversation
      if (message.conversationId === currentConversation?._id) {
        setMessages(prev => {
          // Prevent duplicates
          if (prev.some(m => m._id === message._id)) return prev;
          return [...prev, message];
        });
      }
  
      // Update conversation list
      setConversations(prev => 
        prev.map(conv => 
          conv._id === message.conversationId 
            ? { 
                ...conv, 
                updatedAt: new Date(), 
                lastMessage: message 
              }
            : conv
        ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      );
    };

    
    socket.on('receiveMessage', handleReceiveMessage);

    // Listen for online users
    socket.on('onlineUsers', (users: string[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('userTyping');
      socket.off('onlineUsers');
    };
  }, [socket, currentConversation, user]);

const fetchConversations = useCallback(async () => {
  if (!user) return;
  
  try {
    const res = await fetch('http://localhost:5000/api/conversations', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await res.json();
    setConversations(data);
  } catch (err) {
    console.error('Error fetching conversations:', err);
  }
}, [user]); // Only recreate when user changes

  const fetchMessages = async (conversationId: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${conversationId}`, {
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
      const res = await fetch('http://localhost:5000/api/conversations/find-or-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ participantId })
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error getting or creating conversation:', err);
      throw err;
    }
  };
  const sendMessage = async (content: string) => {
    console.log('Current user:', user); // Debug log
    
    if (!socket || !currentConversation || !user?.id) {
      console.error('Missing required data:', {
        socket: !!socket,
        conversation: !!currentConversation,
        userId: user?.id
      });
      return;
    }
  
    // Find recipient - handle both string and User object cases
    const recipient = currentConversation.participants.find(p => {
      const participantId = typeof p.userId === 'string' ? p.userId : p.userId._id;
      return participantId !== user.id;
    });
  
    if (!recipient) {
      console.error('Recipient not found in:', currentConversation.participants);
      return;
    }
  
    const recipientId = typeof recipient.userId === 'string' 
      ? recipient.userId 
      : recipient.userId._id;
  
    const message = {
      conversationId: currentConversation._id,
      sender: user.id, // Now properly using _id
      content,
      recipientId,
      createdAt: new Date().toISOString()
    };
  
    console.log('Emitting message:', message);
    
    // Add acknowledgement handler
    socket.emit('sendMessage', message, (ack: { success: boolean, error?: string }) => {
      if (ack.success) {
        console.log('Message successfully received by server');
      } else {
        console.error('Failed to send message:', ack.error);
      }
    });
  };
  

  const markAsRead = async (messageId: string) => {
    try {
      await fetch(`http://localhost:5000/api/messages/${messageId}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setMessages(prev => 
        prev.map(msg => 
          msg._id === messageId && !msg.readBy.includes(user?.id || '')
            ? { ...msg, readBy: [...msg.readBy, user?.id || ''] }
            : msg
        )
      );
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

 return (
    <ChatContext.Provider value={{
      socket,
      conversations,
      currentConversation,
      messages,
      onlineUsers,
      setCurrentConversation: setCurrentConversation,
      sendMessage,
      markAsRead,
      getOrCreateConversation,
      fetchMessages,
      fetchConversations
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);