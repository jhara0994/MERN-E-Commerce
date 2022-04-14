import classes from './OrderList.module.css';
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_MULTIPLE_PRODUCTS } from "../../utils/queries";


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
    console.log(data)
    return(
        <div className={classes.Order}>
            <p className ={classes.PurchaseDate}>{props.purchaseDate}</p>
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

        </div>
    )

};


export default Order;