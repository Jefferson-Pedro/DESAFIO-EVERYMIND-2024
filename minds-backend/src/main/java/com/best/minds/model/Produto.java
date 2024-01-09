package com.best.minds.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cod_prod")
	private Integer codProd;
	
	@Column(name = "nome_prod")
	private String nomeProd;
	
	@Column(name = "desc_prod")
	private String descricaoProd;
	
	@Column(name = "preco_prod")
	private Double precoProd;
	
	//GETS E SETS

	public Integer getCodProd() {
		return codProd;
	}

	public void setCodProd(Integer codProd) {
		this.codProd = codProd;
	}

	public String getNomeProd() {
		return nomeProd;
	}

	public void setNomeProd(String nomeProd) {
		this.nomeProd = nomeProd;
	}

	public String getDescricaoProd() {
		return descricaoProd;
	}

	public void setDescricaoProd(String descricaoProd) {
		this.descricaoProd = descricaoProd;
	}

	public Double getPrecoProd() {
		return precoProd;
	}

	public void setPrecoProd(Double precoProd) {
		this.precoProd = precoProd;
	}

}
