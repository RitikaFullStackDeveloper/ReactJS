import React from "react";
// import CoinCard from "../Coins/CoinCard";
import Dashboard from "../Coins/Dashboard";
// import PanelOne from "../Coins/PanelOne"


class CoinHomePage extends React.Component{
    render(){
        return(
            <div className="main">
           
                <Dashboard/>
            
            </div>
        )
    }
}
export default CoinHomePage;