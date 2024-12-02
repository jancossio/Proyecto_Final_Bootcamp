package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "DIETA")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Diet {
	
	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "DADES_USUARI_ID")
	private Long userDataId;
    
    @Column(name = "NOMBRE")
	private String name;
	
    @Column(name = "FECHA_INICIO")
	private Date initDate;
    
    @Column(name = "FECHA_FIN")
	private Date endDate;
}
