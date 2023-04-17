
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

function erabiltzaileaKargatu(){
  
  // Obtén el valor almacenado en localStorage
  var izenaBistaratu = localStorage.getItem("izenaGorde");
  
  if(izenaBistaratu == null){

    izenaBistaratu = "Erabiltzailea";

  }

  document.getElementById("izenaBistaratu").textContent = izenaBistaratu;

}

function erabiltzaileIrten() {

  localStorage.clear();

  izenaBistaratu = "Erabiltzailea";

  document.getElementById("izenaBistaratu").textContent = izenaBistaratu;

  location.reload();
  
}