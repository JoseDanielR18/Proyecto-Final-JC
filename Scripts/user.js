function confirmacionUsuario() {
    let confirmar = document.getElementById('user').value;
    document.getElementById('nombre')
    .innerHTML = confirmar;
}


window.addEventListener("load", confirmacionUsuario) 