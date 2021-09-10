package com.tcc.sinsp.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tcc.sinsp.model.Satellites;


public interface SatellitesRepository extends JpaRepository<Satellites,Integer>{
 
	  @Query(value = "select * from satellites s where s.satellite_name =:satellite_name"
			  , nativeQuery = true
			  )
	  Optional<Satellites> findByName(
			  @Param("satellite_name") String satellite_name
			  );  
}