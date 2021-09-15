package com.tcc.sinsp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.sinsp.model.Measures;
import com.tcc.sinsp.model.Modules;
import com.tcc.sinsp.model.ModulesDTO;
import com.tcc.sinsp.repository.MeasuresRepository;
import com.tcc.sinsp.repository.ModulesRepository;
import com.tcc.sinsp.repository.SatellitesRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/modules")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ModulesController {
	
	@Autowired
	private final ModulesRepository mRep;
	
    @GetMapping
    public List<Modules> getAll(){
    	return mRep.findAll();
    }
    
    @GetMapping("/dialog")
    public List<Modules> getModulesByParams(
    		@RequestParam(value = "module", required = true) String module, // EPS,OBC,SP1 ETC.
    		@RequestParam(value = "mclass", required = true) String mclass // SENSOR,CONFIG
    		){
    	return mRep.findModulesByclass(module, mclass);
    }
    
    @GetMapping("/dialogNot")
    public List<Modules> getModulesByParamsNOT(
    		@RequestParam(value = "module", required = true) String module // EPS,OBC,SP1 ETC.
    		){
    	return mRep.findModulesByclassNot(module,"status");
    }
    
    @GetMapping("/findModule")
    public List<Modules> getOneModule(
    		@RequestParam(value = "description", required = true) String description
    		){
    	return mRep.findModulesByDescription(description);
    }


}
