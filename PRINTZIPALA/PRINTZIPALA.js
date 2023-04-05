
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

function orriaKargatu(){

    RecibirDatos();
    

}

function openModal() {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'block';
}

function closeModal() {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';
}

function RecibirDatos() {

    // Obtener los valores almacenados en localStorage
    var nombre = localStorage.getItem("nombre");
    var email = localStorage.getItem("correo");

    // Mostrar los valores recuperados en la página
    document.getElementById("nombrePersona").innerHTML = nombre;
    document.getElementById("correoPersona").innerHTML = email;
}

function toggleMenu() {
    var menu = document.querySelector('.sidebar');
    menu.classList.toggle('close');

}

/*function autoCloseMenu() {
  setTimeout(function() {
    // Cierra el menú después de 5 segundos
    toggleMenu();
  }, 5000);
}*/

