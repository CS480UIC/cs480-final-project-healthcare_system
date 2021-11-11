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
