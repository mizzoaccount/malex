/*'use client';

import { useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import ChatList from '@/components/chat/ChatList';
import ChatWindow from '@/components/chat/ChatWindow';

const ChatPage = () => {
  const { setCurrentConversation } = useChat();
  const { token } = useAuth(); // Retrieve the token from AuthContext

  // Log the token after retrieving it
  console.log('Token retrieved from AuthContext:', token);

  // Example: Fetch initial conversation if needed
  useEffect(() => {
    const fetchInitialConversation = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/conversations/find-or-create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` // Use the token from AuthContext
          },
          body: JSON.stringify({ participantId: '6809f0478f0d21fd0896902c' })  
      
          
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error('Failed to fetch initial conversation:', errorData.message || 'Unknown error');
          return;
        }

        const data = await res.json();
        console.log('Initial conversation fetched successfully:', data);
        setCurrentConversation(data);
      } catch (error) {
        console.error('Error fetching initial conversation:', error);
      }
    };

    if (token) {
      console.log('Token is available, fetching initial conversation.');
      fetchInitialConversation();
    } else {
      console.error('User not authenticated or still loading...');
    }
  }, [token, setCurrentConversation]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 border-r border-gray-200 bg-white">
        <ChatList />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatPage;*/

'use client';

import { useEffect, useRef } from 'react';
import { useChat } from '@/context/ChatContext';
import { useAuth } from '@/context/AuthContext';
import ChatList from '@/components/chat/ChatList';
import ChatWindow from '@/components/chat/ChatWindow';

const ChatPage = () => {
  const { setCurrentConversation } = useChat();
  const { token } = useAuth();

 const hasFetched = useRef(false); // Prevent re-fetching on re-renders

  useEffect(() => {
    if (!token || hasFetched.current) return;

    const fetchInitialConversation = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/conversations/find-or-create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ participantId: '6809f0478f0d21fd0896902c' }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error('Failed to fetch initial conversation:', errorData.message || 'Unknown error');
          return;
        }

        const data = await res.json();
        console.log('Initial conversation fetched:', data);
        setCurrentConversation(data);
        hasFetched.current = true; // Prevent further fetches
      } catch (error) {
        console.error('Error fetching initial conversation:', error);
      }
    };

    fetchInitialConversation();
  }, [token, setCurrentConversation]);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 border-r border-gray-200 bg-white">
        <ChatList />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatPage;
