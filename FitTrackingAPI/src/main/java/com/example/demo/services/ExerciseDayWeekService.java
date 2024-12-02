package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ExerciseDayWeek;
import com.example.demo.repositories.IExerciseDayWeek;

@Service
public class ExerciseDayWeekService {

	@Autowired
	IExerciseDayWeek repository;
	
	public List<ExerciseDayWeek> findDietsByExerciseDayWeek(Long userId) {
        return repository.findByPlanExerciseId(userId);
    }
	
	public ExerciseDayWeek findExerciseDayWeek(Long id){
		return repository.findById(id).get();
	}
	
	public ExerciseDayWeek saveExerciseDayWeek(ExerciseDayWeek planExercise) {
		return repository.save(planExercise);
	}
	
	public void deleteExerciseDayWeek(Long id){
		repository.deleteById(id);
	}
}
