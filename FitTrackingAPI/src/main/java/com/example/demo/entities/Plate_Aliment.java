package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PLATO_ALIMENTO")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plate_Aliment {

	@Id
    @Column(name = "ID_PLATO")
	private Long id_plate;
	
	@Id
    @Column(name = "ID_ALIMENTO")
	private Long id_alimento;
	
    @Column(name = "CANTIDAD")
	private Long quantity;
}
