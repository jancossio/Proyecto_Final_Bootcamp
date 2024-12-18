USE db_fitracking;
SELECT * FROM usuaris;
DELETE FROM usuaris;
INSERT INTO usuaris (
  email, nom, contra, edat, pes, altura, activitatfisica, consumaigua, 
  horassueno, nivelestres, alergias, preferenciesdieta, objectius
) VALUES (
  'example@example.com', 'Marc', 'abc123.', 25, 100, 175, 'moderado',6,
  3, 3, JSON_ARRAY('marisco', 'gluten'), -- JSON para alergias
  JSON_ARRAY('vegan', 'sin_gluten'), -- JSON para preferencias dietéticas
  JSON_ARRAY('weight_loss', 'disease_control') -- JSON para objetivos
);