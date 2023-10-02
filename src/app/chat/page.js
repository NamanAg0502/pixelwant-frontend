'use client';

import ChatPage from '@/components/Chat/ChatPage';
import ChatSidebar from '@/components/Chat/ChatSidebar';
import AppLayout from '@/components/common/AppLayout';
import { useState } from 'react';

const Chat = () => {
  const [roomDetails, setRoomDetails] = useState(null);
  return (
    <AppLayout label="Chat">
      <div className="h-[88vh] flex justify-between gap-4">
        <ChatPage roomDetails={roomDetails} />
        <ChatSidebar setRoomDetails={setRoomDetails} />
      </div>
    </AppLayout>
  );
};

export default Chat;
