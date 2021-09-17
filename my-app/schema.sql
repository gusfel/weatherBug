DROP DATABASE IF EXISTS weather ;

CREATE DATABASE weather;

\c weather;

DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id serial PRIMARY KEY,
  entry VARCHAR (100) NOT NULL,
  found BOOLEAN NOT NULL,
  created TIMESTAMP NOT NULL
);