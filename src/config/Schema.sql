CREATE DATABASE movies_app CHARACTER SET utf8 COLLATE utf8_spanish_ci;

USE movies_app;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    description TEXT,
    release_date DATE,
    duration INT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
