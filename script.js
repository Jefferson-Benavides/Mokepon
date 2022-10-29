let vidasJugador = 3;
let vidasRival = 3;

let agua = "💧";
let fuego = "🔥";
let tierra = "🌱";


let resumenJugador = [];
let resumenRival = [];
let veredicto = [];
let opcionDeMokepones;

let rotuloJugador;
let rotuloRival;

let mokepones = [];

const btnConfirmarMascotaJugador = document.getElementById("confirmarSeleccionMascotaJugador");
const principal = document.getElementById("principal");
const divUnoSeleccionMascota = document.getElementById("unoSeleccionMascota");

const divDos = document.getElementById("dosNotificacionesMascotaElegidaYVidasDisponibles");

const divTres = document.getElementById("tresSeleccionAtaqueJugador");
const sectAtaques = document.getElementById("ataques");
const botonesAtaques = document.getElementById("elegirAtaque-jugador");
const spanVidasMascotaJugador = document.getElementById("vidasMascotaJugador");
const spanMascotaJugadorSeleccionada = document.getElementById("mascotaJugadorSeleccionada");
const columnaAtaquesJugador = document.getElementById("ataqueLanzadoXJugador");

const spanVidasMascotaRival = document.getElementById("vidasMascotaRival");
const spanMascotaRivalSeleccionada = document.getElementById("mascotaRivalSeleccionada");
const columnaAtaquesRival = document.getElementById("ataqueLanzadoXRival");

const divCinco = document.getElementById("cincoVeredicto");
const veredictoJugador = document.getElementById("veredictoJugador");

const botonReiniciarJuego = document.getElementById("reiniciarJuego");
const divSeis = document.getElementById("seisBtnReiniciar");

let opcionCapipepo;
let opcionHipodoge;
let opcionRatigueya;
let ataquesMokepon;
let arrayBotonesAtaques = [];

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 5)
let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.png', 5)

capipepo.ataques.push(
    { nombre: '💧', id: 'aguaJugador' },
    { nombre: '💧', id: 'aguaJugador' },
    { nombre: '💧', id: 'aguaJugador' },
    { nombre: '🔥', id: 'fuegoJugador' },
    { nombre: '🌱', id: 'tierraJugador' },
);

hipodoge.ataques.push(
    { nombre: '🌱', id: 'tierraJugador' },
    { nombre: '🌱', id: 'tierraJugador' },
    { nombre: '🌱', id: 'tierraJugador' },
    { nombre: '🔥', id: 'fuegoJugador' },
    { nombre: '💧', id: 'aguaJugador' },
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'fuegoJugador' },
    { nombre: '🔥', id: 'fuegoJugador' },
    { nombre: '🔥', id: 'fuegoJugador' },
    { nombre: '💧', id: 'aguaJugador' },
    { nombre: '🌱', id: 'tierraJugador' },

);

mokepones.push(capipepo, hipodoge, ratigueya);
function iniciarJuego() {

    mokepones.forEach((mokepon) => {

        opcionDeMokepones = `
        <label for=${mokepon.nombre} class="lblMascotas" onclick="activarBotonConfirmarMascota()">
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
            <input type="radio" name="mascotaJugador" id=${mokepon.nombre} class="mascotas"
                onclick="activarBotonConfirmarMascota()">
        `
        divUnoSeleccionMascota.innerHTML += opcionDeMokepones;

        opcionCapipepo = document.getElementById("Capipepo");
        opcionHipodoge = document.getElementById("Hipodoge");
        opcionRatigueya = document.getElementById("Ratigueya");
    })

    btnConfirmarMascotaJugador.disabled = true;
    btnConfirmarMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    principal.style.display = 'flex';
    veredictoJugador.innerHTML = "Mucha suerte!!!";
    divDos.style.display = 'none';
    divTres.style.display = 'none';
    divSeis.style.display = 'none';
    spanVidasMascotaJugador.innerHTML = vidasJugador;
    spanVidasMascotaRival.innerHTML = vidasRival;
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
    columnaAtaquesJugador.innerHTML = resumenAtaquesJugador;
    columnaAtaquesRival.innerHTML = resumenAtaquesRival;

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
        spanMascotaJugadorSeleccionada.innerHTML = opcionCapipepo.id;
        rotuloJugador = opcionCapipepo.id;
    } else if (opcionHipodoge.checked) {
        spanMascotaJugadorSeleccionada.innerHTML = opcionHipodoge.id;
        rotuloJugador = opcionHipodoge.id;
        
    } else if (opcionRatigueya.checked) {
        spanMascotaJugadorSeleccionada.innerHTML = opcionRatigueya.id;
        rotuloJugador = opcionRatigueya.id;
    }

    extraerAtaques(rotuloJugador);
    mascotaEnemigo();
    principal.style.display = 'none'
    divDos.style.display = 'grid';
    divTres.style.display = 'flex';
}

