$(function () {
    let last;
    $('input[type="radio"]').on('click', function () {
        if (last == $(this).val()) {
            $(this).prop('checked', false);
        } else {
            last = $(this).val();
        }
    })
    if (window.location.hash == '') {
        $('.home').addClass('show')
        $('#home').addClass('active')
    } else if (window.location.hash) {
        $('.logo-header').addClass('show')
        $(window.location.hash).addClass('active')
        $('.' + window.location.hash.replace('#', '')).addClass('show')
    }
    window.onhashchange = function () {
        $('header li a').removeClass('active')
        $('.left-text a').removeClass('active')
        if (window.location.hash) {
            $('.logo-header').addClass('show')
            $('section').removeClass('show')
            $(window.location.hash).addClass('active')
            $('.' + window.location.hash.replace('#', '')).addClass('show')
        }
    }
    if (window.innerWidth <= 768) {
        $('.slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
    }

    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide > 0) {
            $('.logo-fixed').addClass('show')
        } else {
            $('.logo-fixed').removeClass('show')
        }
    });

});