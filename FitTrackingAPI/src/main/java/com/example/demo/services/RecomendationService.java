package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Recommendation;
import com.example.demo.repositories.IRecomendationRepository;

@Service
public class RecomendationService {

	@Autowired
	IRecomendationRepository repository;
	
	public List<Recommendation> findRecommendationsByUser(Long userId) {
        return repository.findByUserDataId(userId);
    }
	
	public Recommendation findRecomendation(Long id){
		return repository.findById(id).get();
	}
	
	public Recommendation saveRecomendation(Recommendation recomendation) {
		return repository.save(recomendation);
	}
	
	public void deleteRecomendation(Long id){
		repository.deleteById(id);
	}

}
