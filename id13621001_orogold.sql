-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2020 at 01:06 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id13621001_orogold`
--

-- --------------------------------------------------------

--
-- Table structure for table `formulario_landing`
--

CREATE TABLE `formulario_landing` (
  `formulario_landing_id` int(11) NOT NULL,
  `formulario_landing_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `formulario_landing_email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `formulario_landing_phone` bigint(20) NOT NULL,
  `formulario_landing_date_register` timestamp NOT NULL DEFAULT current_timestamp(),
  `formulario_landing_date_chaged` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `formulario_landing_origen` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formulario_landing`
--
ALTER TABLE `formulario_landing`
  ADD PRIMARY KEY (`formulario_landing_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formulario_landing`
--
ALTER TABLE `formulario_landing`
  MODIFY `formulario_landing_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
