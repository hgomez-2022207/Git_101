function captura(){
    var tarea = document.getElementById("tarea").value;
    console.log(tarea)

     insertarFila(tarea);

}

function insertarFila(tarea){
    let tblTareas = document.getElementById('tblTareas').insertRow(1);
    let col1 = tblTareas.insertCell(0);
    let col2 = tblTareas.insertCell(1)
 


    col1.innerHTML = tarea;
    eliminarbtn = document.createElement("button");
    eliminarbtn.textContent = "Eliminar";
    col2.appendChild(eliminarbtn);

    eliminarbtn.addEventListener("click", (event) =>{
        
        event.target.parentNode.parentNode.remove();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".eliminar-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove();
        });
    });
});


eliminarbtn.addEventListener("click", (event) =>{
        
    event.target.parentNode.parentNode.remove();
});

function eliminar() {

    target.parentNode.parentNode.remove();

   /* eliminarbtn.addEventListener("click", (event) =>{
        
        event.target.parentNode.parentNode.remove();
    }); */
}