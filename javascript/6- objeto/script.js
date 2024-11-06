// Objetos

var pessoa = {
  //Objeto pessoa
  nome: "Jefferson",
  idade: 31,
  profissao: "Front-end Developer",
  possuiFaculdade: true,
};

console.log(pessoa.nome); // 'Jefferson'

// Métodos - é uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    //lado recebe o valor
    return lado * lado; // valor multiplicado por ele mesmo
  },
  perimetro: function (lado) {
    return this.lados * lado; // Valor armazenado em lado multiplicado por 4.
  },
};

var quadrado = {
  lados: 4,
  area(lado) {
    //lado recebe o valor
    return lado * lado; // valor multiplicado por ele mesmo
  },
  perimetro(lado) {
    return this.lados * lado; // Valor armazenado em lado multiplicado por 4.
  },
  cinco() {
    return 5;
  },
};

//Lembrete : serve para organizar melhor o código em pequenas partes reutilizáveis.
// Lembrete : THIS sempre vai se referir ao objeto

console.log(Math.random());

// Criar um objeto - é criado utilizando as chaves{}

var carro = {};
var pessoa = {};

// Dot notation get

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
  metadeWidth() {
    return this.width * 9;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";
var bg = menu.backgroundColor;

// Exercícios propostos

//1- Crie um objeto com seus dados pessoais.

var dados = {
  nome: "Jefferson",
  sobrenome: "Allan",
  idade: 31,
  emprego: "Auxiliar Administrativo",
  estudo: "Desenvolvimento de sistemas",
};

//2- Crie um método no objeto anterior que mostre seu nome completo
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//3- Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

//4- Crie um objeto de um cachorro que represente um labrador, preto com 10 anos e que late ao ver um homem.

var cachorro = {
  raca: "labrador",
  idade: 10,
  cor: "preto",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "silêncio";
    }
  },
};
