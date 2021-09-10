package com.tcc.sinsp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



import javax.persistence.Column;




@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="modules")
public class Modules {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;
	  @Column(name="modulename")
	  private String modulename;
	  @Column(name="modulefunction")
	  private String modulefunction;
	  @Column(name="moduleclass")
	  private String moduleclass;
	  @Column(name="moduleobject")
	  private String moduleobject;
	  @Column(name="category1")
	  private String category1;
	  @Column(name="category2")
	  private String category2;
	  @Column(name="measuretype")
	  private String measuretype;
	  @Column(name="moduledescription")
	  private String moduledescription;
	  @Column(name="type")
	  private String type;
	  @Column(name="formulation")
	  private Double formulation;
	  @Column(name="dimension")
	  private String dimension;
}  