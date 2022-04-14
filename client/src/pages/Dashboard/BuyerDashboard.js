import classes from './Dashboard.module.css'
import Auth from '../../utils/auth.js';
import OrderList from '../../components/OrderList/OrderList';
;

const BuyerDashboard = () => {
    const {data: user} = Auth.getProfile();
    

    return (
        <div className={classes.BuyerDashboard}>
            <h2> Buyer Dashboard</h2>
            <OrderList user={user}/>
            

        </div>
    )

}



export default BuyerDashboard