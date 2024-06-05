const comecarQuizButton = document.querySelector(".comecar-quiz")   
const proximaQuestaoButton = document.querySelector(".proxima-questao")
const questaoContainer = document.querySelector(".questao-container")
const questaoTexto = document.querySelector(".questao")
const respostasContainer = document.querySelector(".respostas-container") 
const respostas = document.querySelectorAll(".respostas")

let idUsuario = sessionStorage.ID_USUARIO

let perguntaAtual = 0
let pontuacao = 0

comecarQuizButton.addEventListener("click", iniciarQuiz) // captura o evendo de clique do botão para iniciar o quiz
proximaQuestaoButton.addEventListener("click", proximaPergunta)

function iniciarQuiz() {
  comecarQuizButton.classList.add("hide") // desaparece o botão começar quiz quando clicar nele
  questaoContainer.classList.remove("hide") // retira a classe hide do container das perguntas e assim aparece as perguntas quando clica no botão começar quiz
  proximaPergunta()
}

function proximaPergunta() {
  removerRespostasAnteriores()
  
  if (perguntas.length === perguntaAtual) { // verificação se está na ultima pergunta e se sim irá para a função do final do quiz,
                                            // e o return é para não rodar o resto da função proximaPergunta caso entre no if
    return finalQuiz()
  }

  questaoTexto.textContent = perguntas[perguntaAtual].pergunta //exibe a pergunta atual
  perguntas[perguntaAtual].respostas.forEach(respostas => { 
    const novaResposta = document.createElement("button") // elemento button para cada resposta 

    novaResposta.classList.add("button", "respostas") //adicionando as duas classes das respostas

    novaResposta.textContent = respostas.text 
    if (respostas.correct) {                                 /* verificação para saber se a resposta é a correta, no caso a variavel correct igual true,
                                                            se for capturamos essa informação pelo dataset para verificar se o usuário escolheu a questão correta */
    novaResposta.dataset.correct = respostas.correct 
    }
    respostasContainer.appendChild(novaResposta) // adicionar o elemento novaResposta no container respostasContainer

    novaResposta.addEventListener("click", respostaEscolhida) //ouvidor de eventos tipo clique para quando o usuario clicá-la roda a função respostaEscilhinda
  })
}

function removerRespostasAnteriores() { // função para remover a pergunta anterior, e aparecer a nova questão
  while(respostasContainer.firstChild) { // o while vai executar uma operação enquanto a condição nele descrita não for verdadeira. 
    
   respostasContainer.removeChild(respostasContainer.firstChild)  /* se tem o elemento filho (respostas) no container (respostas-container) irá removê-lo até 
                                                                    que o container não tenha mais nenhuma resposta*/
  }
  proximaQuestaoButton.classList.add("hide") // desaparece o botão de próxima pergunta quando é avançado para próxima pergunta
}

function respostaEscolhida(event) {
  const respostaClicada = event.target  // o even retorna qual foi o botão clicado 

  if (respostaClicada.dataset.correct) {   // verificação se caso o usuário escolha a resposta correta é adicionado 1 ponto na contagem da pontuação
    pontuacao++
  } 

  document.querySelectorAll(".respostas").forEach(button => {
    button.disabled = true // desabilita  o click nos botões quando o usuário já escolheu a sua resposta

  })
  
  proximaQuestaoButton.classList.remove("hide") // remove a classe hide quando o usuário já escolheu a resposta, e assim retorna o botão de próxima pergunta
  perguntaAtual++
}

function finalQuiz() {
  const totalPerguntas= perguntas.length
  const performance = Math.floor(pontuacao * 100 / totalPerguntas)
  
  let mensagem = "";
  let color = "green";

  
  if(performance >= 90) {
    mensagem= "Excelente :)"
  } else if(performance >= 70) {
    mensagem = "Muito bom :)"
 } else if (performance >= 50) {
  color = "red";
  mensagem = "Bom"
 } else {
  color = "red";
  mensagem = "Pode melhorar :("
 }

  questaoContainer.innerHTML = 
  `
    <div class="mensagem-final">
      Você acertou <p style="color:${color}; font-size:40px;">${pontuacao}</p> de ${totalPerguntas} questões!<br>
      Sua performace foi de <br><br><p style="color:${color}; font-size:40px;">${performance}%</p><br>
      <span>Resultado: ${mensagem}</span>
    </div>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `


  b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

  var idUsuarioVar = sessionStorage.ID_USUARIO;

  fetch("/usuarios/obterPontuacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      fkUsuarioServer: idUsuarioVar,
      pontuacaoServer: pontuacao,
  
    }),
  })
  .then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {

      setTimeout(() => {
        window.location = "dashboard.html";
      }, "2000");

    } else {
      throw "Houve um erro ao tentar realizar o cadastro!";
    }
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });
}



