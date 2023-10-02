// chat.utils.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/chat'; // Replace with your actual backend server URL

// Function to create a new chat room
export async function createChatRoom(name, members) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/create-room`,
      {
        name,
        members,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

// Function to send a message in a chat room
export async function sendMessage(content, chatRoomId) {
  try {
    console.log(localStorage.getItem('accessToken'));
    const response = await axios.post(
      `${API_BASE_URL}/send-message`,
      {
        content,
        chatRoomId,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

// Function to get messages for a chat room
export async function getChatRoomMessages(chatRoomId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/${chatRoomId}`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

// Function to get all chat rooms
export async function getAllChatRooms() {
  try {
    const response = await axios.get(`${API_BASE_URL}/rooms`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
