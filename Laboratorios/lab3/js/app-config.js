function buscarJugador(){
    alert("El jugador es: "+ App.elements.jugadorTxt.val());
}
App = {
    init: function (){
        App.bindEvents();
    },
    elements: {
        buscarJugadorBtn: $(".buscar-jugador-btn-js"),
        jugadorTxt: $(".jugador-txt-js"),
    },
    bindEvents: function(){
        App.elements.buscarJugadorBtn.on("click", buscarJugador);
    }
};