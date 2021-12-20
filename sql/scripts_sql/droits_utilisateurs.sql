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
-- Structure de la table `droits_utilisateurs`
--

CREATE TABLE `droits_utilisateurs` (
  `id_droit_utilisateur` int(11) UNSIGNED NOT NULL,
  `id_droit` int(11) UNSIGNED NOT NULL,
  `id_utilisateur` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `droits_utilisateurs`
--
ALTER TABLE `droits_utilisateurs`
  ADD PRIMARY KEY (`id_droit_utilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `droits_utilisateurs`
--
ALTER TABLE `droits_utilisateurs`
  MODIFY `id_droit_utilisateur` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `droits_utilisateurs`
--
ALTER TABLE `droits_utilisateurs`
  ADD CONSTRAINT `FK_joueur_id_droit` FOREIGN KEY (`id_droit`) REFERENCES `droit` (`id_droit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `droits_utilisateurs_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id_utilisateur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
