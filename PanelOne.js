import React from "react";
import "./Dashboard.css";
import CoinCard from "./CoinCard"
import "./PanelOne.css"

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         coinOneCounter:0,
         coinTwoCounter:0,
         coinFiveCounter:0,
         coinTenCounter:0,
         coinTwentyCounter:0
        };
      }
    
      incrementCounter = (coin)=>{
        if(coin == "ONE"){
            this.setState({coinOneCounter: this.state.coinOneCounter += 1})
        }else if(coin == "TWO"){
            this.setState({coinTwoCounter: this.state.coinTwoCounter += 1})
        }else if(coin == "FIVE"){
            this.setState({coinFiveCounter: this.state.coinFiveCounter += 1})
        }else if(coin == "TEN"){
            this.setState({coinTenCounter: this.state.coinTenCounter += 1})
        }else if(coin == "TWENTY"){
            this.setState({coinTwentyCounter: this.state.coinTwentyCounter += 1})
        }
      }
  render() {
    return (
      <div className="panel">
        <div className="coin-row">
       <CoinCard
       imageName="one-rs.png"
       coinText={"ONE"}
       coinCounter={this.state.coinOneCounter}
       onCoinClick={this.props.onCoinClick}
       incrementCounter={this.incrementCounter}
       />
       <CoinCard
        imageName="two-ru.png"
        coinText={"TWO"}
        coinCounter={this.state.coinTwoCounter}
        onCoinClick={this.props.onCoinClick}
        incrementCounter={this.incrementCounter}
       
       
       />
       <CoinCard
        imageName="five-rs.png"
        coinText={"FIVE"}
        coinCounter={this.state.coinFiveCounter}
        onCoinClick={this.props.onCoinClick}
        incrementCounter={this.incrementCounter}
       />
       <CoinCard
        imageName="ten-rs.png"
        coinText={"TEN"}
        coinCounter={this.state.coinTenCounter}
        onCoinClick={this.props.onCoinClick}
        incrementCounter={this.incrementCounter}
       />
       <CoinCard
        imageName="twenty-rs.png"
        coinText={"TWENTY"}
        coinCounter={this.state.coinTwentyCounter}
        onCoinClick={this.props.onCoinClick}
        incrementCounter={this.incrementCounter}
       
       /> 
   

   </div>

      </div>
    );
  }
}
