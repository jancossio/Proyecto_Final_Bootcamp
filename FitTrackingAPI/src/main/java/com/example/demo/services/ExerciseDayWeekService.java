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
	
<<<<<<< HEAD
	public List<ExerciseDayWeek> findDietsByExerciseDayWeek(Long exercisePlanId) {
        return repository.findByExercisePlanId(exercisePlanId);
=======
	public List<ExerciseDayWeek> findExerciseByPlan(Long userId) {
        return repository.findByExercisePlanId(userId);
>>>>>>> dbce272d91070a0048a36cd24d9aa9a124736cbd
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
