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
<<<<<<< HEAD:FitTrackingAPI/src/main/java/com/example/demo/entities/Plate_Aliment.java
public class Plate_Aliment {
=======

public class PlateAliment {
>>>>>>> dbce272d91070a0048a36cd24d9aa9a124736cbd:FitTrackingAPI/src/main/java/com/example/demo/entities/PlateAliment.java

	@Id
    @Column(name = "ID_PLATO")
	private Long idPlate;
	
	@Id
    @Column(name = "ID_ALIMENTO")
	private Long idAliment;
	
    @Column(name = "CANTIDAD")
	private Long quantity;

}
