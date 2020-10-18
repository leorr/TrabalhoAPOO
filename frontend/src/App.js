import React, { Component } from 'react'
import Pedidos from './Pedidos'

class App extends Component {
  state = {
    pedidos: []
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/pedidos')
      .then(res => res.json())
      .then((data) => {
        this.setState({ pedidos: data })
      })
      .catch(console.log)
    }
  render() {
    return (
      <Pedidos pedidos={this.state.pedidos} />
    )
  }
}

export default App;
