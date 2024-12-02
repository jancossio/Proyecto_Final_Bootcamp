package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.PlateAliment;

public interface IPlateAlimentRepository extends JpaRepository<PlateAliment, Long>{

}
