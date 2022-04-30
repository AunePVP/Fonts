$(document).ready(function() {
  $(window).scroll( function(){
      $('.fade-in').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).addClass('appear');
          }
          if( bottom_of_window < bottom_of_object ){
              $(this).removeClass('appear');
          }
      });
  });
});
