import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import './App.css';
import Home from './pages/Home/Home.js'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product';
import Success from './pages/Success/Success';

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
      <Router>
        <StoreProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path ='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
