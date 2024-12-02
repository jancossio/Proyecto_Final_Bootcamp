package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.ExerciseDayWeek;
import com.example.demo.entities.PlanExercise;

public interface IExerciseDayWeek extends JpaRepository<ExerciseDayWeek, Long> {
	List<ExerciseDayWeek> findByExercisePlanId(Long userDataId);
}
