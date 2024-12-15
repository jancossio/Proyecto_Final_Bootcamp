package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.LoginRequest;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado");
        }

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
        }

        // Construir el valor de la cookie
        String cookieValue = String.format(
                "{\"id\":%d,\"nombre\":\"%s\",\"email\":\"%s\",\"edad\":%d,\"peso\":%.2f,\"altura\":%.2f}",
                user.getId(), user.getNombre(), user.getEmail(), user.getEdad(), user.getPeso(), user.getAltura()
        );

        // Codificar el valor de la cookie para cumplir con RFC
        String encodedCookieValue = URLEncoder.encode(cookieValue, StandardCharsets.UTF_8);

        ResponseCookie cookie = ResponseCookie.from("user", encodedCookieValue)
                .httpOnly(true)
                .secure(false) // Cambiar a true en producción con HTTPS
                .path("/")
                .maxAge(7 * 24 * 60 * 60) // 7 días
                .sameSite("Lax")
                .build();

        // Respuesta con información del usuario
        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("nombre", user.getNombre());
        response.put("email", user.getEmail());
        response.put("edad", user.getEdad());
        response.put("peso", user.getPeso());
        response.put("altura", user.getAltura());

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(response);
    }
}