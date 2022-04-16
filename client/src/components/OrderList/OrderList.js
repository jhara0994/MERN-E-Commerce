import classes from './OrderList.module.css';
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../../utils/queries";
import Order from './Order';

const OrderList = (props) => {
   const {data, loading, error} = useQuery(QUERY_ORDERS,{variables: {userId: props.user._id}});
   if(loading){
       return(
           <h2>
               Loading...
           </h2>
       )
   }
   if(error){

        console.log(error)
   }

   
   if(data){
       console.log(data)
    return(
        <div className={classes.OrderList}>
            {data.order.map((order)=>{
                return(
                    <Order key={order._id} 
                        products={order.products} 
                        purchaseDate={order.purchaseDate}
                        sellerId = {order.sellerId}
                    />
                )
            })}
        </div>
    )   
   }
   return(
       <div>
           <h2>You have no orders yet!</h2>
       </div>
   )
    

}

export default OrderList;