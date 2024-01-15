package com.best.minds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.best.minds.dao.IUsuarioDAO;
import com.best.minds.model.Usuario;

@Component
public class UsuarioImpl implements IUsuarioService{

    @Autowired
    IUsuarioDAO dao;

    @Override
    public boolean save(Usuario novo) {
    	
    	Optional<Usuario> res = dao.findByLogin(novo.getLogin());
    	if(!res.isPresent()) {
    		if(novo.getLogin() != null && novo.getLogin().length() > 3) {
    			dao.save(novo);
    			System.out.println("Usuário salvo com sucesso");
    			return true;
    		}
    	}
		System.err.println("Ocorreu um erro ao cadastrar o usuário!");
		return false;
    }

    @Override
    public boolean update(Usuario usuario, Integer id) {
        Optional<Usuario> res = dao.findById(id);
		if(res.isPresent()) {
			Usuario existingProd = res.get();
			BeanUtils.copyProperties(usuario, existingProd, "codProd");
			dao.save(existingProd);
			System.out.println("Usuario atualizado com sucesso");
			return true;
		}
		 System.err.println("Erro ao atualizar o Usuario!");
		return false;
    }

    @Override
    public boolean delete(Integer id) {
        Optional<Usuario> res = dao.findById(id);
		if(res.isPresent()) {
			dao.deleteById(id);
			System.out.println("Usuário excluido com sucesso");
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir usuário!");
		return false;
    }

    @Override
    public List<Usuario> findAll() {
        return dao.findAll();
    }

    @Override
    public Usuario findById(Integer id) {
        return dao.findById(id).orElse(null);
    }

	@Override
	public Optional<Usuario> findByLoginAndSenha(Usuario usuario) {
		return dao.findByLoginAndSenha(usuario.getLogin(), usuario.getSenha());
	}

	
}
