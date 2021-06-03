// Nav


const defaultBtn2 = document.querySelector('#defaultBtn')
const customBtn = document.querySelector('#upload__btnIcon')

function uploadActivate(){
  defaultBtn2.click();
}



let nav = document.querySelector('.navbar')

window.addEventListener('scroll' , function(){
      let scrollPosition = Math.floor(pageYOffset)
  
      if(scrollPosition > 200){
          nav.classList.add('active')
      }else{
          nav.classList.remove('active')
      }
  });

  
  $(document).ready(function() {
      $('select').niceSelect();
    });


  $('.header-carousel').owlCarousel({
      items:1,
      loop:true,
      dots:false,
      nav:true,
      // autoplay:true
  })




$('.gallery-carousel').owlCarousel({
      items:3,
      dots:false,
      loop:true,
      nav:true,
      margin:20,
      responsive : {
            // breakpoint from 0 up
            0 : {
                  items:1
            },
            // breakpoint from 480 up
            480 : {
                  items:2
            },
            // breakpoint from 768 up
            768 : {
                  items:3
            }
        }
});

$('.sponser-carosuel').owlCarousel({
      items:4,
      dots:false,
      loop:true,
      nav:true,
      margin:20,
      autoplay: true,
      responsive : {
            // breakpoint from 0 up
            0 : {
                  items:1
            },
            // breakpoint from 480 up
            480 : {
                  items:3
            },
            // breakpoint from 768 up
            768 : {
                  items:4
            }
        }
});