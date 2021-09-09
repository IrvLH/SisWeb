//var document = "javas.html";

function enviar(){
    window.alert('Un mensaje cualquiera');
    cambiarColor("Red");
    cambiarEstado(true);
}

var btnEnv = document.getElementById('elBoton');
btnEnv.addEventListener('click', function (){
    window.alert('Un mensaje desde un listener');
    btnEnv.style.color = "Green";
});

var anuncio = document.getElementById('aviso');
function cambiarColor(color) {
    anuncio.style.color = color;
}

function cambiarEstado(estado) {
    var checkBox = document.getElementById("check1").checked = estado;
}

var btnNegar = document.getElementById('botonDeshacer');
btnNegar.addEventListener('click', callback);

function callback() {
    cambiarColor("Green");
    cambiarEstado(false);
} 