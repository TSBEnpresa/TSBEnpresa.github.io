
/* DENDA BARRUKO GALERIA || CAROUSEL */
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
    erabiltzaileaKargatu();
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}

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