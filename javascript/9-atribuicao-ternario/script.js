var n1 = 20;
var n2 = 10;
n1 = n1 + 10; // var n1 recebe n1+10...
console.log(n1);
var n1 = 20;
n1 += 10; // Atribui o valor 10 a variável sem precisar incluir a variável n1 na expressão matemática.
console.log(n1);

// Operador ternário - abreviação de condicionais com if e else

var idade = 19;
// condição ? true : false
var podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode digirir";
console.log(podeDirigir);

//If Else abreviado sem {}
var possuiFaculdade = false;
if (possuiFaculdade) console.log("Sim, possui");
else console.log("Não possui");

//Exercício proposto

//1- Some 500 ao valor de scroll abaixo:
var scroll = 1000;
scroll += 500;
console.log(scroll); // Novo valor: 1500.
//2- Atribua o valor true para a var darCredito, caso o cliente tenha carro e casa, caso contrário retorne false.
var darCredito;
possuiCarro = true;
possuiCasa = true;

darCredito = possuiCarro && possuiCasa;
darCredito =
  possuiCarro && possuiCasa ? "Dar crédito ao cliente" : "Negar crédito";

console.log(darCredito);
