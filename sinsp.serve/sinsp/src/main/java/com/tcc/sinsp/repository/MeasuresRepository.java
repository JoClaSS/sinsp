package com.tcc.sinsp.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tcc.sinsp.model.Measures;


public interface MeasuresRepository extends JpaRepository<Measures,Long> {
	
	  @Query(value = "select * from measures m where m.modules_id = :modules and m.satellites_id =:satellites"
			  , nativeQuery = true
			  )
	  Page<Measures> findMeasures(
			  @Param("modules") Integer modules,
			  @Param("satellites") Integer satellites,
			  Pageable pageable
			  ); 
	  
	  @Query(value = "select * from measures m where m.modules_id = :modules and m.satellites_id =:satellites"
			  , nativeQuery = true
			  )
	  List<Measures> findMeasuresByString(
			  @Param("modules") Integer modules,
			  @Param("satellites") Integer satellites
			  ); 
	  
}