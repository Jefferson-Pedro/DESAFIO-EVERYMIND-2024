package com.best.minds.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.best.minds.model.Produto;

public interface IProdutoService {
	
	public boolean save();
	public boolean update();
	public boolean delete();
	public List<Produto> findAll();
	public Produto findById(Integer id);
	public Page<Produto> findAllPage(Pageable pageable);
	
}
