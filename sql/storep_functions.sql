USE `healthcare_system`;
DROP procedure IF EXISTS `patient`;

DELIMITER $$
USE `healthcare_system`$$
CREATE PROCEDURE `patient` ()
BEGIN
	SELECT COUNT(*) from patient;
END$$

DELIMITER ;



CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`()
BEGIN
	SELECT COUNT(*) FROM hospital;
END


CREATE DEFINER=`root`@`localhost` PROCEDURE `employee`()
BEGIN
    SELECT COUNT(*) from employee;
END

create function searchRecord(yourId int) 
  returns char(100)
  begin
    declare Name1 char(100) default "No Name Found For This Id";
    select lastName into Name1 from Patient where Id =yourId;
    return Name1;
  end
  
DELIMITER $$
CREATE FUNCTION Salary_Bonus
(
 Salary INT
)
RETURNS INT 
DETERMINISTIC
BEGIN
    DECLARE Bonus INT;
    SET Bonus = Salary+100;
    RETURN Bonus; 
END$$
DELIMITER ; $$$$$$$$

CREATE FUNCTION is_greater
	( 
		@a AS INT
	)
	RETURNS VARCHAR(30)
	AS
	BEGIN
	RETURN( 'Age is' + 
	CASE
		-- Case 1
		WHEN @a > 25 THEN 'Young'
		-- Case 2
		WHEN @a < @b THEN 'Old'
	END
	)
	END;
