import React from 'react';
import styled from 'styled-components';

import { SidebarData } from './SidebarData';
function Sidebar() {
  return (
    <SidebarList>
      {SidebarData.map((value, key) => {
        return (
          <Row
            key={key}
            id={window.location.pathname === value.link ? 'active' : ''}
            onClick={() => (window.location.pathname = value.link)}
          >
            <IconContainer>{value.icon}</IconContainer>
            <TitleContainer>{value.title}</TitleContainer>
          </Row>
        );
      })}
    </SidebarList>
  );
}

export default Sidebar;
const Container = styled.div`
  height: 100%;
  background-color: #35414f;
  width: 200px;
`;

const SidebarList = styled.ul`
  height: auto;
  padding: 0;
  width: 100%;
  #active {
    background-color: #4d516c;
  }
`;

const Row = styled.li`
  color: white;
  width: 100%;
  height: 60px;

  list-style-type: none;
  margin: 0%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #4d516c;
  }
`;
const IconContainer = styled.div`
  flex: 30%;
  display: grid;
  place-items: center;
`;

const TitleContainer = styled.div`
  flex: 70%;
`;
