import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <MainTitle>Welcome to my WORLD!!</MainTitle>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  height: 70px;
  background-color: #1a0000;
  color: #ffe6e6;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  padding-top: 15px;
  font-family: 'Calligraffitti', cursive;
`;
