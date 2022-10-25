let primeiroValor = document.querySelector("h3");

let primeiroDesconto = document.querySelector("h4");

let segundoValor = document.querySelector("h5");

let segundoDesconto = document.querySelector("#vista");

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

const seta = document.querySelector("#arrow");

seta.addEventListener("click", () => {
  window.scroll({ top: window.innerHeight });
});

const btn1 = document.getElementById("a1");

function boton() {
  switch (btn1) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorprodutoA + " por caixa";
      primeiroDesconto.textContent = " ";
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoA;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoA + " á vista";
    }):
      break;
  }
}

const btn2 = document.getElementById("b1");

function botonfix() {
  switch (btn2) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorProdutoB + " por caixa";
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoB;
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoB;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoB + " á vista";
      console.log('iai');
    }):
      break;
  }
}
const btn3 = document.getElementById("c1");

function botonlest() {
  switch (btn3) {
    case addEventListener("click", () => {
      primeiroValor.textContent = "R$ " + valorProdutoC + " por caixa";
      primeiroDesconto.textContent = "Economize " + " R$ " + descontoProdutoC;
      segundoValor.textContent = "HOJE: " + "12X " + "R$" + promocaoProdutoC;
      segundoDesconto.textContent = "ou R$ " + vistaProdutoC + " á vista";
    }):
      break;
  }
}
function boton() {
  if (
    document.getElementById("suplemento").getAttribute("src") =="img/image11.jpg")
    {

    document.getElementById("suplemento").setAttribute("src", "img/aaox-1.png");

  } else if(document.getElementById("suplemento").getAttribute("src") != "img/image11.jpg"){
    
    document.getElementById("suplemento").setAttribute("src", "img/aaox-1.png");
 
  } else {

    document.getElementById("suplemento").setAttribute("src", "img/image11.jpg");
  }

}
function botonfix() {
  if (
    document.getElementById("suplemento").getAttribute("src") == "img/image11.jpg") 
    {

      document.getElementById("suplemento").setAttribute("src", "img/aaox-3.png");

  } else if(document.getElementById("suplemento").getAttribute("src") != "img/image11.jpg"){

         document.getElementById("suplemento").setAttribute("src", "img/aaox-3.png");
  } else {

    document.getElementById("suplemento").setAttribute("src", "img/image11.jpg");

  }

}
function botonlest() {
  if (
    document.getElementById("suplemento").getAttribute("src") =="img/image11.jpg") 
    {

    document.getElementById("suplemento").setAttribute("src", "img/aaox-6.png");

  } else if(document.getElementById("suplemento").getAttribute("src") != "img/image11.jpg"){

    document.getElementById("suplemento").setAttribute("src", "img/aaox-6.png");

  } else {

    document.getElementById("suplemento").setAttribute("src", "img/image11.jpg");

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
