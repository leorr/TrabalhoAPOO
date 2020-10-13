package com.TrabalhoAPOO.modules.pedido.PedidoRepository;

import com.TrabalhoAPOO.modules.pedido.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository <Pedido,Integer> {

}
