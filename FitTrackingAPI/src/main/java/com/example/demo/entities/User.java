package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.vladmihalcea.hibernate.type.json.JsonType;
import org.hibernate.annotations.Type;

import java.util.List;

@Entity
@Table(name = "USUARIS") // Nombre de la tabla en la base de datos
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "EMAIL", unique = true, nullable = false)
    private String email;

    @Column(name = "CONTRA", nullable = false) // Cambiado para coincidir con la base de datos
    private String password;

    @Column(name = "NOM") // Cambiado para coincidir con la base de datos
    private String nombre;

    @Column(name = "EDAT") // Cambiado para coincidir con la base de datos
    private Integer edad;

    @Column(name = "PES") // Cambiado para coincidir con la base de datos
    private Float peso;

    @Column(name = "ALTURA") // Sin cambios, coincide con la base de datos
    private Float altura;

    @Column(name = "ACTIVITATFISICA") // Cambiado para coincidir con la base de datos
    private String nivelActividad;

    @Column(name = "CONSUMAIGUA") // Cambiado para coincidir con la base de datos
    private String consumoAgua;

    @Column(name = "HORASSUENO") // Cambiado para coincidir con la base de datos
    private Float horasSueno;

    @Column(name = "NIVELESTRES") // Cambiado para coincidir con la base de datos
    private Float nivelEstres;

    @Column(name = "ALERGIAS", columnDefinition = "JSON") // Sin cambios, coincide con la base de datos
    @Type(value = JsonType.class)
    private List<String> alergias;

    @Column(name = "PREFERENCIESDIETA", columnDefinition = "JSON") // Sin cambios, coincide con la base de datos
    @Type(value = JsonType.class)
    private List<String> preferenciasDieta;

    @Column(name = "OBJECTIUS", columnDefinition = "JSON") // Cambiado para coincidir con la base de datos
    @Type(value = JsonType.class)
    private List<String> objetivos;
}