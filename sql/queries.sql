
    CREATE VIEW employeeView as SELECT * FROM healthcare_system.employee where salary > 50000 order by country;


CREATE VIEW doctorView as SELECT * FROM healthcare_system.doctor where city = "Chicago" order by country;


CREATE VIEW patientView as SELECT * FROM healthcare_system.patient where address= "123 main road" order by city;


CREATE VIEW doctorAggreagteView as SELECT COUNT(*) FROM healthcare_system.doctor GROUP BY country;

CREATE VIEW employeeAggreagteView as  SELECT SUM(salary) FROM healthcare_system.employee group by country;

CREATE VIEW hospitalAggreagteView as SELECT AVG(number_of_staff) FROM healthcare_system.hospital group by address;




SELECT * FROM healthcare_system.patient as p1 INNER JOIN healthcare_system.patient_feedback as p2 where p1.patient_id = p2.patient_id;

SELECT max(salary) FROM healthcare_system.employee WHERE salary in (select MAX(salary) from healthcare_system.employee);

SELECT max(salary) FROM healthcare_system.employee WHERE EXISTS (select MIN(salary) from healthcare_system.employee);