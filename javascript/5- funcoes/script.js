// Funções - bloco de código que pode ser executado e reutilizado.

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

// Parâmetros e Argumentos
// Ao criar uma function você pode definir parâmetros, ao executar uma function você pode passar argumentos.

//Peso e altura são parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(60, 1.7));
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "você gosta do céu";
  } else if (cor === "verde") {
    return "você gosta de mato";
  } else {
    return "você não gosta de nada";
  }
}
console.log(corFavorita("azul"));

addEventListener("click", function () {
  console.log("Parabéns, esse é seu primeiro código em JS.");
});

function terceiraIdade(idade) {
  if (idade >= 60) {
    return "você é idoso";
  } else {
    return "você não é idoso";
  }
}

console.log(terceiraIdade(51));

// Variáveis e funções definidas dentro de um bloco {} não são visíveis fora dele.
var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);

// Exercícios propostos

//1- Crie uma função para verificar se um valor é truthy ou falsy
function isTruthy(dado) {
  return !!dado;
}

//2- Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

//3- Crie uma função que retorno o nome completo
function nomeCompleto(nome, sobrenome) {
  return nome + sobrenome;
}

//4- Crie uma função para verificar se o número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

//5- Crie uma função que retorne o tipo de dado do argumento que foi passado nela
function tipoDado(dado) {
  return typeof dado;
}

//6- addEventListener é uma função nativa do JS, o primeiro parâmetro é o evento que ocorre e o segundo o callback, utilize essa função para mostrar no console o seu nome completo quando o evento click acontecer.

addEventListener("click", function () {
  console.log("Jefferson");
});
