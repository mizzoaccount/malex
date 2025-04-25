"use client"
import { useState, useEffect, useRef } from 'react';
import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import { User } from '@/types';

const ChatWindow = () => {
  const { user } = useAuth();
  const { 
    currentConversation, 
    messages, 
    sendMessage, 
    socket,
    markAsRead,
//Initial
  } = useChat();
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      socket?.emit('typing', { 
        conversationId: currentConversation?._id, 
        userId: user?.id,
        isTyping: false 
      });
    }
  };

  const handleTyping = () => {
    socket?.emit('typing', { 
      conversationId: currentConversation?._id, 
      userId: user?.id,
      isTyping: message.length > 0 
    });
  };

  // Auto-scroll to bottom and mark messages as read
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Mark unread messages as read
    if (currentConversation && user) {
      messages.forEach(msg => {
        if (msg.sender !== user.id && !msg.readBy.includes(user.id)) {
          markAsRead(msg._id);
        }
      });
    }
  }, [messages, currentConversation, user]);

  // Load initial data when conversation changes
  {/*useEffect(() => {
    if (currentConversation) {
      loadInitialData();
    }
  }, [currentConversation, loadInitialData]);*/}

  const getOtherParticipant = (): User | null => {
    if (!currentConversation || !user) return null;
    
    const participant = currentConversation.participants.find(p => {
      // Handle both string ID and User object cases
      if (typeof p.userId === 'string') {
        return p.userId !== user.id;
      } else {
        return p.userId._id !== user.id;
      }
    });

    if (!participant) return null;

    // Return the User object if populated, or null if it's just an ID
    return typeof participant.userId === 'string' ? null : participant.userId;
  };

  if (!currentConversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a conversation to start chatting</p>
      </div>
    );
  }

  const otherParticipant = getOtherParticipant();
  if (!otherParticipant) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="p-4 border-b border-gray-200 flex items-center">
        <img 
          src={otherParticipant.avatar || '/default-avatar.png'} 
          className="w-10 h-10 rounded-full mr-3"
          alt={otherParticipant.username}
        />
        <div>
          <h3 className="font-medium">{otherParticipant.username}</h3>
          <p className="text-sm text-gray-500">
            {otherParticipant.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
        {isTyping && (
          <div className="ml-auto text-sm text-gray-500">
            typing...
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
     
{messages.map(msg => {
  // Handle both string and object sender formats
  const senderId = typeof msg.sender === 'string' ? msg.sender : msg.sender?._id;
  const isCurrentUser = senderId === user?.id;

  // Skip if this is an optimistic message that was replaced
  if (msg.isOptimistic && messages.some(m => 
    !m.isOptimistic && m._id !== msg._id && m.content === msg.content
  )) {
    return null;
  }

  return (
    <div key={msg._id || msg.content} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {/* ... rest of your message rendering ... */}

      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}>
        <p>{msg.content}</p>
        <p className={`text-xs mt-1 ${
          isCurrentUser ? 'text-blue-200' : 'text-gray-500'
        }`}>
          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {!isCurrentUser && msg.readBy.includes(user?.id || '') && (
            <span className="ml-1">✓ Read</span>
          )}
        </p>
      </div>
    </div>
  );
})}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping();
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

// components/chat/ChatWindow.tsx
{/*"use client"
import { useState, useEffect, useRef } from 'react';
import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import { User } from '@/types';

const ChatWindow = () => {
  const { user } = useAuth();
  const { 
    currentConversation, 
    messages, 
    sendMessage, 
    socket,
    markAsRead
  } = useChat();
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      socket?.emit('typing', { 
        conversationId: currentConversation?._id, 
        userId: user?.id,
        isTyping: false 
      });
    }
  };

  const handleTyping = () => {
    socket?.emit('typing', { 
      conversationId: currentConversation?._id, 
      userId: user?.id,
      isTyping: message.length > 0 
    });
  };

  // Auto-scroll to bottom and mark messages as read
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Mark unread messages as read
    if (currentConversation && user) {
      messages.forEach(msg => {
        if (msg.sender !== user.id && !msg.readBy.includes(user.id)) {
          markAsRead(msg._id);
        }
      });
    }
  }, [messages, currentConversation, user]);

  const getOtherParticipant = (): User | null => {
    if (!currentConversation || !user) return null;
    
    const participant = currentConversation.participants.find(p => {
      // Handle both string ID and User object cases
      if (typeof p.userId === 'string') {
        return p.userId !== user.id;
      } else {
        return p.userId._id !== user.id;
      }
    });

    if (!participant) return null;

    // Return the User object if populated, or null if it's just an ID
    return typeof participant.userId === 'string' ? null : participant.userId;
  };

  if (!currentConversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a conversation to start chatting</p>
      </div>
    );
  }

  const otherParticipant = getOtherParticipant();
  if (!otherParticipant) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Chat header *
      <div className="p-4 border-b border-gray-200 flex items-center">
        <img 
          src={otherParticipant.avatar || '/default-avatar.png'} 
          className="w-10 h-10 rounded-full mr-3"
          alt={otherParticipant.username}
        />
        <div>
          <h3 className="font-medium">{otherParticipant.username}</h3>
          <p className="text-sm text-gray-500">
            {otherParticipant.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
        {isTyping && (
          <div className="ml-auto text-sm text-gray-500">
            typing...
          </div>
        )}
      </div>

      {/* Messages *
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
     
{messages.map(msg => {
  // Handle both string and object sender formats
  const senderId = typeof msg.sender === 'string' ? msg.sender : msg.sender?._id;
  const isCurrentUser = senderId === user?.id;

  // Skip if this is an optimistic message that was replaced
  if (msg.isOptimistic && messages.some(m => 
    !m.isOptimistic && m._id !== msg._id && m.content === msg.content
  )) {
    return null;
  }

  return (
    <div key={msg._id || msg.content} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {/* ... rest of your message rendering ... *
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isCurrentUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}>
        <p>{msg.content}</p>
        <p className={`text-xs mt-1 ${
          isCurrentUser ? 'text-blue-200' : 'text-gray-500'
        }`}>
          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {!isCurrentUser && msg.readBy.includes(user?.id || '') && (
            <span className="ml-1">✓ Read</span>
          )}
        </p>
      </div>
    </div>
  );
})}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input *
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleTyping();
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;*/}










// components/chat/ChatWindow.tsx
