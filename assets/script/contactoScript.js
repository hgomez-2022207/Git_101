function captura(){
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telefono").value;
    var com = document.getElementById("comentario").value;
    console.log(name + " " + email)

     insertarFila(name,email,tel);

}

function insertarFila(name,email,tel){
    let tblDatos = document.getElementById('tblDatos').insertRow(1);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    let col3 = tblDatos.insertCell(2);


    col1.innerHTML = name;
    col2.innerHTML = email;
    col3.innerHTML = tel;
}