package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PlateAliment;
import com.example.demo.repositories.IPlateAlimentRepository;

@Service
public class PlateAlimentService {

	@Autowired
	IPlateAlimentRepository repository;
	
	public List<PlateAliment> findPlateAlimentByPlate(Long idPlate) {
        return repository.findByIdPlate(idPlate);
    }
	
	public List<PlateAliment> findPlateAlimentByAliment(Long idAliment) {
        return repository.findByIdAliment(idAliment);
    }
	
	public PlateAliment findAliment(Long id){
		return repository.findById(id).get();
	}
	
	public PlateAliment saveAliment(PlateAliment plateAliment) {
		return repository.save(plateAliment);
	}
	
	public void deleteAliment(Long id){
		repository.deleteById(id);
	}
}
