package com.tcc.sinsp.model;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="users")
public class Users {
		  @Id
		  @SequenceGenerator(name="sequ",sequenceName="user_seq", allocationSize = 0)
		  @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sequ")
		  private Integer id;
		  @Column( nullable=false)
		  private String login;
		  @Column(nullable=false)
		  private String password;
		  @Column(nullable=false)
		  private Boolean active;
}
