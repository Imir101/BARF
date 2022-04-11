'use strict';

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger__menu_button', '.burger__menu_lines');
  let links = menu.find('.burger__menu_link');
  let overlay = menu.find('.burger__menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger__menu_active');
    
    if (menu.hasClass('burger__menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger__menu');