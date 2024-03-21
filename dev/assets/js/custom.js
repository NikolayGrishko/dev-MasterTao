const hamburger = document.querySelector('.hamburger')
const headerNav = document.querySelector('.header-nav')

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
})

$('#first-screen-slider').slick({
    dots: true,
    appendArrows: $('.first-screen-arrows'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false
          }
        }
    ],
     
});