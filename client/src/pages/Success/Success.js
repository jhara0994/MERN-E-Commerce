import { Link, useSearchParams } from "react-router-dom";
import classes from './Success.module.css';
import { useQuery } from "@apollo/client";
import { QUERY_GET_CUSTOMER } from "../../utils/queries";

const Success = () =>{
    let [searchParams, setSearchParams] = useSearchParams();
    let sessionId = searchParams.get('session_id');
    const {data, loading, error} = useQuery(QUERY_GET_CUSTOMER,{variables:{sessionId}});
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
        <div className={classes.Success}>
            <h1>Thank you for your order, {data.customer}</h1>
            <Link className={classes.Home} to='/' > Go Back Home </Link>
        </div>
    )
};

export default Success;