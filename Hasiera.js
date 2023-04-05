function enviarDatos() {

    // detener la acción predeterminada del formulario
    event.preventDefault(); 

    // Capturar los valores de los campos de entrada
    var nombre = document.getElementById("inputIzena").value;
    var email = document.getElementById("inputEmail").value;

    if (nombre == "") {
        
        nombre = "Anonimoa";

    }

    // Guardar los valores capturados en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);

    // Redirigir a la página donde se mostrarán los datos
    window.location.href = "../PRINTZIPALA/PRINTZIPALA.html";
}

function validarFormulario() {

    var requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    var valid = true;

    requiredInputs.forEach(function(input) {

        if (input.value.trim() === '') {
            valid = false;
            input.classList.add('invalid');
        } else {
            enviarDatos(event);
            input.classList.remove('invalid');
        }

    });

    return valid;
}