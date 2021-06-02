function toggleCssMenu(icon) {
  var cssmenu = document.getElementById('cssmenu');
  if (icon.className.indexOf('active') == -1) {
      icon.className = 'menu-icon active';
cssmenu.style.display = "block";
setTimeout(function(){cssmenu.className = 'active';},0);            
  }
  else {
      icon.className = 'menu-icon';
cssmenu.className = '';
setTimeout(function(){cssmenu.style.display = "none";},411); 
  }
}
// GSAP
const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to('.home_left p', {y:"0%", duration:1, stagger: 0.25 })

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
// sr.reveal('.main_button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
// sr.reveal('.about_img',{}); 
// sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
// sr.reveal('.work_img',{interval: 200}); 
// sr.reveal('.work_desc',{}); 

/*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 





