
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

//Lightbox gallery

let gallery =  GLightbox({
  'gallery-list': 'glightbox'
});

//Video background 

 var tag = document.createElement('script');
 tag.src = 'https://www.youtube.com/player_api';
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 var tv,
   playerDefaults = {
     autoplay: 0,
     autohide: 1,
     modestbranding: 0,
     rel: 0,
     showinfo: 0,
     controls: 0,
     disablekb: 1,
     enablejsapi: 0,
     iv_load_policy: 3
   };
 var vid = [{
     'videoId': 'VhgoKZr53bc',
     'startSeconds': 2,
     'endSeconds': 690,
     'suggestedQuality': 'hd1080'
   }, ],
   randomVid = Math.floor(Math.random() * vid.length),
   currVid = randomVid;

 $('.hi em:last-of-type').html(vid.length);

 function onYouTubePlayerAPIReady() {
   tv = new YT.Player('tv', {
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     },
     playerVars: playerDefaults
   });
 }

 function onPlayerReady() {
   tv.loadVideoById(vid[currVid]);
 }

 function onPlayerStateChange(e) {
   if (e.data === 1) {
     $('#tv').addClass('active');
     $('.hi em:nth-of-type(2)').html(currVid + 1);
   } else if (e.data === 2) {
     $('#tv').removeClass('active');
     if (currVid === vid.length - 1) {
       currVid = 0;
     } else {
       currVid++;
     }
     tv.loadVideoById(vid[currVid]);
     tv.seekTo(vid[currVid].startSeconds);
   }
 }

 function vidRescale() {

   var w = $(window).width() + 200,
     h = $(window).height() + 200;

   if (w / h > 16 / 9) {
     tv.setSize(w, w / 16 * 9);
     $('.tv .screen').css({
       'left': '0px'
     });
   } else {
     tv.setSize(h / 9 * 16, h);
     $('.tv .screen').css({
       'left': -($('.tv .screen').outerWidth() - w) / 2
     });
   }
 }

 $(window).on('load resize', function () {
   vidRescale();
 });


//Inits
navigation();