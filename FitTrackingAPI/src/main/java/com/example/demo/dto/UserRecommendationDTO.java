	package com.example.demo.dto;
	public class UserRecommendationDTO {
	    private String nombre;
	    private int edat;
	    private float pes;
	    private float altura; // Optional if you're not using it in recommendations
	    private String activitatFisica;
	    private String consumAigua;
	    private float horesSueno;
	    private float nivellEstres;
	    private String alergia; // Or List<String> if you need structured data
	    private String preferenciesDieta; // Or List<String>
	    private String objectius; // Or List<String>
	
	    // Constructors
	    public UserRecommendationDTO() {}
	
	    public UserRecommendationDTO(String nombre, int edat, float pes, float altura, String activitatFisica,
	                             String consumAigua, float horesSueno, float nivellEstres, String alergia,
	                             String preferenciesDieta, String objectius) {
	        this.nombre = nombre;
	        this.edat = edat;
	        this.pes = pes;
	        this.altura = altura;
	        this.activitatFisica = activitatFisica;
	        this.consumAigua = consumAigua;
	        this.horesSueno = horesSueno;
	        this.nivellEstres = nivellEstres;
	        this.alergia = alergia;
	        this.preferenciesDieta = preferenciesDieta;
	        this.objectius = objectius;
	    }
	
	    // Getters and Setters
	    public String getNombre() {
	        return nombre;
	    }
	
	    public void setNombre(String nombre) {
	        this.nombre = nombre;
	    }
	
	    public int getEdat() {
	        return edat;
	    }
	
	    public void setEdat(int edat) {
	        this.edat = edat;
	    }
	
	    public float getPes() {
	        return pes;
	    }
	
	    public void setPes(float pes) {
	        this.pes = pes;
	    }
	
	    public float getAltura() {
	        return altura;
	    }
	
	    public void setAltura(float altura) {
	        this.altura = altura;
	    }
	
	    public String getActivitatFisica() {
	        return activitatFisica;
	    }
	
	    public void setActivitatFisica(String activitatFisica) {
	        this.activitatFisica = activitatFisica;
	    }
	
	    public String getConsumAigua() {
	        return consumAigua;
	    }
	
	    public void setConsumAigua(String consumAigua) {
	        this.consumAigua = consumAigua;
	    }
	
	    public float getHoresSueno() {
	        return horesSueno;
	    }
	
	    public void setHoresSueno(float horesSueno) {
	        this.horesSueno = horesSueno;
	    }
	
	    public float getNivellEstres() {
	        return nivellEstres;
	    }
	
	    public void setNivellEstres(float nivellEstres) {
	        this.nivellEstres = nivellEstres;
	    }
	
	    public String getAlergia() {
	        return alergia;
	    }
	
	    public void setAlergia(String alergia) {
	        this.alergia = alergia;
	    }
	
	    public String getPreferenciesDieta() {
	        return preferenciesDieta;
	    }
	
	    public void setPreferenciesDieta(String preferenciesDieta) {
	        this.preferenciesDieta = preferenciesDieta;
	    }
	
	    public String getObjectius() {
	        return objectius;
	    }
	
	    public void setObjectius(String objectius) {
	        this.objectius = objectius;
	    }
	}