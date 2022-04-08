import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StoreProvider } from './utils/GlobalState';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js'
import {Header} from "./components/Header/index.js"
import {Footer} from "./components/Footer/index.js"

import ImageUpload from './components/ImageUpload/ImageUpload';

//Must change URI in production
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
  
    <ApolloProvider client={client}>
      <StoreProvider>
        <Navbar />
        <Home />
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
