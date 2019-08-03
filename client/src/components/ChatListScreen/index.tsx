import React from 'react';
import ChatsNavbar from './ChatNavbar';
import ChatsList from './ChatList';

const ChatListScreen: React.FC = () => (
  <div>
    <ChatsNavbar />
    <ChatsList />
  </div>
);

export default ChatListScreen;
