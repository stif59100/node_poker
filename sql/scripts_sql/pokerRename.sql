-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 03 mars 2022 à 16:22
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

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

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `inscription_player` (`aiIdClient` INT)  BEGIN

  INSERT INTO users(name_users, firstname_users, pseudo_users, email_users, password_users) VALUES ('?','?','?','?','?');

  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Selection_Player_Tournament` ()  SELECT users.name_users,
       users.firstname_users,
       tournament_player.id_users,
       tournament.id_tournament,
       tournament_player.id_tournament_player,
       tournament.date_tournament,
       tournament.name_tournament
  FROM (poker.tournament_player tournament_player
        INNER JOIN poker.tournament tournament
           ON (tournament_player.id_tournament = tournament.id_tournament))
       INNER JOIN poker.users users ON (tournament_player.id_users = users.id_users)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectOneusers` (IN `idusers` INT(255))  SELECT * FROM users WHERE id_users=idusers$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectUsers` ()  SELECT * FROM users$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateUsers` (IN `nameUsers` VARCHAR(250), IN `firstName` VARCHAR(250), IN `pseudoUsers` VARCHAR(250), IN `emailUsers` VARCHAR(250), IN `idUsers` INT(10) UNSIGNED)  UPDATE users SET name_users=nameusers,firstname_users=firstName,pseudo_users=pseudousers,email_users=emailusers WHERE id_users=idusers$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `annual_cotisation`
--

