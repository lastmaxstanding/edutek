CREATE DATABASE roster_db;

USE roster_db;

CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT,
    class_code INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    grade VARCHAR(2),
    behavior INT,
    beh_comments TEXT(600),
    random_seating VARCHAR(30),
    ascending_seats VARCHAR(30),
    descending_seats VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE personnel (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    clearance VARCHAR(30),
    email VARCHAR(30),
    PRIMARY KEY (id)
);