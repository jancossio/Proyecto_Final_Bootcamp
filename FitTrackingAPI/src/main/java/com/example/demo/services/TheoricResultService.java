package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TheoricResult;
import com.example.demo.repositories.ITheoricResult;

@Service
public class TheoricResultService {

	@Autowired
	ITheoricResult repository;
	
	public List<TheoricResult> findTheoricResultByUser(Long userId) {
        return repository.findByUserDataId(userId);
    }
	
	public TheoricResult findTheoricResult(Long id){
		return repository.findById(id).get();
	}
	
	public TheoricResult saveTheoricResult(TheoricResult result) {
		return repository.save(result);
	}
	
	public void deleteTheoricResult(Long id){
		repository.deleteById(id);
	}
}
