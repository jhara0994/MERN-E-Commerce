import React, { useEffect, useState } from 'react';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/client';
import ProductItem from '../ProductItem/ProductItem';
import { SEARCH_BAR } from '../../utils/actions';

function SearchBar(item) {
    const [state, dispatch] = useStoreContext();
  
    const { search } = state;
  
    const [ queryProducts ] = useLazyQuery(QUERY_PRODUCTS);

    const {
        title,
        description,
        _id
      } = item;

    function submitSearch() {
        const searchInput = search.findAll((products) => products.title === title)
        if(searchInput != title) {
            alert('Please enter a different product title')
        } else {
            dispatch({
                type: SEARCH_BAR,
                products: { ...item}
            })
        }

    }


    return (
        <div className="search-container">
            <input type='text' className="search-input" placeholder="Search products"></input>
            <button onClick={submitSearch} type='submit' className="search-btn">Search</button>
        </div>
    )
}

export default SearchBar


