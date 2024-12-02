package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Plate;

public interface IPlateRepository extends JpaRepository<Plate, Long>{

}