function extraerAtaques(rotuloJugador){
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
        if (rotuloJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        if (ataque.nombre == agua) {
            ataquesMokepon = `
            <button class="ataques-jugador btnsAtaques" id=${ataque.id} onclick="roundConAgua()">${ataque.nombre}</button>
            `
        } else if (ataque.nombre == fuego){
            ataquesMokepon = `
            <button class="ataques-jugador btnsAtaques" id=${ataque.id} onclick="roundConFuego()">${ataque.nombre}</button>
            `
        } else {
            ataquesMokepon = `
            <button class="ataques-jugador btnsAtaques" id=${ataque.id} onclick="roundConTierra()">${ataque.nombre}</button>
            `
        }
        botonesAtaques.innerHTML += ataquesMokepon;
        arrayBotonesAtaques = document.querySelectorAll('.btnsAtaques');
        console.log(arrayBotonesAtaques);
    })
}

// function secuenciaAtaque(){
//     arrayBotonesAtaques.forEach((boton) => )
// }

function mascotaEnemigo() {
    let mascotaAleatoriaEnemigo = aleatorio(0, mokepones.length - 1);

    spanMascotaRivalSeleccionada.innerHTML = mokepones[mascotaAleatoriaEnemigo].nombre;
    rotuloRival = mokepones[mascotaAleatoriaEnemigo].nombre;

}

function ataquesAleatoriosEnemigo() {
    let ataqueAleatorioEnemigo = aleatorio(1, 3);
    if (ataqueAleatorioEnemigo == 1) {
        columnaAtaquesRival.innerHTML = agua;
        resumenRival.push(agua);
        return agua;
    } else if (ataqueAleatorioEnemigo == 2) {
        columnaAtaquesRival.innerHTML = fuego;
        resumenRival.push(fuego);
        return fuego;
    } else if (ataqueAleatorioEnemigo == 3) {
        resumenRival.push(tierra);
        columnaAtaquesRival.innerHTML = tierra;
        return tierra;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function roundConAgua() {
    divCinco.style.display = 'flex';
    columnaAtaquesJugador.innerHTML = agua;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (agua == ataqueAleatorioEnemigo) {
        veredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == tierra) {
        veredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--
    } else {
        veredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--

    }
    spanVidasMascotaJugador.innerHTML = `<strong>${vidasJugador}</strong>`;
    spanVidasMascotaRival.innerHTML = `<strong>${vidasRival}</strong>`;

    resumenJugador.push(agua);
    banderazo();
}

function roundConFuego() {
    divCinco.style.display = 'flex';
    columnaAtaquesJugador.innerHTML = fuego;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (fuego == ataqueAleatorioEnemigo) {
        veredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == agua) {
        veredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--;
    } else {
        veredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--;
    }
    resumenJugador.push(fuego);
    banderazo();
    spanVidasMascotaJugador.innerHTML = `<strong>${vidasJugador}</strong>`;
    spanVidasMascotaRival.innerHTML = `<strong>${vidasRival}</strong>`;
}
function roundConTierra() {
    divCinco.style.display = 'flex';
    columnaAtaquesJugador.innerHTML = tierra;

    let ataqueAleatorioEnemigo = ataquesAleatoriosEnemigo();

    if (tierra == ataqueAleatorioEnemigo) {
        veredictoJugador.innerHTML = "EMPATE";
        veredicto.push("EMPATE");
    } else if (ataqueAleatorioEnemigo == fuego) {
        veredictoJugador.innerHTML = "PERDISTE";
        veredicto.push("PERDISTE");
        vidasJugador--;
    } else {
        veredictoJugador.innerHTML = "GANASTE";
        veredicto.push("GANASTE");
        vidasRival--;
    }
    resumenJugador.push(tierra);
    banderazo();
    spanVidasMascotaJugador.innerHTML = `<strong>${vidasJugador}</strong>`;
    spanVidasMascotaRival.innerHTML = `<strong>${vidasRival}</strong>`;
}

window.addEventListener('load', iniciarJuego)