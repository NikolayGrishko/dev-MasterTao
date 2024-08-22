const hamburger = document.querySelector('.hamburger')
const headerNav = document.querySelector('.header-nav')

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active')
    headerNav.classList.toggle('show')
})


$('select').niceSelect();


$('#first-screen-slider').slick({
  dots: true,
  appendArrows: $('.first-screen-arrows'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }, ]
});


mobileOnlySlider(".slider-advantages", 1024);
function mobileOnlySlider($slidername, $breakpoint) {
  const slider = $($slidername);
  const settings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider


const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', () => {
   fileName.innerHTML = fileInput.files[0].name;
});


const controledField = document.querySelectorAll('[type="checkbox"]');
const fileField = document.querySelectorAll('[type="file"]');
const formBtns = document.querySelectorAll('form .col button')

const addParentClass = (array, parent, className)=> {
  array.forEach(item=> {
    item.closest(parent).classList.add(className)
  })
}

addParentClass(formBtns, ('.col'), ('mobile-center'))
addParentClass(fileField, ('.input-wrapper'), ('file-wrapper'))
addParentClass(controledField, ('.input-wrapper'), ('controled-wrapper'))
addParentClass(controledField, ('.col'), ('controled-col'))