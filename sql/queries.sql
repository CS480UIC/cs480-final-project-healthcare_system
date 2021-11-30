#SIMPLE



SELECT employee_id, first_name
FROM employee
WHERE salary >= 10000 AND salary <= 1000000;



SELECT payment_id, date_of_transaction 
FROM mode_of_payment
WHERE  type_of_payment="credit card" ;



SELECT speciality  FROM doctor WHERE type_of_employment = "employee";


# Aggregrate

SELECT SUM(salary) as TOTAL_CHICAGO_BUDGET
FROM doctor
WHERE city = 'Chicago';



SELECT COUNT(payment_id) as TOTAL_FUNDS_COLLECTED 
FROM mode_of_payment
WHERE date_of_transaction > "12/11/20" ;



SELECT COUNT(number_of_staff) as p,name
FROM hospital 
GROUP BY name 
HAVING SUM(number_of_staff) < 50 ;


#View
CREATE VIEW POC AS
SELECT E.employee_id, E.first_name
FROM employee E
INNER JOIN Doctor D ON D.doctor_employee_id = E.employee_id
GROUP BY E.employee_id
ORDER BY E.first_name ASC;


select * from POC;



Create view PAY as 
SELECT first_name, last_name 
FROM patient as p
WHERE EXISTS (SELECT t.patient_id
     FROM patient_feedback as t
     WHERE p.patient_id=t.patient_id
      AND date_of_feedback>"2/12/20");


Select * from PAY;



CREATE VIEW f AS
select employee_id from employee e where  Exists 
(select hospital_id from hospital as h
 where h.number_of_staff>20);

Select * from f;




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------
   
