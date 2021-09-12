package com.tcc.sinsp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.sinsp.model.Profiles;
import com.tcc.sinsp.model.Satellites;
import com.tcc.sinsp.repository.LogsRepository;
import com.tcc.sinsp.repository.ProfilesRepository;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/profiles")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProfilesController {
	
	  @Autowired
	  private final ProfilesRepository pRep;
	
	   @GetMapping
	    public List<Profiles> getAll(){
	    	return pRep.findAll();
	    }

}
