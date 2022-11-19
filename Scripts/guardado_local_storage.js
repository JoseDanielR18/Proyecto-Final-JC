//  ESTA FUNCIÓN ES PARA MOSTRAR LOS ELEMENTOS EN PANTALLA

function datosAlmacenados() {
    let user = localStorage.getItem('user');
    document.getElementById('usuario').innerHTML = user;

    document.getElementById('usuario-2').innerHTML = user;
}

window.addEventListener("load", datosAlmacenados)