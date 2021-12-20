ALTER TABLE `poker`.`droit` 
ADD UNIQUE INDEX `nom_droit_UNIQUE` (`nom_droit` ASC) VISIBLE;
;

ALTER TABLE `poker`.`droits_utilisateurs` 
ADD UNIQUE INDEX `id_droit__utilisateurUNIQUE` (`id_droit`,`id_utilisateur`) VISIBLE

ALTER TABLE `poker`.`utilisateur` 
ADD UNIQUE INDEX `pseudo_utilisateur_email_UNIQUE` (`pseudo_utilisateur`,`email_utilisateur` ) VISIBLE;

ALTER TABLE `poker`.`manche` 
ADD UNIQUE INDEX `name_data__UNIQUE` (`nom_manche`,`date_manche` ) VISIBLE;