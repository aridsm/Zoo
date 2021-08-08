
function initAnimaScroll() {


  const sections = document.querySelectorAll('.js-scroll')
  const sections2 = document.querySelectorAll('.js-scroll2')
  
  
  if(sections.length) {
  const windowMetade = window.innerHeight * 0.9
  
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop < 0) {
        section.classList.add('ativo')
    } else {
      section.classList.remove('ativo')
    }
  }
    )
  }

  function animaScroll2() {
    sections2.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop < 0) {
        section.classList.add('ativo')
    } else {
      section.classList.remove('ativo')
    }
  }
    )
  }
  
  animaScroll()
  animaScroll2()
  
  window.addEventListener('scroll', animaScroll)
  window.addEventListener('scroll', animaScroll2)
  }
  }
  
  initAnimaScroll()

  /***********/ 

  var visita = document.querySelector('#visita');
window.addEventListener('mouseup',function(event){

  if(event.target != visita && event.target.parentNode != visita){
      visita.style.display = 'none';
  }
});  

var atividades = document.querySelector('#menu-atividades');
window.addEventListener('mouseup',function(event){

  if(event.target != atividades && event.target.parentNode != atividades){
      atividades.style.display = 'none';
  }
});  

/* *****  */


var headerUp =  document.querySelector('#header-up');
var headerDown = document.querySelector('#header-down')
var fecharMobile = document.querySelector('#fechar-mobile')

document.getElementById('menu-mobile').addEventListener('mouseup', function(event) {

  headerUp.style.display='flex';
 headerDown.style.display='flex';
 fecharMobile.style.display='block'

})

fecharMobile.addEventListener('mouseup', function(event) {

  headerUp.style.display='none';
 headerDown.style.display='none';
 fecharMobile.style.display='none'

})

/**** */

$(window).on('load', function () {
  $("#loader").fadeOut(2000);
})

/******** */

let time = 6000,
  currentImageIndex = 0,
  images = document.querySelectorAll('.slider div'),
  max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selecionado")


  currentImageIndex++

  if (currentImageIndex >= max) {
    currentImageIndex = 0
  }
  images[currentImageIndex].classList.add("selecionado")
}

function start() {
  setInterval(() => {
    nextImage()
  }, time)
}

window.addEventListener("load", start)
