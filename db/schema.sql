### Schema

DROP DATABASE IF EXISTS bucket_listDB;
CREATE DATABASE bucket_listDB;
USE bucket_listDB;


CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  task VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);