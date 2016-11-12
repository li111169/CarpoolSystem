/**
 * Created by ZL on 2016-09-11.
 */
// jQuery.noConflict();
// (function ($) {
//     $(document).ready(function(){
//
//         // hide .navbar first
//         $(".navbar").hide();
//         // fade in .navbar
//
//         $(function () {
//             $(window).scroll(function () {
//
//                 // set distance user needs to scroll before we start fadeIn
//                 if ($(this).scrollTop() > ($(window).height()-$('.navbar').height())) {
//                     $('.navbar').fadeIn();
//                     $()
//                 } else {
//                     $('.navbar').fadeOut();
//                 }
//             });
//         });
//
//     });
// $('.home-page').height(function () {
//     return $(window).height();
// });
//     $('#map').width(function () {
//         return $('.col-lg-5').width();
//     });
//     $('#map').height(function () {
//         return $('.col-lg-3').height();
//     });
// }(jQuery));

//jQuery is required to run this code
$( document ).ready(function() {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $('#signUpForm').validate({
        rules: {
            password: "required",
            password_again: {
                equalTo: "#password"
            },
            password: {
                required: true,
                rangelength: [3, 6]
            }
        }
    });

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
$("a").mouseup(function () {
    $(this).blur();l
});

$('#loginModal').on('hidden.bs.moda', function (event) {
    $('a').blur();
});



