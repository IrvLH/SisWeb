var otraOper = true;

function escribir(numero){
    var pantalla = document.getElementById('OperacionTexto').value;
    document.getElementById('OperacionTexto').value = pantalla + numero;
    otraOper = true;
}

function escribirOper(operador){
    if(otraOper){
        var pantalla = document.getElementById('OperacionTexto').value;
        document.getElementById('OperacionTexto').value = pantalla + " " +operador+ " ";
        otraOper = false;
    }
}

function limpiar(){
    if(window.confirm("¿Borrar Operacion?")){
        document.getElementById('OperacionTexto').value = "";
    }
}

function limpiarUno(){
    var pantalla = document.getElementById('OperacionTexto');
    if(pantalla.value.charAt(pantalla.value.length-1) == " "){
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 3);
    }else{
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
    }
}

function Calcular(){
    window.alert('Calculando...'); 
    document.getElementById('Resultado').value = "Algo"; 
}

/*var btnEnv = document.getElementById('Limpiar');
btnEnv.addEventListener('click', function (){
    window.alert('Un mensaje desde un listener');
    btnEnv.style.color = "Green";
});*/