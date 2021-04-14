import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
function TopNavbar() {
  return (
    <Container>
      <HeaderTitle>
        <HeaderContent>Welcome</HeaderContent>
      </HeaderTitle>
      <Searchcontainer>
        <Searchtext />
        <SearchIcon />
      </Searchcontainer>
    </Container>
  );
}

export default TopNavbar;
const Container = styled.div`
  width: 100%;
  background-color: cyan;
  display: flex;
  height: 60px;
`;

const HeaderTitle = styled.div`
  background-color: coral;
  flex: 0.5;
`;

const Searchcontainer = styled.div`
  background-color: chartreuse;
  flex: 0.5;
  display: flex;
  flex-direction: row;
`;
const HeaderContent = styled.h2``;

const Searchtext = styled.input``;
