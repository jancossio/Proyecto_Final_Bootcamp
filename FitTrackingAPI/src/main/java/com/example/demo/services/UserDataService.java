package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.UserData;
import com.example.demo.repositories.IUserDataRepository;

@Service
public class UserDataService {

	@Autowired
	IUserDataRepository repository;
	
	public UserData findUserdata(Long id){
		return repository.findById(id).get();
	}
	
	public UserData saveUserdata(UserData userData) {
		return repository.save(userData);
	}
	
	public void deleteUserdata(Long id){
		repository.deleteById(id);
	}
}
