INSERT INTO `user`(
 `name_user`,
 `firstname_user`,
 `pseudo_user`,
 `email_user`,
 `password_user`)
 VALUES (
 'delhoute',
 'sandy',
 'biloute',
 'sdelhoute@gmail.com',
 sha1('biloute'));
 
-- round
INSERT INTO `round`( 
`date_round`, 
`name_round`, 
`points_attributs`,
 `cloture`, 
 `ouverture`) 
VALUES (NOW(),'test',2,1,0);

-- right
INSERT INTO `right` (`name_right`) VALUES
('add_round'),
('delete_round'),
('update_round'),
('register_round'),
('unregister_round'),
('open_round'),
('close_round');
INSERT INTO `round_player`(`id_round`, `id_player`, `points`) 
VALUES 
(
    (select id_round FROM round where name_round = 'test'),
    (select id_user FROM user where pseudo_user = 'biloute'),
 0);

 -- right_users
INSERT INTO `rights_users`( `id_right`, `id_user`) VALUES 
((SELECT id_right FROM right WHERE name_right = 'cloture_round'),
(SELECT id_user FROM user WHERE pseudo_user = 'biloute'));
 