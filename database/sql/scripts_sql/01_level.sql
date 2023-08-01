CREATE TABLE `level`
( 
    `id_level` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
    `small_blind` INT NOT NULL , `big_blind` INT NOT NULL ,
     `timer` TIME NOT NULL , `default_level` BOOLEAN NOT NULL , 
     PRIMARY KEY
(`id_level`))