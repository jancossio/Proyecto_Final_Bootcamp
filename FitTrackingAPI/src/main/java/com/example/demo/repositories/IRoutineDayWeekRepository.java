package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.entities.PlanExercise;

public interface IRoutineDayWeekRepository extends JpaRepository<RoutineDayWeek, Long> {

	RoutineDayWeek findByDayWeek(String dayWeek);
	
    List<RoutineDayWeek> findAllByOrderByIdAsc();
}
