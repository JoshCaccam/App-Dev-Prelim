//Header
const navSpan = document.querySelector(".header_span");
const navToggles = document.querySelector(".header_toggles");

navSpan.addEventListener("click", () => {
    navSpan.classList.toggle("open");
    navToggles.classList.toggle("open");
    if(navToggles.classList.contains("open")){
        navToggles.style.maxHeight = navToggles.scrollHeight + "px";
    } else {
        navToggles.style.maxHeight = null;
    }
 });

 const down = document.querySelectorAll(".js-click");

down.forEach(toggle =>{
    toggle.addEventListener("click", () =>{
        if (toggle.classList.contains("open")&&window.innerWidth<760){
            toggle.classList.remove("open");
            toggle.nextElementSibling.style.maxHeight = null;
        }else if(!toggle.classList.contains("open")&&window.innerWidth<760){
            toggle.nextElementSibling.style.maxHeight = toggle.nextElementSibling.scrollHeight + "px";
            toggle.classList.add("open");
        }

    })
})

//Caccam Slider
const menuNav = document.querySelectorAll(".testimonial-slider");
const menuContent = document.querySelectorAll(".creator_slide");

menuNav.forEach((creator) => {
   creator.addEventListener("click", () => {
      removeActiveCreator();
      creator.classList.add('active')

      const activeContent = document.querySelector(`#${creator.id}-content`);
      
      removeActiveContent();
            activeContent.classList.add('active') 
   })
});

function removeActiveCreator() {
   menuNav.forEach((creator) => {
      creator.classList.remove('active')
   });
}

function removeActiveContent() {
   menuContent.forEach((creator) => {
      creator.classList.remove('active')
   });
}


