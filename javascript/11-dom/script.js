// O que é dom - document object model é uma interface que representa documentos html e xml através de objetos, com ela é possivel manipular a estrutura, estilo e conteúdo desses documentos.
console.log(window);
window.innerHeight;
window.innerWidth;
console.log(window.innerHeight);
console.log(window.innerWidth);

// Window e document - são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

//window.alert("Isso é um alerta");
const h1Selecionado = document.querySelector("h1"); //Seleciona o primeiro h1.
document.body; // retorna body.

//Lembrete: window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// Node - toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto NODE.

const titulo = document.querySelector("h1");
titulo.innerText; //Retorna o texto;
titulo.classList; //retorna as classes;
titulo.id; //retorna o id;
titulo.offsetHeight; //retorna a altura do elemento;

function callbackh1() {
  console.log("clicou em h1");
}
titulo.addEventListener("click", callbackh1);

// Exercício proposto
//1-Retorne a url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

//2-Selecione o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

//3-Retorne a linguagem do navegador
window.navigator.language;
const linguagem = window.navigator.language;
console.log(linguagem);

//4-Retorne a largura da janela
window.innerWidth;
console.log(window.innerWidth);

// ID, getElementById - Seleciona e retorna elementos do DOM
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

//Retorna null caso não exista

// Classe, getElementsByClassName
// Tag, getElementByTagName
// Selecionam e retornam uma lista de elementos DOM. A lista retornada está em live significa que se os elementos forem adicionados ela será automaticamente atualizada.
