import React, { useEffect, useState } from 'react';
import css from './Search.module.css'
// import {SearchIcon} from '@mui/material';
// import {CloseIcon} from '@mui/material';

import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/client';
import ProductItem from '../ProductItem/ProductItem';
import { idbPromise } from '../../utils/helpers';

function SearchBar({data}) {
    const [state, dispatch] = useStoreContext();

    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const [ queryProducts ] = useLazyQuery(QUERY_PRODUCTS);

    const getProductData = async() => {
        const { data } = await queryProducts()
        console.log(data.products)
    }

    // getProductData()

    // const {
    //     title,
    //     description,
    //     _id
    //   } = item;
    // console.log(item)

    // useEffect(() => {
    //     // const getProductData = async() => {
    //     //     const { data } = await queryProducts()
    //     //     console.log(data.products)
    //     // }
    //     getProductData()
    // }, [dispatch, queryProducts])

    const handleFilter = (e) => {
        const productData = getProductData()
        const searchTitle = e.target.value
        console.log(productData)
        setSearchTerm(searchTitle)
        console.log(searchTitle)
        const newFilter = data.products.filter((value) => {
            return value.title.toLowerCase().includes(searchTitle.toLowerCase())
        })

        if (searchTitle === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setSearchTerm("")
    }


    const { search } = state;

    
    // function submitSearch() {
    //     const searchInput = search.findAll((products) => products.title === title)
    //     if(searchInput !== title) {
    //         alert('Please enter a different product title')
    //     } else {
    //         dispatch({
    //             type: SEARCH_BAR,
    //             products: { ...item}
    //         })
    //         idbPromise('product', 'get', { ...item})
    //     }

    // }


    return (
        <div className={css.searchContainer}>
            <div className="search-input-container">
                <input type='text' className="search-input" placeholder="Search products" value={searchTerm} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length ? (
                        <div> </div>
                    ) : (
                        <button id="clear-btn" onClick={clearInput}>Clear</button>
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="data-result">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="data-item" href={value.link} target="_blank" rel="noreferrer">
                                <p>{value.title}</p>
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar


