package com.example.demo.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entities.RoutineDayWeek;

public interface IRoutineDayWeekRepository extends JpaRepository<RoutineDayWeek, Long> {

	RoutineDayWeek findByDayWeek(String dayWeek);
	
    List<RoutineDayWeek> findAllByOrderByIdAsc();
}