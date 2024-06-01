var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/obterPontuacao", function (req, res) {
    usuarioController.obterPontuacao(req, res);
})

router.get("/obterPontos", function (req, res) {
    usuarioController.obterPontos(req, res);
});

router.get("/obterMedia", function (req, res) {
    usuarioController.obterMedia(req, res);
});


module.exports = router;