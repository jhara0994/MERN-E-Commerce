import classes from './Dashboard.module.css'
import Auth from '../../utils/auth.js';
import OrderList from '../../components/OrderList/OrderList';
;

const BuyerDashboard = () => {
    if(Auth.loggedIn()){
    const {data: user} = Auth.getProfile();  
    return (
        <div className={classes.BuyerDashboard}>
            <h1> Buyer Dashboard</h1>
            {Auth.loggedIn()&&<OrderList user={user}/>}
            

        </div>
    )
    }
    return(
        <div className={classes.BuyerDashboard}>
            <h1> Buyer Dashboard</h1>
            <p className={classes.LoginError}>Please log in!</p>
            

        </div>

    )
    

    

}



export default BuyerDashboard