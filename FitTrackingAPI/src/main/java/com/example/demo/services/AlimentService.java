package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Aliment;
import com.example.demo.entities.Diet;
import com.example.demo.repositories.IAlimentRepository;
import com.example.demo.repositories.IDietRepository;

@Service
public class AlimentService {

	@Autowired
	IAlimentRepository repository;
	
	/*public List<Aliment> findDietsByUser(Long userId) {
        return repository.findByUserDataId(userId);
    }*/
	
	public Aliment findAliment(Long id){
		return repository.findById(id).get();
	}
	
	public Aliment saveAliment(Aliment aliment) {
		return repository.save(aliment);
	}
	
	public void deleteAliment(Long id){
		repository.deleteById(id);
	}
}
