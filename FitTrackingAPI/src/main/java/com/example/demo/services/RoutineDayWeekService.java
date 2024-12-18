package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.repositories.IRoutineDayWeekRepository;

@Service
public class RoutineDayWeekService {

	@Autowired
	IRoutineDayWeekRepository repository;
	
	public RoutineDayWeek findRoutineDayWeek(Long id){
		return repository.findById(id).get();
	}
	
    public List<RoutineDayWeek> getAllDays() {
        return repository.findAllByOrderByIdAsc();
    }
	
    public Optional<RoutineDayWeek> getRoutineByDay(String dayName) {
        return Optional.ofNullable(repository.findByDayWeek(dayName));
    }
}
