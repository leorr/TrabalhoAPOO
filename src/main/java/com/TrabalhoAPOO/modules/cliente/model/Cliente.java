package com.TrabalhoAPOO.modules.cliente.model;

import javax.persistence.*;

import com.TrabalhoAPOO.modules.endereco.model.Endereco;
import lombok.*;

import java.math.BigInteger;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Cliente")
public class Cliente {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="cliente_id")
    private Integer id;
    
    @Column(name="cliente_nome", nullable=false,length=20)
    private String nome;

    @Column(name="cliente_cpf", nullable=false,length=20)
    private long cpf;

    public Cliente(Integer id){
        this.id=id;
    }
    public static Cliente of(Integer clienteId) {
	return Cliente.builder().id(clienteId).build();
    }
}
