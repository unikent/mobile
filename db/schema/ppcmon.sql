# ************************************************************
# Sequel Pro SQL dump
# Version 3348
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.1.44)
# Database: ppcmon
# Generation Time: 2011-07-13 09:56:14 +0100
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table clusters
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clusters`;

CREATE TABLE `clusters` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(63) NOT NULL DEFAULT '',
  `display` tinyint(4) NOT NULL,
  `import_description` varchar(127) NOT NULL DEFAULT '',
  `locationid` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=171 DEFAULT CHARSET=utf8;

LOCK TABLES `clusters` WRITE;
/*!40000 ALTER TABLE `clusters` DISABLE KEYS */;

INSERT INTO `clusters` (`id`, `name`, `display`, `import_description`, `locationid`)
VALUES
	(1,'Unknown',1,'',0),
	(2,'Library Level 2 Extension',1,'Library, Level 2 extension',1),
	(3,'Library Level 3 Extension',1,'Library, Level 3 extension',1),
	(4,'Library Level 4 Extension',1,'Library, Level 4 extension',1),
	(5,'Eliot Computer Room 1',1,'',4),
	(6,'Eliot Computer Room 2',1,'Eliot College, Computer Room 2, used for teaching',4),
	(7,'Rutherford Computer Room 1',1,'Rutherford College, Computer Room 1',3),
	(8,'Keynes Computer Room 1',1,'Keynes College, Computer Room 1, used for teaching',6),
	(9,'Keynes Computer Room 2',1,'Keynes College, Computer Room 2',6),
	(11,'CCo1',1,'Cornwallis Computing Room CCo1, used for teaching',5),
	(12,'CCo2',1,'Cornwallis Computing Room CCo2, used for teaching',5),
	(13,'CCo3',1,'Cornwallis Computing Room CCo3, used for teaching',5),
	(14,'CCo4',1,'Cornwallis Computing Room CCo4, used for teaching',5),
	(15,'SE104',0,'Cornwallis Computing Room SE104',5),
	(16,'Test machines',0,'',0),
	(17,'Darwin Computer Room 3 (A4.2)',1,'Darwin Computer Room 3, A4.2, Bob Eager Suite',7),
	(18,'Darwin Computer Room 2 (A5.2)',1,'Darwin Computer Room 2, A5.2',7),
	(19,'Darwin Computer Room 1 (A3.7)',1,'Darwin Computer Room 1, A3.7',7),
	(20,'Eliot (4th Floor Study Area)',1,'Eliot College, 4th floor Study Area',4),
	(21,'Library Level 2 (Group Study Area)',1,'Library, Level 2 Group study area',1),
	(22,'Library Level 3 (Law Office)',0,'Library Law Office',1),
	(23,'Library Level 3 (TR301)',1,'Library TR301, Training Room, used for training sessions',1),
	(24,'Rutherford Computer Room 2',1,'Rutherford College, Computer Room 2',3),
	(25,'Library Level 4 (Group Study Area)',0,'Library Level 4, Group Study Areas',1),
	(26,'Lecture and Seminar Rooms',1,'Lecture and Seminar Rooms',0),
	(112,'Library Quick Access PCs (L2, L3, L4)',1,'',1),
	(170,'Eliot Junior Common Room Committee',0,'Eliot Junior Common Room Committee',0),
	(169,'UELT meeting room',0,'UELT meeting room',0),
	(168,'Parkwood Reception',0,'Parkwood Reception',0),
	(167,'Bridge Wardens College',0,'Bridge Wardens College',0),
	(166,'Medway, Student Welfare',0,'Medway, Student Welfare',0),
	(165,'IS Spares',0,'IS Spares',0),
	(164,'Anthropology, Marlowe',0,'Anthropology, Marlowe',0),
	(163,'Careers, Keynes',0,'Careers, Keynes',0),
	(162,'DDSS',0,'DDSS',0),
	(161,'Economics, Keynes',0,'Economics, Keynes',0),
	(160,'Tonbridge Centre',0,'Tonbridge Centre',0),
	(159,'Vera Cameron Room, SoPIR',0,'Vera Cameron Room, SoPIR',0),
	(158,'IS, Library help and Enquiry desk',0,'IS, Library help and Enquiry desk',0),
	(157,'SoPS, Ingram',0,'SoPS, Ingram',0),
	(156,'IS Training rooms Cornwallis',0,'IS Training rooms Cornwallis',0),
	(155,'Keynes Master\'s Office',0,'Keynes Master\'s Office',0),
	(154,'English, Rutherford',0,'English, Rutherford',0),
	(153,'SoMSAC, Cornwallis',0,'SoMSAC, Cornwallis',0),
	(152,'Medway, Mid Kent College, Computing',0,'Medway, Mid Kent College, Computing',0),
	(136,'Pilkington LT',1,'Pilkington LT',8),
	(135,'Drill Hall DC117',1,'Drill Hall DC117',11),
	(134,'Drill Hall DC107',1,'Drill Hall DC107',11),
	(133,'Gillingham Bldg G4.4',1,'Gillingham Bldg G4.4',9),
	(132,'Gillingham Bldg G4.5',1,'Gillingham Bldg G4.5',9),
	(131,'Medway Bldg M2-03',1,'Medway Bldg M2-03',10),
	(130,'Gillingham Bldg G4.12',1,'Gillingham Bldg G4.12',9),
	(129,'Gillingham Bldg G4.3',1,'Gillingham Bldg G4.3',9),
	(128,'Gillingham Bldg Seminar room',1,'Gillingham Bldg Seminar room',9),
	(127,'Medway Bldg Seminar room',1,'Medway Bldg Seminar room',10),
	(126,'Medway Bldg M0-27',1,'Medway Bldg M0-27',10),
	(151,'Library Level 1 (Quick Access PCs)',0,'Library Level 1 (Quick Access PCs)',0),
	(150,'Bridge Wardens College, Sem room',0,'Bridge Wardens College, Sem room',0),
	(149,'Library Quick Access PCs (L2, L3, L4)',0,'Library Quick Access PCs (L2, L3, L4)',0),
	(147,'Library Loan Laptop',0,'Library Loan Laptop',0),
	(148,'Library Level 2 Presentation room',0,'Library Level 2 Presentation room',0),
	(146,'Library Loan Netbook',0,'Library Loan Netbook',0),
	(144,'English',0,'English',20),
	(145,'Careers',0,'Careers',15),
	(143,'Vera Cameron POLIR',0,'Vera Cameron, POLIR',17),
	(140,'Kent Law Clinic',0,'Kent Law Clinic',13),
	(141,'Tizard',0,'Tizard',14),
	(142,'Economics',0,'Economics',16),
	(138,'SPS',0,'SPS',19),
	(139,'Anthropology',0,'Anthropology',18),
	(137,'Kent Research and  Development Bldg Rm 108',0,'Kent Research and  Development Bldg, Rm 108',12),
	(111,'Library Level 1 (Quick Access PCs)',1,'',1),
	(110,'Library Level 4 (Group Study Area)',1,'Library, level 4 group areas',1),
	(109,'Library Level 2 (presentation room 1 and 2)',0,'Library, Level 2 presentation room 1 or 2',1);

/*!40000 ALTER TABLE `clusters` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table data
# ------------------------------------------------------------

DROP TABLE IF EXISTS `data`;

CREATE TABLE `data` (
  `date` datetime NOT NULL,
  `name` varchar(32) NOT NULL DEFAULT '',
  `ip` varchar(16) NOT NULL DEFAULT '',
  `users` int(11) NOT NULL DEFAULT '0',
  `rdpusers` int(11) NOT NULL DEFAULT '0',
  `clusterid` int(11) NOT NULL DEFAULT '0',
  `enabled` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `notes` varchar(255) DEFAULT NULL,
  `lasteditedby` varchar(64) DEFAULT 'unknown',
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;

INSERT INTO `data` (`date`, `name`, `ip`, `users`, `rdpusers`, `clusterid`, `enabled`, `notes`, `lasteditedby`)
VALUES
	('2011-07-12 06:18:20','PCCT4P11','129.12.101.116',0,0,14,1,NULL,'unknown'),
	('2011-07-12 06:42:51','PCL2P060','129.12.102.75',0,0,2,1,NULL,'unknown'),
	('2011-07-07 06:13:17','PCRC2P03','129.12.97.42',0,0,24,1,NULL,'unknown'),
	('2011-07-12 10:51:45','PCEC1P16','129.12.98.31',0,0,20,1,NULL,'unknown'),
	('2011-07-12 06:17:29','PCIMSR127','129.12.100.159',0,0,153,1,NULL,'unknown'),
	('2011-07-12 06:37:35','PCL3P029','129.12.102.144',0,0,3,1,NULL,'unknown'),
	('2011-07-08 06:17:49','PCMB3C21','129.12.189.134',0,0,152,1,NULL,'unknown'),
	('2011-07-12 10:53:26','PCMRLT1X','129.12.105.192',1,0,26,1,'Marlowe, LT1','unknown'),
	('2011-07-12 10:53:42','PCKC1P09','129.12.96.24',0,0,8,1,NULL,'unknown'),
	('2011-07-12 10:53:14','PCL2CGP2','129.12.103.211',0,0,21,1,NULL,'unknown'),
	('2011-07-02 06:27:36','PCRC2P18','129.12.97.57',0,0,24,1,NULL,'unknown'),
	('2011-07-12 06:17:58','PCDDSSR02','129.12.60.127',0,0,162,1,NULL,'unknown'),
	('2011-07-12 10:54:22','PCISTR12P','129.12.38.188',1,0,156,1,NULL,'unknown'),
	('2011-07-12 10:52:54','PCKC1P28','129.12.96.43',0,0,8,1,NULL,'unknown'),
	('2011-07-12 06:43:13','PCL4P012','129.12.103.115',0,0,4,1,NULL,'unknown'),
	('2011-07-12 06:18:09','PCL4P036','129.12.103.139',0,0,4,1,NULL,'unknown'),
	('2011-05-04 03:17:02','PCCT2P47','129.12.101.47',0,0,12,0,NULL,'unknown'),
	('2011-07-12 06:18:14','PCECTP15','129.12.98.54',0,0,6,1,NULL,'unknown'),
	('2011-05-05 16:45:27','PCGB2S03','129.12.187.20',0,0,128,1,NULL,'unknown'),
	('2011-07-12 06:27:57','PCIMSR150','129.12.100.182',0,0,153,1,NULL,'unknown'),
	('2011-07-11 15:38:27','PCECS01X','129.12.30.177',0,0,26,1,'Eliot, Sem Room 1','unknown'),
	('2011-07-12 10:55:01','PCKC1P17','129.12.96.32',0,0,8,1,NULL,'unknown'),
	('2011-07-12 10:54:45','PCL3P037','129.12.102.152',1,0,3,1,NULL,'unknown'),
	('2011-07-12 06:13:18','PCL3P017','129.12.102.132',0,0,3,1,NULL,'unknown'),
	('2011-07-12 10:52:14','PCL3P072','129.12.102.187',1,0,3,1,NULL,'unknown'),
	('2011-07-12 06:18:06','PCECTP05','129.12.98.44',0,0,6,1,NULL,'unknown'),
	('2011-07-12 10:53:08','PCL2P006','129.12.102.21',0,0,2,1,NULL,'unknown'),
	('2011-07-01 13:45:46','PCMB3C01','129.12.189.146',0,0,152,1,NULL,'unknown'),
	('2011-07-12 06:17:37','PCL2P047','129.12.102.62',0,0,2,1,NULL,'unknown'),
	('2011-07-12 10:52:37','PCL3P046','129.12.102.161',0,0,3,1,NULL,'unknown'),
	('2011-05-04 03:16:43','PCCT2P56','129.12.101.56',0,0,12,0,NULL,'unknown'),
	('2011-07-12 10:53:02','PCL2P010','129.12.102.25',0,0,2,1,NULL,'unknown'),
	('2011-07-12 06:18:08','PCL3P070','129.12.102.185',0,0,3,1,NULL,'unknown'),
	('2011-07-12 06:17:40','PCL4P028','129.12.103.131',0,0,4,1,NULL,'unknown'),
	('2011-07-12 06:18:23','PCCCT03XX','129.12.101.5',0,0,26,1,'Cornwallis, CCo3','unknown'),
	('2011-05-05 15:51:30','PCGB3P20','129.12.187.94',0,0,129,1,NULL,'unknown'),
	('2011-07-12 06:18:32','PCDC4P15','129.12.99.70',0,0,17,1,NULL,'unknown'),
	('2011-07-12 10:54:57','PCL4P001','129.12.103.104',1,0,4,1,NULL,'unknown'),
	('2011-05-04 03:17:10','PCCT2P66','129.12.101.66',0,0,12,0,NULL,'unknown'),
	('2011-07-06 13:52:28','PCL3TP10','129.12.102.233',0,0,23,1,NULL,'unknown'),
	('2011-07-11 08:22:36','PCDC4P29','129.12.99.84',0,0,17,1,NULL,'unknown'),
	('2011-07-12 08:30:36','PCDC4P05','129.12.99.60',0,0,17,1,NULL,'unknown'),
	('2011-07-12 07:07:58','PCKC1P18','129.12.96.33',0,0,8,1,NULL,'unknown'),
	('2011-07-12 06:18:01','PCL2P018','129.12.102.33',0,0,2,1,NULL,'unknown'),
	('2011-07-12 06:18:11','PCL4P009','129.12.103.112',0,0,4,1,NULL,'unknown'),
	('2011-06-30 11:38:44','PCECTP51','129.12.98.90',0,0,6,1,NULL,'unknown'),
	('2011-05-04 06:23:39','PCCT2P61','129.12.101.61',0,0,12,0,NULL,'unknown'),
	('2011-07-06 17:08:18','PCGB1P14','129.12.187.53',0,0,130,1,NULL,'unknown'),
	('2011-07-12 06:17:41','PCL2CGP9','129.12.103.218',0,0,21,1,NULL,'unknown'),
	('2011-07-12 10:54:55','PCRC1P04','129.12.97.19',0,0,7,1,NULL,'unknown'),
	('2011-07-12 10:52:21','PCRC2P04','129.12.97.43',0,0,24,1,NULL,'unknown'),
	('2011-07-12 06:18:02','PCCT4P05','129.12.101.110',0,0,14,1,NULL,'unknown'),
	('2011-07-12 10:51:08','PCL2P003','129.12.102.18',1,0,2,1,NULL,'unknown'),
	('2011-07-12 10:51:46','PCL2P036','129.12.102.51',0,0,2,1,NULL,'unknown'),
	('2011-05-05 15:05:42','PCGB5P18','129.12.187.92',0,0,132,1,NULL,'unknown'),
	('2011-07-12 06:27:47','PCL2CGP8','129.12.103.217',0,0,21,1,NULL,'unknown'),
	('2011-07-07 14:57:35','PCISCP1','129.12.64.74',0,0,165,1,NULL,'unknown'),
	('2011-07-12 10:54:00','PCDCS08X','129.12.99.14',1,0,26,1,'Darwin, Sem Room 8','unknown'),
	('2011-07-12 06:37:52','PCL3P006','129.12.102.121',0,0,3,1,NULL,'unknown'),
	('2011-07-12 10:52:41','PCL3CP02','129.12.102.87',0,0,22,1,NULL,'unknown'),
	('2011-07-12 06:18:20','PCECOR36','129.12.96.182',0,0,161,1,NULL,'unknown'),
	('2011-07-12 06:13:25','PCL4P046','129.12.103.149',0,0,4,1,NULL,'unknown'),
	('2011-05-04 03:17:25','PCCT2P48','129.12.101.48',0,0,12,0,NULL,'unknown'),
	('2011-07-12 10:55:35','PCKC1P07','129.12.96.22',0,0,8,1,NULL,'unknown'),
	('2011-07-12 10:21:23','PCL2P056','129.12.102.71',0,0,2,1,NULL,'unknown'),
	('2011-07-12 10:55:44','PCECS02X','129.12.30.92',0,0,26,1,'Eliot, Sem Room 2','unknown'),
	('2011-07-12 10:52:46','PCCT1P08','129.12.103.25',0,0,11,1,NULL,'unknown'),
	('2011-07-12 06:18:46','PCL4P003','129.12.103.106',0,0,4,1,NULL,'unknown'),
	('2011-07-12 10:51:46','PCRC1P14','129.12.97.29',1,0,7,1,NULL,'unknown'),
	('2011-07-12 10:55:15','PCECES8X','129.12.30.165',1,0,26,1,'Eliot Extension, Sem Rm 8','unknown'),
	('2011-07-12 06:18:05','PCCT3P17','129.12.101.96',0,0,13,1,NULL,'unknown'),
	('2011-07-02 03:42:08','PCECTP34','129.12.98.73',0,0,6,1,NULL,'unknown'),
	('2011-07-12 06:18:12','PCECTP24','129.12.98.63',0,0,6,1,NULL,'unknown'),
	('2011-07-12 06:17:44','PCINGR47','129.12.24.131',0,0,157,1,NULL,'unknown'),
	('2011-07-12 06:13:27','PCKC1P10','129.12.96.25',0,0,8,1,NULL,'unknown'),
	('2011-07-12 10:52:34','PCRC1P12','129.12.97.27',0,0,7,1,NULL,'unknown'),
	('2011-07-12 06:13:09','PCMB2P05','129.12.186.12',0,0,131,1,NULL,'unknown'),
	('2011-07-12 06:18:01','PCDC4P10','129.12.99.65',0,0,17,1,NULL,'unknown'),
	('2011-07-12 10:52:23','PCRC2P15','129.12.97.54',1,0,24,1,NULL,'unknown'),
	('2011-05-04 03:17:32','PCCT2P50','129.12.101.50',0,0,12,0,NULL,'unknown'),
	('2011-07-04 03:32:36','PCECTP03','129.12.98.42',0,0,6,1,NULL,'unknown'),
	('2011-07-12 06:17:56','PCECTP35','129.12.98.74',0,0,6,1,NULL,'unknown'),
	('2011-07-12 06:17:48','PCL3P050','129.12.102.165',0,0,3,1,NULL,'unknown'),
	('2011-07-06 13:54:32','PCL3TP11','129.12.102.226',0,0,23,1,NULL,'unknown'),
	('2011-07-12 06:33:02','PCL3P003','129.12.102.118',0,0,3,1,NULL,'unknown'),
	('2011-07-12 06:17:39','PCL3P081','129.12.102.196',0,0,3,1,NULL,'unknown'),
	('2011-07-12 06:18:15','PCL4P039','129.12.103.142',0,0,4,1,NULL,'ms1'),
	('2011-07-12 10:55:20','PCKC1P08','129.12.96.23',0,0,8,1,NULL,'unknown'),
	('2011-07-12 06:18:04','PCL4P025','129.12.103.128',0,0,4,1,NULL,'unknown'),
	('2011-07-12 06:17:34','PCL3P069','129.12.102.184',0,0,3,1,NULL,'cmw'),
	('2011-07-12 10:51:03','PCRC2P19','129.12.97.58',0,0,24,1,NULL,'unknown'),
	('2011-07-12 06:18:11','PCL4P044','129.12.103.147',0,0,4,1,NULL,'unknown'),
	('2011-07-12 07:18:14','PCKC1P23','129.12.96.38',0,0,8,1,NULL,'unknown'),
	('2011-07-12 06:12:56','PCL4P060','129.12.103.163',0,0,4,1,NULL,'unknown'),
	('2011-05-25 14:08:25','PCKRDCP09','129.12.31.215',0,0,137,1,NULL,'unknown'),
	('2011-07-12 06:17:46','PCKRDCP01','129.12.31.213',0,0,137,1,NULL,'unknown'),
	('2011-07-12 06:17:42','PCL4P030','129.12.103.133',0,0,4,1,NULL,'unknown'),
	('2011-07-12 10:52:49','PCIMSR123','129.12.100.155',0,0,153,1,NULL,'unknown'),
	('2011-07-12 06:17:50','PCL3P019','129.12.102.134',0,0,3,1,NULL,'unknown'),
	('2011-07-12 10:52:23','PCKCS22X','129.12.65.49',1,0,26,1,'Keynes, Sem Rm 22 (B3.10)','unknown');

/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table locationnames
# ------------------------------------------------------------

DROP TABLE IF EXISTS `locationnames`;

CREATE TABLE `locationnames` (
  `locationid` smallint(5) unsigned NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`locationid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

LOCK TABLES `locationnames` WRITE;
/*!40000 ALTER TABLE `locationnames` DISABLE KEYS */;

INSERT INTO `locationnames` (`locationid`, `name`)
VALUES
	(1,'Library'),
	(8,'Pilkington Building'),
	(3,'Rutherford'),
	(0,'unknown'),
	(4,'Eliot'),
	(5,'Cornwallis'),
	(6,'Keynes'),
	(7,'Darwin'),
	(9,'Gillingham Building'),
	(10,'Medway Building'),
	(11,'Drill Hall Library'),
	(12,'KRDC'),
	(13,'KLS'),
	(14,'Tizard'),
	(15,'Careers'),
	(16,'Economics'),
	(17,'POLIR'),
	(18,'Anthropology'),
	(19,'SPS'),
	(20,'English');

/*!40000 ALTER TABLE `locationnames` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
