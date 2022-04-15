import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import css from "./Product.module.css";
import Auth from "../../utils/auth";
import { QUERY_USER } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";


function ProductItem(item) {
  const { image, title, description, _id, price, category, sellerId } = item;
  const [state, dispatch] = useStoreContext();
  const [getSeller] = useLazyQuery(QUERY_USER)
  // let data = {};
  // if(sellerId){
  // const {data: queryData,loading,error} = getSeller({variables:{id: sellerId}});

  // if(loading){
  //   return(
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }
  // if(error){
  //   console.log(error)
  // }
  // data = queryData
  // }
  
  let seller = false;
  const {data: user} = Auth.getProfile();
  if(user.id === sellerId){
    seller = true
  }

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (!itemInCart) {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className={css.productCard}>
    <div id="card">
    {/* <Link to={`/products/${_id}`}> */}
      <h3>{title}</h3>
      {image && (
        <img alt={title} src={(image.includes('http') ? image : require(`../../assets/images/${image}`))} />
      )}
      <p>{description}</p>
      {/* </Link> */}
      <div>
        <div>{price}</div>
        {category && <div>Category: {category.name}</div>}
        {sellerId && <div>Seller </div>}
      </div>
      {!seller && <button onClick={addToCart}>Add to cart</button>}
    </div>
    </div>
  );
}

export default ProductItem;
