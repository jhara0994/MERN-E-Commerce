import React from "react";
import { Link, Router } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    title,
    description,
    _id,
    price
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (!itemInCart) {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    } 
  }

  return (
    <div className="card px-1 py-1">
      {/* <Link to='/products/:id' */}
        <h3>{title}</h3>
        <img
          alt={title}
          src={`/images/${image}`}
        />
        <p>{description}</p>
      {/* </Link> */}
      <div>
        <div>1 item in stock</div>
        <span>{price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}


export default ProductItem;
