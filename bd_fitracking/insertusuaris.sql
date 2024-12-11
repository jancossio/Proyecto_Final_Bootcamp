USE db_fitracking;
SELECT * FROM usuaris;
DELETE FROM usuaris;
INSERT INTO usuaris (
  email, nom, contra, edat, pes, altura, activitatfisica, consumaigua, 
  horassueno, nivelestres, alergia, preferenciesdieta, objectius
) VALUES (
  'example@example.com', 'NomUsuari', 'abc123.', 25, 70.5, 1.75, 'moderat', '6 gots',
  8, 3, JSON_ARRAY('polen', 'diabetis'), -- JSON para alergias
  JSON_ARRAY('vegetarià', 'sense gluten'), -- JSON para preferencias dietéticas
  JSON_ARRAY('perdre pes', 'millorar son') -- JSON para objetivos
);