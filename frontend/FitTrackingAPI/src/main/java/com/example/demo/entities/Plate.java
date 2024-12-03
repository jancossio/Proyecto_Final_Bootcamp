package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PLATO")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plate {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "NOMBRE")
	private String name;
    
    @Column(name = "DESCRIPCION")
	private String description;
	
    @Column(name = "ID_DIETA")
	private Long diet_id;
}
