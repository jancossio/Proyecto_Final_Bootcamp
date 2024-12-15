package com.example.demo.entities;

import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "RECOMENDACION")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation {
	
	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "DADES_USUARI_ID")
	private Long userDataId;
	
    @Column(name = "DESCRIPCION")
	private String description;
    
    @Column(name = "REFERENCIAPES")
	private String weigthReference;
	
    @Column(name = "REFERENCIACTIVITATFISICA")
	private String physicalActivityReference;
}
