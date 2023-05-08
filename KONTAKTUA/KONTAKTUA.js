//Menuaren Script-a
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Modu argia";
    } else {
        modeText.innerText = "Modu iluna";

    }
});

// Web orrialdea kargatzerakoan exekutatuko dena.
function erabiltzaileaKargatu() {

    // Erabiltzaileak bere izena sartu badu, honekin izen hori lortuko dugu.
    var izenaBistaratu = localStorage.getItem("izenaGorde");

    // Erabiltzailerik ez badago sartuta, defektuzkoa jarriko dugu.
    if (izenaBistaratu == null) {

        izenaBistaratu = "Erabiltzailea";

    }

    // Web orria kargatzerakoan, erabiltzailerik kargatuko du.
    document.getElementById("izenaBistaratu").textContent = izenaBistaratu;

}

// Irteteko botoia sakatzerakoan kontutan hartuko dena.
function erabiltzaileIrten() {

    // Erabiltzaileak bere izena sartu badu, honekin izen hori lortuko dugu.
    var izenaBistaratu = localStorage.getItem("izenaGorde");

    // Ixtea nahi al dun edo ez galdetuko diogu erabiltzaileari.
    var erantzuna = confirm(izenaBistaratu + ", sesioa ixtea nahi duzu?");

    // Sesioa ixtea erabakitzen baduzu azalduko dena.
    if (erantzuna == true) {

        // Sesioa ixten hari garela abixatuko diogu.
        alert("Sesioa ixten...")

        // Gordeta edo sesioa hasita duen erabiltzailea ezabatu/sesioa ixteko.
        localStorage.clear();

        // Defektuzkoa jarri berriro
        izenaBistaratu = "Erabiltzailea";

        // Menuaren goi buruaren irakutzi.
        document.getElementById("izenaBistaratu").textContent = izenaBistaratu;

        // web orria berriro kargatu.
        location.reload();

        // Sesioa ez ixtea erabakitzen baduzu azalduko dena.
    } else {

        // Sesia itxi dela irakutsiko diogu.
        alert("Sesioa ez ixtea erabaki duzu.")

    }

}



// Con este codigo lo que hago es, que el video de la pagina principal, se reproduzca al pasar por encima,
// Pero al quitarlo de la pantalla, se pause y si te alejas mucho, se reinicie por completo.

/*var vid = document.getElementById("bideoScroll");
var playing = false;

function getCurTime() { 
  alert(vid.currentTime);
} 

function setCurTime() { 
  vid.currentTime=5;
} 

function playVideo() {
  vid.play();
  playing = true;
}

function pauseVideo() {
  vid.pause();
  playing = false;
}

window.addEventListener('scroll', function() {
  if (playing) {
    if (window.scrollY >= vid.offsetTop + vid.offsetHeight || window.scrollY + window.innerHeight <= vid.offsetTop) {
      pauseVideo();
    }
  } else {
    if (window.scrollY < vid.offsetTop + vid.offsetHeight && window.scrollY + window.innerHeight > vid.offsetTop) {
      playVideo();
    }
  }
});*/



// Al hacer scroll en la pagina, el video se ira reproduciendo, de momento lo dejo desactivado, ya que el video se queda en "position: fixed;"
// Y mi intencion es, que cuando acabe el video, la "position" se cambie, para poder seguir navegando tranquilamente.

/*var vid = document.getElementById("bideoScroll");
var playing = false; 

function playVideo() {
  vid.play();
  playing = true;
}

function pauseVideo() {
  vid.pause();
  playing = false;
}

window.addEventListener('scroll', function() {
  var position = window.scrollY / window.innerHeight  ;
  vid.currentTime = position;
});

var video = document.querySelector('.bideoa');
var videoContainer = document.querySelector('.video-container');

// Comprueba la posición del video cada segundo
var checkVideoPosition = setInterval(function() {
  if (video.currentTime >= 20) {
    // Cambia la posición del video a "position: absolute;"
    videoContainer.style.position = 'absolute';
    clearInterval(checkVideoPosition);
  }
}, 1000);

// Cambia la posición del video a "position: absolute;" cuando termina de reproducirse
video.addEventListener('ended', function() {
  videoContainer.style.position = 'absolute';
});*/