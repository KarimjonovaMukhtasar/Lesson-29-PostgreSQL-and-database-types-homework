create database expenses;
create table expenses (id serial primary key, expense real not null, created_at timestamptz, updated_at TimeStamptz );
