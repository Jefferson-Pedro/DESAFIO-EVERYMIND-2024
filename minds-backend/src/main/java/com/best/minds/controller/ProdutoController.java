package com.best.minds.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.best.minds.model.Produto;
import com.best.minds.service.IProdutoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/produto")
public class ProdutoController {
	
	@Autowired
	IProdutoService service;
	
	/*@GetMapping()
	public ResponseEntity<Page<Produto>> findAllPage(Pageable pageable){
	    Page<Produto> page = service.findAllPage(pageable);
	    
	    if(page.hasContent()) {
	        return ResponseEntity.ok(page);
	    }
	    return ResponseEntity.notFound().build();
	}*/
	
	@GetMapping("/all")
	public ResponseEntity<List<Produto>> findAll(){
		List<Produto> list = service.findAll();
		if(list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> findById(@PathVariable Integer id){
		Produto res = service.findById(id);
		if(res != null) {
			return ResponseEntity.ok().body(res);
		}
		return ResponseEntity.notFound().build();	
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Produto>> findByName(@RequestParam (name = "nome") String name){
		List<Produto> list = service.findByName(name);
		if(!list.isEmpty()) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();	
	}
}
