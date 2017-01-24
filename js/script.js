jQuery(function($) {
    $(document).ready(function () {
        
        $('.js-slick-slider').slick({
            autoplay: true,
            dots: true,
            arrows: false
        });
    

        $('.js-slick-slideset').slick({
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 400,
            slidesToShow: 12,
            centerMode: false,
            variableWidth: true,
            prevArrow: '<a href="#" class="slick-prev"></a>',
            nextArrow: '<a href="#" class="slick-next"></a>'
        });
        
    });


});
