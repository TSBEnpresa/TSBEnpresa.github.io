
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
        modeText.innerText = "Light Mode";
    }else{
        modeText.innerText = "Night Mode";
        
    }
});

function erabiltzaileaKargatu(){
  
  // Obtén el valor almacenado en localStorage
  var izenaBistaratu = localStorage.getItem("izenaGorde");
  
  if(izenaBistaratu == null){

    izenaBistaratu = "User";

  }

  document.getElementById("izenaBistaratu").textContent = izenaBistaratu;

}

function erabiltzaileIrten() {

  var izenaBistaratu = localStorage.getItem("izenaGorde");

  var erantzuna = confirm("¿" + izenaBistaratu + ", do you want to sign out?");

  if (erantzuna == true) {

    alert("Signing out...")

    localStorage.clear();

    izenaBistaratu = "User";
  
    document.getElementById("izenaBistaratu").textContent = izenaBistaratu;
  
    location.reload();

  }else{

    alert("You have chosen not to log out")

  }


  
}
