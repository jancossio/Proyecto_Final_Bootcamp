package com.example.demo.entities;

<<<<<<< HEAD
=======
import java.io.Serializable;

import jakarta.persistence.Embeddable;
>>>>>>> dbce272d91070a0048a36cd24d9aa9a124736cbd
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
<<<<<<< HEAD
public class PlateAlimentId {
=======
@Embeddable
public class PlateAlimentId implements Serializable {
>>>>>>> dbce272d91070a0048a36cd24d9aa9a124736cbd
	private Long idPlate;
	private Long idAliment;
}
