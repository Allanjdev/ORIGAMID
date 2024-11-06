//Parâmetros do forEach
// O primeiro é o callback, a função que será aticvada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array:
//const imgS = document.querySelectorAll("img");
//imgS.forEach(function (valorAtual, index, array) { //1º callback(loop), 2º posição desse item na array, 3ºa própria array
//console.log(valorAtual); //o item atual no loop
 //console.log(index); //o número do index
 // console.log(array); //a array completa
//});

//forEach e Array
//forEach é um método de array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array
//const titulos=document.getElementsByClassName('titulo');
//const titulosArray = Array.from(titulos);

//titulosArray.forEach(function(item){
  //console.log(item);
//});

//Arrow function - sintaxe de curta relação a function expression. Basta remover a palavra chave function e adicionar a fatarrow (=>) após os argumentos.
//const imgs=document.querySelectorAll('img');
//imgs.forEach((item, index)=>{
  //console.log(item, index);
//});

//Exercício proposto
//1- Mostre no console cada parágrafo do site
const cadaParagrafo = document.querySelectorAll('p')
console.log(cadaParagrafo);
cadaParagrafo.forEach((index)=>{console.log(index)})
