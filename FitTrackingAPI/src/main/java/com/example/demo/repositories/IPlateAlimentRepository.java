package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.PlateAliment;

public interface IPlateAlimentRepository extends JpaRepository<PlateAliment, Long>{
	List<PlateAliment> findByIdPlate(Long idPlate);
	List<PlateAliment> findByIdAliment(Long idAliment);
}
