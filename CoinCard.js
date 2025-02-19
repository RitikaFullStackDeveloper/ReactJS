import React from "react";
import "./Dashboard.css";
import "./CoinCard.css"

export default class CoinCard extends React.Component {

  render() {
    return (

      <div className="coin-card"
        onClick={() => {
          this.props.onCoinClick(this.props.coinText)
          this.props.incrementCounter(this.props.coinText)
        }}
      >
        <div className="img-div">
          <div>
          <img className="coin-img" src={this.props.imageName} />
          <p>{this.props.coinText}</p>
          {/* <span className="coin-badge">{this.props.coinValue}</span> */}
          {/* <text className="coin-text">{this.props.coinCounter}</text> */}
          </div>
          <div>
            {this.props.coinCounter ? (
              <text className="coin-badge">{this.props.coinCounter}</text>
            ) : null}

          </div>

        </div>
      </div>

    );
  }
}
