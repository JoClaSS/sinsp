package com.tcc.sinsp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="profiles")
public class Profiles {
	  @Id
	  @SequenceGenerator(name="seqp",sequenceName="pro_seq", allocationSize = 0)
	  @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seqp")
	  private Integer id;
	  @Column( nullable=false)
	  private String name;
	  @Column(nullable=false)
	  private String email;
	  @Column(nullable=false)
	  private String role;
	  @OneToOne
	  @JsonIgnore
	  private Users user;
}