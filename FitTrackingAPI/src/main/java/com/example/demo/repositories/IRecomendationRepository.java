package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Recommendation;

public interface IRecomendationRepository extends JpaRepository<Recommendation, Long> {
	List<Recommendation> findByUserDataId(Long userDataId);
}
