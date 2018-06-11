
//Nav
const navigation = () => {
  const nav = document.querySelector(".navigation");
  const navMenu = document.querySelector(".navigation-menu");
  const navBtn = document.querySelector(".navigation-button");
  const navLink = document.querySelectorAll(".navigation-menu-link");
  
  navBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    

    let aria = navBtn.getAttribute("aria-expanded");

    if (aria == "false")  aria = "true"
    else aria = "false";
      
    navBtn.setAttribute("aria-expanded", aria);
  });

}

//Inits
navigation();