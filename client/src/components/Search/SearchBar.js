import React, { useEffect, useState } from 'react';
import css from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/client';
import ProductItem from '../ProductItem/ProductItem';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';

function SearchBar() {
    const [state, dispatch] = useStoreContext();

    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const [ queryProducts ] = useLazyQuery(QUERY_PRODUCTS);

    const handleFilter = async (e) => {
        const searchTitle = e.target.value
        const  {data}  = await queryProducts()
        

        const productData = data.products

        setSearchTerm(searchTitle)
        

        const newFilter = productData.filter((value) => {
            
            return value.title.toLowerCase().trim().includes(searchTitle.toLowerCase().trim())
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
                <input type='text' className={css.searchInput} placeholder="Search products" value={searchTerm} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        ''
                    ) : (
                        <button id="clear-btn" onClick={clearInput}>Clear</button>
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className={css.dataResult}>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <Link onClick={clearInput} key={key} to={`/product/${value._id}`} >
                                <p>{value.title}</p>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar


