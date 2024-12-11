package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.IUserRepository;

@Service
public class UserService {

	@Autowired
	IUserRepository repository;
	
	public User findByEmail(String email) {
        return repository.findByEmail(email);
    }
	
	public User findUser(Long id){
		return repository.findById(id).get();
	}
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public void deleteUserById(Long id) {
		repository.deleteById(id);
	}
}
