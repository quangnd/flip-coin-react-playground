import React from 'react'
import Coin from './Coin'
import headImage from './images/head.jpg'
import tailImage from './images/tail.jpg'
import './FlipCoin.css'

class FlipCoin extends React.Component {
  static defaultProps = {
    coinFaces: ['head', 'tail']
  }

  constructor(props) {
    super(props)
    this.state = {
      countFlip: 0,
      countHead: 0,
      countTail: 0,
      isHead: false
    }
    this.handleFlip = this.handleFlip.bind(this)
  }
  handleFlip(e) {
    let rdnIdx = Math.floor(Math.random() * 2)
    let isHead = this.props.coinFaces[rdnIdx] === 'head' ? true : false
    this.setState(prevState => ({
      countFlip: prevState.countFlip + 1,
      countHead: isHead ? prevState.countHead + 1 : prevState.countHead,
      countTail: !isHead ? prevState.countTail + 1 : prevState.countTail,
      isHead: isHead
    }))
  }
  render() {
    const summary = `🎉 Đã tung ${this.state.countFlip} lần, trong đó có ${this.state.countHead} lần mặt ngửa và ${this.state.countTail} lần mặt sấp 🎉`
    const coinImgSrc = this.state.isHead ? headImage : tailImage
    return (
      <div className="FlipCoin">
        <h1>Tung đồng xu</h1>
        <h2><span role="img" aria-label="emojiFire">🔥🔥🔥</span></h2>
        <Coin coinImgSrc={coinImgSrc} />
        <button onClick={this.handleFlip} className="FlipCoin-button">TUNG XU</button>
        <p>
          {summary}
        </p>
      </div>
    )
  }
}

export default FlipCoin
