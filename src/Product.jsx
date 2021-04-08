import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';

function Product({ product }) {
  const calculateDiscount = () => {
    return product.actualprice - product.boughtprice;
  };
  return (
    <Container>
      <ProductImage src={product.image}></ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductPriceDetails>
        <ActualPrice>Actual Price : Rs {product.actualprice}</ActualPrice>
        <BoughtPrice>Bought At: Rs {product.boughtprice}</BoughtPrice>
        <Savings>Savings: {calculateDiscount()}</Savings>
      </ProductPriceDetails>
      <ProductRating>
        <Rating name='read-only' value={product.rating} readOnly />
      </ProductRating>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  // background-color: green;
  width: 300px;
  height: 350px;
  //padding: 5px;
  margin: 10px;
  padding: 5px;
  // box-shadow: 2px 2px #999999;
  //  border: 2px solid #e6e6e6;
`;
const ProductImage = styled.img`
  width: 200px;
  align-items: center;
`;
const ProductName = styled.p`
  font-weight: 700;
  color: #262626;
  //  text-align: center;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;
const ProductPriceDetails = styled.div`
  padding: 5px;
`;
const ProductRating = styled.div``;

const ActualPrice = styled.p`
  font-size: 12px;
  padding-bottom: 3px;
`;
const BoughtPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
const Savings = styled.p`
  font-size: 12px;
`;
