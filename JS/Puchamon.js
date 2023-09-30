let ataqueJugador
let ataqueRival
let vidasJugador = 3
let vidasRival = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar=document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let botonPuchamonJugador = document.getElementById('boton-puchamon')
    botonPuchamonJugador.addEventListener('click', selecionarPuchamonJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua) 
    let botonHierba = document.getElementById('boton-hierba')
    botonHierba.addEventListener('click', ataqueHierba)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego )
}
function selecionarPuchamonJugador(){
    let sectionSeleccionarPuchamon = document.getElementById('seleccionar-puchamon')
    sectionSeleccionarPuchamon.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let inputPendertuga = document.getElementById('pendertuga')
    let inputPitochu = document.getElementById('pitochu')
    let inputMotapod = document.getElementById('motapod')
    let spanPuchamonJugador = document.getElementById('puchamon-jugador')
    
    if (inputPendertuga.checked) {
        spanPuchamonJugador.innerHTML = 'Pendertuga'
    } else if (inputPitochu.checked){
        spanPuchamonJugador.innerHTML = 'Pitochu'
    } else if (inputMotapod.checked){
        spanPuchamonJugador.innerHTML = 'Motapod'
    } else {
        alert ('Selecciona un Puchamon')
    }
    selecionarPuchamonRival()
}

function selecionarPuchamonRival(){
    let puchamonAleatorio = aleatorio(1,3)
    let spanPuchamonRival = document.getElementById ('puchamon-rival')

    if (puchamonAleatorio == 1){
        spanPuchamonRival.innerHTML = 'Pendertuga'
    } else if (puchamonAleatorio == 2) {
        spanPuchamonRival.innerHTML = 'Pitochu'
    } else {
        spanPuchamonRival.innerHTML = 'Motapod'
    }
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioRival()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioRival()
}
function ataqueHierba(){
    ataqueJugador = 'HIERBA'
    ataqueAleatorioRival()
}

function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueRival = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'AGUA'
    } else {
        ataqueRival = 'HIERBA'
    }
    combate()
}
function combate (){
    
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasRival = document.getElementById('vidas-rival')
    if(ataqueRival == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueRival == 'HIERBA') {
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML= vidasRival
    } else if(ataqueJugador == 'AGUA' && ataqueRival == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML= vidasRival
    } else if(ataqueJugador == 'HIERBA' && ataqueRival == 'AGUA') {
        crearMensaje("GANASTE")
        vidasRival--
        spanVidasRival.innerHTML= vidasRival
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasRival == 0) {
        crearMensajeFinal("Felicitaciones! Ganaste :D")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Eres un perdedor D:")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu Puchamon atacó con ' + ataqueJugador + ' , el Puchamon rival ataco con ' + ataqueRival + ' : ' + resultado

    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonHierba = document.getElementById('boton-hierba')
    botonHierba.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'
}
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego )