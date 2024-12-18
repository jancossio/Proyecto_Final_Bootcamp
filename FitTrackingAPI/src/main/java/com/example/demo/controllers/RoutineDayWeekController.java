package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Exercise;
import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.services.RoutineDayWeekService;

@RestController
@RequestMapping("/rutina")
public class RoutineDayWeekController {
	
	@Autowired
	private RoutineDayWeekService routineService;

    @GetMapping("/dias")
    public List<RoutineDayWeek> getAllDays() {
        return routineService.getAllDays();
    }
	
    // Fetch routine by day
    @GetMapping("/{day}")
    public ResponseEntity<RoutineDayWeek> getRoutineDayWeek(@PathVariable String day) {
        Optional<RoutineDayWeek> routine = routineService.getRoutineByDay(day);
        return routine.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
