import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <h1>Hello {this.props.title}</h1>
    )
  }
}

ReactDOM.render (
  <App title="World" />,
  document.getElementById('root')
)