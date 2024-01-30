function Login(){ 
    var done=0; 
    var usuario= "herlingomez@gmail.com"
    var password="12345678"
    /* var usuario=document.login.usuario.value; 
    var password=document.login.password.value; */
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
        window.location="./assets/contactos.html"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
        window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="" && password=="") { 
        window.location="errorpopup.html"; 
    } 
} 