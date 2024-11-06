//Height e Width - estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector(".animais");

section.clientHeight; //height+padding
section.offsetHeight; //height+padding+border
section.scrollHeight; //height total, mesmo dentro do scroll

//Lembrete: o mesmo serve para o width.
