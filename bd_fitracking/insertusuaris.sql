USE db_fitracking;
SELECT * FROM usuaris;
DELETE FROM usuaris;
INSERT INTO usuaris (
  email, nom, contra, edat, pes, altura, activitatfisica, consumaigua, 
  horassueno, nivelestres, alergias, preferenciesdieta, objectius
) VALUES (
  'example@example.com', 'Marc', 'abc123.', 25, 100, 175, 'moderat',6,
  3, 3, JSON_ARRAY('polen', 'diabetis'), -- JSON para alergias
  JSON_ARRAY('vegetarià', 'sense gluten'), -- JSON para preferencias dietéticas
  JSON_ARRAY('perdre pes', 'millorar son') -- JSON para objetivos
);