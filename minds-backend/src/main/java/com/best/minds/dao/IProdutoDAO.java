package com.best.minds.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.best.minds.model.Produto;

public interface IProdutoDAO extends JpaRepository<Produto, Integer>{
	
	public List<Produto> findBynomeProdStartingWith(String palavraChave);
}
