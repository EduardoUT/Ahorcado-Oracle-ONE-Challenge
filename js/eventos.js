var btnIniciarJuego = document.querySelector("#iniciar-juego");
var btnGoHome = document.querySelector("#go-home");
var letraUsuario = document.querySelector("#letra-ingresada");
var btnAleatoria = document.querySelector("#aleatoria");
var btnCerrarGanaste = document.querySelector("#cerrar-ganaste");
var btnCerrarPerdiste = document.querySelector("#cerrar-perdiste");

window.addEventListener("load", function () {
    posicionarPuntero(campoAgregar);
    limpiarCampo(campoAgregar);
    limpiarCampo(campoLetraIngresada);
    palabraAleatoria = generarPalabraAleatoria();
});

btnIniciarJuego.addEventListener("click", function () {
    ocultarSeccionHeader();
    mostrarSeccionJuego();
    generarJuego();
    dibujarLienzo();
    limpiarCampo(campoAgregar);
    intentos = 0;
});

btnGoHome.addEventListener("click", function () {
    mostrarSeccionHeader();
    ocultarSeccionJuego();
    limpiarElementosLi();
    posicionarPuntero(campoAgregar);
    limpiarCampo(campoLetraIngresada);
    intentos = 0;
});

letraUsuario.addEventListener("input", function () {

    var letraEntrada;
        letraEntrada = validarCampoLetraIngresada();

        if(letraEntrada.length >= 0 && letraEntrada.length <= 1) {
            if (letraEntrada != "") {
                dibujarLetra(letraEntrada);
            }
        }
        
    
});

btnAleatoria.addEventListener("click", function () {
    generarJuego();
    limpiarCampo(campoLetraIngresada);
    intentos = 0;

});

btnCerrarGanaste.addEventListener("click", function () {
    var cerrarMensajeGanaste = document.querySelector(".show-mensaje-ganaste");
    cerrarMensajeGanaste.classList.remove("show-mensaje-ganaste");
    cerrarMensajeGanaste.classList.add("mensaje-ganaste-hidden");
    generarJuego();
    limpiarCampo(letraUsuario);
});

btnCerrarPerdiste.addEventListener("click", function () {
    var cerrarMensajePerdiste = document.querySelector(".show-mensaje-perdiste");
    cerrarMensajePerdiste.classList.remove("show-mensaje-perdiste");
    cerrarMensajePerdiste.classList.add("mensaje-perdiste-hidden");
    generarJuego();
    limpiarCampo(letraUsuario);
});