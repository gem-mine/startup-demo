import React from 'react'
import request from '@gem-mine/request'
const { demo } = request

class App extends React.PureComponent {
  state = {
    result: undefined
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            demo.get('/user/101').then(data => {
              this.setState({
                result: JSON.stringify(data, null, 2)
              })
            })
          }}
        >
          ajax request
        </button>
        <div>{this.state.result}</div>
      </div>
    )
  }
}

export default App
