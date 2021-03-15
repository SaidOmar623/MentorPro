$(function(){
    $('.who-slider').slick({
        
        margin: '10px',
        slidesToShow: 1,
        dots:true,
        autoplay:false
    });
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        autoplay: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }
      })
})