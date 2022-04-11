$(function(){
    $('.product-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    function windowSize() {
        if ($(window).outerWidth() <= 970) {
            $('.product-head').appendTo('.product__head-mob');
        } else {
            $('.product-head').prependTo('.product-item');
        }
    }
    windowSize();
    $(window).on('resize', windowSize);
});