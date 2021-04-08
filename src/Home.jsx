import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} id={product.id} product={product.data} />
      ))}
    </Container>
  );
}

export default Home;
const Container = styled.div`
  display: flex;
  //background-color: blue;

  margin: 20px 15px;
`;
