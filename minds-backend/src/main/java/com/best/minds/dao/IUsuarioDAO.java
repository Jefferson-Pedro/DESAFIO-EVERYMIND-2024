package com.best.minds.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.best.minds.model.Usuario;

public interface IUsuarioDAO extends JpaRepository<Usuario, Integer>{
	
    Optional<Usuario> findByLoginAndSenha(String login, String senha);
    Optional<Usuario> findByLogin(String user);
}
