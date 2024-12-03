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
@Table(name = "DADES_USUARI")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserData {

	@Id
    @Column(name = "ID")
	private Long id;
	
    @Column(name = "EDAT")
	private Integer age;
	
    @Column(name = "PES")
	private Float weigth;
	
    @Column(name = "ALTURA")
	private Float heigth;
    
    @Column(name = "ACTIVITATFISICA")
	private String physicalActivity;
    
    @Column(name = "PROBLEMESALUT")
	private String healthIssues;
    
    @Column(name = "LITRESAIGUA")
	private Float waterDrank;
    
    @Column(name = "ALERGIA")
	private String allergy;
    
    @Column(name = "MOTIVACIO")
	private String motivation;
    
    @Column(name = "OBJECTIU")
	private String objective;
    
    @Column(name = "DATA_ACTUAL")
	private Date currentDate;
    
    @Column(name = "PREFERENCIALIMENTARIA")
	private String foodPreferences;
}
