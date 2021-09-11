package com.tcc.sinsp.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tcc.sinsp.model.Logs;



public interface LogsRepository extends JpaRepository<Logs,Long> {
	
	@Query(value = "select * from logs l"
			  , nativeQuery = true
			  )
	  Page<Logs> pageLogs(
			  Pageable pageable
			  ); 

}
