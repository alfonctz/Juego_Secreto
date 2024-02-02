let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let intentosMaximos = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `acertaste en  ${intentos} ${intentos == 1 ? "intento" : "intentos"} `
    );
    //document.querySelector('#reiniciar').removeAttribute('disabled') ;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor ");
    } else {
      asignarTextoElemento("p", "el numero secreto es mayor  ");
    }
    intentos++;
    limpiarPantalla();
  }
}

function limpiarPantalla() {
  document.querySelector("#valorUsuario").value = "";
  // document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * intentosMaximos) + 1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  if (listaNumeroSorteados.length == intentosMaximos) {
    asignarTextoElemento("p", " se sortearon todos los numeros posibles ")  ;

  } else {

    if (listaNumeroSorteados.includes(numeroGenerado)) {
     return  generarNumeroSecreto();

    } else {
      listaNumeroSorteados.push(numeroGenerado);
      
      return numeroGenerado  ;
    }
  
  }
}

function condicionInicial() {
  asignarTextoElemento("h1", "Juego del numero secreto "); // agrega un texto al h1 del html
  asignarTextoElemento("p", `indica un numero del 1 al ${intentosMaximos}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarPantalla();
  condicionInicial();

  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionInicial();

