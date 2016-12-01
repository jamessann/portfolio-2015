// ==================================================
// Base Default JavaScript
// ==================================================


// WOW.js for bits of animation
// ==================================================

/* Touch of animation around the place */
wow = new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false       // trigger animations on mobile devices (default is true)
      }
    )
wow.init();


// iPad and below full-screen nav
// ==================================================

jQuery(document).ready(function($){

	$('.primary-nav-trigger').on('click', function(){
		$('.menu-icon').toggleClass('is-clicked');
		$('.masthead').toggleClass('menu-is-open');
		
		  var menutext = $('.menu-text');
		  // menu text is not visible lets make it visible.
		  if(menutext.css('opacity') === '0')
		  {
		    menutext.css({
		      'opacity': '1',
		      'display': 'inline-block'
		    });
		  }

		  else
		  {
		    menutext.css({
		      'opacity': '0',
		      'display': 'none'
		    });
		  }

		  var closetext = $('.close-text');
		  // close text is not visible lets make it visible.
		  if(closetext.css('opacity') === '0')
		  {
		    closetext.css({
		      'opacity': '1',
		      'display': 'inline-block',
		      'margin-left': '-5px'
		    });
		  }

		  else
		  {
		    closetext.css({
		      'opacity': '0',
		      'display': 'none'
		    });
		  }
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the transition to give the body an overflow hidden
		if( $('.overlay-nav').hasClass('is-visible') ) {
			$('.overlay-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.overlay-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});
