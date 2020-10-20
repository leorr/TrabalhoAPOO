import React from 'react';
import './App.css'

const Pedidos = ({pedidos}) => {
    if(pedidos && pedidos.length)
        return (
            <div className="listapedidos">
              {pedidos.map((pedido) => (
                <div className="pedido">
                  <div className="pedido-body padd">
                    <h5 className="pedido-id">Pedido ID: {pedido.id}</h5>
                          <h4>Destinatário:<span className='notbold'> {pedido.cliente.nome}</span> <br />
                                  Endereço:<span className='notbold'> {pedido.endereco.rua}, {pedido.endereco.numero} - {pedido.endereco.bairro}</span><br />
                                  Situação:<span className='notbold'> {capitalizeFirstLetter(pedido.status.replace(/_/g," ").toLowerCase())} em {pedido.data.replace(/-/g,"/")}</span> <br />
                    </h4>
                  </div>
             </div>
              ))}
            </div>
      )
    else
        return(
            <div/>
        )
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Pedidos;
