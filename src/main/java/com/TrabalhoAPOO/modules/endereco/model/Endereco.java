package com.TrabalhoAPOO.modules.endereco.model;

import javax.persistence.*;
import lombok.*;

import java.math.BigInteger;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Endereco")
public class Endereco {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="endereco_id")
    private Integer id;
    
    @Column(name="endereco_cep", nullable=false)
    private BigInteger cep;

    @Column(name="endereco_rua", nullable=false, length=20)
    private String rua;

    @Column(name="endereco_bairro", nullable=false, length=20)
    private String bairro;

    
    @Column(name="endereco_numero", nullable=false)
    private int numero;

    @Column(name="endereco_complemento", nullable=true, length=20)
    private String complemento;

    public Endereco(Integer id){
        this.id=id;
    }

    public static Endereco of(Integer enderecoId) {
        return Endereco.builder().id(enderecoId).build();
    }

}
