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
@Table(name = "PLAN_EJERCICIO")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlanExercise {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "DADES_USUARI_ID")
	private Long user_data_id;
    
    @Column(name = "NOMBRE")
	private String name;
    
    @Column(name = "DURACION")
	private Integer duration;
    
    @Column(name = "FECHA_INICIO")
	private Date startDate;
    
    @Column(name = "FECHA_FIN")
	private Date endDate;
    
    @Column(name = "ESTADO")
	private String state;
}
