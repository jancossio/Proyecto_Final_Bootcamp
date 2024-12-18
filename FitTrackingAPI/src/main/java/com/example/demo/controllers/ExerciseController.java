package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Exercise;
import com.example.demo.services.ExerciseService;


@RestController
@RequestMapping("/ejercicios")
public class ExerciseController {

	@Autowired
	private ExerciseService service;

    // Search by name
    @GetMapping("/search")
    public ResponseEntity<List<Exercise>> searchExercises(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String difficulty) {
        
        List<Exercise> exercises = service.searchExercises(name, category, difficulty);
        return ResponseEntity.ok(exercises);
    }
}