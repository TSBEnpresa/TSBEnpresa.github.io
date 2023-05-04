function enviarDatos() {

    // detener la acción predeterminada del formulario
    event.preventDefault(); 

    // Capturar los valores de los campos de entrada
    var izena = document.getElementById("inputIzena").value;
    
    // Ez baduzu ezer sartzen edo, sesioa ixten baduzu gertuko dena
    if (izena == "") {
        
        izena = "Erabiltzailea";

    }

    // localStorage barruan balioa gorde
    localStorage.setItem("izenaGorde", izena);

    // Mezua irakustea
    alert("Ongi etorri " + izena + ", sesioa hasi duzu.");
        
    // Redirigir a la página donde se mostrarán los datos
    window.location.href = "../index.html";
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

