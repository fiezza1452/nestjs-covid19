-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 11, 2023 at 01:58 PM
-- Server version: 8.0.29
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nestjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `hospital_id` int NOT NULL,
  `hospital_name` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`hospital_id`, `hospital_name`, `created_at`, `updated_at`) VALUES
(2, 'โรงพยาบาลกรุงเทพ', '2023-03-11 17:26:14.215603', '2023-03-11 17:26:14.215603'),
(3, 'โรงพยาบาลรังสิต', '2023-03-11 17:27:43.233061', '2023-03-11 17:27:43.233061');

-- --------------------------------------------------------

--
-- Table structure for table `register_vaccine`
--

CREATE TABLE `register_vaccine` (
  `id` int NOT NULL,
  `prefix` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `card` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `tel` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `hospital_id` int NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `register_vaccine`
--

INSERT INTO `register_vaccine` (`id`, `prefix`, `firstName`, `lastName`, `card`, `age`, `tel`, `email`, `created_at`, `updated_at`, `hospital_id`, `datetime`) VALUES
(3, 'นาย', 'cc', 'asd', 'asd', 20, 'asd', NULL, '2023-03-11 15:18:46.353913', '2023-03-11 15:18:46.353913', 0, '0000-00-00 00:00:00'),
(4, 'นาย', 'cc', 'asd', 'asd', 20, 'asd', NULL, '2023-03-11 15:24:10.789699', '2023-03-11 15:24:10.789699', 0, '0000-00-00 00:00:00'),
(5, 'นาย', 'cc', 'asd', 'asd', 20, 'asd', NULL, '2023-03-11 15:24:20.300146', '2023-03-11 15:24:20.300146', 0, '0000-00-00 00:00:00'),
(6, 'นาย', 'cc', 'asccccd', 'asd', 20, 'asd', NULL, '2023-03-11 15:30:01.137146', '2023-03-11 15:30:01.137146', 0, '0000-00-00 00:00:00'),
(7, 'นาย', 'xxxx', 'asccccd', 'asd', 321, 'asd', NULL, '2023-03-11 15:30:09.764403', '2023-03-11 15:30:09.764403', 0, '0000-00-00 00:00:00'),
(8, 'นาย', 'xxxx', 'asccccd', 'asd', 20, 'asd', '123', '2023-03-11 16:07:02.933632', '2023-03-11 16:07:02.933632', 0, '0000-00-00 00:00:00'),
(9, 'นาย', 'xxxx', 'asccccd', 'asd', 20, 'asd', '123', '2023-03-11 16:07:09.159286', '2023-03-11 16:07:09.159286', 0, '0000-00-00 00:00:00'),
(10, 'นาย', 'xxxx', 'asccccd', 'asd', 20, 'asd', '123', '2023-03-11 16:07:33.462598', '2023-03-11 16:07:33.462598', 0, '0000-00-00 00:00:00'),
(11, 'นาย', 'xxxx', 'asccccd', 'asd', 20, 'asd', '123', '2023-03-11 16:13:12.213801', '2023-03-11 16:13:12.213801', 0, '0000-00-00 00:00:00'),
(12, 'นาย', 'xxxx', 'asccccd', 'asd', 20, '1', '123', '2023-03-11 16:14:23.360344', '2023-03-11 16:14:23.360344', 0, '0000-00-00 00:00:00'),
(13, 'นาย', 'xxxx', 'dddd', '1111', 20, '0921233s402', 'sadadsd@fsadd.com', '2023-03-11 16:29:01.351785', '2023-03-11 16:29:01.351785', 0, '0000-00-00 00:00:00'),
(14, 'นาย', 'xxxx', 'dddd', '1111', 20, '0921233s402', 'sadadsd@fsadd.com', '2023-03-11 16:29:02.511225', '2023-03-11 16:29:02.511225', 0, '0000-00-00 00:00:00'),
(15, 'นาย', 'lionel', 'messi', '1102299312032', 35, '0921233222', 'sadadsd@fsadd.com', '2023-03-11 17:36:17.614143', '2023-03-11 17:36:17.614143', 2, '2022-03-12 13:00:00'),
(16, 'นาย', 'lionel', 'messi', '1102299312032', 35, '0921233222', 'sadadsd@fsadd.com', '2023-03-11 17:53:11.822611', '2023-03-11 17:53:11.822611', 2, '2022-03-12 13:00:00'),
(17, 'นาย', 'lionel', 'messi', '1102299312032', 35, '0921233222', 'sadadsd@fsadd.com', '2023-03-11 17:53:13.542251', '2023-03-11 17:53:13.542251', 2, '2022-03-12 13:00:00'),
(18, 'นาย', 'lionel', 'messi', '1102299312032', 35, '0921233222', 'sadadsd@fsadd.com', '2023-03-11 18:17:26.617911', '2023-03-11 18:17:26.617911', 2, '2022-03-12 13:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `register_vaccine`
--
ALTER TABLE `register_vaccine`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `hospital_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `register_vaccine`
--
ALTER TABLE `register_vaccine`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
