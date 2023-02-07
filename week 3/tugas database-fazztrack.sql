-- create database db_latihan001

CREATE TABLE `db_latihan001`.`tbl_users`
 (`Id` INT(11) NOT NULL , `username` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL ,
  `Password` VARCHAR(255) NOT NULL , `Address` TEXT NOT NULL , PRIMARY KEY (`Id`))
 ENGINE = InnoDB; 

 --menampilkan data table query SELECT

 SELECT `Id`, `username`, `email`, `Password`, `Address` FROM `tbl_users`

 --Insert data ke table yang sudah dibuat

 INSERT INTO `tbl_users` (`Id`, `username`, `email`, `Password`, `Address`) 
 VALUES ('1', 'kokocrunch08', 'rikohadipratama09@gmail.com', 'Arkadian', 'Graha Rafflesia 2 Blok F12/20') 

 --Mengupdate data table

 UPDATE `tbl_users`
  SET `Id`='2',`username`='riko',`email`='rikohadipratama09@gmail.com',
  `Password`='Arkaidan',`Address`='Graha Pesona' 

  -- Delete Data dari database

DELETE FROM tbl_users WHERE `tbl_users`.`Id` = 1
