import React from 'react';
import styled from 'styled-components';
import BannerDetails from './BannerDetails';

function Banner({ category }) {
  return (
    <Container>
      <BannerDetails category={category} />
    </Container>
  );
}

export default Banner;
const Container = styled.div``;
