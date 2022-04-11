"use strict";

(function() {
    let sectionTwo = document.querySelector('.second'),
        header = document.querySelector('.header'),
        acc = document.querySelectorAll(".accordion__btn"),
        sectionTwoCoordinates;

    document.body.addEventListener('scroll', () => {
        sectionTwoCoordinates = sectionTwo.getBoundingClientRect();
        if (sectionTwoCoordinates.top <= 0) {
            header.classList.add('active');
        } else {
            if (header.classList.contains('active')){
                header.classList.add('unactive');
                setTimeout(() => {
                    header.classList.remove('active', 'unactive');
                    header.classList.add('appearing');
                }, 300);
                setTimeout(() => {
                    header.classList.remove('appearing');
                }, 600);
            }
        }
    });

    acc.forEach((e) => {
        e.addEventListener('click', function() {
            this.classList.toggle('active');
            let dropdown = this.nextElementSibling;
            if (dropdown.style.maxHeight){
                dropdown.style.maxHeight = null;
            } else {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            } 
        });
    });

    let swiper = Swiper,
        swiper2 = Swiper,
        init2 = false,
        init = false;



/* Which media query
**************************************************************/
    function swiperMode() {
        let tablet = window.matchMedia('(max-width: 1200px)');

        // Enable (for mobile)
        if(tablet.matches) {
            if (!init) {
                init = true;
                swiper = new Swiper('.swiper', {
                    loop: true,
                    direction: 'horizontal',
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }

                });
            }
        } else {
            swiper.destroy(true, true);
            init = false;
        }
    }
    function swiperMode2() {
        let tablet = window.matchMedia('(max-width: 600px)');

        // Enable (for mobile)
        if(tablet.matches) {
            if (!init2) {
                init2 = true;
                swiper2 = new Swiper('.swiper2', {
                    slidesPerView: 1,
                    spaceBetween: 100,
                    direction: 'horizontal',
                });
            }
        } else {
            swiper2.destroy(true, true);
            init2 = false;
        }
    }

/* On Load
**************************************************************/
    window.addEventListener('load', function() {
        swiperMode();
        swiperMode2();
    });

    /* On Resize
    **************************************************************/
    window.addEventListener('resize', function() {
        swiperMode();
        swiperMode2();
    });
})();

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

$(document).ready(function() {
	$('.popup__btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

