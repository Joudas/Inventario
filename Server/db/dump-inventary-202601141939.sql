-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: inventary
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `state` tinyint(1) NOT NULL,
  `id_user` binary(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (8,'Alimento','Comestibles ',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(10,'Electrodomestico','Elem',1,_binary '≤O›ê~\àÇ\‰[WLó'),(11,'Mascotas','Materiales para mascotas',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(12,'Cocina','Instrumentos de cocina',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(14,'Componente','Componentes de computador',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(18,'Perifericos','',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_purchases`
--

DROP TABLE IF EXISTS `group_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_purchases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(100) NOT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(15,2) NOT NULL DEFAULT '0.00',
  `subtotal` decimal(15,2) NOT NULL DEFAULT '0.00',
  `total_tax_amount` decimal(15,2) NOT NULL DEFAULT '0.00',
  `id_user` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_purchases`
--

LOCK TABLES `group_purchases` WRITE;
/*!40000 ALTER TABLE `group_purchases` DISABLE KEYS */;
INSERT INTO `group_purchases` VALUES (1,'Compra de tecnologia',NULL,'2025-12-29 21:26:36',178500.00,150000.00,28500.00,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(2,'Compra de tecnologia',NULL,'2026-01-12 22:38:46',178500.00,150000.00,28500.00,_binary 'Æ\ÀM,})\àÇ\‰[WLó');
/*!40000 ALTER TABLE `group_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` binary(16) DEFAULT (uuid_to_bin(uuid())),
  `id_category` int DEFAULT NULL,
  `reference` varchar(16) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `acount` int DEFAULT NULL,
  `state` tinyint(1) NOT NULL,
  `tax_rate` decimal(5,2) DEFAULT '0.00',
  `is_tax_exempt` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_product_category` (`id_category`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (7,_binary '≤O›ê~\àÇ\‰[WLó',NULL,'PE-004','Audifonos','Audifonos inalambricos, bluettoe integrado',100000,100100,1,5.00,0),(14,_binary '≤O›ê~\àÇ\‰[WLó',NULL,'PE-000','Teclado','Teclado con luces integradas FI-123',50000,100,1,5.00,0),(15,_binary '≤O›ê~\àÇ\‰[WLó',NULL,'PE-001','Mouse','Mouse Ergonomico ',24000,100,1,5.00,0),(16,_binary '≤O›ê~\àÇ\‰[WLó',NULL,'PE-003','Teclado de gamma Alta','Producto Ergonomico',120000,100,1,5.00,0),(17,NULL,NULL,'ABC-123','Teclado de gamma Alta','Producto Ergonomico',120000,100,1,5.00,0),(19,_binary 'Æ\ÀM,})\àÇ\‰[WLó',8,'85922','Jugos','Jugos Hit',2500,1000,1,0.00,1),(20,_binary 'Æ\ÀM,})\àÇ\‰[WLó',18,'18887','Teclado de gamma baja','Teclado economico con leds',120000,10,1,5.00,0),(21,_binary 'Æ\ÀM,})\àÇ\‰[WLó',18,'16534','Audifonos','Audifonos Jaltech',100000,20,1,5.00,0),(22,_binary 'Æ\ÀM,})\àÇ\‰[WLó',12,'11499','Mouse','Mouse inalambrico de Logitec',12,0,1,5.00,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `state` tinyint(1) NOT NULL,
  `id_user` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (1,'VendedorFinal','venfin@gmail.com','32223232',NULL,1,_binary 'Æ\ÀM,})\àÇ\‰[WLó'),(3,'Jose','proJose@gmail.com','39827832','',1,_binary '≤O›ê~\àÇ\‰[WLó'),(4,'Elian A','e@gmail.com','3227234123','',1,_binary 'Æ\ÀM,})\àÇ\‰[WLó');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_provider` int NOT NULL,
  `id_user` binary(16) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total_cost` double DEFAULT '0',
  `state` tinyint NOT NULL DEFAULT '1',
  `id_group` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_purchase_provider` (`id_provider`),
  KEY `fk_purchase_group` (`id_group`),
  CONSTRAINT `fk_purchase_group` FOREIGN KEY (`id_group`) REFERENCES `group_purchases` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_purchase_provider` FOREIGN KEY (`id_provider`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
INSERT INTO `purchase` VALUES (6,3,_binary 'Æ\ÀM,})\àÇ\‰[WLó','2025-12-25 19:36:08',2000000,1,NULL);
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_items`
--

DROP TABLE IF EXISTS `purchase_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_purchase` int NOT NULL,
  `id_product` int NOT NULL,
  `quantity` int NOT NULL,
  `unit_cost` double NOT NULL,
  `tax_rate_applied` decimal(5,2) NOT NULL DEFAULT '0.00',
  `tax_amount_per_unit` decimal(15,2) NOT NULL DEFAULT '0.00',
  `total_tax_amount` decimal(15,2) NOT NULL DEFAULT '0.00',
  `subtotal` decimal(15,2) NOT NULL DEFAULT '0.00',
  `total` decimal(15,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `fk_item_purchase` (`id_purchase`),
  KEY `fk_item_product` (`id_product`),
  CONSTRAINT `fk_item_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_item_purchase` FOREIGN KEY (`id_purchase`) REFERENCES `purchase` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_items`
--

LOCK TABLES `purchase_items` WRITE;
/*!40000 ALTER TABLE `purchase_items` DISABLE KEYS */;
INSERT INTO `purchase_items` VALUES (4,6,7,100,20000,0.05,1000.00,1000000.00,1900000.00,2000000.00);
/*!40000 ALTER TABLE `purchase_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` binary(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
  `name` varchar(250) DEFAULT NULL,
  `lastname` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `location` text,
  `perfil` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (_binary '-\"æ}(\àÇ\‰[WLó','Jse','da','ab@gmail.com','$2b$10$kS1RX040HO8emgMMIYGba.DoCeWFVV3AnOWRyHKyOOVGBKjGxFlie',NULL,NULL,NULL),(_binary 'rõ\∆]|Q\àÇ\‰[WLó','admin',NULL,'admin@gmail.com','12345',NULL,NULL,NULL),(_binary 'Æ\ÀM,})\àÇ\‰[WLó','Jose','D','j@gmail.com','$2b$10$ylwEoWGDjNRLTQJ3Ysj3BOyDbLpWLo4GZ4f3wwJ9cy.6dqwOVYq8C',NULL,NULL,NULL),(_binary '≤O›ê~\àÇ\‰[WLó','Elian','A','e@gmail.com','$2b$10$ej0auvTTWVVZqXl08SN1nusAm.ap7lNCjWwUoijCBlEgXq.7LkPV.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'inventary'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-14 19:39:04
