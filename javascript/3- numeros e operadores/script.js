// Operadores Aritméticos

var soma = 100 + 50; // 150 - soma de numbers.
var subtracao = 100 - 50; // 50 - subtração de numbers.
var multiplicacao = 100 * 2; // 200 - multiplicação de numbers.
var divisao = 100 / 2; // 50 - divisão de numbers.
var expoente = 2 ** 4; // 16 - exponenciação de numbers.
var modulo = 1241241241241241241242 % 5; // 1 - resto da divisão entre numbers.

// Lembrete (+) entre strings serve para concatenar.

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

// Operadores Aritméticos em STRINGS

var soma = "100" + 50; // 10050 - A String 100 é (+) concatenada com o number (50).
var subtracao = "100" - 50; // 50 - Nesse caso a String 100 é (-) subtraida 50.
var multiplicacao = "100" * 2; // 200 - String será multiplicada pelo number.
var divisao = "Comprei 10" / 2; // NaN (not a number), uma string composta por letras e números não pode ser dividida por outro número.

console.log(soma, subtracao, multiplicacao, divisao);

// Not a Number (NaN)

var testeNaN = "Isso é 100" / 2; // Divisão de string por number.
console.log(isNaN(testeNaN)); // Retorna true pois avalia se a var testeNaN é verdadeira.

// Ordem de precedência - começa com * e / pra depois + e -
var total1 = 20 + 5 * 2; // 30, primeiro multiplica 5*2 e soma com 20.
var total2 = (20 + 5) * 2; // 50, calcula primeiro o que tá entre parênteses.
var total3 = (20 / 2) * 5; // 50,Primeiro a divisão depois a multiplicação.
var total4 = 10 + 10 * 2 + 20 / 2; // 40, primeiro divisão, depois multiplicação e soma.

console.log(total1, total2, total3, total4);

// Lembrete Cálculos dentro de parênteses se tornam prioridades a serem executadas.

// Operadores Aritméticos Unários
// incremento (++)
var incremento = 5;
console.log(incremento++); // var incremento recebe ++ (+1)
console.log(incremento); // retorna 6

var incremento2 = 5;
console.log(++incremento2); // agora var recebe o incremento e já é somado a o valor da var
console.log(incremento2);

// decremento (--)
var decremento = 5;
console.log(decremento--); // var decremento recebe -- (-1)
console.log(decremento); // retorna 4

var decremento2 = 5;
console.log(--decremento2); // agora var recebe o decremento e já é subtraido do valor da var
console.log(decremento2);

// Os operadores + e - quando colocados na frente da variável a transformam em um número

var frase = "Isso é uma frase";
+frase, -frase; // NaN - transformar uma string composta por palavras em number através do sinal operador + ou - resultará em NaN

var idade = "28"; // String
+idade; // 28(number)
-idade; // -28(number)

console.log(+idade + 5); // 33 - soma o valor em idade string convertido em number+5

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1 - Transforma uma var booleana em number retornando 1

// Exercício proposto

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var texto = "Esse texto vale 10" / 3;
console.log(texto);
var texto1 = "Isso vai retornar NaN" * 8;
console.log(texto1);
// Incremente o número 5 e retorne o seu valor incrementado
var inc = 5;
inc++;
console.log(inc);
//Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // retorna'80kg'
var pesoPorDois = peso; // retorna NaN
console.log(peso);
