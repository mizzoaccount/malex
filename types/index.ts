

  export interface User {
    _id: string;
    username: string;
    avatar?: string;
    role: 'user' | 'admin';
    isOnline?: boolean;
    lastSeen?: Date;
  }
  
  export interface Participant {
    userId: User | string; // Can be populated or just the ID
    role: 'user' | 'admin';
  }

  // types/index.ts
// types/index.ts
export interface Message {
  _id: string;
  conversationId: string;
  sender: string | { 
    _id: string; 
    username: string; 
    avatar?: string 
  };
  content: string;
  readBy: string[];
  createdAt: Date | string;
  isOptimistic?: boolean; // Add this optional field
}


  
  export interface Conversation {
    _id: string;
    participants: Participant[];
    messages?: (Message | string)[]; // Array of Message objects or IDs (optional as it might not always be populated)
    lastMessage?: Message | string; 
   // lastMessage?: Message; // Optional last message reference
    createdAt: Date;
    updatedAt: Date;
  }


  
  
  // For API responses where population is used
  export interface PopulatedConversation extends Omit<Conversation, 'participants' | 'messages'> {
    participants: Array<{
      userId: User;
      role: 'user' | 'admin';
    }>;
    messages?: Message[];
  }
  
  export interface PopulatedMessage extends Omit<Message, 'sender' | 'conversationId' | 'readBy'> {
    sender: User;
    conversationId: Conversation;
    readBy: User[];
  }
  
  // For creating new messages
  export interface CreateMessageDto {
    conversationId: string;
    content: string;
  }
  
  // For creating new conversations
  export interface CreateConversationDto {
    participantId: string;
    role?: 'user' | 'admin';
  }

/////////////////////////////////////////
// types/index.ts
export interface User {
  _id: string;
  username: string;
  avatar?: string;
  role: 'user' | 'admin';
  isOnline?: boolean;
  lastSeen?: Date;
}

export interface Participant {
  userId: string | User; // Can be ID or populated User
  role: 'user' | 'admin';
}



// For when you know participants are populated
export interface PopulatedConversation extends Omit<Conversation, 'participants'> {
  participants: Array<{
    userId: User;
    role: 'user' | 'admin';
  }>;
}
