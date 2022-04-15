import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import classes from './Category.module.css'
import Dropdown from '../Dropdown/Dropdown'
import { css } from '@mui/styled-engine';
import DropdownItems from '../Dropdown/DropdownItems';


function CategoryMenu() {
  const [state, dispatch] = useStoreContext()

  // const { categories } = state;

  const  [ queryCategories ] = useLazyQuery(QUERY_CATEGORIES); 
  
  useEffect(() => {
    const getCategoryData = async() => {
      const { data } = await queryCategories()
     

      data.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });

      if (data.categories) {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: data.categories,
        });
      }
    }
  
    getCategoryData()
  }, [dispatch]);

  
  return (
    <div className={classes.categories} id="categories">
      <h2>Categories:</h2>
<<<<<<< HEAD
      <Dropdown />
=======
      <div className="dropdown">
          <button>Select a category below:</button>
      {state.categories.map((item) => (
        // {items.filter(item => item.fields.category)}
          <div key={item._id} className="dropdownContent">
            <button
              
              onClick={() => {
                handleClick(item._id);
              }}
            >
              {item.name}
            </button>
          </div>
      ))}
      </div>
>>>>>>> main
    </div>
  );
}

export default CategoryMenu;
