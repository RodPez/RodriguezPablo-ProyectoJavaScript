let usuarios = [];

class Usuario {
    constructor(nombre, contraseña){
        this.nombre = nombre;
        this.contraseña = contraseña;
    }
}

usuarios = localStorage.getItem("usuarios")

usuarios = JSON.parse(usuarios)

const formularioRegister = document.querySelector(".loGin"),
    email = document.querySelector(".usuarioI"),
    password = document.querySelector(".passI"),
    mensaje = document.querySelector("#mensaje");



function buscar(arr,filtro) {
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro);
    });
    return encontrado;
}


formularioRegister.addEventListener("submit", (e) =>{
    e.preventDefault()
    if (buscar(usuarios, email.value)) {
        mensaje.innerText= "El usuario ya esta en uso.";
        return;
    }else{
    const newUser = new Usuario (email.value , password.value);
    usuarios.push(newUser);
    }
    localStorage.setItem("usuarios" , JSON.stringify(usuarios))
});




