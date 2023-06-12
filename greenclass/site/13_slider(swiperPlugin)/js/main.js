var swiper = new Swiper(".main_silder", {
    //spaceBetween: 30,
    //centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});