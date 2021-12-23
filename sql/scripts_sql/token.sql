CREATE TABLE `poker`.`token`
 ( `id_token` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `token` TEXT NOT NULL ,
   `id_user` INT UNSIGNED NOT NULL , 
   `expired_date` DATETIME NOT NULL 
 );