-- Active: 1759236905510@@127.0.0.1@5432@expenses
create database expenses;
create table expenses (id serial primary key, category varchar not null, amount numeric not null, description text, created_at timestamptz default now(), updated_at TimeStamptz default now());

select * from expenses;