package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.PlanExercise;

public interface IPlanExercise extends JpaRepository<PlanExercise, Long> {
	List<PlanExercise> findByUserDataId(Long userDataId);
}
