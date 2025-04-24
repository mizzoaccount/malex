// types/user.d.ts or types/User.ts
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    avatar: string;
    isOnline: boolean;
    lastSeen?: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  