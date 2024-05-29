var quizModel = require("../models/quizModel");

function obterPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send();
    } else if (fkUsuario == undefined) {
        res.status(400).send();
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        console.log('Obtive Pontuação')
        quizModel.obterPontuacao(pontuacao,fkUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    obterPontuacao
}