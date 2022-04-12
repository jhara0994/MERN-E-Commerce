import React, { useState } from 'react';
// import {SearchIcon} from '@mui/material';
// import {CloseIcon} from '@mui/material';

// import { QUERY_PRODUCTS } from '../../utils/queries';
// import { useStoreContext } from '../../utils/GlobalState';
// import { useLazyQuery } from '@apollo/client';
// import ProductItem from '../ProductItem/ProductItem';
// import { SEARCH_BAR } from '../../utils/actions';
// import { idbPromise } from '../../utils/helpers';

function SearchBar({item}) {
    const [filteredData, setFilteredData] = useState([])
    const [titleEntered, setTitleEntered] =useState("")
    console.log(item)

    const handleFilter = (e) => {
        const searchTitle = e.target.value
        setTitleEntered(searchTitle)
        const newFilter = item.filter((value) => {
            return value.title.toLowerCase().includes(searchTitle.toLowerCase())
        })

        if (searchTitle === item.products.title) {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setTitleEntered("")
    }

    // const [state, dispatch] = useStoreContext();
  
    // const { search } = state;
  
    // const [ queryProducts ] = useLazyQuery(QUERY_PRODUCTS);

    // const {
    //     title,
    //     description,
    //     _id
    //   } = item;

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
        <div className="search-container">
            <div className="search-input-container">
                <input type='text' className="search-input" placeholder="Search products" value={titleEntered} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <div> </div>
                    ) : (
                        <span id="clear-btn" onClick={clearInput} />
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


