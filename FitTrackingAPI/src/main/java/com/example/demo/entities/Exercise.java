package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "EXERCICIS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exercise {
	@Id
    @Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NOM")
    private String name;
    
    @Column(name = "DESCRIPCIO")
    private String description;
    
    @Column(name = "REPETICIONS")
    private String repetitions;
    
    @Column(name = "DURACIO")
    private Float duration;
    
    @Column(name = "DESCANS")
    private Float rest;

    @Column(name = "DIFICULTAT")
    private String difficulty;
    
    @Column(name = "CATEGORIA")
    private String category;
    
    @Column(name = "IMATGE")
    private String image;    
}