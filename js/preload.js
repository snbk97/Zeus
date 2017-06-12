$(window).on('load',function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});

        })
//setTimeout(function(){$('.mcard').addClass('animateMe vis')}, 2000);
setTimeout(function(){$('.mcard').removeClass('animateMe vis')},3600);
setTimeout(function(){$('#left').addClass('animated bounceInLeft vis')},3000)
setTimeout(function(){$('#right').addClass('animated bounceInRight vis')},3600)
setTimeout(function(){Materialize.toast("Responive Search Box !</br>Just start typing, we got you!", 4000)
												},4000)
      