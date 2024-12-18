package com.example.demo.dto;

import lombok.Data;

@Data
public class UserRoutineExerciseRequest {
    private Long userId;
    private Long dayId;
    private Long exerciseId;
    private String exerciseFocus;
    private Boolean completedExercise;
}