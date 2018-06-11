
//Nav
const navigation = () => {
  const nav = document.querySelector(".navigation");
  const navMenu = document.querySelector(".navigation-menu");
  const navBtn = document.querySelector(".navigation-button");
  const navLink = document.querySelectorAll(".navigation-menu-link");
  const main = document.querySelector("main");
  
  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    let aria = navBtn.getAttribute("aria-expanded");

    if (aria == "false")  aria = "true"
    else aria = "false";
      
    navBtn.setAttribute("aria-expanded", aria);
  });

  let scrollPos = window.scrollY;
  const navHeight = nav.offsetHeight;

  window.addEventListener("scroll", () => {
    scrollPos = window.scrollY;
    
    if (scrollPos >= navHeight) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });
}

//Inits
navigation();