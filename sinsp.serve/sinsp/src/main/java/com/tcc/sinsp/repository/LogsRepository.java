package com.tcc.sinsp.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.tcc.sinsp.model.Logs;


public interface LogsRepository extends JpaRepository<Logs,Long> {

}
