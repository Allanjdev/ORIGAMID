// Array - é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "XBox"];

console.log(videoGames[0]);

// Métodos e propriedades de uma array

videoGames.pop(); // Tira o último item da array e retorna ele
videoGames.push("MegaDrive"); //Adiciona o item na array

var frutas = ["Banana", "Maçã", "Uva"];
console.log(frutas);
frutas.pop(); // Retira o último item 'Uva'
console.log(frutas);
frutas.pop(); // Retira o último item 'Maçã'
console.log(frutas);
frutas.push("Graviola"); // Adiciona o item 'Graviola' a array frutas['Banana', 'Graviola']
console.log(frutas);
frutas.push("Acerola"); // Adiciona o item 'Acerola' a array frutas['Banana', 'Graviola', 'Acerola']
console.log(frutas);

console.log(frutas.length); // Mostra quantos itens tem dentro da array.

//For loop - Faz algo repetidamente até que uma condição seja atingida.
//  para numero = 0; enquanto menor que 3; incremente +1
for (var numero = 0; numero < 3; numero++) {
  console.log(numero);
}

for (var num = 3; num >= 0; num--) {
  console.log("-" + num);
}

//While loop
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

//Arrays e Loops

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// Break - o loop ira parar caso encontre a palavra break.

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "XBox") {
    break;
  }
}

// forEach - é um método de array que executa uma função para cada item da array.

videoGames.forEach(function (i) {
  console.log(i);
});

//Exercício proposto

//1-Crie uma array com os anos que o Brasil ganhou a copa do mundo
var copasBrasil = [1959, 1962, 1970, 1994, 2002];
//2- Interaja com a array utilizando um loop para mostrar no console a mensagem:
for (var i = 0; i < copasBrasil.length; i++) {
  console.log("O Brasil ganhou a copa de " + copasBrasil[i]);
}
//3- Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}
//4- Coloque a última fruta da array acima em uma variável, sem remover ela da array.
var ultimaFruta = frutas[frutas.length - 1];
