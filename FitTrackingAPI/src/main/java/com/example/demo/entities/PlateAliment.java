package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PLATO_ALIMENTO")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(PlateAlimentId.class)

public class PlateAliment {

	@Id
    @Column(name = "ID_PLATO")
	private Long idPlate;
	
	@Id
    @Column(name = "ID_ALIMENTO")
	private Long idAliment;
	
    @Column(name = "CANTIDAD")
	private Long quantity;

}
