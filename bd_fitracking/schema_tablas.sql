DROP TABLE IF EXISTS USUARIS;
CREATE TABLE USUARIS (
    ID INT NOT NULL AUTO_INCREMENT,
    EMAIL VARCHAR(30) DEFAULT NULL,
    CONTRA VARCHAR(30) DEFAULT NULL,
    NOM VARCHAR(30) DEFAULT NULL,
    EDAT INT DEFAULT NULL,
    PES FLOAT DEFAULT NULL,
    ALTURA FLOAT DEFAULT NULL,
    ACTIVITATFISICA VARCHAR(30) DEFAULT NULL,
    CONSUMAIGUA VARCHAR(30) DEFAULT NULL,
    HORASSUENO FLOAT DEFAULT NULL,
    NIVELESTRES FLOAT DEFAULT NULL,
    ALERGIA JSON DEFAULT NULL,
    PREFERENCIESDIETA JSON DEFAULT NULL,
    OBJECTIUS JSON DEFAULT NULL,
    PRIMARY KEY (ID)