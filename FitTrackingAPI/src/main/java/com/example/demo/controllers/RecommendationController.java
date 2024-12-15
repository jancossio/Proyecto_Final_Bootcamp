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

    /**
     * Fetch recommendations for a specific user by ID.
     * @param id ID of the user.
     * @return UserRecommendationDTO wrapped in ResponseEntity.
     */
    @GetMapping("/{id}/recomendacion")
    public ResponseEntity<UserRecommendationDTO> getUserRecommendationsById(@PathVariable Long id) {
        // Fetch user by ID
        User user = userService.findUser(id);

        // Return 404 if user not found
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        // Map the User entity to UserRecommendationDTO
        UserRecommendationDTO dto = new UserRecommendationDTO(
                user.getEmail(),
                user.getNombre(),
                user.getPassword(),
                user.getEdad(),
                user.getPeso(),
                user.getAltura(),
                user.getNivelActividad(),
                Integer.parseInt(user.getConsumoAgua()), // Convert String to Integer if needed
                user.getHorasSueno(),
                user.getNivelEstres(),
                user.getAlergias(),
                user.getPreferenciasDieta(),
                user.getObjetivos()
        );

        return ResponseEntity.ok(dto);
    }
}