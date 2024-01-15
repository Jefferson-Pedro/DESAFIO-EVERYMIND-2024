package com.best.minds.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.best.minds.model.Usuario;
import com.best.minds.service.IUsuarioService;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    IUsuarioService service;
    
    @GetMapping("/all")
	public ResponseEntity<List<Usuario>> findAll(){
		List<Usuario> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Integer id){
		Usuario res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@PostMapping("/")
	public ResponseEntity<Boolean> findByLoginAndSenha(@RequestBody Usuario usuario){
	    Optional<Usuario> res = service.findByLoginAndSenha(usuario);
	    if(res.isPresent()) {
	        return ResponseEntity.status(HttpStatus.OK).body(true);
	    }
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
	}

	
	@PostMapping("/new")
	public ResponseEntity<Boolean> create(@RequestBody Usuario usuario){
		
		if (service.save(usuario)) {
			return ResponseEntity.status(HttpStatus.OK).body(true);
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
	}
	
}
