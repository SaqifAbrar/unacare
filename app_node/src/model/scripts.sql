CREATE TABLE patients (id INTEGER PRIMARY KEY, first_name STRING, last_name STRING, birth_day INTEGER, birth_month INTEGER, birth_year INTEGER, sex STRING, height INTEGER, weight INTEGER);

INSERT INTO patients VALUES (4672389, "John", "Smith", 20, 4, 1969, "M", 180, 75);
INSERT INTO patients VALUES (9154670, "Nejla", "Loucif", 16, 2, 1984, "F", 163, 55);
INSERT INTO patients VALUES (6435689, "Maria", "Tina", 4, 9, 1979, "F", 173, 57);
INSERT INTO patients VALUES (9864208, "Thomas", "Springsteen", 19, 11, 1982, "M", 181, 69);
INSERT INTO patients VALUES (9123485, "Evan", "Baracuhy", 14, 9, 2002, "M", 180, 71);
INSERT INTO patients VALUES (1475893, "Jehoshua", "Hill", 10, 10, 1990, "M", 169, 59);
INSERT INTO patients VALUES (8563789, "Dina", "Fritz", 20, 4, 1969, "F", 169, 69);

CREATE TABLE prescriptions (id INTEGER PRIMARY KEY, name STRING, dosage INTEGER, refill INTEGER, instructions STRING, status STRING, prescriber STRING, patient_id INTEGER REFERENCES patients(id));

INSERT INTO prescriptions VALUES (7532094, "Predisone Tablets", 5, 3, "Take one tablet by mouth once per day.", "unfulfilled","Dr. Abraham Smith", 4672389);
INSERT INTO prescriptions VALUES (6037952, "Metformin HCl Tablets", 500, 3, "Take two tablets by mouth per day.", "unfulfilled", "Dr. David Bole", 9154670);
INSERT INTO prescriptions VALUES (0765321, "Amoxicillin Capsules", 500, 0, "Take one tablet by mouth every eight hours.", "unfulfilled", "Dr. Johnston Green", 6435689);
INSERT INTO prescriptions VALUES (0489520, "Tramadol HCl Tablets", 50, 0, "Take two tablet by mouth once per day.","fulfilled","Dr. Monica Perez", 9864208);
INSERT INTO prescriptions VALUES (5107309, "Levothyroxine Tablets", 0.05, 3, "Take one tablet once daily.","fulfilled", "Dr. Anthony Armstrong", 9123485);
INSERT INTO prescriptions VALUES (7532074, "Diflucan Capsules", 200, 3, "Table 2 tablets on the first day, followed by 200 mg once a day for at least 10 to 12 weeks.", "unfulfilled", "Dr. Sophia Kasunic", 1475893);
INSERT INTO prescriptions VALUES (8503651, "Alprazolam Tablets", 1, 3, "Take one tablet by mouth in the morning once per day.", "fulfilled", "Dr. Sally Keen", 8563789);

SELECT * FROM prescriptions WHERE patient_id = #######;
SELECT * FROM patient WHERE id = #######;