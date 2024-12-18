-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: fitracking_bdd
-- ------------------------------------------------------
-- Server version	8.0.40
-- Table structure for table `dades_usuari`
USE fitracking_bdd;


DROP TABLE IF EXISTS usuaris;
CREATE TABLE usuaris (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(30) DEFAULT NULL,
  contra varchar(30) DEFAULT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS dades_usuari;
CREATE TABLE dades_usuari (
  id int NOT NULL AUTO_INCREMENT,
  dades_usuari_id int NOT NULL,
  edat int DEFAULT NULL,
  pes float DEFAULT NULL,
  altura float DEFAULT NULL,
  activitatfisica varchar(30) DEFAULT NULL,
  problemesalut varchar(30) DEFAULT NULL,
  litresaigua float DEFAULT NULL,
  alergia varchar(30) DEFAULT NULL,
  motivacio varchar(30) DEFAULT NULL,
  objectiu varchar(30) DEFAULT NULL,
  data_actual datetime DEFAULT CURRENT_TIMESTAMP,
  preferencialimentaria varchar(45) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY dades_usuari_id (dades_usuari_id),
  CONSTRAINT dades_usuari_ibfk_1 FOREIGN KEY (dades_usuari_id) REFERENCES usuaris (id)
);


DROP TABLE IF EXISTS dieta;

CREATE TABLE dieta (
  id int NOT NULL AUTO_INCREMENT,
  dades_usuari_id int DEFAULT NULL,
  nombre varchar(255) DEFAULT NULL,
  fecha_inicio date DEFAULT NULL,
  fecha_fin date DEFAULT NULL,
  PRIMARY KEY (id),
  KEY dades_usuari_id (dades_usuari_id),
  CONSTRAINT dieta_ibfk_1 FOREIGN KEY (dades_usuari_id) REFERENCES dades_usuari(id)
);

DROP TABLE IF EXISTS plato;
CREATE TABLE plato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    id_dieta INT,
    FOREIGN KEY (id_dieta) REFERENCES dieta(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS alimento;
CREATE TABLE alimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    cantidad INT, 
    calorias INT
);

DROP TABLE IF EXISTS plato_alimento;
CREATE TABLE plato_alimento (
    id_plato INT,
    id_alimento INT,
    cantidad INT,  -- Cantidad del alimento en el plato (puede ser un valor como gramos, unidades, etc.)
    PRIMARY KEY (id_plato, id_alimento),
    FOREIGN KEY (id_plato) REFERENCES plato(id) ON DELETE CASCADE,
    FOREIGN KEY (id_alimento) REFERENCES alimento(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS recomendacion;
CREATE TABLE recomendacion (
  id int NOT NULL AUTO_INCREMENT,
  dades_usuari_id int NOT NULL,
  descripcion varchar(255) DEFAULT NULL,
  referenciapes varchar(255) DEFAULT NULL,
  referenciactivitatfisica varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT recomendacion_ibfk_1 FOREIGN KEY (id) REFERENCES dades_usuari (id)
);

DROP TABLE IF EXISTS plan_ejercicio;
CREATE TABLE plan_ejercicio (
  id int NOT NULL AUTO_INCREMENT,
  dades_usuari_id int DEFAULT NULL,
  nombre varchar(40) DEFAULT NULL,
  duracion int DEFAULT NULL,
  fecha_inicio datetime DEFAULT NULL,
  fecha_fin datetime DEFAULT NULL,
  estado varchar(50) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY dades_usuari_id (dades_usuari_id),
  CONSTRAINT plan_ejercicio_ibfk_1 FOREIGN KEY (dades_usuari_id) REFERENCES dades_usuari (id)
);

DROP TABLE IF EXISTS grupos_ejercicio_dia;
CREATE TABLE grupos_ejercicio_dia (
  id INT NOT NULL AUTO_INCREMENT,
  plan_ejercicio_id INT DEFAULT NULL,  -- FK a plan_ejercicio
  dia_semana VARCHAR(20) NOT NULL,  -- Lunes, Martes, etc.
  PRIMARY KEY (id),
  KEY plan_ejercicio_id (plan_ejercicio_id),
  CONSTRAINT grupos_ejercicio_dia_ibfk_1 FOREIGN KEY (plan_ejercicio_id) REFERENCES plan_ejercicio (id)
);

DROP TABLE IF EXISTS plan_ejercicio_detalle;
CREATE TABLE plan_ejercicio_detalle (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  tipo VARCHAR(100), -- Tipo de ejercicio (Cardio, Fuerza, etc.)
  repeticiones INT DEFAULT NULL,
  series INT DEFAULT NULL,
  duracion_min INT DEFAULT NULL, -- Duración en minutos
  descanso_segundos INT DEFAULT NULL, -- Descanso entre series
  PRIMARY KEY (id)
);
CREATE TABLE ejercicio_grupo_relacion (
  id INT NOT NULL AUTO_INCREMENT,
  grupo_ejercicio_dia_id INT DEFAULT NULL,  -- FK a grupos_ejercicio_dia
  plan_ejercicio_detalle_id INT DEFAULT NULL,  -- FK a ejercicio_detalle
  PRIMARY KEY (id),
  KEY grupo_ejercicio_dia_id (grupo_ejercicio_dia_id),
  KEY plan_ejercicio_detalle_id (plan_ejercicio_detalle_id),
  CONSTRAINT ejercicio_grupo_relacion_ibfk_1 FOREIGN KEY (grupo_ejercicio_dia_id) REFERENCES grupos_ejercicio_dia (id),
  CONSTRAINT ejercicio_grupo_relacion_ibfk_2 FOREIGN KEY (plan_ejercicio_detalle_id) REFERENCES plan_ejercicio_detalle (id)
);

DROP TABLE IF EXISTS resultado_teorico;
CREATE TABLE resultado_teorico (
  id int NOT NULL AUTO_INCREMENT,
  dades_usuari_id int DEFAULT NULL,
  dieta_id int DEFAULT NULL,
  plan_ejercicio_id int DEFAULT NULL,
  fecha_creacion datetime DEFAULT NULL,
  fecha_termino datetime DEFAULT NULL,
  peso_esperado float DEFAULT NULL,
  perdida_grasa_esperada float DEFAULT NULL,
  ganancia_muscular_esperada float DEFAULT NULL,
  tiempo_actividad_esperado int DEFAULT NULL,
  consumo_agua_esperado int DEFAULT NULL,
  calorias_esperadas float DEFAULT NULL,
  otros_resultados VARCHAR(30),
  PRIMARY KEY (id),
  KEY dades_usuari_id (dades_usuari_id),
  KEY dieta_id (dieta_id),
  KEY plan_ejercicio_id (plan_ejercicio_id),
  CONSTRAINT resultado_teorico_ibfk_1 FOREIGN KEY (dades_usuari_id) REFERENCES dades_usuari (id),
  CONSTRAINT resultado_teorico_ibfk_2 FOREIGN KEY (dieta_id) REFERENCES dieta (id),
  CONSTRAINT resultado_teorico_ibfk_3 FOREIGN KEY (plan_ejercicio_id) REFERENCES plan_ejercicio (id)
);



