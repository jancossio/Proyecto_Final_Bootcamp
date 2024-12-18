package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Exercise;

public interface IExerciseRepository extends JpaRepository<Exercise, Long>{

    List<Exercise> findByNameContainingIgnoreCase(String name);

    List<Exercise> findByDifficulty(String difficulty);

    List<Exercise> findByCategory(String category);

    @Query("SELECT e FROM Exercise e WHERE " +
    	       "(:name IS NULL OR LOWER(e.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
    	       "(:category IS NULL OR LOWER(e.category) = LOWER(:category)) AND " +
    	       "(:difficulty IS NULL OR LOWER(e.difficulty) = LOWER(:difficulty))")
    	List<Exercise> searchExercises(@Param("name") String name,
    	                               @Param("category") String category,
    	                               @Param("difficulty") String difficulty);
}
