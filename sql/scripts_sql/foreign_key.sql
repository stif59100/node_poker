ALTER TABLE rights_users ADD FOREIGN KEY (id_user) REFERENCES user(id_user);
ALTER TABLE rights_users ADD FOREIGN KEY (id_right) REFERENCES rights(id_right);
ALTER TABLE round_player ADD FOREIGN KEY (id_player) REFERENCES user(id_user);
ALTER TABLE round_player ADD FOREIGN KEY (id_round) REFERENCES round(id_round);
ALTER TABLE level_round ADD FOREIGN KEY (id_level) REFERENCES level(id_level);
ALTER TABLE level_round ADD FOREIGN KEY (id_round) REFERENCES round(id_round);
ALTER TABLE token ADD FOREIGN KEY (id_user) REFERENCES user(id_user);