"use client"
import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import { Conversation, User } from '@/types';
import { useEffect } from 'react';

const ChatList = () => {
  const { user } = useAuth();
  const { 
    conversations, 
    currentConversation, 
    setCurrentConversation,
    fetchMessages,
    //loadInitialData
  } = useChat();

  /*useEffect(() => {
    if (loadInitialData) {
      loadInitialData();
    }
  }, [loadInitialData]);*/

  const handleSelectConversation = async (conversation: Conversation) => {
    setCurrentConversation(conversation);
    await fetchMessages(conversation._id);
  };

  const getOtherParticipant = (conversation: Conversation): User | null => {
    if (!user) return null;
    
    const participant = conversation.participants.find(p => {
      if (typeof p.userId === 'string') {
        return p.userId !== user.id;
      } else {
        return p.userId._id !== user.id;
      }
    });

    if (!participant) return null;
    return typeof participant.userId === 'string' ? null : participant.userId;
  };

  if (!conversations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Conversations</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {conversations.map(conversation => {
          const otherParticipant = getOtherParticipant(conversation);
          if (!otherParticipant) return null;
          
          // Get last message content safely
          const lastMessageContent = conversation.lastMessage
            ? typeof conversation.lastMessage === 'object'
              ? conversation.lastMessage.content
              : ''
            : '';

          return (
            <div 
              key={conversation._id}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                currentConversation?._id === conversation._id ? 'bg-blue-50' : ''
              }`}
              onClick={() => handleSelectConversation(conversation)}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={otherParticipant.avatar || '/default-avatar.png'} 
                  className="w-10 h-10 rounded-full"
                  alt={otherParticipant.username}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {otherParticipant.username}
                    {otherParticipant.isOnline && (
                      <span className="ml-2 inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {lastMessageContent}
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(conversation.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;

{/*import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import { Conversation, User } from '@/types';
import { useEffect } from 'react';

const ChatList = () => {
  const { user } = useAuth();
  const { 
    conversations, 
    currentConversation, 
    setCurrentConversation,
    fetchMessages,
    fetchConversations
  } = useChat();

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  /*useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);*

  const handleSelectConversation = async (conversation: Conversation) => {
    setCurrentConversation(conversation);
    await fetchMessages(conversation._id);
  };

  const getOtherParticipant = (conversation: Conversation): User | null => {
    if (!user) return null;
    
    const participant = conversation.participants.find(p => {
      // Handle both cases where userId could be string or User object
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

  if (!conversations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Conversations</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {conversations.map(conversation => {
          const otherParticipant = getOtherParticipant(conversation);
          if (!otherParticipant) return null;
          
          return (
            <div 
              key={conversation._id}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                currentConversation?._id === conversation._id ? 'bg-blue-50' : ''
              }`}
              onClick={() => handleSelectConversation(conversation)}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={otherParticipant.avatar || '/default-avatar.png'} 
                  className="w-10 h-10 rounded-full"
                  alt={otherParticipant.username}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {otherParticipant.username}
                    {otherParticipant.isOnline && (
                      <span className="ml-2 inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {typeof conversation.lastMessage === 'object' 
                      ? conversation.lastMessage?.content 
                      : ''}
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(conversation.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;*/}














