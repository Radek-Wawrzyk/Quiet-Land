
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
  
  document.addEventListener('click', () => {
    if (!event.target.classList.contains("navigation-menu-link")) {
      return;
    } 

    event.target.classList.add('active');
    
    for (let i = 0; i < navLink.length; i++) {
      if (navLink[i] === event.target) {
        continue;
      }
      if (navBtn.classList.contains("active")) {
        close();
      }   
      navLink[i].classList.remove('active');
    }
  }, false);

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      close();
    }
  };
 
  const close = () => {
    navBtn.classList.remove("active");
    navBtn.setAttribute("aria-expanded", false);
    navMenu.classList.remove("active");
  };

}

//Inits
navigation();