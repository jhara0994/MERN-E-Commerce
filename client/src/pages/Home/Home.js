import React from 'react'
import ProductList from "../../components/ProductList/ProductList";
import CategoryMenu from "../../components/Category/CategoryMenu";
import Cart from "../../components/Cart/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;