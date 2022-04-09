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

function CategoryMenu() {
  const [state, dispatch] = useStoreContext()

  // const { categories } = state;

  const  [ queryCategories ] = useLazyQuery(QUERY_CATEGORIES); 
  
  useEffect(() => {
    const getCategoryData = async() => {
      const { data } = await queryCategories()
      console.log(data.categories) 

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

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };



  return (
    <div className={classes} id="categories">
      <h2>Categories:</h2>
      {state.categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
