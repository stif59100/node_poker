ALTER TABLE droits_utilisateurs ADD FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur);
ALTER TABLE droits_utilisateurs ADD FOREIGN KEY (id_droit) REFERENCES droit(id_droit);
ALTER TABLE manche_joueur ADD FOREIGN KEY (id_joueur) REFERENCES utilisateur(id_utilisateur);
ALTER TABLE manche_joueur ADD FOREIGN KEY (id_manche) REFERENCES manche(id_manche);