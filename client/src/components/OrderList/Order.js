import classes from './OrderList.module.css';
import { useQuery } from "@apollo/client";
import { QUERY_MULTIPLE_PRODUCTS } from "../../utils/queries";
import { formatTime, total } from '../../utils/helpers';

const Order = (props) =>{
    const {data, loading, error} = useQuery(QUERY_MULTIPLE_PRODUCTS,{variables:{ids: props.products}})
    
    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    if(error){
        return(
            <div>
                Error!
            </div>
        )
    }

    const priceArray = data.multipleProducts.map((product)=> product.price);

    return(
        <div className={classes.Order}>
            <p className ={classes.PurchaseDate}>Order Date: {formatTime(parseInt(props.purchaseDate))}</p>
            <p className={classes.ItemsPurchased}>Items Purchased</p>
            <ul className={classes.ItemList}>
            {data.multipleProducts.map((product)=>{
                
                return(
                    <li key={product._id} className={classes.Product}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                )
            }
            )}     
            </ul>
            <p className={classes.OrderTotal}>Order total: ${total(priceArray)}</p>

        </div>
    )

};


export default Order;