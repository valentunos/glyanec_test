let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 1,
        },

    },
});

