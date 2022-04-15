import SellerDashboard from "./SellerDashboard";
import BuyerDashboard from "./BuyerDashboard";
import classes from './Dashboard.module.css';
import { useState } from "react";

const Dashboard = () => {
    const [viewMode, setViewMode] = useState('');
    const toggleBuyerView = (e) =>{
        setViewMode('buyer')
    };
    const toggleSellerView = (e) => {
        setViewMode('seller')
    };
    return(
        <div className={classes.Dashboard}>
            <div className={classes.Toggler}>
            <h2 onClick={toggleBuyerView}>Buyer</h2>
            <h2 onClick={toggleSellerView}>Seller</h2>    
            </div>
            
             {viewMode === 'seller' && <SellerDashboard /> }
            {viewMode === 'buyer' && <BuyerDashboard />}
        </div>
    )
}

export default Dashboard;
