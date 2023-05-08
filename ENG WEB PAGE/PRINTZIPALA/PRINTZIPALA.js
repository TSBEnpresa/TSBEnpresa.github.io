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
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Night Mode";

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

// Honekin bideua bakarrik erreproduzitzea lortzen dugu.
var video = document.getElementById('mi-video');

// Behera goazen moduan bideoak jarraituko du edo ez (Segun ikusten al dugun edo ez, pantailan)
window.addEventListener('scroll', function() {

    var videoPosition = video.getBoundingClientRect();

    // Pantailaren posizioa kontutan izanda
    if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {

        //  Bideua martxan jarri.
        video.play();

    } else {

        // Bideua gelditu
        video.pause();

    }

});