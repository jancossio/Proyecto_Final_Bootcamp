package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Diet;
import com.example.demo.repositories.IDietRepository;


@Service
public class DietService {

	@Autowired
	IDietRepository repository;
	
	public List<Diet> findDietsByUser(Long userId) {
        return repository.findByUserDataId(userId);
    }
	
	public Diet findDiet(Long id){
		return repository.findById(id).get();
	}
	
	public Diet saveDiet(Diet diet) {
		return repository.save(diet);
	}
	
	public void deleteDiet(Long id){
		repository.deleteById(id);
	}
}
