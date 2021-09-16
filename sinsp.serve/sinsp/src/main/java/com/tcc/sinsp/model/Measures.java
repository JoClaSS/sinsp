package com.tcc.sinsp.model;

import java.util.Date;


import javax.persistence.*;



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
	  @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
	  @JoinColumn(name="satellites_id")
	  @JsonIgnore
	  private Satellites satellite;
	  @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
	  @JoinColumn(name="modules_id")
	  @JsonIgnore
	  private Modules module;
	
}