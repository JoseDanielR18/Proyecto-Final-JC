const formulario = document.getElementById('formulario');  // Selecciona el id del formulario
const inputs = document.querySelectorAll('#formulario input'); // Selecciona todos los id de los inputs del formulario

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Lo mismos para apellidos
	usuario: /^[a-zA-Z0-9\_\-\s]{1,16}$/,  // Letras, numeros, guion y guion_bajo
}


// ESTA FUNCIÓN VERIFICA LOS CAMPOS DEL FORMULARIO A MEDIDA QUE SE COMPLETA
function validarFormulario(e) {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                let aviso = document.getElementById('name').classList.remove('form__input-error');
                let avisoLabel = document.getElementById('nombre').classList.remove('form__label-error');
                let avisoTexto = document.getElementById('texto-nombre').classList.remove('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.remove('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = false;
            } else {
                let aviso = document.getElementById('name').classList.add('form__input-error');
                let avisoLabel = document.getElementById('nombre').classList.add('form__label-error');
                let avisoTexto = document.getElementById('texto-nombre').classList.add('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.add('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = true;
            }
        break
            
        case "apellidos":
            if (expresiones.nombre.test(e.target.value)) {
                let aviso = document.getElementById('last-name').classList.remove('form__input-error');
                let avisoLabel = document.getElementById('apellido').classList.remove('form__label-error');
                let avisoTexto = document.getElementById('texto-apellido').classList.remove('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.remove('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = false;
            } else {
                let aviso = document.getElementById('last-name').classList.add('form__input-error');
                let avisoLabel = document.getElementById('apellido').classList.add('form__label-error');
                let avisoTexto = document.getElementById('texto-apellido').classList.add('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.add('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = true;
            }
        break
            
        case "usuario":
            if(expresiones.usuario.test(e.target.value)) {
                let aviso = document.getElementById('user').classList.remove('form__input-error');
                let avisoLabel = document.getElementById('usuario').classList.remove('form__label-error');
                let avisoTexto = document.getElementById('texto-usuario').classList.remove('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.remove('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = false;
            } else {
                let aviso = document.getElementById('user').classList.add('form__input-error');
                let avisoLabel = document.getElementById('usuario').classList.add('form__label-error');
                let avisoTexto = document.getElementById('texto-usuario').classList.add('texto-error');
                let estiloBoton = document.getElementById('entrar').classList.add('form__submit-desactivar');
                let avisoBoton = document.getElementById('entrar').disabled = true;
            }
        break
            
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); // Este evento lo que hace es que cuando se levante una tecla se ejecute la función validarFormulario
    input.addEventListener('blur', validarFormulario); // Este evento cumple la misma función, pero en este caso es cuando se ha dado clic a otro input o fuera de él.
})
