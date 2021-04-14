import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../Navigation/Sidebar';
function SideHeaderNavigation() {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

export default SideHeaderNavigation;
const Container = styled.div`
  height: 100%;
  background-color: #35414f;
  width: 200px;
  display: flex;
`;
