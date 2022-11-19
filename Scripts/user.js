// ESTA FUNCIÓN GUARDA LOS DATOS EN EL LOCAL STORAGE

function login() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(user && password) {
        localStorage.setItem('user',user);
        document.getElementById("user").value = "";
        document.getElementById('password').value;
        window.open("./GameZoneCursos.html" ); 
    } else {
        alert("Los datos del formulario no pueden estar vacios");
    }
}