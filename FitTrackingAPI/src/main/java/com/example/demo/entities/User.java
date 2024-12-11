package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.vladmihalcea.hibernate.type.json.JsonType;
import org.hibernate.annotations.Type;

import java.util.List;

@Entity
@Table(name = "USUARIS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "CONTRA")
    private String password;

    @Column(name = "NOM")
    private String nom;

    @Column(name = "EDAT")
    private Integer edat;

    @Column(name = "PES")
    private Float pes;

    @Column(name = "ALTURA")
    private Float altura;

    @Column(name = "ACTIVITATFISICA")
    private String activitatFisica;

    @Column(name = "CONSUMAIGUA")
    private String consumAigua;

    @Column(name = "HORASSUENO")
    private Float horesSueno;

    @Column(name = "NIVELESTRES")
    private Float nivellEstres;

    @Column(name = "ALERGIA", columnDefinition = "JSON")
    @Type(value = JsonType.class)
    private List<String> alergia;

    @Column(name = "PREFERENCIESDIETA", columnDefinition = "JSON")
    @Type(value = JsonType.class)
    private List<String> preferenciesDieta;

    @Column(name = "OBJECTIUS", columnDefinition = "JSON")
    @Type(value = JsonType.class)
    private List<String> objectius;
}