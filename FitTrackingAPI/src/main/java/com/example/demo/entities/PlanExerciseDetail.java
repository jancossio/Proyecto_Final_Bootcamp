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
@Table(name = "PLAN_EJERCICIO_DETALLE")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlanExerciseDetail {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "EJERCICIO_DIA_SEMANA_ID")
	private Long exercise_day_week_id;
    
    @Column(name = "EJERCICIO_ID")
	private Long exercise_id;
    
    @Column(name = "REPETICIONES")
	private Integer repetitions;
    
    @Column(name = "SERIES")
	private Integer series;
    
    @Column(name = "DURACION_MIN")
	private Integer duration_min;
    
    @Column(name = "DESCANSO_SEGUNDOS")
	private Integer rest_seconds;
}
