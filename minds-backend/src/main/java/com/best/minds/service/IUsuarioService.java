package com.best.minds.service;

import java.util.List;
import java.util.Optional;

import com.best.minds.model.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();
    public boolean save(Usuario novo);
	public boolean update(Usuario Usuario, Integer id);
	public boolean delete(Integer id);
	public Usuario findById(Integer id);
    public Optional<Usuario> findByLoginAndSenha(Usuario usuario);

}
