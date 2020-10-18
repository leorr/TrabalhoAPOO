import React from 'react';

const Pedidos = ({pedidos}) => {
return (
        <div>
          <center><h1>Pedido List</h1></center>
          {pedidos.map((pedido) => (
            <div className="pedido">
              <div className="pedido-body">
                <h5 className="pedido-id">Pedido ID: {pedido.id}</h5>
                <h4 className="pedido-cliente">Cliente: {pedido.cliente.nome} <br />
                  Endereço: {pedido.endereco.rua}, {pedido.endereco.numero} - {pedido.endereco.bairro}<br />
                  Situação: {pedido.status} <br />
                </h4>
              </div>
         </div>
          ))}
        </div>
      )
};

export default Pedidos;
