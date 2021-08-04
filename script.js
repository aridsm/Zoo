
function initAnimaScroll() {


  const sections = document.querySelectorAll('.js-scroll')
  const sections2 = document.querySelectorAll('.js-scroll2')
  
  
  if(sections.length) {
  const windowMetade = window.innerHeight * 0.8
  
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