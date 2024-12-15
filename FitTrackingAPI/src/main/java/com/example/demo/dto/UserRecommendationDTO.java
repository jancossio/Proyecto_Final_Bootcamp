package com.example.demo.dto;

import java.util.List;

public class UserRecommendationDTO {

    private String email;
    private String nombre; // Nom
    private String password;
    private Integer edad; // Edat
    private Float peso; // Pes
    private Float altura;
    private String nivelActividad; // ActivitatFisica
    private Integer consumoAgua; // ConsumAigua (convertido de String a Integer)
    private Float horasSueno; // HoresSueno
    private Float nivelEstres; // NivellEstres
    private List<String> alergias; // Alergia
    private List<String> preferenciasDieta; // PreferenciesDieta
    private List<String> objetivos; // Objectius

    // Constructor por defecto
    public UserRecommendationDTO() {}

    // Constructor completo
    public UserRecommendationDTO(String email, String nombre, String password, Integer edad, Float peso, Float altura,
                                  String nivelActividad, Integer consumoAgua, Float horasSueno, Float nivelEstres,
                                  List<String> alergias, List<String> preferenciasDieta, List<String> objetivos) {
        this.email = email;
        this.nombre = nombre;
        this.password = password;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.nivelActividad = nivelActividad;
        this.consumoAgua = consumoAgua;
        this.horasSueno = horasSueno;
        this.nivelEstres = nivelEstres;
        this.alergias = alergias;
        this.preferenciasDieta = preferenciasDieta;
        this.objetivos = objetivos;
    }

    // Getters y Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public Float getPeso() {
        return peso;
    }

    public void setPeso(Float peso) {
        this.peso = peso;
    }

    public Float getAltura() {
        return altura;
    }

    public void setAltura(Float altura) {
        this.altura = altura;
    }

    public String getNivelActividad() {
        return nivelActividad;
    }

    public void setNivelActividad(String nivelActividad) {
        this.nivelActividad = nivelActividad;
    }

    public Integer getConsumoAgua() {
        return consumoAgua;
    }

    public void setConsumoAgua(Integer consumoAgua) {
        this.consumoAgua = consumoAgua;
    }

    public Float getHorasSueno() {
        return horasSueno;
    }

    public void setHorasSueno(Float horasSueno) {
        this.horasSueno = horasSueno;
    }

    public Float getNivelEstres() {
        return nivelEstres;
    }

    public void setNivelEstres(Float nivelEstres) {
        this.nivelEstres = nivelEstres;
    }

    public List<String> getAlergias() {
        return alergias;
    }

    public void setAlergias(List<String> alergias) {
        this.alergias = alergias;
    }

    public List<String> getPreferenciasDieta() {
        return preferenciasDieta;
    }

    public void setPreferenciasDieta(List<String> preferenciasDieta) {
        this.preferenciasDieta = preferenciasDieta;
    }

    public List<String> getObjetivos() {
        return objetivos;
    }

    public void setObjetivos(List<String> objetivos) {
        this.objetivos = objetivos;
    }
}
