ALTER TABLE `poker`.`rights`
ADD UNIQUE INDEX `name_right_UNIQUE`
(`name_right` ASC) VISIBLE;

ALTER TABLE `poker`.`rights_users`
ADD UNIQUE INDEX `id_right__userUNIQUE`
(`id_right`,`id_user`) VISIBLE;

ALTER TABLE `poker`.`user`
ADD UNIQUE INDEX `pseudo_user_email_UNIQUE`
(`pseudo_user`,`email_user` ) VISIBLE;

ALTER TABLE `poker`.`round`
ADD UNIQUE INDEX `name_data__UNIQUE`
(`name_round`,`date_round` ) VISIBLE;