package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.User;
import com.example.demo.entities.UserData;

public interface IUserDataRepository extends JpaRepository<UserData, Long> {}