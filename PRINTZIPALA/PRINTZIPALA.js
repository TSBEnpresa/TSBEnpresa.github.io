
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
  }
  
  closeBtn.addEventListener('click', hideModal);
