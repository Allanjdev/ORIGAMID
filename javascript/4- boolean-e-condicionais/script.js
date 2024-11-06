// Booleans e condicionais
// Existem 2 valores para boolean, True e False.

/* Verificar se uma expressão é verdadeira com if, caso contrário else será ativado*/

var possuiGraduacao = true;
if (possuiGraduacao) {
  // se (verdadeiro) (true)
  console.log("Possui graduação"); // executa
} else {
  // se nao (false)
  console.log("Não possui graduação"); // executa em caso da primeira ser falsa.
}
// Retorna possui graduação e não executa o else
// Lembrete: o valor dentro dos parênteses sempre será avaliado em false ou true.

// Else if
var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui nada");
}

// Exercício 1 condicionais if, else, else if

var diaDeSol; // var vazia aguardando instrução ou atribuição
var noiteDeLuar; // var vazia aguardando instrução ou atribuição

noiteDeLuar = true; // valor booleano atribuido a var noiteDeLuar, executará o bloco ELSE IF e retornará 'A noite está perfeita'

if (diaDeSol) {
  // se (diaDeSol) for verdadeiro, executa bloco abaixo.
  console.log("ótimo o dia está ensolarado");
} else if (noiteDeLuar) {
  // se (noiteDeLuar) for verdadeiro, executa bloco abaixo.
  console.log("A noite está perfeita");
} else {
  // se ambas forem falsas, executa o bloco abaixo.
  console.log("Ficarei em casa");
}

// Exercício 2 condicionais if, else, else if

var adotarSim;
var adotarNao;

adotarSim = true;

if (adotarSim) {
  console.log("Estou feliz adotei um dogguinho.");
} else if (adotarNao) {
  console.log("Não adotei um dogguinho.");
} else {
  console.log("Não foi dia de adoção.");
}

// Truthy e Falsy - Valores que retornam true ou false quando verificados em uma expressão boleana

//Falsy
if (false);
if (0) if (NaN);
if (null);
if (undefined);
if (""); // "" ``.

// Operador lógico de negação boleana (!) - altera o valor true para false e false para true

// Truthy
if (!true); //False
if (!1); //False
if (!""); //true
if (!undefined); // true
if (!!" "); // true
if (!!""); //false

// Lembrete: pode utilizar !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de comparação - sempre retornarão um valor boleano true ou false

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; //true
10 != "10"; //false
10 !== "10"; //true

// Operador lógico (&&) (e)

true && true; // true
true && false; // false
false && true; // false
"Gato" && "cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // False
5 >= 5 && 3 < 6; // true

// Lembrete: Se ambos os valores forem true, ele retornará o último valor verificado, se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.

// Exercício - Operadores Lógicos && (e)

if (5 - 5 && 5 + 5) {
  // retorna valor 0 - Falso.
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (5 - 3 && 5 + 5) {
  // retorna verdadeiro pois ambos vão true.
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var solSim = true;
var solNao = false;
var noiteBoa = true;
var noiteRuim = false;

if (solSim && noiteBoa) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

if (solNao && noiteBoa) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

if (solSim && noiteRuim) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

// Operador Lógico || (ou) - compara se uma expressão OU outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "cão"; // 'gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// Lembrete: retorna o primeiro valor true que encontrar.

// Exercício - Operadores Lógicos || (ou)

var solSim = true;
var solNao = false;
var noiteBoa = true;
var noiteRuim = false;

if (solSim || noiteBoa) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

if (solNao || noiteBoa) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

if (solSim || noiteRuim) {
  console.log("Ótimo dia para se viver");
} else {
  console.log("Hoje é melhor ficar em casa");
}

// Operador lógico switch

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o Sol.");
    break;
  default:
    console.log("Feche os olhos");
}

// Exercício proposto

//1- Verificar se minha idade é maior que a outra idade.
var minhaIdade = 31;
var outraIdade;

outraIdade = 35;

if (minhaIdade >= outraIdade) {
  console.log("Minha idade é maior que a outra idade.");
} else {
  console.log("Minha idade é menor que a outra idade");
}

//2- Qual valor retornado da seguinte expressão:
var expressao = 5 - 2 && 5 - " " && 5 - 2; // true.
console.log(expressao);

//3- Verifique se as seguintes variáveis são truthy ou falsy
var nome = "Jefferson";
var idade = 31;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

// 4-Compare o total de habitantes do Brasil com a China (valor em milhões)
var brasil = 207;
var china = 1340;

brasil = brasil * 1e6;
china = china * 1e6;

console.log(`O brasil tem ${brasil} milhões de habitantes.`);
console.log(`A china tem ${china} milhões de habitantes.`);
if (brasil > china) {
  console.log("Brasil tem mais habitantes.");
} else {
  console.log("China tem mais habitantes.");
}

//5- O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
