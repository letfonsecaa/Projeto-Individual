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
correta enum('a', 'b', 'c') not null
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


insert into usuario
values (null,'leticia','leticia@gmail.com','9685@Let');

-- Inserts para a tabela questao
INSERT INTO questao (pergunta, alternativa_a, alternativa_b, alternativa_c, correta)
VALUES 
('Qual é o objetivo da transição capilar?',
 'Mudar o padrão de beleza predominante.',
 'Promover o uso de procedimentos químicos nos cabelos.',
 'Permitir que os cabelos naturais cresçam.',
 'c'),

('O que é o "Big Chop" durante a transição capilar?',
 'Um estilo de penteado.',
 'Um corte radical para remover partes alisadas dos fios.',
 'Uma técnica de texturização.',
 'b'),

('Quais são os desafios comuns enfrentados durante a transição capilar?',
 'Crescimento dos fios, dualidade de texturas e fragilidade capilar.',
 'Tons de cabelo, estilos de penteados e tipos de produtos.',
 'Comprimento dos fios, cor natural e densidade capilar.',
 'a'),

('Qual é uma estratégia para lidar com a dupla textura durante a transição capilar?',
 'Penteados como tranças e coques.',
 'Aumentar a frequência de lavagem dos cabelos.',
 'Aplicar produtos químicos para alisar os fios.',
 'a'),

('Qual técnica é usada para definir os cachos de forma mais estruturada?',
 'Fitagem.',
 'Dedoliss.',
 'Twist.',
 'a'),

('O que envolve a técnica de "Dedoliss"?',
 'Separar o cabelo em mechas finas e aplicar um creme de pentear.',
 'Torcer duas mechas de cabelo uma sobre a outra.',
 'Enrolar pequenas seções de cabelo em coques.',
 'c'),

('Qual é a importância de cortar periodicamente as partes alisadas dos cabelos durante a transição capilar?',
 'Para aumentar a fragilidade capilar.',
 'Para manter a dupla textura dos fios.',
 'Para eliminar gradualmente a parte alisada e facilitar a adaptação aos fios naturais.',
 'c'),

('Por que é recomendado não lavar os cabelos cacheados todos os dias?',
 'Para aumentar a oleosidade natural dos fios.',
 'Para evitar ressecamento dos fios, especialmente as pontas.',
 'Porque cabelos cacheados não precisam de hidratação.',
 'b'),

('Qual é a recomendação para secar os cabelos cacheados?',
 'Secar com uma toalha de banho.',
 'Utilizar um tecido 100% algodão.',
 'Utilizar um secador em temperatura alta.',
 'b'),

('Qual é o principal objetivo do cronograma capilar?',
 'Promover a mudança de textura dos cabelos.',
 'Hidratar, nutrir e reconstruir os fios.',
 'Manter os cabelos úmidos o tempo todo.',
 'b');

-- Inserts para a tabela resposta_usuario
INSERT INTO resposta_usuario (resposta, correta, fk_usuario, fk_questao)
VALUES 
('c', true, 1, 1), -- Resposta correta para a primeira pergunta
('b', true, 1, 2), -- Resposta correta para a segunda pergunta
('a', true, 1, 3), -- Resposta correta para a terceira pergunta
('a', true, 1, 4), -- Resposta correta para a quarta pergunta
('a', true, 1, 5), -- Resposta correta para a quinta pergunta
('c', true, 1, 6), -- Resposta correta para a sexta pergunta
('c', true, 1, 7), -- Resposta correta para a sétima pergunta
('b', true, 1, 8), -- Resposta correta para a oitava pergunta
('b', true, 1, 9), -- Resposta correta para a nona pergunta
('b', true, 1, 10); -- Resposta correta para a décima pergunta


select * from usuario;


select u.idUsuario, COUNT(*) as total_pontos
from resposta_usuario ru inner join usuario u on ru.fk_usuario = u.idUsuario
where correta = true
group by idUsuario;





