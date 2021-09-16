package com.tcc.sinsp.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
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
	  @ManyToMany(fetch = FetchType.LAZY,
		        cascade ={CascadeType.MERGE, CascadeType.PERSIST})
	  @JoinTable(name="satellites_responsible",
      joinColumns=@JoinColumn(name="satellites_id"),
      inverseJoinColumns=@JoinColumn(name="responsible_id"))
	  private List<Profiles> responsible;
	  @ManyToMany(fetch = FetchType.LAZY,
		        cascade ={CascadeType.MERGE, CascadeType.PERSIST})
	  @JoinTable(name="satellites_modules",
      joinColumns=@JoinColumn(name="satellites_id"),
      inverseJoinColumns=@JoinColumn(name="modules_id"))
	  @JsonIgnore
	  private List<Modules> modules;
}