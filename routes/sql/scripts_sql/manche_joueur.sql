-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 02 déc. 2021 à 14:08
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `poker`
--

-- --------------------------------------------------------

--
-- Structure de la table `manche_joueur`
--

CREATE TABLE `manche_joueur` (
  `id_manche` int(11) UNSIGNED NOT NULL,
  `id_joueur` int(11) UNSIGNED NOT NULL,
  `points` int(11) UNSIGNED NOT NULL,
  `id_manche_joueur` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `manche_joueur`
--
ALTER TABLE `manche_joueur`
  ADD PRIMARY KEY (`id_manche_joueur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `manche_joueur`
--
ALTER TABLE `manche_joueur`
  MODIFY `id_manche_joueur` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO `manche_joueur`(`id_manche`, `id_joueur`, `points`) 
VALUES 
(
    (select id_manche FROM manche where nom_manche = 'test'),
    (select id_utilisateur FROM utilisateur where pseudo_utilisateur = 'biloute'),
 0)
INSERT INTO `manche_joueur`(`id_manche`, `id_joueur`, `points`) 
VALUES 
(
    (select id_manche FROM manche where nom_manche = 'test'),
    (select id_utilisateur FROM utilisateur where pseudo_utilisateur = 'stif'),
 0)
