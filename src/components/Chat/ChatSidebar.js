'use client';

import { createChatRoom, getAllChatRooms } from '@/utils/chat.utils';
import { ActionIcon, TextInput, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react'; // Import useState

const ChatSidebar = ({ setRoomDetails }) => {
  const [name, setName] = useState('');
  const [chatRooms, setChatRooms] = useState([]); // Create a state variable for chat rooms

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAllChatRooms();
        setChatRooms(res);
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="bg-neutral-50 h-full rounded-2xl w-1/3 flex flex-col items-center justify-between">
      <ul className="flex flex-col justify-start items-center p-4 w-full gap-2">
        {chatRooms.map((chatRoom) => (
          <li
            key={chatRoom._id}
            onClick={() => {
              setRoomDetails(chatRoom);
            }}
            className="bg-neutral-200 w-full flex items-center justify-center py-2 rounded-xl capitalize font-medium text-sm"
          >
            {chatRoom.name}
          </li>
        ))}
      </ul>
      <div className="p-2 bg-neutral-900 w-full rounded-b-2xl flex flex-col items-start justify-center text-white">
        <TextInput
          radius="sm"
          label="Create a new chat room"
          className="w-full"
          placeholder="Room Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          rightSectionWidth={42}
          rightSection={
            <ActionIcon
              size={32}
              radius="sm"
              variant="filled"
              color="black"
              onClick={() => {
                createChatRoom(name, []);
                window.location.reload();
              }}
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
  );
};

export default ChatSidebar;
