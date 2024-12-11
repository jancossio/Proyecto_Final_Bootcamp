SELECT * FROM USUARIS;
INSERT INTO usuaris (
  email, nom, contra, edat, pes, altura, activitatfisica, consumaigua, 
  horassueno, nivelestres, alergia, preferenciesdieta, objectius
) VALUES (
  'example@example.com', 'NomUsuari', '1234', 25, 70.5, 1.75, 'moderat', '6 gots',
  8, 3, JSON_ARRAY('polen', 'diabetis'), -- JSON para alergias
  JSON_ARRAY('vegetarià', 'sense gluten'), -- JSON para preferencias dietéticas
  JSON_ARRAY('perdre pes', 'millorar son') -- JSON para objetivos
);