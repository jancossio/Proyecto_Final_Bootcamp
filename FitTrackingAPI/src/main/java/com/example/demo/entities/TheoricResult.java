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
@Table(name = "RESULTADO_TEORICO")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TheoricResult {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "DADES_USUARI_ID")
	private Long user_data_id;
    
    @Column(name = "DIETA_ID")
	private Long diet_id;
    
    @Column(name = "PLAN_EJERCICIO_ID")
	private Long plan_exercise_id;

    @Column(name = "FECHA_CREACION")
	private Date initDate;
    
    @Column(name = "FECHA_TERMINO")
	private Date endDate;
	
    @Column(name = "PESO_ESPERADO")
	private Float expectedWeight;
    
    @Column(name = "PERDIDA_GRASA_ESPERADA")
	private Float expectedLostFat;
    
    @Column(name = "GANANCIA_MUSCULAR_ESPERADA")
	private Float expectedMuscleGain;
    
    @Column(name = "TIEMPO_ACTIVIDAD_ESPERADO")
	private Integer expectedActivityTime;
    
    @Column(name = "CONSUMO_AGUA_ESPERADO")
	private Integer expectedWaterDrank;
    
    @Column(name = "CALORIAS_ESPERADAS")
	private Float expectedCalories;
    
    @Column(name = "MEJORAS_EN_RESISTENCIA")
	private Float enduranceImprovement;
    
    @Column(name = "FLEXIBILIDAD_ESPERADA")
	private Float expectedFlexibility;
    
    
	//private JSONObject otherResults;

}
