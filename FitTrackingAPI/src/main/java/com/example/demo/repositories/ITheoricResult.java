package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.TheoricResult;

public interface ITheoricResult extends JpaRepository<TheoricResult, Long> {
	List<TheoricResult> findByUserDataId(Long userDataId);
}
