import React from 'react';
import ChatsNavbar from './ChatNavbar';
import ChatsList from './ChatList';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

const ChatListScreen: React.FC = () => (
  <Container>
    <ChatsNavbar />
    <ChatsList />
  </Container>
);

export default ChatListScreen;
