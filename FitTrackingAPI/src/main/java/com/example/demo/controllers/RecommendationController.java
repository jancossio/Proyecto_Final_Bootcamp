package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.UserRecommendationDTO;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/users")
public class RecommendationController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}/recomendacion")
    public ResponseEntity<UserRecommendationDTO> getUserRecommendations(@PathVariable Long id) {
        User user = userService.findUser(id);

        if (user == null) {
            return ResponseEntity.notFound().build(); // Return 404 if user not found
        }

        // Map User entity to UserHealthDataDTO
        UserRecommendationDTO dto = new UserRecommendationDTO(
            user.getNom(),
            user.getEdat(),
            user.getPes(),
            user.getAltura(),
            user.getActivitatFisica(),
            user.getConsumAigua(),
            user.getHoresSueno(),
            user.getNivellEstres(),
            String.join(", ", user.getAlergia()),
            String.join(", ", user.getPreferenciesDieta()),
            String.join(", ", user.getObjectius())
        );

        return ResponseEntity.ok(dto);
    }
}