CREATE TABLE `annual_cotisation` (
  `year` date NOT NULL,
  `id_users` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `level`
--

CREATE TABLE `level` (
  `id_level` int(11) UNSIGNED NOT NULL,
  `small_blind` int(11) NOT NULL,
  `big_blind` int(11) NOT NULL,
  `ante` int(11) NOT NULL,
  `timer` time NOT NULL,
  `default_level` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `level_tournament`
--

CREATE TABLE `level_tournament` (
  `id_level_tournament` int(10) UNSIGNED NOT NULL,
  `id_tournament` int(10) UNSIGNED NOT NULL,
  `id_level` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `rights`
--

CREATE TABLE `rights` (
  `id_right` int(11) UNSIGNED NOT NULL,
  `name_right` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rights`
--

INSERT INTO `rights` (`id_right`, `name_right`) VALUES
(1, 'add_tournament'),
(2, 'delete_tournament'),
(3, 'update_tournament'),
(4, 'register_tournament'),
(5, 'unregister_tournament'),
(6, 'open_tournament'),
(7, 'close_tournament'),
(8, 'manage_tournament'),
(9, 'launch_tournament');

-- --------------------------------------------------------

--
-- Structure de la table `rights_users`
--

CREATE TABLE `rights_users` (
  `id_right_users` int(11) UNSIGNED NOT NULL,
  `id_right` int(11) UNSIGNED NOT NULL,
  `id_users` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rights_users`
--

INSERT INTO `rights_users` (`id_right_users`, `id_right`, `id_users`) VALUES
(1, 1, 11),
(2, 2, 11),
(3, 3, 11),
(4, 4, 11),
(5, 5, 11),
(6, 6, 11),
(7, 7, 11),
(8, 8, 11),
(9, 9, 11);

-- --------------------------------------------------------

--
-- Structure de la table `tournament`
--

CREATE TABLE `tournament` (
  `id_tournament` int(11) UNSIGNED NOT NULL,
  `date_tournament` date NOT NULL,
  `hour_tournament` time NOT NULL,
  `name_tournament` varchar(100) NOT NULL,
  `points_attributs` int(11) UNSIGNED NOT NULL,
  `close` tinyint(1) NOT NULL DEFAULT 0,
  `open` tinyint(1) NOT NULL DEFAULT 0,
  `max_player` int(11) NOT NULL,
  `buy_in` int(11) NOT NULL,
  `rake` int(11) NOT NULL,
  `stack` int(11) NOT NULL,
  `addon` int(11) NOT NULL,
  `rebuy` int(11) NOT NULL,
  `bounty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tournament`
--

INSERT INTO `tournament` (`id_tournament`, `date_tournament`, `hour_tournament`, `name_tournament`, `points_attributs`, `close`, `open`, `max_player`, `buy_in`, `rake`, `stack`, `addon`, `rebuy`, `bounty`) VALUES
(1, '2021-12-28', '15:00:00', 'première', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(5, '2022-02-02', '00:00:00', 'test', 10, 0, 0, 100, 20, 4, 100000, 10, 0, 0),
(6, '2022-02-09', '15:00:00', 'test', 3, 0, 0, 15, 10, 4, 20000, 10, 10, 5);

-- --------------------------------------------------------

--
-- Structure de la table `tournament_player`
--

CREATE TABLE `tournament_player` (
  `id_tournament` int(11) UNSIGNED NOT NULL,
  `id_users` int(11) UNSIGNED NOT NULL,
  `points` int(11) UNSIGNED NOT NULL,
  `id_tournament_player` int(11) UNSIGNED NOT NULL,
  `nbr_rebuy` int(11) NOT NULL,
  `nbr_addon` int(11) NOT NULL,
  `present` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tournament_player`
--

INSERT INTO `tournament_player` (`id_tournament`, `id_users`, `points`, `id_tournament_player`, `nbr_rebuy`, `nbr_addon`, `present`) VALUES
(5, 11, 0, 46, 0, 0, 0),
(6, 11, 0, 47, 0, 0, 0),
(1, 11, 0, 48, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `token`
--

CREATE TABLE `token` (
  `id_token` int(11) UNSIGNED NOT NULL,
  `token` text NOT NULL,
  `id_users` int(10) UNSIGNED NOT NULL,
  `expired_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_users` int(11) UNSIGNED NOT NULL,
  `name_users` varchar(100) NOT NULL,
  `firstname_users` varchar(100) NOT NULL,
  `pseudo_users` varchar(100) NOT NULL,
  `email_users` varchar(100) NOT NULL,
  `password_users` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `name_users`, `firstname_users`, `pseudo_users`, `email_users`, `password_users`) VALUES
(10, 'beyls', 'christophe', 'chris16_04', 'christophe@beyls.info', 'e7552950263aaf1c832480ab73db9cdcbfd6ecf916041196708fdf1094f802e0'),
(11, 'Vanderstocken', 'Steeve', 'stif59100', 'steeve.vanderstocken@gmail.com', '20fb280c50d6201d323df3faa6c7fa9456e1c7ed51101cc9b16165eaf8bb35ce');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annual_cotisation`
--
ALTER TABLE `annual_cotisation`
  ADD KEY `id_users` (`id_users`);

--
-- Index pour la table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id_level`);

--
-- Index pour la table `level_tournament`
--
ALTER TABLE `level_tournament`
  ADD PRIMARY KEY (`id_level_tournament`),
  ADD KEY `id_level` (`id_level`),
  ADD KEY `id_tournament` (`id_tournament`);

--
-- Index pour la table `rights`
--
ALTER TABLE `rights`
  ADD PRIMARY KEY (`id_right`);

--
-- Index pour la table `rights_users`
--
ALTER TABLE `rights_users`
  ADD PRIMARY KEY (`id_right_users`),
  ADD KEY `id_right` (`id_right`),
  ADD KEY `id_users` (`id_users`);

--
-- Index pour la table `tournament`
--
ALTER TABLE `tournament`
  ADD PRIMARY KEY (`id_tournament`);

--
-- Index pour la table `tournament_player`
--
ALTER TABLE `tournament_player`
  ADD PRIMARY KEY (`id_tournament_player`),
  ADD KEY `id_player` (`id_users`),
  ADD KEY `id_tournament` (`id_tournament`);

--
-- Index pour la table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id_token`),
  ADD UNIQUE KEY `token` (`token`) USING HASH,
  ADD KEY `id_users` (`id_users`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD UNIQUE KEY `pseudo_users` (`pseudo_users`),
  ADD UNIQUE KEY `email_users` (`email_users`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `level`
--
ALTER TABLE `level`
  MODIFY `id_level` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `level_tournament`
--
ALTER TABLE `level_tournament`
  MODIFY `id_level_tournament` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `rights`
--
ALTER TABLE `rights`
  MODIFY `id_right` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `rights_users`
--
ALTER TABLE `rights_users`
  MODIFY `id_right_users` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `tournament`
--
ALTER TABLE `tournament`
  MODIFY `id_tournament` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `tournament_player`
--
ALTER TABLE `tournament_player`
  MODIFY `id_tournament_player` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT pour la table `token`
--
ALTER TABLE `token`
  MODIFY `id_token` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annual_cotisation`
--
ALTER TABLE `annual_cotisation`
  ADD CONSTRAINT `annual_cotisation_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id_users`);

--
-- Contraintes pour la table `level_tournament`
--
ALTER TABLE `level_tournament`
  ADD CONSTRAINT `level_tournament_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `level` (`id_level`),
  ADD CONSTRAINT `level_tournament_ibfk_2` FOREIGN KEY (`id_tournament`) REFERENCES `tournament` (`id_tournament`);

--
-- Contraintes pour la table `rights_users`
--
ALTER TABLE `rights_users`
  ADD CONSTRAINT `rights_users_ibfk_1` FOREIGN KEY (`id_right`) REFERENCES `rights` (`id_right`),
  ADD CONSTRAINT `rights_users_ibfk_2` FOREIGN KEY (`id_users`) REFERENCES `users` (`id_users`);

--
-- Contraintes pour la table `tournament_player`
--
ALTER TABLE `tournament_player`
  ADD CONSTRAINT `tournament_player_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id_users`),
  ADD CONSTRAINT `tournament_player_ibfk_2` FOREIGN KEY (`id_tournament`) REFERENCES `tournament` (`id_tournament`);

--
-- Contraintes pour la table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id_users`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
