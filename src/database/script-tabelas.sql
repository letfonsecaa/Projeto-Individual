-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database letcurly;
use letcurly;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null,
senha varchar(50) not null
);

select * from usuario;
