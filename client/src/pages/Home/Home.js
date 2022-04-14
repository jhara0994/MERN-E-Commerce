import React from 'react'
import ProductList from "../../components/ProductList/ProductList";
import CategoryMenu from "../../components/Category/CategoryMenu";
import Cart from "../../components/Cart/Cart";
import SearchBar from '../../components/Search/SearchBar';

const Home = () => {
  return (
    <main className="container">
      <SearchBar />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </main>
  );
};

export default Home;