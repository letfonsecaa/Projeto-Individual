-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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



create table if not exists questao (
idQuestao int primary key auto_increment,
pergunta varchar(500),
alternativa_a varchar(500) not null,
alternativa_b varchar(500) not null,
alternativa_c varchar(500) not null,
alternativa_d varchar(500) not null,
correta char(1) not null check (correta in ('a', 'b', 'c', 'd')),
fk_quiz int,
foreign key (fk_quiz) references quiz(idQuiz)
);



insert into questao (pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, correta,fk_quiz)
values
    ("Qual é o objetivo da transição capilar?",
    "Mudar o padrão de beleza predominante",
    "Promover o uso de procedimentos químicos nos cabelos",
    "Permitir que os cabelos naturais cresçam",
    "Reduzir a diversidade de estilos capilares",
    "c",null),
    
    ("O que é o Big Chop durante a transição capilar?",
    "Um corte radical para remover partes alisadas dos fios",
    "Um estilo de penteado",
    "Uma técnica de texturização",
    "Um método para alisar temporariamente os cabelos",
    "a",null),

    ("Quais são os desafios comuns enfrentados durante a transição capilar?",
    "Crescimento dos fios, dualidade de texturas e fragilidade capilar",
    "Tons de cabelo, estilos de penteados e tipos de produtos",
    "Comprimento dos fios, cor natural e densidade capilar",
    "Aumento da resistência dos fios à umidade",
    "a",null),

    ("Qual é a melhor estratégia para lidar com a dupla textura durante a transição capilar?",
    "Penteados como tranças e coques",
    "Aumentar a frequência de lavagem dos cabelos",
    "Aplicar produtos químicos para alisar os fios",
    "Alisar regularmente os cabelos com chapinha",
    "a",null),

    ("Qual técnica é usada para definir os cachos de forma mais estruturada?",
    "Dedoliss",
    "Twist",
    "Plopping",
    "Fitagem",
    "d",null),

    ("O que envolve a técnica de 'Dedoliss'?",
    "Separar o cabelo em mechas finas e aplicar um creme de pentear",
    "Enrolar pequenas seções de cabelo em coques",
    "Torcer duas mechas de cabelo uma sobre a outra",
    "Utilizar chapinha para criar ondas suaves",
    "b",null),

    ("Qual é a importância de cortar periodicamente as partes alisadas dos cabelos durante a transição capilar?",
    "Para aumentar a fragilidade capilar",
    "Para manter a dupla textura dos fios",
    "Para manter a diversidade de texturas nos cabelos",
    "Para eliminar gradualmente a parte alisada e facilitar a adaptação aos fios naturais",
    "d",null),

    ("Por que é recomendado não lavar os cabelos cacheados todos os dias?",
    "Para aumentar a oleosidade natural dos fios",
    "Porque cabelos cacheados não precisam de hidratação",
    "Para evitar ressecamento dos fios, especialmente as pontas",
    "Para estimular o crescimento mais rápido dos fios",
    "c",null),

    ("Qual é a recomendação para secar os cabelos cacheados?",
    "Secar com uma toalha de banho",
    "Deixar os cabelos secarem naturalmente",
    "Utilizar um secador em temperatura alta",
    "Passar chapinha para secar seu comprimento",
    "b",null),

    ("Qual é o principal objetivo do cronograma capilar?",
    "Hidratar, nutrir e reconstruir os fios",
    "Promover a mudança de textura dos cabelos",
    "Manter os cabelos úmidos o tempo todo",
    "Alterar permanentemente a estrutura dos cabelos",
    "a",null);


select * from usuario;
select * from questao;
select * from quiz;


SELECT 
	    pontuacao as pontos,
       u.nome as nome
FROM quiz q INNER JOIN usuario u ON q.fkUsuario = u.idUsuario
ORDER BY pontos DESC LIMIT 8;

SELECT ROUND(AVG(pontuacao),1) as média from quiz;

    SELECT fkUsuario, 
    pontuacao as pontos, 
    DATE_FORMAT(data_hora,'%d/%m/%Y %H:%i') as momento
    FROM quiz
    WHERE fkUsuario = fkUsuario
    ORDER BY momento DESC LIMIT 8;



 
    
 
















