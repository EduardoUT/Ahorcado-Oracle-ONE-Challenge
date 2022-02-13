var pLetrasFallidas = document.querySelector(".letras-fallidas");
var palabraAleatoria;
var letrasFallidas = [];
var letrasAcertadas = [];
var intentos = 0;


function generarPalabraAleatoria() {

    var array = ["ESCUELA", "PROGRAMACION", "ALURA", "ORACLE", "AMISTAD",
        "LATINOAMERICA", "VALORES", "JAVASCRIPT", "MEDIEVAL", "HORARIO",
        "SALUD", "OTORRINOLARINGOLOGO", "ESTERNOCLEIDOMASTOIDEO", "ROCK", "METAL",
        "PALMERA", "ESCULTURA", "ARTE", "ANTICONSTITUCIONALIDAD", "REVOLUCION"];

    var palabraAleatoria = array[Math.floor(Math.random() * array.length)];
    var palabraSeparada = splitPalabra(palabraAleatoria);

    return palabraSeparada;
}

function splitPalabra(palabra) {

    var separarPalabra = palabra;
    separarPalabra = palabra.split("");

    return separarPalabra;
}

function crearElementosLi(palabraAleatoria) {

    var elementoUl = document.querySelector(".palabras");
    var nuevaLista;

    palabraAleatoria.forEach(function () {
        nuevaLista = document.createElement("li");
        nuevaLista.setAttribute("class", "mis-palabras");
        elementoUl.appendChild(nuevaLista);
    });
}

function limpiarElementosLi() {

    var listaExistente = document.querySelectorAll("li");
    listaExistente.forEach(function (lista) {
        lista.remove();
    });

}

function dibujarLetra(palabraUsuario) {

    var elementoLi = document.querySelectorAll(".mis-palabras");
    var palabraEquivocada = true;
    var posicionPalabraAleatoria;
    var valorPalabraAleatoria;
    var textNode;

    console.log(palabraAleatoria);

    for (var i = 0; i < palabraAleatoria.length; i++) {
        if (palabraUsuario == palabraAleatoria[i]) {
            valorPalabraAleatoria = palabraAleatoria[i];
            posicionPalabraAleatoria = i;
            for (var j = 0; j < elementoLi.length; j++) {
                var valorElementoLi = elementoLi[posicionPalabraAleatoria];
                textNode = document.createTextNode(valorPalabraAleatoria);
                if (!valorElementoLi.hasChildNodes(textNode)) {
                    valorElementoLi.appendChild(textNode);
                    letrasAcertadas.push(palabraUsuario);
                    palabraEquivocada = false;
                }
                break;
            }
        }
    }

    dibujarAhorcado(palabraEquivocada, palabraUsuario);
    finJuego(letrasAcertadas, intentos);
}

function dibujarLetrasIncorrectas(palabraIngresada) {
    if (!letrasFallidas.includes(palabraIngresada) && !letrasAcertadas.includes(palabraIngresada) && intentos < 9) {
        letrasFallidas.push(palabraIngresada);
        var mensaje = "Letras Incorrectas: ";
        pLetrasFallidas.textContent = mensaje + letrasFallidas;
        intentos++;
    }
}

function dibujarAhorcado(intentoFallido, palabraIngresada) {
    if (intentoFallido) {
        dibujarLetrasIncorrectas(palabraIngresada);
        if (intentos == 1){
            dibujarBase();
        } else if (intentos == 2) {
            dibujarSoporteSoga();
        } else if (intentos == 3) {
            dibujarCuerda();
        } else if (intentos == 4) {
            dibujarCabeza();
        } else if (intentos == 5) {
            dibujarCuerpo();
        } else if (intentos == 6) {
            dibujarBrazoDerecho();
        } else if (intentos == 7) {
            dibujarBrazoIzquierdo();
        } else if (intentos == 8) {
            dibujarPieDerecho();
        } else if (intentos == 9) {
            dibujarPieIzquierdo();
        }
    }
}

function finJuego(letrasAcertadas, intentos) {
    if (letrasAcertadas.length == palabraAleatoria.length) {
        //alert("Haz ganao :D");
        mostrarMensajeGanaste();
    }

    if (intentos == 9) {
        mostrarMensajePerdiste();
    }
}



