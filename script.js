let vidasJugador = 3;
let vidasRival = 3;

let agua = "💧";
let fuego = "🔥";
let tierra = "🌱";


let resumenJugador = [];
let resumenRival = [];
let veredicto = [];
console.log(resumenJugador);
console.log(resumenRival);
console.log(veredicto);


let rotuloJugador = "";
let rotuloRival = "";

const btnConfirmarMascotaJugador = document.getElementById("confirmarSeleccionMascotaJugador");
const principal = document.getElementById("principal");
const veredictoJugador = document.getElementById("veredictoJugador");
const divDos = document.getElementById("dosNotificacionesMascotaElegidaYVidasDisponibles");
const divTres = document.getElementById("tresSeleccionAtaqueJugador");
const divSeis = document.getElementById("seisBtnReiniciar");
const columnaJugador = document.getElementById("ataqueLanzadoXJugador");
const columnaRival = document.getElementById("ataqueLanzadoXRival");

const botonReiniciarJuego = document.getElementById("reiniciarJuego");
const sectAtaques = document.getElementById("ataques");
const divUnoSeleccionMascota = document.getElementById("unoSeleccionMascota");

const opcionCapipepo = document.getElementById("capipepo");
const opcionHipodoge = document.getElementById("hipodoge");
const opcionRatigueya = document.getElementById("ratigueya");
const spanMascotaJugadorSeleccionada = document.getElementById("mascotaJugadorSeleccionada");

const divUno = document.getElementById("principal");
const spanMascotaRivalSeleccionada = document.getElementById("mascotaRivalSeleccionada");
const spanAtaqueLanzadoXRival = document.getElementById("ataqueLanzadoXRival");

const spanVidasMascotaJugador = document.getElementById("vidasMascotaJugador");
const spanVidasMascotaRival = document.getElementById("vidasMascotaRival");

const divCinco = document.getElementById("cincoVeredicto");
const spanAtaqueLanzadoXJugador = document.getElementById("ataqueLanzadoXJugador");
const spanVeredictoJugador = document.getElementById("veredictoJugador");

function iniciarJuego() {
    btnConfirmarMascotaJugador.disabled = true;
    btnConfirmarMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    principal.style.display = 'flex';
    veredictoJugador.innerHTML = "Mucha suerte!!!"
    divDos.style.display = 'none';
    divTres.style.display = 'none';
    divSeis.style.display = 'none';
}


function activarBotonConfirmarMascota() {
    btnConfirmarMascotaJugador.disabled = false;
}

function banderazo() {
    let resumenAtaquesJugador = "";
    let resumenAtaquesRival = "";
    for (i = 0; i < veredicto.length; i++) {
        resumenAtaquesJugador += `${resumenJugador[i]}<br>`;
        resumenAtaquesRival += `${resumenRival[i]}<br>`;
    }
    columnaJugador.innerHTML = resumenAtaquesJugador;
    columnaRival.innerHTML = resumenAtaquesRival;

    if (vidasJugador > 0 && vidasRival > 0) {
        botonReiniciarJuego.style.display = 'none'
        return true;
    } else {
        sectAtaques.style.display = 'none';
        divUnoSeleccionMascota.style.display = 'none';
        divSeis.style.display = 'flex';
        botonReiniciarJuego.style.display = 'flex'

        return false;
    }
}

function reiniciarJuego() {
    location.reload();
}

function seleccionarMascotaJugador() {

    if (opcionCapipepo.checked) {
        spanMascotaJugadorSeleccionada.innerHTML = `<strong>Capipepo</strong>`;
        rotuloJugador = "Capipepo";
    } else if (opcionHipodoge.checked) {
        spanMascotaJugadorSeleccionada.innerHTML = `<strong>Hipodoge</strong>`;
        rotuloJugador = "Hipodoge";

    } else if (opcionRatigueya.checked) {
        spanMascotaJugadorSeleccionada.innerHTML = `<strong>Ratigueya</strong>`;
        rotuloJugador = "Ratigueya";
    }
    mascotaEnemigo();
    imprimirMascotaElegidaVidasDisponibles();
    divUno.style.display = 'none'
    divDos.style.display = 'grid';
    divTres.style.display = 'flex';
}

function mascotaEnemigo() {
    let mascotaAleatoriaEnemigo = aleatorio(1, 3);
    if (mascotaAleatoriaEnemigo == 1) {
        spanMascotaRivalSeleccionada.innerHTML = `<strong>Capipepo</strong>`;
        rotuloRival = "Capipepo";
    } else if (mascotaAleatoriaEnemigo == 2) {
        spanMascotaRivalSeleccionada.innerHTML = `<strong>Hipodoge</strong>`;
        rotuloRival = "Hipodoge";
    } else if (mascotaAleatoriaEnemigo == 3) {
        spanMascotaRivalSeleccionada.innerHTML = `<strong>Ratigueya</strong>`;
        rotuloRival = "Ratigueya";
    }
}

function ataquesAleatoriosEnemigo() {
    let ataqueAleatorioEnemigo = aleatorio(1, 3);
    if (ataqueAleatorioEnemigo == 1) {
        spanAtaqueLanzadoXRival.innerHTML = agua;
        resumenRival.push(agua);
        return agua;
    } else if (ataqueAleatorioEnemigo == 2) {
        spanAtaqueLanzadoXRival.innerHTML = fuego;
        resumenRival.push(fuego);
        return fuego;
    } else if (ataqueAleatorioEnemigo == 3) {
        resumenRival.push(tierra);
        spanAtaqueLanzadoXRival.innerHTML = tierra;
        return tierra;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function imprimirMascotaElegidaVidasDisponibles() {
    spanVidasMascotaJugador.innerHTML = `<strong>${vidasJugador}</strong>`;
    spanVidasMascotaRival.innerHTML = `<strong>${vidasRival}</strong>`;
}


function roundConAgua() {
    divCinco.style.display = 'flex';
    spanAtaqueLanzadoXJugador.innerHTML = agua;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (agua == ataqueAleatorioEnemigo) {
        spanVeredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == tierra) {
        spanVeredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--
    } else {
        spanVeredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--
    }
    resumenJugador.push(agua);
    imprimirMascotaElegidaVidasDisponibles();
    banderazo();
}

function roundConFuego() {
    divCinco.style.display = 'flex';
    spanAtaqueLanzadoXJugador.innerHTML = fuego;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (fuego == ataqueAleatorioEnemigo) {
        spanVeredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == agua) {
        spanVeredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--;
    } else {
        spanVeredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--;
    }
    resumenJugador.push(fuego);
    imprimirMascotaElegidaVidasDisponibles();
    banderazo();
}
function roundConTierra() {
    divCinco.style.display = 'flex';
    spanAtaqueLanzadoXJugador.innerHTML = tierra;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (tierra == ataqueAleatorioEnemigo) {
        spanVeredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == fuego) {
        spanVeredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--;
    } else {
        spanVeredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--;
    }
    resumenJugador.push(tierra);
    imprimirMascotaElegidaVidasDisponibles();
    banderazo();
}

window.addEventListener('load', iniciarJuego)