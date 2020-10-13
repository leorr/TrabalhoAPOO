package com.TrabalhoAPOO.modules.pedido.Service;


import com.TrabalhoAPOO.modules.pedido.PedidoRepository.PedidoRepository;
import com.TrabalhoAPOO.modules.pedido.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.TrabalhoAPOO.modules.comum.exception.Exceptions.PEDIDO_NAO_ENCONTRADO;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repository;

    public List<Pedido> getPedidos(String cpf){
        return this.repository.getByCPF(cpf);
    }
}
