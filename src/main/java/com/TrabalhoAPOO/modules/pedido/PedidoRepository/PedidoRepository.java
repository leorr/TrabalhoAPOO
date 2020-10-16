package com.TrabalhoAPOO.modules.pedido.PedidoRepository;

import com.TrabalhoAPOO.modules.pedido.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PedidoRepository extends JpaRepository <Pedido,Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM PEDIDO WHERE PEDIDO_CLIENTE=SELECT cliente_id FROM CLIENTE where cliente_cpf = ?1")
    List<Pedido> getByCPF(String cliente_cpf);
}
