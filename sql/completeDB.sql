-- MySQL dump 10.13  Distrib 8.0.13, for macos10.14 (x86_64)
--
-- Host: localhost    Database: healthcare_system
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `doctor` (
  `doctor_employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) DEFAULT NULL,
  `description` varchar(45) NOT NULL,
  `hospital_name` varchar(20) DEFAULT NULL,
  `salary` varchar(56) NOT NULL,
  `type_of_employment` varchar(20) NOT NULL,
  `phone_number` varchar(30) NOT NULL,
  `speciality` varchar(20) NOT NULL,
  `doc_description` varchar(45) NOT NULL,
  `hospital_table_id` int(11) NOT NULL,
  PRIMARY KEY (`doctor_employee_id`),
  UNIQUE KEY `doctor_employee_id_UNIQUE` (`doctor_employee_id`),
  UNIQUE KEY `hospital_table_id_UNIQUE` (`hospital_table_id`),
  KEY `hosptialIndex` (`first_name`,`last_name`),
  CONSTRAINT `hospital_table_id` FOREIGN KEY (`hospital_table_id`) REFERENCES `hospital` (`hospital_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Daniel','Micheal','south miller','xyz@gmail.com','Chicago','USA','my name is dianeal','sunshine','50000','employye','1234334343','General surgeon','best doctor in the city',1),(2,'John','Mason','123 st Taylor st','john@gmail.com','Chicago','United States','John','Cross Hospital','100000','employee','9876543210','ornithologist','cool doctor',2),(3,'James','Thames','65 Berkley st','james@gmail.com','Berkley','UK','good','Red Cross','140000','employee','98765894323','dermatology','great',3),(4,'ABC','XYZ','LEXINGTON','ABC@GMAIL.COM','HYD','INDIA','COOL','SUNRISE','100000','employee','1234567891','DOCTOR','PHYSICIAN',4),(5,'rani','Lakshmi','789 lewisburg lane','rani@gmail.com','mumbai','india','helper','sunset','500000','employee','5678943210','mbbs','helps everone',5);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `doctoraggreagteview`
--

DROP TABLE IF EXISTS `doctoraggreagteview`;
/*!50001 DROP VIEW IF EXISTS `doctoraggreagteview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `doctoraggreagteview` AS SELECT 
 1 AS `COUNT(*)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `doctorview`
--

DROP TABLE IF EXISTS `doctorview`;
/*!50001 DROP VIEW IF EXISTS `doctorview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `doctorview` AS SELECT 
 1 AS `doctor_employee_id`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `address`,
 1 AS `email`,
 1 AS `city`,
 1 AS `country`,
 1 AS `description`,
 1 AS `hospital_name`,
 1 AS `salary`,
 1 AS `type_of_employment`,
 1 AS `phone_number`,
 1 AS `speciality`,
 1 AS `doc_description`,
 1 AS `hospital_table_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `description` varchar(70) DEFAULT NULL,
  `hospital_name` varchar(20) DEFAULT NULL,
  `salary` varchar(45) NOT NULL,
  `type_of_employment` varchar(20) NOT NULL,
  `hospital_id` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `idpatient_UNIQUE` (`employee_id`),
  UNIQUE KEY `hospital_id_UNIQUE` (`hospital_id`),
  UNIQUE KEY `hospital_name_UNIQUE` (`hospital_name`),
  KEY `empolyeeIndex` (`first_name`,`last_name`),
  CONSTRAINT `hospital_id_employee` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (2,'Daniel','Micheal','south miller','xyz@gmail.com','Chicago','USA','my name is dianeal','sunshine','50000','doctor',2),(4,'harshith','alle','Gandhinagar','har@gmail.com','hyderbad','country','I am a workboy','srikara','40000','workboy',4),(5,'James','Thames','65 Berkley st','james@gmail.com','Berkley','UK','James is a general surgeon and a neurosurgeon.','red cross','140000','doctor',5);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `employeeaggreagteview`
--

DROP TABLE IF EXISTS `employeeaggreagteview`;
/*!50001 DROP VIEW IF EXISTS `employeeaggreagteview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `employeeaggreagteview` AS SELECT 
 1 AS `SUM(salary)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `employeeview`
--

DROP TABLE IF EXISTS `employeeview`;
/*!50001 DROP VIEW IF EXISTS `employeeview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `employeeview` AS SELECT 
 1 AS `employee_id`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `address`,
 1 AS `email`,
 1 AS `city`,
 1 AS `country`,
 1 AS `description`,
 1 AS `hospital_name`,
 1 AS `salary`,
 1 AS `type_of_employment`,
 1 AS `hospital_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospital` (
  `hospital_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone_no` varchar(45) NOT NULL,
  `number_of_staff` int(11) NOT NULL,
  PRIMARY KEY (`hospital_id`),
  UNIQUE KEY `hospital_id_UNIQUE` (`hospital_id`),
  KEY `hosptialIndex` (`name`,`address`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'Red Cross','main road st, lexington','3124335432',23),(2,'Merry hospital','tatylor st','3123435432',34),(3,'UI Health','roosevelt road','3124235432',78),(4,'sunrise','lewisburg','987651234',4),(5,'srikara','miller','5678912340',50);
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `hospitalaggreagteview`
--

DROP TABLE IF EXISTS `hospitalaggreagteview`;
/*!50001 DROP VIEW IF EXISTS `hospitalaggreagteview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `hospitalaggreagteview` AS SELECT 
 1 AS `AVG(number_of_staff)`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `medicine` (
  `medicine_id` int(11) NOT NULL AUTO_INCREMENT,
  `medicine_name` varchar(45) NOT NULL,
  `price` varchar(50) NOT NULL,
  `expiry_term_year` varchar(35) NOT NULL,
  `hospital_id` int(11) NOT NULL,
  PRIMARY KEY (`medicine_id`),
  UNIQUE KEY `medicine_id_UNIQUE` (`medicine_id`),
  KEY `medicineIndex` (`medicine_name`,`price`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
INSERT INTO `medicine` VALUES (1,'Paracip 500','12','12/23/22',1),(2,'crocin','200','2/23/20',2),(3,'Advil','20','12/21/22',4),(5,'carpal','340','5/4/22',3),(6,'Advil pro max','30','11/23/22',5);
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mode_of_payment`
--

DROP TABLE IF EXISTS `mode_of_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `mode_of_payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_of_payment` varchar(45) NOT NULL,
  `doc_referred` varchar(45) NOT NULL,
  `date_of_transaction` varchar(20) NOT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `payment_id_UNIQUE` (`payment_id`),
  KEY `paymentIndex` (`type_of_payment`,`doc_referred`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mode_of_payment`
--

LOCK TABLES `mode_of_payment` WRITE;
/*!40000 ALTER TABLE `mode_of_payment` DISABLE KEYS */;
INSERT INTO `mode_of_payment` VALUES (1,'credit card','john mason','12/11/20'),(2,'cash','john mason','12/12/20'),(3,'credit card','john mason','12/21/20'),(5,'debit card','Hiral','9/8/21'),(21,'cash','XYZ','2/7/21');
/*!40000 ALTER TABLE `mode_of_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `patient_id_UNIQUE` (`patient_id`),
  UNIQUE KEY `payment_id_UNIQUE` (`payment_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `hospital_id_UNIQUE` (`hospital_id`),
  UNIQUE KEY `medicine_id_UNIQUE` (`medicine_id`),
  KEY `patientIndex` (`first_name`,`last_name`),
  CONSTRAINT `hospital_id` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`),
  CONSTRAINT `medicine_id` FOREIGN KEY (`medicine_id`) REFERENCES `medicine` (`medicine_id`),
  CONSTRAINT `payment_id` FOREIGN KEY (`payment_id`) REFERENCES `mode_of_payment` (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'john','mason','john1234','john1234','123 main road','Chicago','US',1,2,2),(2,'Merry','main','merybest','dsfwe','234 taylor st','Chicago','US',2,3,1);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_feedback`
--

DROP TABLE IF EXISTS `patient_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patient_feedback` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `feedback` varchar(45) NOT NULL,
  `patient_name` varchar(20) NOT NULL,
  `date_of_feedback` varchar(20) NOT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `idpatient_feedback_UNIQUE` (`patient_id`),
  KEY `feedbackIndex` (`employee_id`,`feedback`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_feedback`
--

LOCK TABLES `patient_feedback` WRITE;
/*!40000 ALTER TABLE `patient_feedback` DISABLE KEYS */;
INSERT INTO `patient_feedback` VALUES (1,1,'Very good treatment','john','3/12/2020'),(2,3,'Very good treatment','karl','3/12/2020'),(3,3,'The treatment was done correctly.','karen','3/12/2020'),(4,4,'Very good treatment','pranavi','3/12/2020'),(5,5,'Very good treatment','hiral','3/12/2020');
/*!40000 ALTER TABLE `patient_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `patientview`
--

DROP TABLE IF EXISTS `patientview`;
/*!50001 DROP VIEW IF EXISTS `patientview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `patientview` AS SELECT 
 1 AS `patient_id`,
 1 AS `first_name`,
 1 AS `last_name`,
 1 AS `username`,
 1 AS `password`,
 1 AS `address`,
 1 AS `city`,
 1 AS `country`,
 1 AS `payment_id`,
 1 AS `hospital_id`,
 1 AS `medicine_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `doctoraggreagteview`
--

/*!50001 DROP VIEW IF EXISTS `doctoraggreagteview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `doctoraggreagteview` AS select count(0) AS `COUNT(*)` from `doctor` group by `doctor`.`country` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `doctorview`
--

/*!50001 DROP VIEW IF EXISTS `doctorview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `doctorview` AS select `doctor`.`doctor_employee_id` AS `doctor_employee_id`,`doctor`.`first_name` AS `first_name`,`doctor`.`last_name` AS `last_name`,`doctor`.`address` AS `address`,`doctor`.`email` AS `email`,`doctor`.`city` AS `city`,`doctor`.`country` AS `country`,`doctor`.`description` AS `description`,`doctor`.`hospital_name` AS `hospital_name`,`doctor`.`salary` AS `salary`,`doctor`.`type_of_employment` AS `type_of_employment`,`doctor`.`phone_number` AS `phone_number`,`doctor`.`speciality` AS `speciality`,`doctor`.`doc_description` AS `doc_description`,`doctor`.`hospital_table_id` AS `hospital_table_id` from `doctor` where (`doctor`.`city` = 'Chicago') order by `doctor`.`country` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employeeaggreagteview`
--

/*!50001 DROP VIEW IF EXISTS `employeeaggreagteview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employeeaggreagteview` AS select sum(`employee`.`salary`) AS `SUM(salary)` from `employee` group by `employee`.`country` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `employeeview`
--

/*!50001 DROP VIEW IF EXISTS `employeeview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employeeview` AS select `employee`.`employee_id` AS `employee_id`,`employee`.`first_name` AS `first_name`,`employee`.`last_name` AS `last_name`,`employee`.`address` AS `address`,`employee`.`email` AS `email`,`employee`.`city` AS `city`,`employee`.`country` AS `country`,`employee`.`description` AS `description`,`employee`.`hospital_name` AS `hospital_name`,`employee`.`salary` AS `salary`,`employee`.`type_of_employment` AS `type_of_employment`,`employee`.`hospital_id` AS `hospital_id` from `employee` where (`employee`.`salary` > 50000) order by `employee`.`country` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `hospitalaggreagteview`
--

/*!50001 DROP VIEW IF EXISTS `hospitalaggreagteview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `hospitalaggreagteview` AS select avg(`hospital`.`number_of_staff`) AS `AVG(number_of_staff)` from `hospital` group by `hospital`.`address` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `patientview`
--

/*!50001 DROP VIEW IF EXISTS `patientview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `patientview` AS select `patient`.`patient_id` AS `patient_id`,`patient`.`first_name` AS `first_name`,`patient`.`last_name` AS `last_name`,`patient`.`username` AS `username`,`patient`.`password` AS `password`,`patient`.`address` AS `address`,`patient`.`city` AS `city`,`patient`.`country` AS `country`,`patient`.`payment_id` AS `payment_id`,`patient`.`hospital_id` AS `hospital_id`,`patient`.`medicine_id` AS `medicine_id` from `patient` where (`patient`.`address` = '123 main road') order by `patient`.`city` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 18:15:16
