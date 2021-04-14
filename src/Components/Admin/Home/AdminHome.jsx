import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../Category/Category';
import AdminHeader from '../Header/AdminHeader';
import PrimarySearchAppBar from '../Header/PrimarySearchAppBar';
import SideMenuBar from '../Header/SideMenuBar';

function AdminHome() {
  return (
    <Container>
      <PrimarySearchAppBar />
      <SideMenuBar />
    </Container>
  );
}

export default AdminHome;

const Container = styled.div``;
