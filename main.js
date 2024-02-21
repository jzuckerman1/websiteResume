document.addEventListener("DOMContentLoaded", function (){
let my__slider = tns({
    container : ".my__slider",
    // startIndex: 0,
    slideBy: 1,
    "speed" : 400,
    "nav" : false,
    loop: true,
    autoplay : true,
    controls : false,
    autoplayButtonOutput : false,
    gutter : 30,
    center : true,
    responsive: {
        1600: { items: 4 },
        1024: { items: 3 },
        768: { items: 2 },
        480: { items: 1 }
    }
    });
});