// Lista das perguntas e suas possiveis respostas feita com array(vetor)

const perguntas = [
  {
    pergunta: "1) Qual é o objetivo da transição capilar?",
    respostas: [
      { text: "Mudar o padrão de beleza predominante", correct: false },
      { text: "Promover o uso de procedimentos químicos nos cabelos", correct: false },
      { text: "Permitir que os cabelos naturais cresçam", correct: true },
      { text: "Reduzir a diversidade de estilos capilares", correct: false },
    ]
  },
  {
    pergunta: "2) O que é o Big Chop durante a transição capilar?",
    respostas: [
      { text: "Um corte radical para remover partes alisadas dos fios", correct: true },
      { text: "Um estilo de penteado", correct: false },
      { text: "Uma técnica de texturização", correct: false },
      { text: "Um método para alisar temporariamente os cabelos", correct: false }
    ]
  },
  {
    pergunta: '3) Quais são os desafios comuns enfrentados durante a transição capilar?',
    respostas: [
      { text: 'Crescimento dos fios, dualidade de texturas e fragilidade capilar', correct: true },
      { text: 'Tons de cabelo, estilos de penteados e tipos de produtos', correct: false },
      { text: 'Comprimento dos fios, cor natural e densidade capilar', correct: false },
      { text: "Aumento da resistência dos fios à umidade", correct: false }
    ]
  },
  {
    pergunta: '4) Qual é a melhor estratégia para lidar com a dupla textura durante a transição capilar?',
    respostas: [
      { text: "Aumentar a frequência de lavagem dos cabelos", correct: false },
      { text: " Aplicar produtos químicos para alisar os fios", correct: false },
      { text: "Penteados como tranças e coques", correct: true },
      { text: "Alisar regularmente os cabelos com chapinha", correct: false }
    ]
  },
  {
    pergunta: '5) Qual técnica é usada para definir os cachos de forma mais estruturada?',
    respostas: [
      { text: 'Dedoliss', correct: true },
      { text: ' Twist', correct: false },
      { text: 'Plopping', correct: false },
      { text: 'Fitagem', correct: false }
    ]
  },
  {
    pergunta: '6) O que envolve a técnica de "Dedoliss"?',
    respostas: [
      { text: 'Separar o cabelo em mechas finas e aplicar um creme de pentear', correct: false },
      { text: ' Enrolar pequenas seções de cabelo com os dedos', correct: true },
      { text: 'Torcer duas mechas de cabelo uma sobre a outra', correct: false },
      { text: ' Utilizar chapinha para criar ondas suaves', correct: false }
    ]
  },
  {
    pergunta: '7) Qual é a importância de cortar periodicamente as partes alisadas dos cabelos durante a transição capilar?',
    respostas: [
      { text: 'Para aumentar a fragilidade capilar', correct: false },
      { text: 'Para manter a dupla textura dos fios', correct: false },
      { text: 'Para manter a diversidade de texturas nos cabelos', correct: false },
      { text: 'Para eliminar gradualmente a parte alisada e facilitar a adaptação aos fios naturais', correct: true },
    ]
  },
  {
    pergunta: '8) Por que é recomendado não lavar os cabelos cacheados todos os dias?',
    respostas: [
      { text: 'Para aumentar a oleosidade natural dos fios', correct: false },
      { text: ' Porque cabelos cacheados não precisam de hidratação', correct: false },
      { text: 'Para evitar ressecamento dos fios, especialmente as pontas', correct: true },
      { text: ' Para estimular o crescimento mais rápido dos fios', correct: false },
    ]
  },

  {
    pergunta: '9) Qual é a recomendação para secar os cabelos cacheados?',
    respostas: [
      { text: ' Secar com uma toalha de banho', correct: false },
      { text: 'Deixar os cabelos secarem naturalmente', correct: true },
      { text: ' Utilizar um secador em temperatura alta', correct: false },
      { text: 'Passar chapinha para secar seu comprimento', correct: false },
    ]
  },

  {
    pergunta: '10) Qual é o principal objetivo do cronograma capilar?',
    respostas: [
      { text: 'Hidratar, nutrir e reconstruir os fios', correct: true },
      { text: 'Promover a mudança de textura dos cabelos', correct: false },
      { text: ' Manter os cabelos úmidos o tempo todo', correct: false },
      { text: ' Alterar permanentemente a estrutura dos cabelos', correct: false },
    ]
  }
]

