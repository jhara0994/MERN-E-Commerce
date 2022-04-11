import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js'
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import ImageUpload from './components/ImageUpload/ImageUpload';
import SearchBar from './components/Search/SearchBar-2';

//Must change URI in production
const httpLink = createHttpLink({
  uri: '/graphql',
});



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  console.log(token)
  console.log(headers)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  
    <ApolloProvider client={client}>
      <StoreProvider>
        <Header />
        <Home />
        <SearchBar />
        <Footer/>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
