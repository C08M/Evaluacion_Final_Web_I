
function detectarEnter(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
}

function agregarTarea() {
    var input = document.getElementById("nuevaTarea");
    var texto = input.value;

    if (texto === "") {
        return;
    }

    var lista = document.getElementById("listaTareas");

    var li = document.createElement("li");
    li.className = "tarea";

    var span = document.createElement("span");
    span.className = "texto-tarea";
    span.textContent = texto;
    span.setAttribute("onclick", "marcarCompletada(this.parentElement)");

    var divBotones = document.createElement("div");
    divBotones.className = "botones-tarea";

    var btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.className = "btn-completar";
    btnCompletar.setAttribute("onclick", "marcarCompletada(this.parentElement.parentElement)");

    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.setAttribute("onclick", "eliminarTarea(this.parentElement.parentElement)");

    divBotones.appendChild(btnCompletar);
    divBotones.appendChild(btnEliminar);

    li.appendChild(span);
    li.appendChild(divBotones);

    lista.appendChild(li);

    input.value = "";

    actualizarContador();
}

function marcarCompletada(li) {
    li.classList.toggle("completada");
    actualizarContador();
}

function eliminarTarea(li) {
    li.remove();
    actualizarContador();
}

function eliminarCompletadas() {
    var completadas = document.querySelectorAll(".tarea.completada");

    for (var i = 0; i < completadas.length; i++) {
        completadas[i].remove();
    }

    actualizarContador();
}

function actualizarContador() {
    var pendientes = document.querySelectorAll(".tarea:not(.completada)");
    document.getElementById("contador").textContent = pendientes.length + " tareas pendientes";
}