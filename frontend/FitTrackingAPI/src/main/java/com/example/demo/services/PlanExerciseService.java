package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PlanExercise;
import com.example.demo.repositories.IPlanExercise;

@Service
public class PlanExerciseService {

	@Autowired
	IPlanExercise repository;
	
	public List<PlanExercise> findPlanExercisesByUser(Long userId) {
        return repository.findByUserDataId(userId);
    }
	
	public PlanExercise findPlanExercise(Long id){
		return repository.findById(id).get();
	}
	
	public PlanExercise savePlanExercise(PlanExercise planExercise) {
		return repository.save(planExercise);
	}
	
	public void deletePlanExercise(Long id){
		repository.deleteById(id);
	}
}
