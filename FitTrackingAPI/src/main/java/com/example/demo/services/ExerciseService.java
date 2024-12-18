package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Exercise;
import com.example.demo.repositories.IExerciseRepository;


@Service
public class ExerciseService {

    @Autowired
    private IExerciseRepository repository;

    // Search by name
    public List<Exercise> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    // Search by category
    public List<Exercise> searchByCategory(String category) {
        return repository.findByCategory(category);
    }

    // Search by difficulty
    public List<Exercise> searchByDifficulty(String difficulty) {
        return repository.findByDifficulty(difficulty);
    }

    // Combined search
    public List<Exercise> searchExercises(String name, String category, String difficulty) {
        return repository.searchExercises(name, category, difficulty);
    }
}