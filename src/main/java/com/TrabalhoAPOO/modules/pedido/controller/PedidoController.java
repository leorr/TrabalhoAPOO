package com.TrabalhoAPOO.modules.pedido.controller;


import com.TrabalhoAPOO.modules.pedido.PedidoRepository.PedidoRepository;
import com.TrabalhoAPOO.modules.pedido.model.Pedido;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
public class PedidoController {
    @Autowired
    PedidoRepository pedidoRepository;

    @GetMapping("/pedidos")
    public List<Pedido> listaPedidos(){
        return pedidoRepository.findAll();
    }
}
