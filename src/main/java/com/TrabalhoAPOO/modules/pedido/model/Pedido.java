package com.TrabalhoAPOO.modules.pedido.model;

import com.TrabalhoAPOO.modules.pedido.enums.Status;
import com.TrabalhoAPOO.modules.endereco.model.Endereco;
import com.TrabalhoAPOO.modules.cliente.model.Cliente;

import javax.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Pedido")
public class Pedido {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="pedido_id")
    private Integer id;
    
    @Enumerated(EnumType.STRING)
    @Column(name="pedido_status", nullable=false,length=20)
    private Status status;

    @Column(name="pedido_data", nullable=false)
    private LocalDate data;

    @ManyToOne @JoinColumn(name="pedido_endereco", nullable=false)
    private Endereco endereco;

    @ManyToOne @JoinColumn(name="pedido_cliente", nullable=false)
    private Cliente cliente;

    public static Pedido of(Integer pedidoId) {
        return Pedido.builder().id(pedidoId).build();
    }

    public Pedido(Integer id){
        this.id=id;
    }


}
