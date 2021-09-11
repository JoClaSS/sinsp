package com.tcc.sinsp.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="logs")
public class Logs {
	  @Id
	  @SequenceGenerator(name="seqlog",sequenceName="log_seq",allocationSize = 0)
	  @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seqlog")
	  private Long id;
	  @Column(name="message")
	  private String message;
	  @Column(name="logtime")
	  @CreationTimestamp
	  @Temporal(TemporalType.TIMESTAMP)
	  private Date logtime;
	  @ManyToOne(cascade=CascadeType.ALL)
	  @JoinColumn(name="satellites_id")
	  @JsonIgnore
	  private Satellites satellite;
}