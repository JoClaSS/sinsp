package com.tcc.sinsp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.sinsp.model.Logs;
import com.tcc.sinsp.model.Measures;
import com.tcc.sinsp.repository.LogsRepository;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/logs")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LogsController {
   
	  @Autowired
	  	private final LogsRepository lRep;
	  
	  @PostMapping
	    @ResponseStatus(HttpStatus.CREATED)
	    public Logs save(@RequestBody Logs log) {
		  return lRep.save(log);
	  }
	  
	  
	   @GetMapping
	    public List<Logs> getAll(){
	    	return lRep.findAll();
	    }
	   
	   @GetMapping("/page")
	    public Page<Logs> getPageLogs(
	    		@PageableDefault(page=0,size=7,sort="id",direction= Sort.Direction.DESC) Pageable pageable
	    		){
	    	   return lRep.pageLogs(pageable);
	    }   
	  }

