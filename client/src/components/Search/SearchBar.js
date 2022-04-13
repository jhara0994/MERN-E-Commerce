import React, { useEffect, useState } from 'react';
import css from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/client';
import ProductItem from '../ProductItem/ProductItem';
import { idbPromise } from '../../utils/helpers';

function SearchBar() {
    const [state, dispatch] = useStoreContext();

    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const [ queryProducts ] = useLazyQuery(QUERY_PRODUCTS);

    const handleFilter = async (e) => {
        const searchTitle = e.target.value
        const  {data}  = await queryProducts({variables: {title: searchTitle}})
        console.log(data)

        const productData = data.products

        setSearchTerm(searchTitle)
        console.log(searchTitle)

        const newFilter = productData.filter((value) => {
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

    return (
        <div className={css.searchContainer}>
            <div className="search-input-container">
                <input type='text' className="search-input" placeholder="Search products" value={searchTerm} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clear-btn" onClick={clearInput} />
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


