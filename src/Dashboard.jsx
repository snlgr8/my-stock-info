import React from 'react';
import styled from 'styled-components';
import Chart from './Chart';

function Dashboard() {
  return (
    <Container>
      Dashboard
      <Chart />
    </Container>
  );
}

export default Dashboard;
const Container = styled.div``;
