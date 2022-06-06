$(function  () {
// animation wow
new WOW().init(); //обезательно
// menu responsible "burger"
    $(function () {
        $('.burger').click(function () {
            $('.menu_ul,.burger,.header').toggleClass('menu_show');
            $('body').toggleClass('lock');
            $('.mobil_titl').toggleClass('hide');
        })
    })
//carousel
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }},
            {breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: false,
            }
        }],
});

$('.slide_clubs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
});

   
//filter custom
$(function () {
    var clubs = $('.clubs');
    clubs.hide();
    $('.clubs:first').show();
    $('.clubs-place:first').addClass(' club-active');
    $('.clubs-place').click(function () {
        clubs.hide(200);
        $('.clubs-place').removeClass('club-active');
        var accarattr = $(this).attr('data-filter');

        for (i = 0; i < clubs.length; i++) {
            var club = $(clubs[i]);
            var clubatr = club.attr('data-filter');
            if (clubatr == accarattr) {
                club.show(400);
                $(this).addClass(' club-active');
            }
        }
    })
})

// btn top
$(function () {
    $('.js-btn-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 700);
    });
    var windowHeight = $(window).height();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= (windowHeight / 2)) {
            $('.js-btn-top').show()
        }
        else {
            $('.js-btn-top').hide()
        }
        if ($(window).width()<768){
            $('.js-btn-top').hide()
        } else {
            $('.js-btn-top').show()
        }
    });
});
});