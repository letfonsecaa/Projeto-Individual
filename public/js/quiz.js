const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let idUsuario = sessionStorage.ID_USUARIO

let currentQuestionIndex = 0
let pontuacao = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    pontuacao++
  } else {
    document.body.classList.add("incorrect") 
  } 

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(pontuacao * 100 / totalQuestions)
  
  let message = "";
  let color = "green";

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
    color = "red";
      message = "Bom"
      break
    default:
      color = "red";
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <div class="final-message">
      Você acertou <p style="color:${color}; font-size:40px;">${pontuacao}</p> de ${totalQuestions} questões!<br>
      Sua performace foi de <br><br><p style="color:${color}; font-size:40px;">${performance}%</p><br>
      <span>Resultado: ${message}</span>
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



const questions = [
  {
    question: "1) Qual é o objetivo da transição capilar?",
    answers: [
      { text: "Mudar o padrão de beleza predominante", correct: false },
      { text: "Promover o uso de procedimentos químicos nos cabelos", correct: false },
      { text: "Permitir que os cabelos naturais cresçam", correct: true },
      { text: "Reduzir a diversidade de estilos capilares", correct: false },
    ]
  },
  {
    question: "2) O que é o Big Chop durante a transição capilar?",
    answers: [
      { text: "Um corte radical para remover partes alisadas dos fios", correct: true },
      { text: "Um estilo de penteado", correct: false },
      { text: "Uma técnica de texturização", correct: false },
      { text: "Um método para alisar temporariamente os cabelos", correct: false }
    ]
  },
  {
    question: '3) Quais são os desafios comuns enfrentados durante a transição capilar?',
    answers: [
      { text: 'Crescimento dos fios, dualidade de texturas e fragilidade capilar', correct: true },
      { text: 'Tons de cabelo, estilos de penteados e tipos de produtos', correct: false },
      { text: 'Comprimento dos fios, cor natural e densidade capilar', correct: false },
      { text: "Aumento da resistência dos fios à umidade", correct: false }
    ]
  },
  {
    question: '4) Qual é a melhor estratégia para lidar com a dupla textura durante a transição capilar?',
    answers: [
      { text: "Penteados como tranças e coques", correct: true },
      { text: "Aumentar a frequência de lavagem dos cabelos", correct: false },
      { text: " Aplicar produtos químicos para alisar os fios", correct: false },
      { text: "Alisar regularmente os cabelos com chapinha", correct: false }
    ]
  },
  {
    question: '5) Qual técnica é usada para definir os cachos de forma mais estruturada?',
    answers: [
      { text: 'Dedoliss', correct: false },
      { text: ' Twist', correct: false },
      { text: 'Plopping', correct: false },
      { text: 'Fitagem', correct: true }
    ]
  },
  {
    question: '6) O que envolve a técnica de "Dedoliss"?',
    answers: [
      { text: 'Separar o cabelo em mechas finas e aplicar um creme de pentear', correct: false },
      { text: ' Enrolar pequenas seções de cabelo em coques', correct: true },
      { text: 'Torcer duas mechas de cabelo uma sobre a outra', correct: false },
      { text: ' Utilizar chapinha para criar ondas suaves', correct: false }
    ]
  },
  {
    question: '7) Qual é a importância de cortar periodicamente as partes alisadas dos cabelos durante a transição capilar?',
    answers: [
      { text: 'Para aumentar a fragilidade capilar', correct: false },
      { text: 'Para manter a dupla textura dos fios', correct: false },
      { text: 'Para manter a diversidade de texturas nos cabelos', correct: false },
      { text: 'Para eliminar gradualmente a parte alisada e facilitar a adaptação aos fios naturais', correct: true },
    ]
  },
  {
    question: '8) Por que é recomendado não lavar os cabelos cacheados todos os dias?',
    answers: [
      { text: 'Para aumentar a oleosidade natural dos fios', correct: false },
      { text: ' Porque cabelos cacheados não precisam de hidratação', correct: false },
      { text: 'Para evitar ressecamento dos fios, especialmente as pontas', correct: true },
      { text: ' Para estimular o crescimento mais rápido dos fios', correct: false },
    ]
  },

  {
    question: '9) Qual é a recomendação para secar os cabelos cacheados?',
    answers: [
      { text: ' Secar com uma toalha de banho', correct: false },
      { text: 'Deixar os cabelos secarem naturalmente', correct: true },
      { text: ' Utilizar um secador em temperatura alta', correct: false },
      { text: 'Passar chapinha para secar seu comprimento', correct: false },
    ]
  },

  {
    question: '10) Qual é o principal objetivo do cronograma capilar?',
    answers: [
      { text: 'Hidratar, nutrir e reconstruir os fios', correct: true },
      { text: 'Promover a mudança de textura dos cabelos', correct: false },
      { text: ' Manter os cabelos úmidos o tempo todo', correct: false },
      { text: ' Alterar permanentemente a estrutura dos cabelos', correct: false },
    ]
  }
]

