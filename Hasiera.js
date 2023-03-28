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