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
@Table(name = "ALIMENTO")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Aliment {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "NOMBRE")
	private String name;
    
    @Column(name = "CANTIDAD")
	private Integer quantity;
	
    @Column(name = "CALORIAS")
	private Integer calories;
}
