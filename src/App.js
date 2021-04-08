import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Banner from './Banner';
import Dashboard from './Dashboard';
import { db } from './firebase';
import Header from './Header';
import Home from './Home';
import RowContainer from './RowContainer';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    db.collection('product').onSnapshot((snap) => {
      let tempProduct = [];

      tempProduct = snap.docs.map((data) => ({
        data: data.data(),
        id: data.id,
      }));

      setProducts(tempProduct);
    });
  };

  const getCategories = () => {
    db.collection('category').onSnapshot((snap) => {
      const tempCategory = snap.docs.map((data) => ({
        id: data.id,
        data: data.data(),
      }));
      setCategories(tempCategory);
    });
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getChartData = () => {
    let countOfProductByCategory = 0;

    categories.map((c) => {
      let d = c.data;
      console.log(d);
    });
  };
  const getProductsOf = (name) => {
    //product.data.type == data.name
    return products.filter((p) => p.data.type === name);
  };
  return (
    <div>
      <Header />

      {categories.map((d) => (
        <RowContainer
          category={d.data}
          products={getProductsOf(d.data.name)}
          key={d.id}
          id={d.id}
        />
      ))}
    </div>
  );
}

export default App;
//const RowConatiner = styled.div``;
