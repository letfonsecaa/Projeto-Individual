-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/drop database letcurly;
create database if not exists letcurly;
use letcurly;

create table if not exists usuario (
idUsuario int primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null,
senha varchar(50) not null
);

create table if not exists questao (
idQuestao int primary key auto_increment,
pergunta varchar(500),
alternativa_a text not null,
alternativa_b text not null,
alternativa_c text not null,
alternativa_d text not null,
correta enum('a', 'b', 'c','d') not null
);

create table if not exists resposta_usuario (
idResposta int primary key auto_increment,
resposta char(1) not null,
data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
correta boolean,
fk_usuario int,
fk_questao int,
foreign key (fk_usuario) references usuario(idUsuario),
foreign key (fk_questao) references questao(idQuestao)
);


insert into questao (pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, correta)
values
    ("Qual é o objetivo da transição capilar?",
    "Mudar o padrão de beleza predominante",
    "Promover o uso de procedimentos químicos nos cabelos",
    "Permitir que os cabelos naturais cresçam",
    "Reduzir a diversidade de estilos capilares",
    "c"),
    
    ("O que é o Big Chop durante a transição capilar?",
    "Um corte radical para remover partes alisadas dos fios",
    "Um estilo de penteado",
    "Uma técnica de texturização",
    "Um método para alisar temporariamente os cabelos",
    "a"),

    ("Quais são os desafios comuns enfrentados durante a transição capilar?",
    "Crescimento dos fios, dualidade de texturas e fragilidade capilar",
    "Tons de cabelo, estilos de penteados e tipos de produtos",
    "Comprimento dos fios, cor natural e densidade capilar",
    "Aumento da resistência dos fios à umidade",
    "a"),

    ("Qual é a melhor estratégia para lidar com a dupla textura durante a transição capilar?",
    "Penteados como tranças e coques",
    "Aumentar a frequência de lavagem dos cabelos",
    "Aplicar produtos químicos para alisar os fios",
    "Alisar regularmente os cabelos com chapinha",
    "a"),

    ("Qual técnica é usada para definir os cachos de forma mais estruturada?",
    "Dedoliss",
    "Twist",
    "Plopping",
    "Fitagem",
    "d"),

    ("O que envolve a técnica de 'Dedoliss'?",
    "Separar o cabelo em mechas finas e aplicar um creme de pentear",
    "Enrolar pequenas seções de cabelo em coques",
    "Torcer duas mechas de cabelo uma sobre a outra",
    "Utilizar chapinha para criar ondas suaves",
    "b"),

    ("Qual é a importância de cortar periodicamente as partes alisadas dos cabelos durante a transição capilar?",
    "Para aumentar a fragilidade capilar",
    "Para manter a dupla textura dos fios",
    "Para manter a diversidade de texturas nos cabelos",
    "Para eliminar gradualmente a parte alisada e facilitar a adaptação aos fios naturais",
    "d"),

    ("Por que é recomendado não lavar os cabelos cacheados todos os dias?",
    "Para aumentar a oleosidade natural dos fios",
    "Porque cabelos cacheados não precisam de hidratação",
    "Para evitar ressecamento dos fios, especialmente as pontas",
    "Para estimular o crescimento mais rápido dos fios",
    "c"),

    ("Qual é a recomendação para secar os cabelos cacheados?",
    "Secar com uma toalha de banho",
    "Deixar os cabelos secarem naturalmente",
    "Utilizar um secador em temperatura alta",
    "Passar chapinha para secar seu comprimento",
    "b"),

    ("Qual é o principal objetivo do cronograma capilar?",
    "Hidratar, nutrir e reconstruir os fios",
    "Promover a mudança de textura dos cabelos",
    "Manter os cabelos úmidos o tempo todo",
    "Alterar permanentemente a estrutura dos cabelos",
    "a");


/*-- Inserts para a tabela resposta_usuario
INSERT INTO resposta_usuario (resposta, correta, fk_usuario, fk_questao)
VALUES 
('c', true, 1, 1), 
('b', true, 1, 2), 
('a', true, 1, 3),
('a', true, 1, 4), 
('a', true, 1, 5), 
('c', true, 1, 6), 
('c', true, 1, 7), 
('b', true, 1, 8), 
('b', true, 1, 9), 
('b', true, 1, 10); */


select * from usuario;
select * from questao;


select u.idUsuario, count(*) as total_pontos
from resposta_usuario ru inner join usuario u on ru.fk_usuario = u.idUsuario
where correta = true
group by idUsuario;










