import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Components/Header/Header";
import RowContainer from "./Components/Home/RowContainer";
import AdminHome from "./Components/Admin/Home/AdminHome";
import { db } from "./config/firebase";
import SignIn from "./Components/Authentication/SignIn.component";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  const getProducts = () => {
    db.collection("product").onSnapshot((snap) => {
      let tempProduct = [];

      tempProduct = snap.docs.map((data) => ({
        data: data.data(),
        id: data.id,
      }));

      setProducts(tempProduct);
    });
  };

  const getCategories = () => {
    db.collection("category").onSnapshot((snap) => {
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

  const getProductsOf = (name) => {
    //product.data.type == data.name
    return products.filter((p) => p.data.type === name);
  };

  if (user) {
    return (
      <AppContainer>
        <AdminHome />
      </AppContainer>
    );
  } else {
    return (
      <AppContainer>
        <Header />
        <SignIn />
        {categories.map((d) => (
          <RowContainer
            category={d.data}
            products={getProductsOf(d.data.name)}
            key={d.id}
            id={d.id}
          />
        ))}
      </AppContainer>
    );
  }
}

export default App;
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
