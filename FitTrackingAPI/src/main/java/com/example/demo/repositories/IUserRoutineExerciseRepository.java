package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Exercise;
import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRoutineExercise;

public interface IUserRoutineExerciseRepository extends JpaRepository<UserRoutineExercise, Long> {

	List<UserRoutineExercise> findByUserId(Long userId);
	
    List<UserRoutineExercise> findByUserIdAndRoutineDayWeekId(Long usuariId, Long rutinaDiaId);
    
    Optional<UserRoutineExercise> findByUserAndRoutineDayWeekAndExercise(User user, RoutineDayWeek routineDayWeek, Exercise exercise);
    
    Optional<UserRoutineExercise> findByUser_IdAndRoutineDayWeek_IdAndExercise_Id(Long userId, Long routineDayId, Long exerciseId);
}