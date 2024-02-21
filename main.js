// document.addEventListener("DOMContentLoaded", function (){
// let my__slider = tns({
//     container : ".my__slider",
//     // startIndex: 0,
//     slideBy: 1,
//     "speed" : 400,
//     "nav" : false,
//     loop: true,
//     autoplay : true,
//     controls : false,
//     autoplayButtonOutput : false,
//     gutter : 30,
//     center : true,
//     responsive: {
//         1600: { items: 4 },
//         1024: { items: 3 },
//         768: { items: 2 },
//         480: { items: 1 }
//     }
//     });
// });

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });