var btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", agregar);

var txtTarea = document.getElementById("tarea");
var listaTareas = document.getElementById("tareas");

function agregar() {
    let tarea = document.createElement("li");
    tarea.textContent = txtTarea.value;
    listaTareas.appendChild(tarea);
} 