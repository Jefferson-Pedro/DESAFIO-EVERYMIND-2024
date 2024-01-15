package com.best.minds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.best.minds.dao.IProdutoDAO;
import com.best.minds.model.Produto;

@Component
public class ProdutoImpl implements IProdutoService{
	
	@Autowired
	IProdutoDAO dao;

	@Override
	public boolean save(Produto novo) {
		if(novo.getNomeProd() != null && novo.getNomeProd().length() > 3) {
			dao.save(novo);
			System.out.println("Produto salvo com sucesso");
			return true;
		}
		System.err.println("O objeto está nulo ou não cumpre os requisitos para o cadastro");
		return false;
	}

	@Override
	public boolean update(Produto produto, Integer id) {
		Optional<Produto> res = dao.findById(id);
		if(res.isPresent()) {
			Produto existingProd = res.get();
			BeanUtils.copyProperties(produto, existingProd, "codProd");
			dao.save(existingProd);
			System.out.println("Produto atualizado com sucesso");
			return true;
		}
		 System.err.println("Erro ao atualizar o produto!");
		return false;
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Produto> res = dao.findById(id);
		if(res.isPresent()) {
			dao.deleteById(id);
			System.out.println("Produto excluido com sucesso");
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir produto!");
		return false;
	}

	@Override
	public List<Produto> findAll() {
		return dao.findAll();
	}
	
	@Override
	public List<Produto> findByName(String nome) {
		return dao.findBynomeProdStartingWith(nome);
	}

	@Override
	public Produto findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public Page<Produto> findAllPage(Pageable pageable) {
		return dao.findAll(pageable);
	}
}
