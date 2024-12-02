package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.ExerciseDayWeek;
import com.example.demo.entities.PlanExercise;

public interface IExerciseDayWeek extends JpaRepository<ExerciseDayWeek, Long> {
<<<<<<< HEAD
	List<ExerciseDayWeek> findByExercisePlanId(Long userDataId);
=======
	List<ExerciseDayWeek> findByExercisePlanId(Long exerciseDayWeekId);
>>>>>>> dbce272d91070a0048a36cd24d9aa9a124736cbd
}
