USE fitracking_bdd;

DELETE FROM ejercicio_grupo_relacion;
ALTER TABLE ejercicio_grupo_relacion AUTO_INCREMENT = 1;
DELETE FROM plan_ejercicio_detalle;
ALTER TABLE plan_ejercicio_detalle AUTO_INCREMENT = 1;
DELETE FROM grupos_ejercicio_dia;
ALTER TABLE grupos_ejercicio_dia AUTO_INCREMENT = 1;
DELETE FROM plan_ejercicio;
ALTER TABLE plan_ejercicio AUTO_INCREMENT = 1;


INSERT INTO plan_ejercicio (nombre, duracion, fecha_inicio, fecha_fin, estado)
VALUES
('Plan de entrenamiento 1', 90, '2024-12-01 08:00:00', '2024-12-31 08:00:00', 'Activo'),
('Plan de entrenamiento 2', 120, '2024-12-01 08:00:00', '2024-12-31 08:00:00', 'Activo');


INSERT INTO grupos_ejercicio_dia (plan_ejercicio_id, dia_semana)
VALUES
(1, 'Lunes'),
(1, 'Miércoles'),
(2, 'Martes'),
(2, 'Jueves');


DELETE FROM plan_ejercicio_detalle;
ALTER TABLE plan_ejercicio_detalle AUTO_INCREMENT = 1;
INSERT INTO plan_ejercicio_detalle (nombre, tipo, repeticiones, series, duracion_min, descanso_segundos)
VALUES 
('Sentadillas', 'Fuerza', 15, 3, 0, 60),
('Flexiones', 'Fuerza', 20, 4, 0, 90),
('Correr', 'Cardio', 0, 0, 30, 0),
('Abdominales', 'Fuerza', 25, 3, 0, 60),
('Estiramientos', 'Flexibilidad', 0, 0, 15, 0), 
('Sentadillas', 'Fuerza', 15, 3, 0, 60),
('Flexiones', 'Fuerza', 20, 4, 0, 90),
('Correr', 'Cardio', 0, 0, 30, 0),
('Abdominales', 'Fuerza', 25, 3, 0, 60),
('Estiramientos', 'Flexibilidad', 0, 0, 15, 0),
('Plancha', 'Fuerza', 30, 3, 0, 60),
('Dominadas', 'Fuerza', 10, 3, 0, 90),
('Burpees', 'Fuerza', 15, 4, 0, 90),
('Mountain Climbers', 'Cardio', 0, 0, 15, 30),
('Saltar la cuerda', 'Cardio', 0, 0, 10, 0),
('Lunges', 'Fuerza', 12, 3, 0, 60),
('Peso muerto', 'Fuerza', 10, 3, 0, 90),
('Jumping Jacks', 'Cardio', 0, 0, 5, 0),
('Fondos de triceps', 'Fuerza', 15, 3, 0, 60),
('Zancadas', 'Fuerza', 12, 3, 0, 60),
('Sentadillas con salto', 'Fuerza', 15, 3, 0, 90),
('Curl de bíceps', 'Fuerza', 12, 3, 0, 60),
('Remo con barra', 'Fuerza', 12, 3, 0, 90),
('Crunches', 'Fuerza', 25, 3, 0, 60),
('Sentadillas sumo', 'Fuerza', 15, 3, 0, 60),
('Tijeras', 'Fuerza', 15, 3, 0, 60),
('Paseo del granjero', 'Fuerza', 0, 0, 10, 60),
('Kettlebell swings', 'Fuerza', 15, 3, 0, 60),
('Elevaciones de talones', 'Fuerza', 20, 3, 0, 60),
('Planchas laterales', 'Fuerza', 30, 3, 0, 60),
('Push press', 'Fuerza', 12, 3, 0, 90),
('Salto de banco', 'Fuerza', 15, 3, 0, 90),
('Correr en escaleras', 'Cardio', 0, 0, 15, 0),
('Bicicleta estática', 'Cardio', 0, 0, 30, 0),
('Spinning', 'Cardio', 0, 0, 45, 0),
('Escaladores de montaña', 'Cardio', 0, 0, 15, 30),
('Abducciones de cadera', 'Fuerza', 15, 3, 0, 60),
('Estiramiento de glúteos', 'Flexibilidad', 0, 0, 10, 0),
('Ejercicio de flexibilidad de espalda', 'Flexibilidad', 0, 0, 10, 0),
('Patada de burro', 'Fuerza', 15, 3, 0, 60),
('Círculos con los brazos', 'Flexibilidad', 0, 0, 5, 0),
('Estiramiento de hombros', 'Flexibilidad', 0, 0, 10, 0),
('Ejercicio de respiración', 'Flexibilidad', 0, 0, 5, 0),
('Rodillo de espuma para espalda', 'Flexibilidad', 0, 0, 10, 0),
('Estiramiento de cuádriceps', 'Flexibilidad', 0, 0, 10, 0),
('Flexión lateral de torso', 'Flexibilidad', 0, 0, 5, 0),
('Rope climbs', 'Fuerza', 10, 3, 0, 120),
('Láminas', 'Cardio', 0, 0, 15, 0),
('Burpee con salto de caja', 'Fuerza', 10, 3, 0, 90);


INSERT INTO ejercicio_grupo_relacion (grupo_ejercicio_dia_id, plan_ejercicio_detalle_id)
VALUES 
(1, 1),  -- Sentadillas en el grupo de ejercicios del lunes
(1, 2),  -- Flexiones en el grupo de ejercicios del lunes
(2, 3),  -- Correr en el grupo de ejercicios del miércoles
(2, 4);  -- Abdominales en el grupo de ejercicios del miércoles
