package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Plate;
import com.example.demo.entities.Recommendation;
import com.example.demo.repositories.IPlateRepository;
import com.example.demo.repositories.IRecomendationRepository;

@Service
public class PlateService {

	@Autowired
	IPlateRepository repository;
	
	/*public List<Recommendation> findRecommendationsByUser(Long userId) {
        return repository.fin(userId);
    }*/
	
	public Plate findPlate(Long id){
		return repository.findById(id).get();
	}
	
	public Plate savePlate(Plate plate) {
		return repository.save(plate);
	}
	
	public void deleteRecomendation(Long id){
		repository.deleteById(id);
	}
}
