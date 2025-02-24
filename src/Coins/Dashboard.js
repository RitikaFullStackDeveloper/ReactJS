import React from "react";
import "./Dashboard.css";
import PanelOne from "../Coins/PanelOne"
import "./PanelOne.css"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    }
    // onCoinClick function
    onCoinClick = (coin)=>{
        if(coin =="ONE"){
            this.setState({total:(this.state.total += 1)})
        }else if(coin == "TWO"){
            this.setState({total:(this.state.total += 2)})
        }else if(coin == "FIVE"){
            this.setState({total: this.state.total += 5})
        }else if(coin == "TEN"){
            this.setState({total:(this.state.total +10)})
        }else if(coin == "TWENTY"){
            this.setState({total: this.state.total += 20})
        }

      }

    render() {
        return (
            <div className="coin-game">
                
               <div className="counter-text"> Coins:{this.state.total}</div>
               {/* panelOne call */}
               <PanelOne onCoinClick={this.onCoinClick}/>
            </div>
        );
    }
}
export default Dashboard;