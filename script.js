
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

  function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-menu-botao')
    const tabContent = document.querySelectorAll('.js-menu-nav')
    
    if (tabMenu.length && tabContent.length){
    
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }




    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function() {
        activeTab(index)
      })
    })
    }
  }
    
    initTabNav()
 

/*** */



