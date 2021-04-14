import React from 'react';
import Banner from '../Header/Banner';
import Home from './Home';

function RowContainer({ category, products, id }) {
  console.log(products);
  return (
    <div>
      <Banner category={category} />
      <Home products={products} />
    </div>
  );
}

export default RowContainer;
