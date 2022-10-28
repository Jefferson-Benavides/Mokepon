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


function iniciarJuego() {
    let btnConfirmarMascotaJugador = document.getElementById("confirmarSeleccionMascotaJugador")
    btnConfirmarMascotaJugador.disabled = true;
    btnConfirmarMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let principal = document.getElementById("principal");
    principal.style.display = 'flex';

    let veredictoJugador = document.getElementById("veredictoJugador");
    veredictoJugador.innerHTML = "Mucha suerte!!!"

    let divDos = document.getElementById("dosNotificacionesMascotaElegidaYVidasDisponibles");
    divDos.style.display = 'none';
    let divTres = document.getElementById("tresSeleccionAtaqueJugador");
    divTres.style.display = 'none';
    // let divCuatro = document.getElementById("cuatroLineaDeTiempoDelJuego");
    // divCuatro.style.display = 'none';
    // let divCinco = document.getElementById("cincoVeredicto");
    // divCinco.style.display = 'none';
    let divSeis = document.getElementById("seisBtnReiniciar");
    divSeis.style.display = 'none';
}

function activarBotonConfirmarMascota() {
    let btnConfirmarMascotaJugador = document.getElementById("confirmarSeleccionMascotaJugador")
    btnConfirmarMascotaJugador.disabled = false;
}

function banderazo() {
    // let columnaJugador = document.getElementById("mascotaJugadorSeleccionada")
    //let divSiete = document.getElementById("resumenDelJuego");
    //     let resumen = `<table border='1'><tr><th rowspan='2'>Round</th><th colspan='2'>ATAQUES</th><th rowspan='2'>Veredicto</th></tr><tr><th>${rotuloJugador}</span></th><th>${rotuloRival}</th></tr>`;

    //     for (i = 0; i < veredicto.length; i++) {

    //         resumen += "<tr>"
    //         resumen += `<td>${i + 1}</td>`
    //         resumen += `<td>${resumenJugador[i]}</td>`
    //         resumen += `<td>${resumenRival[i]}</td>`
    //         resumen += `<td>${veredicto[i]}</td>`
    //         //resumen += `Round ${i+1} ${resumenJugador[i]} ${resumenRival[i]} ${veredicto[i]}<br>`;
    //         resumen += "</tr>"
    //     }
    //     resumen += "</table>"
    // divSiete.innerHTML = resumen;

    let columnaJugador = document.getElementById("ataqueLanzadoXJugador");
    let columnaRival = document.getElementById("ataqueLanzadoXRival");

    let resumenAtaquesJugador = "";
    let resumenAtaquesRival = "";

    for (i = 0; i < veredicto.length; i++) {

        resumenAtaquesJugador += `${resumenJugador[i]}<br>`;
        resumenAtaquesRival += `${resumenRival[i]}<br>`;
    }
    columnaJugador.innerHTML = resumenAtaquesJugador;
    columnaRival.innerHTML = resumenAtaquesRival;
    
    let botonReiniciarJuego = document.getElementById("reiniciarJuego");
    if (vidasJugador > 0 && vidasRival > 0) {
        botonReiniciarJuego.style.display = 'none'
        return true;
    } else {
        let sectAtaques = document.getElementById("ataques");
        sectAtaques.style.display = 'none';
        let divUnoSeleccionMascota = document.getElementById("unoSeleccionMascota");
        divUnoSeleccionMascota.style.display = 'none';
        let divSeis = document.getElementById("seisBtnReiniciar");
        divSeis.style.display = 'flex';
        botonReiniciarJuego.style.display = 'flex'

        return false;
    }
}

function reiniciarJuego() {
    location.reload();
}

function seleccionarMascotaJugador() {
    let opcionCapipepo = document.getElementById("capipepo");
    let opcionHipodoge = document.getElementById("hipodoge");
    let opcionRatigueya = document.getElementById("ratigueya");
    //let btnConfirmarMascotaJugador = document.getElementById("confirmarSeleccionMascotaJugador");
    let spanMascotaJugadorSeleccionada = document.getElementById("mascotaJugadorSeleccionada");
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
    let divUno = document.getElementById("principal");
    divUno.style.display = 'none'
    let divDos = document.getElementById("dosNotificacionesMascotaElegidaYVidasDisponibles");
    divDos.style.display = 'grid';
    let divTres = document.getElementById("tresSeleccionAtaqueJugador");
    divTres.style.display = 'flex';
}

function mascotaEnemigo() {
    let mascotaAleatoriaEnemigo = aleatorio(1, 3);
    let spanMascotaRivalSeleccionada = document.getElementById("mascotaRivalSeleccionada");
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
    let spanAtaqueLanzadoXRival = document.getElementById("ataqueLanzadoXRival");
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
    let spanVidasMascotaJugador = document.getElementById("vidasMascotaJugador");
    let spanVidasMascotaRival = document.getElementById("vidasMascotaRival");

    spanVidasMascotaJugador.innerHTML = `<strong>${vidasJugador}</strong>`;
    spanVidasMascotaRival.innerHTML = `<strong>${vidasRival}</strong>`;
}


function roundConAgua() {
    // let divCuatro = document.getElementById("cuatroLineaDeTiempoDelJuego");
    // divCuatro.style.display = 'flex';
    let divCinco = document.getElementById("cincoVeredicto");
    divCinco.style.display = 'flex';
    let spanAtaqueLanzadoXJugador = document.getElementById("ataqueLanzadoXJugador");
    spanAtaqueLanzadoXJugador.innerHTML = agua;
    let spanVeredictoJugador = document.getElementById("veredictoJugador");

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

    // let divCuatro = document.getElementById("cuatroLineaDeTiempoDelJuego");
    // divCuatro.style.display = 'flex';
    let divCinco = document.getElementById("cincoVeredicto");
    divCinco.style.display = 'flex';
    let spanAtaqueLanzadoXJugador = document.getElementById("ataqueLanzadoXJugador");
    spanAtaqueLanzadoXJugador.innerHTML = fuego;
    let spanVeredictoJugador = document.getElementById("veredictoJugador");

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
    // let divCuatro = document.getElementById("cuatroLineaDeTiempoDelJuego");
    // divCuatro.style.display = 'flex';
    let divCinco = document.getElementById("cincoVeredicto");
    divCinco.style.display = 'flex';
    let spanAtaqueLanzadoXJugador = document.getElementById("ataqueLanzadoXJugador");
    spanAtaqueLanzadoXJugador.innerHTML = tierra;
    let spanVeredictoJugador = document.getElementById("veredictoJugador");

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