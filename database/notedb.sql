CREATE DATABASE noteslist;

USE noteslist;

CREATE TABLE list (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(70),
    body VARCHAR(255),
    time_date DATETIME,
    PRIMARY KEY (id)
);