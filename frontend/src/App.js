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

    if(this.state.cpf === "")
      this.setState({pedidos: []});
    else
      axios.get(`http://192.168.0.11:8080/api/pedidos/`+ this.state.cpf)
        .then(res => {
          this.setState({ pedidos: res.data });
        })
  }

  render() {
    return (
      <div className="center maindiv bg">
        <h1 className="centerTittle">
        Rastreie suas encomendas</h1>
        <form onSubmit={this.handleSubmit} className="center">
          <div className="centerTittle">
            <input type="text" name="cpf_input" placeholder="Digite seu cpf" onChange={this.handleChange}className="center input"/>
            <button type="submit" className="button">🔍</button>
          </div>
        </form>
        <Pedidos pedidos={this.state.pedidos} />
        <footer>
          <p>Autor: Leonardo Ribeiro<br/>
          <a href="https://github.com/leorr">Repositorios Github</a></p>
        </footer>

        </div>
    )
  }
}
