$(document).ready(function() {

console.log("working");
  var s;
  var upDown = true;
  var isVisible = true;

// method attachement for the list items
	var mobileMenu = $('nav ul li');
	for(var i = 0; i < mobileMenu.length; i++)
	{
		mobileMenu[i].addEventListener('click',function(){
      		console.log("click");
      		toggleMobileMenu();
   		},false);
	}

	// methode attachement for the burger button
	$("#lines").click(function(){
		console.log('clicked');
		toggleMobileMenu();
	});

	// this will toggle the menu up and down
	var toggleMobileMenu = function()
	{
		console.log("clicked menu");
		if($(window).width() < 1279){
			if(upDown)
			{
				console.log("down");
				TweenLite.to($('header section'),.3,{top:"0px"});
				TweenLite.to($('header'),.3,{height:"224px"});
				upDown = false;
			}
			else
			{
				console.log("up");
				TweenLite.to($('header section'),.3,{top:"-184px"});
				TweenLite.to($('header'),.3,{height:"44px"});
				upDown=true;
			}
		}
	}

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

  $.fn.SuperBox = function(options) {
    
    var superbox      = $('<div class="superbox-show"></div>');
    var superboximg   = $('<img src="" class="superbox-current-img">');
    var superboxclose = $('<div class="superbox-close"></div>');
    
    superbox.append(superboximg).append(superboxclose);
    
    return this.each(function() {
      
      $('.superbox-list').click(function() {
    
        var currentimg = $(this).find('.superbox-img');
        var imgData = currentimg.data('img');
        superboximg.attr('src', imgData);
        
        if($('.superbox-current-img').css('opacity') == 0) {
          $('.superbox-current-img').animate({opacity: 1});
        }
        
        if ($(this).next().hasClass('superbox-show')) {
          superbox.toggle();
        } else {
          superbox.insertAfter(this).css('display', 'block');
        }
        
        $('html, body').animate({
          scrollTop:superbox.position().top - currentimg.width()
        }, 'medium');
      
      });
            
      $('.superbox').on('click', '.superbox-close', function() {
        $('.superbox-current-img').animate({opacity: 0}, 200, function() {
          $('.superbox-show').slideUp();
        });
      });
      
    });
  };




});