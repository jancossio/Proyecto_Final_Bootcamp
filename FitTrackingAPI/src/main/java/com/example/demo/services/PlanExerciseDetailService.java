package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PlanExerciseDetail;
import com.example.demo.repositories.IPlanExerciseDetail;

@Service
public class PlanExerciseDetailService {
	
	@Autowired
	IPlanExerciseDetail repository;
	
	public List<PlanExerciseDetail> findByPlanExerciseId(Long userId) {
        return repository.findByExerciseDayWeekId(userId);
    }
	
	public PlanExerciseDetail findExerciseDayWeek(Long id){
		return repository.findById(id).get();
	}
	
	public PlanExerciseDetail saveExerciseDayWeek(PlanExerciseDetail planExerciseDetail) {
		return repository.save(planExerciseDetail);
	}
	
	public void deleteExerciseDayWeek(Long id){
		repository.deleteById(id);
	}
}
