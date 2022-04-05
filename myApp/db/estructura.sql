create table `personajes` (
	`id` int(11) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    `imagen` varchar(255),
    `nombre` varchar(255) not null,
    `edad` int(11),
    `peso` int(11),
    `historia` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

create table `generos` (
	`id` int(11) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    `nombre` varchar(255) not null,
    `imagen` varchar(255) not null,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

