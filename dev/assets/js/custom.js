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


$('select').niceSelect();


const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', () => {
   fileName.innerHTML = fileInput.files[0].name;
});

//    то же самое но в полном виде
// fileInput.addEventListener('change', function() {
//   console.log(this.files[0].name);
//   fileName.innerHTML = this.files[0].name;
// });

const controledField = document.querySelectorAll('[type="checkbox"]');

controledField.forEach(input =>{
  input.closest('.input-wrapper').classList.add('controled-wrapper')
  input.closest('.col').classList.add('controled-col')
})


const fileField = document.querySelectorAll('[type="file"]');

fileField.forEach(input =>{
  input.closest('.input-wrapper').classList.add('file-wrapper')
})