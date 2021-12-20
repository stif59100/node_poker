INSERT INTO `utilisateur`(
 `nom_utilisateur`,
 `prenom_utilisateur`,
 `pseudo_utilisateur`,
 `email_utilisateur`,
 `mot_de_passe_utilisateur`)
 VALUES (
 'delhoute',
 'sandy',
 'biloute',
 'sdelhoute@gmail.com',
 sha1('biloute'));
 
-- manche
INSERT INTO `manche`( 
`date_manche`, 
`nom_manche`, 
`points_attributs`,
 `cloture`, 
 `ouverture`) 
VALUES (NOW(),'test',2,1,0);

-- Droit
INSERT INTO `droit`(`nom_droit`) VALUES ('ajout_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('suppr_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('maj_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('inscription_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('desincription_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('ouverture_manche');
INSERT INTO `droit`(`nom_droit`) VALUES ('cloture_manche');
-- manche joueur
INSERT INTO `manche_joueur`(`id_manche`, `id_joueur`, `points`) 
VALUES 
(
    (select id_manche FROM manche where nom_manche = 'test'),
    (select id_utilisateur FROM utilisateur where pseudo_utilisateur = 'biloute'),
 0);

 -- droit_utilisateurs
INSERT INTO `droits_utilisateurs`( `id_droit`, `id_utilisateur`) VALUES 
((SELECT id_droit FROM droit WHERE nom_droit = 'cloture_manche'),
(SELECT id_utilisateur FROM utilisateur WHERE pseudo_utilisateur = 'biloute'));
 