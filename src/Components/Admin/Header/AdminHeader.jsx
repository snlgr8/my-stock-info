import React from 'react';
import styled from 'styled-components';

function AdminHeader() {
  return (
    <Container>
      <AdminNavButtonsContainer>
        <AdminCategoryButton>Categories</AdminCategoryButton>
        <AdminProductsButton>Products</AdminProductsButton>
        <AdminLogoutButton>Logout</AdminLogoutButton>
      </AdminNavButtonsContainer>
    </Container>
  );
}

export default AdminHeader;
const Container = styled.div`
  height: 70px;
  background-color: #1a0000;
  color: #ffe6e6;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const AdminTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  padding-top: 15px;
  font-family: 'Calligraffitti', cursive;
  flex: 0.5;
`;
const AdminNavButtonsContainer = styled.div`
  //display: flex;
  background-color: red;
`;
const AdminCategoryButton = styled.button``;
const AdminProductsButton = styled.button``;
const AdminLogoutButton = styled.button``;
