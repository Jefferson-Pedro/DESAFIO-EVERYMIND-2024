package com.best.minds.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.best.minds.model.Produto;

public interface IProdutoService {
	
	public boolean save(Produto novo);
	public boolean update(Produto produto, Integer id);
	public boolean delete(Integer id);
	public List<Produto> findAll();
	public Produto findById(Integer id);
	public List<Produto> findByName(String nome);
	public Page<Produto> findAllPage(Pageable pageable);
	
}
