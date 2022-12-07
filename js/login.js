let usuariosAlmacenados = localStorage.getItem("usuarios")

usuariosAlmacenados = JSON.parse(usuariosAlmacenados)


const formularioLogin = document.querySelector(".loGin"),
    checkbox = document.querySelector("#flexCheckDefault"),
    email = document.querySelector(".usuarioI"),
    password = document.querySelector(".passI"),
    ingresar = document.querySelector(".btnIngresar");



function guardarLs (valor) {
    let user = {usuario : email.value , pass : password.value};
    if(user.usuario=="" || user.pass==""){
        mensaje.innerText= "De completar todos los campos.";
        return;
    }else{
        if (valor==="sessionStorage") {
            sessionStorage.setItem("item" , JSON.stringify(user))
        }
        if (valor==="localStorage") {
            localStorage.setItem("item", JSON.stringify(user))
        }
        return user
    }
}

function inicioSesion(usuarios) {
    let userFound = usuarios.find(usuario=>{
        return usuario.nombre == email.value && usuario.contraseña == password.value;
    })
    if (userFound) {
        window.location.href="../pages/transacciones.html"
    } else {
        document.querySelector("#mensaje").innerText="Usuario no encontrado.";
    }
    return userFound;
}

formularioLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    inicioSesion(usuariosAlmacenados)
})


