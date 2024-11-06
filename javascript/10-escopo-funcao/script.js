//Escopo de função - variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); //Fusca no console
console.log(carro);

//Lembrete: variáveis declaradas no escopo pai da função conseguem ser acessadas pelas funções

var carro = "Fusca";
function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); //Fusca no console
console.log(carro);

//Escopo de bloco
if (true) {
  var mes = "Dezembro";
  console.log(mes);
}
console.log(mes);
//Lembrete: em escopo de bloco, usar VAR possibilida que a variável "vase" do escopo, podendo ser chamada do lado de fora.

// Let e Const - respeitam o escopo de bloco
if (true) {
  let mes = "Janeiro";
  console.log(mes);
}
console.log(mes); // Ainda retorna DEZEMBRO mas não JANEIRO da let mes

if (true) {
  const mes = "Maio";
  console.log(mes);
}
console.log(mes); //Ainda retorna DEZEMBRO mas não MAIO da const mes

//Escopo com const - Mantém o escopo no bloco, impede a redeclaração e impede a modifiocação do valor da variável.

/* const mes = 'Julho';
mes = 'Janeiro';//erro, tentou modificar o valor da const mes.
const semana; // erro, declaração sem valor */

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; //funciona
//data='Janeiro'//erro

//Lembrete: variáveis com valores constantes

//const semana = "sexta";
//semana = "quinta"; // não pode alterar o valor de uma var const = erro
//console.log(semana);

//Escopo com let - mantém o escopo no bloco, impede a redeclaração mas permite a modificação do valor da variável

let ano;
ano = 2022;
ano++;
console.log(ano); //2023
//let ano = 2020; = erro, redeclarou a variável.
