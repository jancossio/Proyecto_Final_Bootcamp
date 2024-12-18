package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Exercise;
import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRoutineExercise;
import com.example.demo.repositories.IExerciseRepository;
import com.example.demo.repositories.IRoutineDayWeekRepository;
import com.example.demo.repositories.IUserRepository;
import com.example.demo.repositories.IUserRoutineExerciseRepository;

import jakarta.persistence.EntityNotFoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserRoutineExerciseService {

	@Autowired
    private IUserRoutineExerciseRepository repository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoutineDayWeekRepository routineDayWeekRepository;

    @Autowired
    private IExerciseRepository exerciseRepository;

    public List<UserRoutineExercise> getExercisesForUser(Long userId) {
        return repository.findByUserId(userId);
    }
    
    public List<UserRoutineExercise> getExercisesForUserAndDay(Long userId, Long dayId) {
        return repository.findByUserIdAndRoutineDayWeekId(userId, dayId);
    }

    public UserRoutineExercise addExerciseToRoutine(UserRoutineExercise exerciseRoutine) {
        return repository.save(exerciseRoutine);
    }
    
    public void deleteExerciseByDetails(Long usuari_id, Long rutina_dia_id, Long exercici_id) {
        // Fetch User, RoutineDayWeek, and Exercise entities from the DB
        User user = userRepository.findById(usuari_id)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        RoutineDayWeek routineDayWeek = routineDayWeekRepository.findById(rutina_dia_id)
                .orElseThrow(() -> new EntityNotFoundException("RoutineDayWeek not found"));

        Exercise exercise = exerciseRepository.findById(exercici_id)
                .orElseThrow(() -> new EntityNotFoundException("Exercise not found"));

        log.debug("user: "+user+" routineDayWeek: "+routineDayWeek+" exercise: "+exercise);
        
        // Now search for the UserRoutineExercise entity using these associations
        UserRoutineExercise exerciseToDelete = repository
            .findByUserAndRoutineDayWeekAndExercise(user, routineDayWeek, exercise)
            .orElseThrow(() -> new EntityNotFoundException("Exercise not found for the given user and routine"));

        // Delete the found exercise
        repository.delete(exerciseToDelete);
    }
    
    public UserRoutineExercise markExerciseAsCompleted(Long id, boolean completed) {
    	UserRoutineExercise exercise = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Exercise not found"));
        exercise.setCompletedExercise(completed);
        return repository.save(exercise);
    }

}