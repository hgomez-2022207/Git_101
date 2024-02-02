function login(){ 
    var user, pass;

    user = document.getElementById("usuario").value;

    pass = document.getElementById("password").value;

    if(user == "hgomez-2022207" && pass == "12345" || user == "bgomez-2022208" && pass == "12345" || user == "ggarcia-2022205" && pass == "12345"
    || user == "becheveria" && pass == "12345"){
        window.location = "./assets/contactos.html"
    }

     insertarUsuario(usuario,password);
} 

function insertarUsuario(usuario,password){
    let tblDatosUser = document.getElementById('tblDatosUser').insertRow(1);
    let col1 = tblDatos.tblDatosUser(1);
    let col2 = tblDatos.tblDatosUser(3);



    col1.innerHTML = usuario;
    col2.innerHTML = password;

}