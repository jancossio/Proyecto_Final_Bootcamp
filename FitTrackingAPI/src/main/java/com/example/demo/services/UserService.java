package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.IUserRepository;

@Service
public class UserService {

	@Autowired
	IUserRepository repository;
	
	public List<User> findUsers(){
		return repository.findAll();
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
