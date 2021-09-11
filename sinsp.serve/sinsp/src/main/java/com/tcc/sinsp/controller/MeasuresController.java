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
import com.tcc.sinsp.model.Modules;
import com.tcc.sinsp.model.ModulesDTO;
import com.tcc.sinsp.model.Satellites;
import com.tcc.sinsp.repository.MeasuresRepository;
import com.tcc.sinsp.repository.ModulesRepository;
import com.tcc.sinsp.repository.SatellitesRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/measures")
@RequiredArgsConstructor
@CrossOrigin("*")
public class MeasuresController {
    @Autowired
	private final MeasuresRepository repository;
    @Autowired
	private final ModulesRepository mRep;
    @Autowired
  	private final SatellitesRepository sRep;
 
    private final LogsController lcon;

	
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Measures save(@RequestBody ModulesDTO dto) throws Exception {
    	Measures measure = dto.transformToObject(dto);
    	Modules module = new Modules();
    	Satellites satellite = new Satellites();
    	Logs log = new Logs();
    	satellite = (sRep.findById(dto.getSatellites_id())
    			.orElseThrow(() -> new Exception("Satellite not found")));
    	
        module = (mRep.findById(dto.getModules_id())
        		.orElseThrow(() -> new Exception("Module doesn't exist")));
        
        measure.setSample(dto.getSample()*module.getFormulation());
    	
        measure.setModule(mRep.findById(dto.getModules_id())
    			.orElseThrow(() -> new Exception("Module doesn't exist")));
    	
    	measure.setSatellite(sRep.findById(dto.getSatellites_id())
    			.orElseThrow(() -> new Exception("Satellite not found")));
    	
    	if(measure.getSample() > 5 || measure.getSample() < 2 ) { //log
    		log.setSatellite(measure.getSatellite());
    		log.setMessage(
    				"Satellite " + satellite.getSatellite_name() + 
    				" module" + module.getModulename() + " " + module.getModuledescription() +
    				" get a weird sample " + measure.getSample());
    	    lcon.save(log);
    	}
    	return repository.save(measure);
    }
 
    @GetMapping
    public List<Measures> getAll(){
    	return repository.findAll();
    }
    
    @GetMapping("/sample")
    public Page<Measures> getOrganizedMeasure(
    		@RequestParam(value = "modules", required = true) Integer modules,
    		@RequestParam(value = "satellites", required = true) Integer satellites,
    		@RequestParam(value = "size", required = true) Page size,
    		@PageableDefault(page=0,size=100,sort="id",direction= Sort.Direction.DESC) Pageable pageable
    		){
    	   return repository.findMeasures(modules,satellites,pageable);
    }     
}