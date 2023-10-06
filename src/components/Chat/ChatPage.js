'use client';

import { sendMessage } from '@/utils/chat.utils';
import { ActionIcon, Divider, TextInput, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const ChatPage = ({ roomDetails }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const messages = await getChatRoomMessages(roomDetails._id);
        setMessages(messages);
        console.log(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, [roomDetails]);

  console.log(messages);

  const handleSendMessage = async () => {
    try {
      // Send the message and update the state with the new message
      const newMessage = await sendMessage(message, roomDetails._id);
      console.log(newMessage);
      setMessages([...messages, newMessage]);
      setMessage(''); // Clear the input field
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!roomDetails) {
    return <div>Please Select A Room...</div>;
  }

  return (
    <div className="h-full basis-2/3 bg-neutral-50 rounded-2xl flex flex-col justify-between">
      <div>
        <div>
          <h1 className="font-semibold p-4 capitalize">{roomDetails.name}</h1>
        </div>
        <Divider />
      </div>
      {messages.map((message) => (
        <div key={message._id} className="p-4">
          <p className="text-sm">{message.message}</p>
        </div>
      ))}
      <div>
        <Divider />
        <div className="p-4">
          <TextInput
            radius="sm"
            className="w-full"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rightSectionWidth={42}
            rightSection={
              <ActionIcon
                size={32}
                radius="sm"
                variant="filled"
                color="black"
                onClick={handleSendMessage}
              >
                <IconArrowRight
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
