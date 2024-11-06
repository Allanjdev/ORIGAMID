// classList - retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém classes.

const menu = document.querySelector(".menu"); // seleciona a classe .menu no document(HTML) através do seletor querrySelector.

menu.className; // 'string'
menu.classList; //  Lista de classes
menu.classList.add("ativo"); //adiciona classe ativo
menu.classList.add("ativo", "mobile"); //adiciona duas classes
menu.classList.remove("ativo"); //remove a classe
menu.classList.toggle("ativo"); //adiciona ou remove classe
menu.classList.contains("ativo"); //retorna true ou false executando uma ação de acordo com o resultado, tipo um if else.
menu.classList.replace("ativo", "inativo"); //substitui a classe

// atributes - retorna uma array like com os atributos do elemento

const animais = document.querySelector(".animais");
animais.attributes; //retorna todos os atributos
animais.attributes[0]; //retorna o primeiro atributo.

//getAttribute e setAttribute - métodos que retornam ou definem de acordo com o atributo selecionado.

const img = document.querySelector("img");

img.getAttribute("src"); //seleciona o valor do src
img.setAttribute("alt", "texto alternativo"); //altera o alt para texto alternativo
img.hasAttribute("id"); //verifica se há o atributo repassado entre (), tipo um if else.
img.removeAttribute("alt"); // remove o alt
img.hasAttributes(); // true ou false se tem algum atributo

//Ready Only vs Writable - Existem propriedades que não permitem a mudanã de seus valores, essas são considerados Read Only, apenas leitura.

//Exercício proposto
//1-Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
//2-Remover a classe ativo do menu e manter apenas o primeiro
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
itensMenu[0].classList.add("ativo");
//3-Verifique se as imagens possem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach(() => {
  img.hasAttribute("alt");
});
//4-Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "http://...");
