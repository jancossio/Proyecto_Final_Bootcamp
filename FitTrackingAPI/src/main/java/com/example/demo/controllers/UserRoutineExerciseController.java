package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserRoutineExerciseRequest;
import com.example.demo.entities.Exercise;
import com.example.demo.entities.RoutineDayWeek;
import com.example.demo.entities.User;
import com.example.demo.entities.UserRoutineExercise;
import com.example.demo.repositories.IExerciseRepository;
import com.example.demo.repositories.IRoutineDayWeekRepository;
import com.example.demo.repositories.IUserRepository;
import com.example.demo.repositories.IUserRoutineExerciseRepository;
import com.example.demo.services.UserRoutineExerciseService;

@RestController
@RequestMapping("/rutina_ejercicio")
public class UserRoutineExerciseController {

	@Autowired
    private UserRoutineExerciseService service;
	
	@Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoutineDayWeekRepository routineDayWeekRepository;

    @Autowired
    private IExerciseRepository exerciseRepository;

    @Autowired
    private IUserRoutineExerciseRepository userRoutineExerciseRepository;

    
    @GetMapping("/{userId}")
    public List<UserRoutineExercise> getExercisesForUser(@PathVariable Long userId) {
        return service.getExercisesForUser(userId);
    }
    
    @GetMapping("/user/{userId}/routine-day/{dayId}")
    public List<UserRoutineExercise> getExercisesForUser(@PathVariable Long userId, @PathVariable Long dayId) {
        return service.getExercisesForUserAndDay(userId, dayId);
    }
    
    @PostMapping("/add")
    public ResponseEntity<?> addExerciseToRoutine(@RequestBody UserRoutineExerciseRequest request) {
        try {
            // Fetch entities using IDs
            User user = userRepository.findById(request.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            RoutineDayWeek routineDayWeek = routineDayWeekRepository.findById(request.getDayId())
                    .orElseThrow(() -> new RuntimeException("Routine day not found"));

            Exercise exercise = exerciseRepository.findById(request.getExerciseId())
                    .orElseThrow(() -> new RuntimeException("Exercise not found"));

            // Create and save UserRoutineExercise
            UserRoutineExercise userRoutineExercise = new UserRoutineExercise();
            userRoutineExercise.setUser(user);
            userRoutineExercise.setRoutineDayWeek(routineDayWeek);
            userRoutineExercise.setExercise(exercise);
            userRoutineExercise.setExerciseFocus(request.getExerciseFocus());
            userRoutineExercise.setCompletedExercise(request.getCompletedExercise());

            userRoutineExerciseRepository.save(userRoutineExercise);

            return ResponseEntity.ok("Exercise added successfully to routine!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/{user_id}/{routine_day_id}/{exercise_id}")
    public ResponseEntity<Void> deleteExercise(
            @PathVariable Long user_id, 
            @PathVariable Long routine_day_id, 
            @PathVariable Long exercise_id) {
        
        service.deleteExerciseByDetails(user_id, routine_day_id, exercise_id);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/{userId}/{routineDayId}/{exerciseId}/completed")
    public ResponseEntity<?> markExerciseAsCompleted(
            @PathVariable Long userId,
            @PathVariable Long routineDayId,
            @PathVariable Long exerciseId,
            @RequestParam boolean completed
    ) {
        try {
            // Fetch entities using the provided IDs
            UserRoutineExercise userRoutineExercise = userRoutineExerciseRepository.findByUser_IdAndRoutineDayWeek_IdAndExercise_Id(
                    userId, routineDayId, exerciseId)
                    .orElseThrow(() -> new RuntimeException("Exercise not found for given user, day, and exercise IDs"));

            // Update the completed status
            userRoutineExercise.setCompletedExercise(completed);

            // Save the updated entity
            userRoutineExerciseRepository.save(userRoutineExercise);

            Map<String, Object> response = new HashMap<>();
            response.put("completed", userRoutineExercise.getCompletedExercise());

            return ResponseEntity.ok(response);
            } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }


}
