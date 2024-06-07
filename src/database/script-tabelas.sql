-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
drop database letcurly;
create database if not exists letcurly;
use letcurly;

create table if not exists usuario (
idUsuario int primary key auto_increment unique key,
nome varchar(50) not null,
email varchar(100) not null unique key,
senha varchar(50) not null 
);

create table if not exists quiz (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);



select * from usuario;
select * from quiz;


SELECT 
	    pontuacao as pontos,
       u.nome as nome
FROM quiz q INNER JOIN usuario u ON q.fkUsuario = u.idUsuario
ORDER BY pontos DESC LIMIT 8;

SELECT ROUND(AVG(pontuacao),1) as média from quiz;







 
    
 
















