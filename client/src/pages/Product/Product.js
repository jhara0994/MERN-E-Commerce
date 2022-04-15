import { useQuery } from "@apollo/client";
import { ClassNames } from "@emotion/react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import classes from './Product.module.css'


const Product = () => {
    let {id} = useParams();
    const {data, loading, error} = useQuery(QUERY_PRODUCTS,{variables:{productsId: id}});
    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    if(error){
        console.log(error)
    }
    
    return(
        <div className={classes.Container}>
          <ProductItem className={classes.Product} {...data.products[0]} />  
        </div>
        
    )
};

export default Product;