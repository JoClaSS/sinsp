package com.tcc.sinsp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tcc.sinsp.model.Modules;


public interface ModulesRepository extends JpaRepository<Modules,Integer>{

	  @Query("SELECT m FROM Modules m WHERE (:modulename is null or m.modulename= :modulename)"
			  + "and (:modulefunction is null or m.modulefunction= :modulefunction)"
			  + "and (:moduleclass is null or m.moduleclass= :moduleclass)"
			  + "and (:moduleobject is null or m.moduleobject= :moduleobject)"
			  + "and (:category1 is null or m.category1= :category1)"
			  + "and (:category2 is null or m.category2= :category2)"
			  + "and (:measuretype is null or m.measuretype= :measuretype)"
			  + "and (:type is null or m.type= :type)"
			  + "and (:moduledescription is null or m.moduledescription= :moduledescription)"
			  )
	  Optional<Modules> findModules(
			  @Param("modulename") String modulename,
			  @Param("modulefunction") String modulefunction,
			  @Param("moduleclass") String moduleclass,
			  @Param("moduleobject") String moduleobject,
			  @Param("category1") String category1,
			  @Param("category2") String category2,
			  @Param("measuretype") String measuretype,
			  @Param("type") String type,
			  @Param("moduledescription") String moduledescription	  
			  );
	  
	  	  
	  @Query("SELECT m FROM Modules m WHERE (:modulename is null or m.modulename= :modulename)"
			  + "and (:moduleclass is null or m.moduleclass= :moduleclass)"
			  )
	  List<Modules> findModulesByclass(
			  @Param("modulename") String modulename,
			  @Param("moduleclass") String moduleclass	  
			  );
	  
	  @Query("SELECT m FROM Modules m WHERE (:moduledescription is null or m.moduledescription= :moduledescription)"
			  )
	  List<Modules> findModulesByDescription(
			  @Param("moduledescription") String moduledescription	  
			  );
	  
	  
}