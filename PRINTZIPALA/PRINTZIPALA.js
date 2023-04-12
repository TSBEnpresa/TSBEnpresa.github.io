
//Menuaren Script-a
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Modu argia";
    }else{
        modeText.innerText = "Modu iluna";
        
    }
});


/* MOBILAREN MENUA IREKITZEKO */
function toggleMenu() {
    var menu = document.querySelector('.sidebar');
    menu.classList.toggle('close');

}


  const modalContainer = document.querySelector('.modal-container');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');
  
  function showModal() {
    modalContainer.style.display = 'flex';
    modal.style.display = 'block';
  }
  
  function hideModal() {
    modalContainer.style.display = 'none';
    modal.style.display = 'none';
    redirigirIndex();
  }

  function redirigirIndex() {
    // Redirigir a index.html#
    window.location.href = "index.html";
}
  
  closeBtn.addEventListener('click', hideModal);





  //Datuak bidaltzeko
  /*function datuakBidali() {

    alert("Datuak bidali dira.");

    event.preventDefault(); // detener la acción predeterminada del formulario
    // Capturar los valores de los campos de entrada
    var nombre = document.getElementById("inputIzena").value;
    /*var correo = document.getElementById("inputEmail4").value;
    var texto = document.getElementById("inputTextua").value;
    var edadetua = document.getElementById("gridCheck").checked;

    // Guardar los valores capturados en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("texto", texto);
    localStorage.setItem("edadetua", edadetua);

    // Cerrar la ventana modal
    document.getElementById("exampleModal").style.display = "none";

    // Redirigir a la página donde se mostrarán los datos
    window.location.href = "index.html";
  }*/


  //Datuak jaso web orri bertan
  function datuakBistaratu() {
    
    //izena gordetzeko parametroak
    var izena = document.getElementById("pertsonaIzena").value;

    //Gordetako izena bistaratu.
    var bistaratu = document.getElementById("bistaratu");
    bistaratu.innerHTML = izena;

  }


//Datuak jasotzeko
  /*function datuakJaso() {

    // Obtener los valores almacenados en localStorage
    var nombre = localStorage.getItem("nombre");
    var correo = localStorage.getItem("correo");
    var texto = localStorage.getItem("texto");
    var edadetua = localStorage.getItem("edadetua");

    // Mostrar los valores recuperados en la página
    document.getElementById("pertsonaIzena").innerHTML = nombre;
    document.getElementById("correoPersona").innerHTML = "Korreoa: " + correo;
    document.getElementById("textoPersona").innerHTML = "Textua: " + texto;
    document.getElementById("edadetuaPersona").innerHTML = "Edadetua nahiz: " + (edadetua == "true" ? "Bai" : "Ez");
}*/