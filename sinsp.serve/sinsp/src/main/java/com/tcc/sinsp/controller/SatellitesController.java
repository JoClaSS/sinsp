package com.tcc.sinsp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.sinsp.model.Logs;
import com.tcc.sinsp.model.Satellites;
import com.tcc.sinsp.model.SatellitesProfileDTO;
import com.tcc.sinsp.repository.ModulesRepository;
import com.tcc.sinsp.repository.ProfilesRepository;
import com.tcc.sinsp.repository.SatellitesRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/satellites")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SatellitesController {
	@Autowired
	private final SatellitesRepository repository;
	@Autowired
	private final ModulesRepository mRep;
	@Autowired
	private final ProfilesRepository pRep;
	
	private final LogsController lCon;
	    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Satellites save(@RequestBody SatellitesProfileDTO dto) throws Exception {
    	Satellites newSatellite;
    	Logs log = new Logs();
    	
    	if(dto.getId() == null) {
    		newSatellite = dto.transformToObject(dto);
    		newSatellite.setModules(mRep.findAll());
    		newSatellite.setResponsible(pRep.findAllById(dto.getResponsible_id()));
         	  log.setMessage(
     				"Satellite " + newSatellite.getSatellite_name() + " has been created");
     	      lCon.save(log);
    	}
    	
    	else {
      	    newSatellite = repository.findById(dto.getId())
      	    		.orElseThrow(() -> new Exception("Update failed"));
      	    
      	    newSatellite.setSatellite_name(dto.getSatellite_name());
      	    newSatellite.setActive(dto.getActive());
      	    newSatellite.setResponsible(pRep.findAllById(dto.getResponsible_id()));
     	  log.setMessage(
 				"Satellite " + newSatellite.getSatellite_name() + " has been updated");
 	      lCon.save(log);
 	      
      	}
    	return repository.save(newSatellite);	
    }	 
    
	    @GetMapping
	    public List<Satellites> getAll(){
	    	return repository.findAll();
	    }
	    
	    @GetMapping("{id}")
	    public Optional<Satellites> getById(@PathVariable Integer id){
	    	return repository.findById(id);
	    }
	    
	    
	    @GetMapping("/search")
	    public Optional<Satellites> getByName(@RequestParam String name){
	    	return repository.findByName(name);
	    }
	    
	    @DeleteMapping(value = "{id}")
	    @ResponseStatus(HttpStatus.NO_CONTENT)
	    public void deletePost(@PathVariable Integer id) throws Exception {
	    	
	    	Satellites satellite = repository.findById(id).orElseThrow(() -> new Exception("Delete failed"));
	    	 repository.delete(satellite);
	    }
	    
	  }