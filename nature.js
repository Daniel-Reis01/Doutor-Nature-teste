const seta = document.querySelector("#arrow");

seta.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight });
});

var primeiroValor = document.querySelector("#pf1");

var primeirovalor = document.querySelector("h3.p1");

var primeiroDesconto = document.querySelector("#pf2");

var primeirodesconto = document.querySelector("h4.p2");

var segundoValor = document.querySelector("#pf3");

var segundovalor = document.querySelector("h5.p3");

var segundoDesconto = document.querySelector(".a-vista");

var terceiroDesconto = document.querySelector("#p4");

const valorprodutoA = "194.00";
const descontoProdutoA = 0;
const promocaoProdutoA = 21.75;
const vistaProdutoA = "194.00";

const valorProdutoB = 148.6;
const descontoProdutoB = 136.2;
const promocaoProdutoB = 49.99;
const vistaProdutoB = 445.8;

const valorProdutoC = 118.9;
const descontoProdutoC = 450.6;
const promocaoProdutoC = 79.99;
const vistaProdutoC = 713.4;

function boton() {
  primeiroValor.textContent = "R$ " + valorprodutoA + " por caixa";
  primeirovalor.textContent = "R$ " + valorprodutoA + " por caixa";

  primeiroDesconto.textContent = " ";
  primeirodesconto.textContent = " ";
  segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoA;
  segundovalor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoA;

  segundoDesconto.textContent = "ou R$ " + vistaProdutoA + " á vista";
  terceiroDesconto.textContent = "ou R$ " + vistaProdutoA + " á vista";
  console.log("evento de click=1 d-bug ");

  if (
    document.getElementById("suplemento").getAttribute("src") ==
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-1.png");
  } else if (
    document.getElementById("suplemento").getAttribute("src") !=
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-1.png");
  } else {
    document
      .getElementById("suplemento")
      .setAttribute("src", "img/image11.jpg");
  }
}

function botonfix() {
  primeiroValor.textContent = "R$ " + valorProdutoB + " por caixa";
  primeirovalor.textContent = "R$ " + valorProdutoB + " por caixa";

  primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoB;
  primeirodesconto.textContent = "Economize " + " R$ " + descontoProdutoB;

  segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoB;
  segundovalor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoB;

  segundoDesconto.textContent = "ou R$ " + vistaProdutoB + " á vista";
  terceiroDesconto.textContent = "ou R$ " + vistaProdutoB + " á vista";
  console.log("evento de click=2 d-bug ");

  if (
    document.getElementById("suplemento").getAttribute("src") ==
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-3.png");
  } else if (
    document.getElementById("suplemento").getAttribute("src") !=
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-3.png");
  } else {
    document
      .getElementById("suplemento")
      .setAttribute("src", "img/image11.jpg");
  }
}

function botonlest() {
  primeiroValor.textContent = "R$ " + valorProdutoC + " por caixa";
  primeirovalor.textContent = "R$ " + valorProdutoC + " por caixa";

  primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoC;
  primeirodesconto.textContent = "Economize " + " R$ " + descontoProdutoC;

  segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoC;
  segundovalor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoC;

  segundoDesconto.textContent = "ou R$ " + vistaProdutoC + " á vista";
  terceiroDesconto.textContent = "ou R$ " + vistaProdutoC + " á vista";
  console.log("evento de click=3 d-bug ");

  if (
    document.getElementById("suplemento").getAttribute("src") ==
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-6.png");
  } else if (
    document.getElementById("suplemento").getAttribute("src") !=
    "img/image11.jpg"
  ) {
    document.getElementById("suplemento").setAttribute("src", "img/aaox-6.png");
  } else {
    document
      .getElementById("suplemento")
      .setAttribute("src", "img/image11.jpg");
  }
}

function checkUncheckAssinante(el) {
  if (el.querySelector("img").getAttribute("src") == "img/check-icon.png") {
    el.querySelector("img").setAttribute("src", "img/check-icon-green.png");
  } else {
    el.querySelector("img").setAttribute("src", "img/check-icon-green.png");
  }
}

function assinateCkeckEconomize(el) {
  if (el.querySelector("img").getAttribute("src") === "img/check-icon.png") {
    el.querySelector("img").setAttribute("src", "img/check-icon-green.png");
  } else {
    el.querySelector("img").setAttribute("src", "img/check-icon.png");
  }
}

function esconderMostrar(el) {
  if (el.querySelector("p").style.display == "block") {
    el.querySelector("p").style.display = "none";
    console.log("block");
  } else {
    el.querySelector("p").style.display = "block";
    console.log("none");
  }
}
