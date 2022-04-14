import SellerDashboard from "./SellerDashboard";
import BuyerDashboard from "./BuyerDashboard";
import classes from './Dashboard.module.css';


const Dashboard = () => {
    return(
        <div className={classes.Dashboard}>
            {/* <SellerDashboard /> */}
            <BuyerDashboard />
        </div>
    )
}

export default Dashboard;
