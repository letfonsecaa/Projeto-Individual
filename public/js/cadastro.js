function cadastrar() {
     // criando variáveis para receber os valores das inputs
     const nome = document.getElementById("input_nome").value;
     const email = document.getElementById("input_email").value;
     const senha = document.getElementById("input_senha").value;
     const confirmSenha = document.getElementById("input_confirma_senha").value;
 
     // criando váriaveis de verificação com REGEX
     let regexMaiuscula = /[A-Z]/;
     let regexMinuscula = /[a-z]/;
 
     // criando variáveis auxiliares para validação dos campos
     let senhaValidaRegex = false;
     let senhaValidaNumeros = false;
     let senhaValida = false;
     let confirmSenhaValida = false;
     let nomeValido = false;
     let emailValido = false;
 
     // criando variáveis de mensagens

     let camposVazios = "Preencha todos os campos"
     let mensagemErroNome = "O nome deve conter pelo menos três caracteres.";
 
     let mensagemEmailInvalido = `Insira um email válido<br>Ex: leticia@gmail.com`;
 
 
     let mensagemSenhaInvalida = `A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, 
       uma letra minúscula, um caracter numérico e pelo menos um caracter especial <br> (@, #, %, *, ?, $, &, !, -, /).`;
 
     let mensagemErroConfirmSenha = "As senhas devem ser iguais.";
 
     if (
        nome == "" ||
        email == "" ||
        senha == "" ||
        confirmSenha == "" )
        {
            document.getElementById("card-erro").style.display = 'block';
            document.getElementById("mensagem-erro").innerHTML = camposVazios;
         } else {

     /* ------------------- VERIFICAÇÃO DE NOME ------------------ */
 
     if (nome.length >= 3) {
       nomeValido = true;
     } else {
        document.getElementById("card-erro").style.display = 'block';
       document.getElementById("mensagem-erro").innerHTML = mensagemErroNome;
     }
        
    
 
     /* ------------------ VERIFICAÇÃO DE SENHA ----------------------- */
 
     // testando se os valores da variavel 'senha' contém os valores aceitos pelos REGEX
     if (
       regexMaiuscula.test(senha) &&
       regexMinuscula.test(senha) &&
       senha.length >= 8
     ) {
       senhaValidaRegex = true;
     } else {
        document.getElementById("card-erro").style.display = 'block';
       document.getElementById("mensagem-erro").innerHTML =
         mensagemSenhaInvalida;
     }
 
     // verificando se existem números na senha
 
     for (let contador = 0; contador <= 9; contador++) {
       if (senha.indexOf(`${contador}`) > -1) {
         senhaValidaNumeros = true;
       }
     }
 
     // caso a senha passe no teste de REGEX e números e caracteres especiais */
     if (senhaValidaRegex && senhaValidaNumeros && (senha.indexOf('@') >= 0 ||
     senha.indexOf('#') >= 0 || senha.indexOf('$') >= 0 ||
     senha.indexOf('%') >= 0 || senha.indexOf('&') >= 0 ||
     senha.indexOf('*') >= 0 || senha.indexOf('!') >= 0 ||
     senha.indexOf('?') >= 0 || senha.indexOf('-') >= 0 || senha.indexOf('()') >= 0 || senha.indexOf('/') >= 0)) {
       senhaValida = true;
     } else {
        document.getElementById("card-erro").style.display = 'block';
       document.getElementById("mensagem-erro").innerHTML = mensagemSenhaInvalida;
     }


    



     /* ------------------ VERIFICAÇÃO DESCONFIRMAÇÃO DE SENHA ----------------------- */
 
     if (confirmSenha != senha) {
        document.getElementById("card-erro").style.display = 'block';
       document.getElementById("mensagem-erro").innerHTML =
         mensagemErroConfirmSenha;
     } else {
       confirmSenhaValida = true;
     }
 
     /* ------------------------------ CONFIRMAÇÃO DE EMAIL ------------------------------- */
 
     if (
       email.indexOf("@") > 0 &&
       email.indexOf(".com") >  email.indexOf("@") && (
         email.indexOf(".school") > email.indexOf("@")
         ||  email.indexOf("gmail") > email.indexOf("@") ||
         email.indexOf("hotmail") > email.indexOf("@") ||
         email.indexOf("outlook") > email.indexOf("@"))
     ) {
       emailValido = true;
     } else {
        document.getElementById("card-erro").style.display = 'block';
       document.getElementById("mensagem-erro").innerHTML =
         mensagemEmailInvalido;
     }
    }

   /*  Confirmação de tudo */

    if(nomeValido && emailValido && senhaValida && confirmSenhaValida) {
        document.getElementById("card-erro").style.display = 'none';
        document.getElementById("cadastroSucesso").style.display = "flex";
        document.getElementById("cadastroSucesso").style.animation =
          "cadastroComSucesso";
        document.getElementById("cadastroSucesso").style.animationDuration = "5s";
  
        setTimeout(
          () =>
            (document.getElementById("cadastroSucesso").style.display = "none"),
          4900,
        );
    }

    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirma_senha.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar,
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
            cadastroSucesso.style.display = "flex";

            setTimeout(() => {
              window.location = "./pages/login.html";
            }, "2000");
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });

      return false;
    
      }
  