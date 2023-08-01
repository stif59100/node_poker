ALTER TABLE rights_users ADD CONSTRAINT FK_User_right FOREIGN KEY (id_user) REFERENCES user(id_user) ON DELETE CASCADE;
ALTER TABLE rights_users ADD CONSTRAINT FK_Right_user FOREIGN KEY (id_right) REFERENCES rights(id_right);
ALTER TABLE round_player ADD CONSTRAINT FK_User_round FOREIGN KEY (id_user) REFERENCES user(id_user) ON DELETE CASCADE ;
ALTER TABLE round_player ADD CONSTRAINT FK_Round_player FOREIGN KEY (id_round) REFERENCES round(id_round) ON DELETE CASCADE On UPDATE CASCADE  ;
ALTER TABLE level_round ADD CONSTRAINT FK_Level FOREIGN KEY (id_level) REFERENCES `level`
(id_level);
ALTER TABLE level_round ADD CONSTRAINT FK_round_level FOREIGN KEY (id_round) REFERENCES round(id_round);
ALTER TABLE championship_round ADD CONSTRAINT FK_round FOREIGN KEY (round_id) REFERENCES round(id_round);
ALTER TABLE championship_round ADD CONSTRAINT FK_championship FOREIGN KEY (championship_id) REFERENCES championship(id);
ALTER TABLE token ADD CONSTRAINT FK_User_token FOREIGN KEY (id_user) REFERENCES user(id_user);