package com.tcc.sinsp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="measures")
public class Measures {

	  @Id
	  @SequenceGenerator(name="seq",sequenceName="mea_seq",allocationSize = 0)
	  @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
	  private Long id;
	  @Column(name="sample")
	  private Double sample;
	  @Column(name="message")
	  private String message;
	  @Column(name="status_report")
	  private Boolean status;
	  @CreationTimestamp
	  @Column(name="sample_time")
	  @Temporal(TemporalType.TIMESTAMP)
	  private Date sample_time;
	  @ManyToOne
	  @JoinColumn(name="satellites_id")
	  @JsonIgnore
	  private Satellites satellite;
	  @ManyToOne
	  @JoinColumn(name="modules_id")
	  @JsonIgnore
	  private Modules module;
	
}