function login(){ 
    var user, pass;

    user = document.getElementById("usuario").value;

    pass = document.getElementById("password").value;

    if(user == "hgomez-2022207" && pass == "12345" || user == "bgomez-2022208" && pass == "12345"){
        window.location = "./assets/contactos.html"
    }
} 