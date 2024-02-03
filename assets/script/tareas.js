function captura(){
    var tarea = document.getElementById("tarea").value;
    console.log(tarea)

     insertarFila(tarea);

}

function insertarFila(tarea){
    let tblTareas = document.getElementById('tblTareas').insertRow(1);
    let col1 = tblTareas.insertCell(0);
    let col2 = tblTareas.insertCell(1);


    col1.innerHTML = tarea;
    col2.innerHTML = email;
}

function abrirUsuario() {
    window.open("usuario.html", "Usuario", "width=600,height=400");
}