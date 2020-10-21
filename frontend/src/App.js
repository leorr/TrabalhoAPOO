import React from 'react';
import axios from 'axios';
import './App.css';
import Pedidos from './Pedidos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faSearch } from '@fortawesome/free-solid-svg-icons' 

export default class PersonList extends React.Component {

  state = {
    cpf: '',
    pedidos: [],
    pHeight:0,
  }

  handleChange = event => {
    this.setState({ cpf: event.target.value });
  }

  handleSubmit = event => {

    event.preventDefault();

    if(this.state.cpf === ""){
      this.setState({pedidos: []});
      document.getElementById("footer").classList.remove("fade");
    }
    else{
      axios.get(`http://192.168.0.11:8080/api/pedidos/`+ this.state.cpf)
        .then(res => {
          this.setState({ pedidos: res.data });
        })
      document.getElementById("footer").classList.add("fade");
    }
  }
  render() {
    return (
      <div className="center maindiv bg">
        <h1 className="centerTittle"><FontAwesomeIcon icon={faShippingFast} /> Rastreie suas encomendas</h1>
        <form onSubmit={this.handleSubmit} className="center form">
          <div className="centerTittle">
            <input type="text" name="cpf_input" placeholder="Digite seu cpf" onChange={this.handleChange}className="center input"/>
            <button type="submit" className="button"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </form>
        <Pedidos pedidos={this.state.pedidos}/>
        <footer id="footer">
          <p>Aplicação desenvolvida por Leonardo Ribeiro<a href="https://github.com/leorr"><FontAwesomeIcon icon={faGithub} /></a></p>
        </footer>

        </div>
    )
  }
}
