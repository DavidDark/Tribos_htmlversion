$(window).on('load',function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:500,
        animateOut: 'animate__fadeOutLeft',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            }
        }
    });
});
