package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USUARI_RUTINA_EXERCICIS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRoutineExercise {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuari_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "rutina_dia_id", nullable = false)
    private RoutineDayWeek routineDayWeek;

    @ManyToOne
    @JoinColumn(name = "exercici_id", nullable = false)
    private Exercise exercise;

    @Column(name = "exercici_completat", nullable = false)
    private Boolean completedExercise = false;
    
    @Column(name = "objectiu_exercici")
    private String exerciseFocus;
}