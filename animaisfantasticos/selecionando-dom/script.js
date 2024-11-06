//ID - getElementById - seleciona e retorna elementos do DOM
//Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

//Classe
//Seleciona pela classe e retorna uma htmlcollection
const gridSection = document.getElementsByClassName("gridSection"); //seleciona todos que estiverem com a classe gridSection
const contato = document.getElementsByClassName("gridSection contato"); //seleciona os elementos que possuem as duas classes

//Seleciona todas as UL's, retorna uma htmlcollection
const ul = document.getElementsByTagName("ul");

//Retorna o primeiro elemento
console.log(gridSection[0]);

//Seletor geral único - querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector(".animais");
const siteContato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animaisLista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

//Busca apenas dentro da ul
const navItem = primeiroUl.querySelector("li");

const linksInternos = document.querySelector('[href^="#"]');

//Seletor geral lista - querySelectorAll - retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSeletor = document.querySelectorAll(".gridSection");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animaisLista img");
//Lembrete: Diferente do getElementByClassName, a lista aqui é estática

//HTMLcollection vs NodeList
//A diferença está nos métodos e propriedades de ambas. Além disso a nodelist retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("gridSection"); //Retorna htmlcollection
const gridSectionNode = document.querySelectorAll(".gridSection"); //Retorna NodeList estática.

console.log(gridSectionHTML);
console.log(gridSectionNode);

//Array-like - htmlcollection e nodelist são array-like, parecem uma array mas não são. O método de array forEach() por exemplo, existe apenas em nodelist.

const gridSec = document.querySelectorAll(".grid-section");
gridSec.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); //index do item na array
  console.log(array); //a array completa
});

//Lembrete: é possível transformar array-like em array real, utilizando o método Array.from(gridSection);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});

//Exercício proposto
//1- Retorne no console todas as imagens do site
const animaisFotos = document.querySelectorAll("img");
console.log(animaisFotos);
//2-Retorne no console apenas as imagens que começam com a palavra img
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);
//3-Selecione todos os links internos(onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
//4-Selecione o primeiro h2 dentro de .animaisDescricao
const h2Animais = document.querySelector(".animaisDescricao h2");
console.log(h2Animais);
//5-Selecione o último p do site
const paragrafosP = document.querySelectorAll("p");
console.log(paragrafosP.length - 1);

//forEach - constantemente vamos selecionar uma lista de itens do dom. A melhor forma de interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll("img");
imgs.forEach(function (item) {
  console.log(item);
});

//Parâmetros do forEach
// O primeiro é o callback, a fnção que será aticvada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array:
const imgS = document.querySelectorAll("img");
imgS.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); //o item atual no loop
  console.log(index); //o número do index
  console.log(array); //a array completa
});
