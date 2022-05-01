create database disney_db;
use disney_db;

DROP TABLE IF EXISTS `personajes`;
create table `personajes` (
	`id` int(11) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    `imagen` varchar(255),
    `nombre` varchar(255) not null,
    `edad` int(11),
    `peso` int(11),
    `historia` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

insert into personajes (id, imagen, nombre, edad,peso)
values (1,'https://upload.wikimedia.org/wikipedia/commons/a/a2/Macaulay_Culkin_1991_B.jpg','Macaulay Culkin',41,30),
(2,'https://static.wikia.nocookie.net/disney/images/2/2d/Bambi.png/revision/latest/top-crop/width/360/height/450?cb=20131108172027&path-prefix=es','Bambi',6,15),
(3,'https://www.cinemascomics.com/wp-content/uploads/2020/12/black-panther-2-2022.jpg','Chadwick Boseman',43,75),
(4,'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lightning_McQueen_%2834615708803%29.jpg/1200px-Lightning_McQueen_%2834615708803%29.jpg','Rayito McQueen',18,1500),
(5,'https://static.wikia.nocookie.net/disney/images/c/c0/Profile_-_Joe_Gardner.webp/revision/latest?cb=20210307142115&path-prefix=es','Joe Gardner',50,75);


DROP TABLE IF EXISTS `generos`;
create table `generos` (
	`id` int(11) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    `nombre` varchar(255) not null,
    `imagen` varchar(255) not null,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

insert into generos
values (1, 'Comedia', 'https://i.ytimg.com/vi/hvlOk1jzAms/maxresdefault.jpg'),
(2, 'Drama', 'https://i.ytimg.com/vi/hvlOk1jzAms/maxresdefault.jpg'),
(3, 'Accion', 'https://i.ytimg.com/vi/hvlOk1jzAms/maxresdefault.jpg'),
(4, 'Infantil', 'https://i.ytimg.com/vi/hvlOk1jzAms/maxresdefault.jpg'),
(5, 'Animacion', 'https://i.ytimg.com/vi/hvlOk1jzAms/maxresdefault.jpg');


DROP TABLE IF EXISTS `peliculas`;
set @@global.sql_mode= '';

create table `peliculas` (
	`id` int(11) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    `imagen` varchar(255),
    `titulo` varchar(255) not null,
    `fechaCreacion` DATE not null,
    `calificacion` DECIMAL(5) not null,
    `genero_id` int UNSIGNED not null,
    PRIMARY KEY (`id`),
    KEY `genero_id_foreign` (`genero_id`),
	CONSTRAINT `genero_id_foreign` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



insert into peliculas
values (1,'https://static.wikia.nocookie.net/doblaje/images/5/50/MiPobreAngelito.jpg/revision/latest?cb=20150517192150&path-prefix=es','Mi Pobre Angelito','1990-11-10',2,1),
(2,'https://static.wikia.nocookie.net/disney/images/4/47/Bambi_Walt_Disney.jpg/revision/latest?cb=20210808191619&path-prefix=es','Bambi','1942-12-09',5,2),
(3,'https://static.wikia.nocookie.net/marveldatabase/images/9/94/Black_Panther_%28film%29_poster_003.jpg/revision/latest?cb=20171016144930','Pantera Negra','2018-08-15',4,3),
(4,'https://static.wikia.nocookie.net/doblaje/images/0/09/200px-London-Disney_Store.jpg/revision/latest?cb=20171205004444&path-prefix=es','Cars','2006-06-29',5,4),
(5,'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972','Soul','2020-10-11',3,5);


DROP TABLE IF EXISTS `peliculas_personajes`;
CREATE TABLE `peliculas_personajes` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `peliculas_id` int(11) NOT NULL,
  `personajes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `peliculas_id_foreign` (`peliculas_id`),
  CONSTRAINT `peliculas_id_foreign` FOREIGN KEY (`id`) REFERENCES `peliculas` (`id`),
  KEY `personajes_id_foreign`(`personajes_id`),
  CONSTRAINT `personajes_id_foreign` FOREIGN KEY (`id`) REFERENCES `personajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `peliculas_personajes` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

