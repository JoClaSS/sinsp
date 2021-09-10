package com.tcc.sinsp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.Column;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="satellites")
public class Satellites {
	  @Id
	  @SequenceGenerator(name="seqs",sequenceName="sat_seq", allocationSize = 0)
	  @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seqs")
	  private Integer id;
	  @Column(name="active", nullable=false)
	  private Boolean active;
	  @Column(name="satellite_name", nullable=false)
	  private String satellite_name;
	  @ManyToMany
	  @JsonProperty("List")
	  private List<Profiles> responsible;
	  @ManyToMany
	  @JsonIgnore
	  private List<Modules> modules;
}