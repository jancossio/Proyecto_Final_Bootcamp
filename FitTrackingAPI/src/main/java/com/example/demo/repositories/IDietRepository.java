package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Diet;

public interface IDietRepository extends JpaRepository<Diet, Long>{
	List<Diet> findByUserDataId(Long userDataId);
}
