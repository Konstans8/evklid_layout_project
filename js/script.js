//slider
const swiper = new Swiper('.swiper', {
  loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


//tabs
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab__btn').forEach(function(tabBtn) {
      tabBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab__block').forEach(function(tabBlock) {
          tabBlock.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
    })
  })


//burger
const burger = document.querySelector('.burger');
const close = document.querySelector('.menu-close');
const menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
  menu.classList.add('burger-active')
});

close.addEventListener('click', () => {
  menu.classList.remove('burger-active');
})


//search
const search = document.querySelector('.search');
const closeSearch = document.querySelector('.search-close');
const searchMenu = document.querySelector('.search-menu');

search.addEventListener('click', () => {
  searchMenu.classList.add('search-active');
});

closeSearch.addEventListener('click', () => {
  searchMenu.classList.remove('search-active');
})



//accordeon

$( function() {
  $( ".faq__list" ).accordion({
    collapsible: true
  });
});
