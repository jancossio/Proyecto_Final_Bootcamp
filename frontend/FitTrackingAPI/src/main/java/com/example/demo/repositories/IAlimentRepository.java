package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Aliment;

public interface IAlimentRepository extends JpaRepository<Aliment, Long>{

}
