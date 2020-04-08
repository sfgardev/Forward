$(function(){

  $('.slider').slick({
    dots: true,
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
      $('.go-top').fadeIn();
    } else {
      $('.go-top').fadeOut();
    }
  });

  $('.go-top').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000)
  });


  ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [56.121903, 47.222332],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Creating a content layout.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'A custom placemark icon',
            balloonContent: 'This is a pretty placemark'
        }, {
            /**
             * Options.
             * You must specify this type of layout.
             */
            iconLayout: 'default#image',

        });


    myMap.geoObjects
        .add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');

        var newcoord = myMap.getGlobalPixelCenter();
        newcoord[0] += 200;
        myMap.setGlobalPixelCenter(newcoord);

});

$('.header__burger').on('click', function(){
  $('.header__burger').toggleClass('active');
});







});

