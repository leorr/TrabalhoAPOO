package com.TrabalhoAPOO.modules.pedido.enums;

import lombok.Getter;

public enum Status {
    ENTREGUE("Entregue"),
    EM_TRANSPORTE("Em transporte"),
    AGUARDANDO_PAGAMENTO("Aguardando pagamento"),
    AGUARDANDO_DESPACHO("Aguardando despacho");

    @Getter
    private String descricao;
    Status(String descricao){
	this.descricao=descricao;
    }
}
