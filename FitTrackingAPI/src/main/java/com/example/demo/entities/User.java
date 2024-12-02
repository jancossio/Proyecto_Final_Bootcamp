package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USUARIS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "EMAIL")
	private String email;
    
    @Column(name = "CONTRA")
	private String password;
}
