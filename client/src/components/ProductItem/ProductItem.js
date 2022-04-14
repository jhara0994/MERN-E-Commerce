import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import css from "./Product.module.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, title, description, _id, price, category, sellerId } = item;

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
        <img alt={title} src={require(`../../assets/images/${image}`)} />
      )}
      <p>{description}</p>
      {/* </Link> */}
      <div>
        <div>1 item in stock</div>
        <div>{price}</div>
        <div>Category{category}</div>
        <div>Seller {sellerId}</div>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
    </div>
  );
}

export default ProductItem;
