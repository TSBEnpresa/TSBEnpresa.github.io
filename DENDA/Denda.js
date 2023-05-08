/* DENDA BARRUKO GALERIA || CAROUSEL */
function App() {}

window.onload = function(event) {
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

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition, slickWidth, track) : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track)
}

let prevAction = (leftPosition, slickWidth, track) => {
    if (leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
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