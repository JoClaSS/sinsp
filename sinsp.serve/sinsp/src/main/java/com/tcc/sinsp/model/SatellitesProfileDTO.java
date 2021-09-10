package com.tcc.sinsp.model;
import java.util.List;


import lombok.Data;

@Data
public class SatellitesProfileDTO {
	  private Integer id;
	  private Boolean active;
	  private String  satellite_name;
	  private List<Integer> responsible_id;


public Satellites transformToObject(SatellitesProfileDTO dto) {
		Satellites satellite = new Satellites();
		satellite.setActive(dto.getActive());
		satellite.setSatellite_name(dto.getSatellite_name());
		return satellite;
} 
}