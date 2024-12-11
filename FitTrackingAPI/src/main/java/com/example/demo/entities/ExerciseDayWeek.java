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
@Table(name = "EJERCICIO_DIA_SEMANA")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExerciseDayWeek {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "PLAN_EJERCICIO_ID")
	private Long exercisePlanId;
    
    @Column(name = "VERSION")
	private Integer version;
    
    @Column(name = "FECHA_CREACION")
	private Date creationDate;
    
    @Column(name = "ESTADO")
	private String state;
}
