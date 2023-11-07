// Função para multiplicar um número por 3
function multiplicarPorTres(numero) {
    return numero * 3;
  }
  
  // Função principal
  function executarCalculo() {
    let numero = prompt("Digite um número:"); // Ler um número do usuário
    let resultado = multiplicarPorTres(numero); // Multiplicar o número por 3
  
    alert("O resultado é: " + resultado); // Apresentar o resultado obtido
  
    let resposta = prompt("Deseja fazer outro cálculo? (sim/não):"); // Perguntar ao usuário se deseja fazer outro cálculo
  
    if (resposta.toLowerCase() === "sim") {
      executarCalculo(); // Executar novamente as instruções
    } else {
      alert("Programa encerrado."); // Parar a execução do programa
    }
  }
  
  // Chamar a função principal para iniciar o programa
  executarCalculo();

  // Gera um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Função para verificar o palpite do usuário
function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess)) {
    document.getElementById("result").innerText = "Por favor, digite um número válido.";
  } else if (guess < randomNumber) {
    document.getElementById("result").innerText = "O número é maior!";
  } else if (guess > randomNumber) {
    document.getElementById("result").innerText = "O número é menor!";
  } else {
    document.getElementById("result").innerText = "Parabéns! Você acertou!";
  }
}