import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="head">
            The Button has been clicked <span className="count"> {count} </span>
            times.
          </h1>
          <p className="para">click the button to increase the count!</p>
          <div className="btn-cont">
            <button type="button" className="button" onClick={this.onIncrement}>
              Click Me!!
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
