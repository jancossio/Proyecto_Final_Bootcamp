-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: fitracking_bdd
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dades_usuari`
--

DROP TABLE IF EXISTS `dades_usuari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dades_usuari` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dades_usuari_id` int NOT NULL,
  `edat` int DEFAULT NULL,
  `pes` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `activitatfisica` varchar(30) DEFAULT NULL,
  `problemesalut` varchar(30) DEFAULT NULL,
  `litresaigua` float DEFAULT NULL,
  `alergia` varchar(30) DEFAULT NULL,
  `motivacio` varchar(30) DEFAULT NULL,
  `objectiu` varchar(30) DEFAULT NULL,
  `data_actual` datetime DEFAULT CURRENT_TIMESTAMP,
  `preferencialimentaria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dades_usuari_id` (`dades_usuari_id`),
  CONSTRAINT `dades_usuari_ibfk_1` FOREIGN KEY (`dades_usuari_id`) REFERENCES `usuaris` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dades_usuari`
--

LOCK TABLES `dades_usuari` WRITE;
/*!40000 ALTER TABLE `dades_usuari` DISABLE KEYS */;
/*!40000 ALTER TABLE `dades_usuari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dieta`
--

DROP TABLE IF EXISTS `dieta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dieta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dades_usuari_id` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dades_usuari_id` (`dades_usuari_id`),
  CONSTRAINT `dieta_ibfk_1` FOREIGN KEY (`dades_usuari_id`) REFERENCES `dades_usuari` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieta`
--

LOCK TABLES `dieta` WRITE;
/*!40000 ALTER TABLE `dieta` DISABLE KEYS */;
/*!40000 ALTER TABLE `dieta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicio_dia_semana`
--

DROP TABLE IF EXISTS `ejercicio_dia_semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicio_dia_semana` (
  `id` int NOT NULL AUTO_INCREMENT,
  `plan_ejercicio_id` int DEFAULT NULL,
  `version` int DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `plan_ejercicio_id` (`plan_ejercicio_id`),
  CONSTRAINT `ejercicio_dia_semana_ibfk_1` FOREIGN KEY (`plan_ejercicio_id`) REFERENCES `plan_ejercicio` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicio_dia_semana`
--

LOCK TABLES `ejercicio_dia_semana` WRITE;
/*!40000 ALTER TABLE `ejercicio_dia_semana` DISABLE KEYS */;
/*!40000 ALTER TABLE `ejercicio_dia_semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_ejercicio`
--

DROP TABLE IF EXISTS `plan_ejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_ejercicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dades_usuari_id` int DEFAULT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `duracion` int DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dades_usuari_id` (`dades_usuari_id`),
  CONSTRAINT `plan_ejercicio_ibfk_1` FOREIGN KEY (`dades_usuari_id`) REFERENCES `dades_usuari` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_ejercicio`
--

LOCK TABLES `plan_ejercicio` WRITE;
/*!40000 ALTER TABLE `plan_ejercicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan_ejercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_ejercicio_detalle`
--

DROP TABLE IF EXISTS `plan_ejercicio_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_ejercicio_detalle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ejercicio_dia_semana_id` int DEFAULT NULL,
  `ejercicio_id` int DEFAULT NULL,
  `repeticiones` int DEFAULT NULL,
  `series` int DEFAULT NULL,
  `duracion_min` int DEFAULT NULL,
  `descanso_segundos` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ejercicio_dia_semana_id` (`ejercicio_dia_semana_id`),
  CONSTRAINT `plan_ejercicio_detalle_ibfk_1` FOREIGN KEY (`ejercicio_dia_semana_id`) REFERENCES `ejercicio_dia_semana` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_ejercicio_detalle`
--

LOCK TABLES `plan_ejercicio_detalle` WRITE;
/*!40000 ALTER TABLE `plan_ejercicio_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan_ejercicio_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recomendacion`
--

DROP TABLE IF EXISTS `recomendacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recomendacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dades_usuari_id` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `referenciapes` varchar(255) DEFAULT NULL,
  `referenciactivitatfisica` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `recomendacion_ibfk_1` FOREIGN KEY (`id`) REFERENCES `dades_usuari` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recomendacion`
--

LOCK TABLES `recomendacion` WRITE;
/*!40000 ALTER TABLE `recomendacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `recomendacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultado_teorico`
--

DROP TABLE IF EXISTS `resultado_teorico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultado_teorico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dades_usuari_id` int DEFAULT NULL,
  `dieta_id` int DEFAULT NULL,
  `plan_ejercicio_id` int DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_termino` datetime DEFAULT NULL,
  `peso_esperado` float DEFAULT NULL,
  `perdida_grasa_esperada` float DEFAULT NULL,
  `ganancia_muscular_esperada` float DEFAULT NULL,
  `tiempo_actividad_esperado` int DEFAULT NULL,
  `consumo_agua_esperado` int DEFAULT NULL,
  `calorias_esperadas` float DEFAULT NULL,
  `mejoras_en_resistencia` float DEFAULT NULL,
  `flexibilidad_esperada` float DEFAULT NULL,
  `otros_resultados` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dades_usuari_id` (`dades_usuari_id`),
  KEY `dieta_id` (`dieta_id`),
  KEY `plan_ejercicio_id` (`plan_ejercicio_id`),
  CONSTRAINT `resultado_teorico_ibfk_1` FOREIGN KEY (`dades_usuari_id`) REFERENCES `dades_usuari` (`id`),
  CONSTRAINT `resultado_teorico_ibfk_2` FOREIGN KEY (`dieta_id`) REFERENCES `dieta` (`id`),
  CONSTRAINT `resultado_teorico_ibfk_3` FOREIGN KEY (`plan_ejercicio_id`) REFERENCES `plan_ejercicio` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultado_teorico`
--

LOCK TABLES `resultado_teorico` WRITE;
/*!40000 ALTER TABLE `resultado_teorico` DISABLE KEYS */;
/*!40000 ALTER TABLE `resultado_teorico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuaris`
--

DROP TABLE IF EXISTS `usuaris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuaris` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  `contra` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuaris`
--

LOCK TABLES `usuaris` WRITE;
/*!40000 ALTER TABLE `usuaris` DISABLE KEYS */;
INSERT INTO `usuaris` VALUES (15,'usuario@prueba.com','mi_contraseña_123'),(16,'usuario1@prueba.com','mi_contraseña_345'),(17,'usuario2@prueba.com','mi_contraseña_678');
/*!40000 ALTER TABLE `usuaris` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 12:54:43
