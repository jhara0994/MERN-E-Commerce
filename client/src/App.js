import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ImageUpload from './components/ImageUpload/ImageUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact/Contact"

//Must change URI in production
const httpLink = createHttpLink({
  uri: '/graphql',
});



const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
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
      <Header/>
      <StoreProvider>
        <Contact />
        
        <Footer />
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
