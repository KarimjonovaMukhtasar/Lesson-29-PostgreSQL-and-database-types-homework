-- Active: 1759236905510@@127.0.0.1@5432@blog_db
CREATE DATABASE blog_db;
create table users (id serial primary key, 
first_name varchar(255) not null, 
email text UNIQUE not null, 
last_name varchar(255) not null, password varchar(30) unique, 
phone_number text, address text);
select * from users;

Create table posts (id serial PRIMARY key, 
title text not null, content text not null, 
slug text UNIQUE, 
user_id INT, constraint fk_userid FOREIGN KEY (user_id) REFERENCES users(id));
select * from posts; 

create table comments(id serial primary key, 
content text not null, 
post_id int REFERENCES posts(id),
user_id int REFERENCES users(id));

select * from comments;
