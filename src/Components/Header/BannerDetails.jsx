import React from 'react';
import styled from 'styled-components';
function BannerDetails({ category }) {
  return (
    <Container>
      <BannerTitle>{category.title}</BannerTitle>
      <BannerIcon src={category.imageicon} />`
    </Container>
  );
}

export default BannerDetails;
const BannerIcon = styled.img`
  width: 50px;
  margin-top: -5px;
`;

const BannerTitle = styled.h2`
  color: #661a00;
`;
const Container = styled.div`
  margin: 10px;
  //background-color: red;
  display: flex;
`;
