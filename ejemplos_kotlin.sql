-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-02-2023 a las 13:38:03
-- Versión del servidor: 8.0.32-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3-4ubuntu2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejemplos_kotlin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coordenadas`
--

CREATE TABLE `coordenadas` (
  `id_usuario` int NOT NULL,
  `identificador` tinytext COLLATE utf8mb3_spanish2_ci NOT NULL,
  `latitud` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `longitud` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `ultima_mod` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `coordenadas`
--

INSERT INTO `coordenadas` (`id_usuario`, `identificador`, `latitud`, `longitud`, `ultima_mod`) VALUES
(1, 'CANCUN', '21.1213285', '-86.9192744', '2017-08-31'),
(2, 'COZUMEL', '20.504991', '-86.957479', '2017-09-20'),
(8, 'TULUM', '20.210676', '-87.464519', '2017-08-12'),
(18, 'Z.A. TULUM', '20.2152972', '-87.429833', '2017-08-25'),
(312, 'PLAYA COZUMEL P. MORENA', '20.3999834', '-86.8783463', '2020-05-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `correo` tinytext COLLATE utf8mb3_spanish2_ci NOT NULL,
  `contra` tinytext COLLATE utf8mb3_spanish2_ci NOT NULL,
  `tipo` tinyint NOT NULL,
  `id_sesion` tinytext COLLATE utf8mb3_spanish2_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `correo`, `contra`, `tipo`, `id_sesion`) VALUES
(1, 'correoprueba@gmail.com', 'NWE0MTQ5N2M2NTc3ODg5Njg5NWI1YmM2YWE0YmQxYTMzMGM5MzRmOQ==', 1, NULL),
(2, 'correoprueba2@gmail.com', 'NWE0MTQ5N2M2NTc3ODg5Njg5NWI1YmM2YWE0YmQxYTMzMGM5MzRmOQ==', 1, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coordenadas`
--
ALTER TABLE `coordenadas`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
