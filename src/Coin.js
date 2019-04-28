import React from 'react'
import './Coin.css'

class Coin extends React.Component {
  render() {
    return (
      <div className="Coin">
        <img className="Coin-image" src={this.props.coinImgSrc} alt='Coin face' />
      </div>
    )
  }
}

export default Coin
