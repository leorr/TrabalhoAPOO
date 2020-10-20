import React from 'react';
import axios from 'axios';
import './App.css';
import Pedidos from './Pedidos';

export default class PersonList extends React.Component {
  state = {
    cpf: '',
    pedidos: [],
  }
  handleChange = event => {
    this.setState({ cpf: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://192.168.0.11:8080/api/pedidos/`+this.state.cpf)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ pedidos: res.data });
      })
  }
  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <label>
            CPF:
            <input type="text" name="cpf" onChange={this.handleChange} />
          </label>
          <button type="submit">Busca</button>
        </form>
        <Pedidos pedidos={this.state.pedidos} />
      </div>
    )
  }
}
