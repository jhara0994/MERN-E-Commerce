import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import css from './Product.module.css'

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { data, loading, error } = useQuery(QUERY_PRODUCTS);

  // useEffect(() => {
  //   const getProductData = async() => {



  //     if (data.products) {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: data.products,
  //       });  
  //     }
  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //   } 
  //   getProductData()
  // }, [dispatch, queryProducts]);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Error
      </div>
    )
  }

  function filterProducts() {
    if (!currentCategory) {
      
      return data.products;
    }

    return data.products.filter(
      (product) => product.category === currentCategory,
    );
  }


  return (
    <div className={css.product}>
      <h2>Products:</h2>
      {data.products.length ? (
        <div className="flex-row">
          {filterProducts().map((products) => (
            <ProductItem
              key={products._id}
              _id={products._id}
              image={products.image}
              title={products.title}
              description={products.description}
              price={products.price}
              quantity={products.quantity}
              category={products.category}
              sellerId={products.sellerId}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;