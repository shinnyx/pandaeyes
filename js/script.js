// toggle text change
// $(function() {
// 	var toggle = $('#slidingArrow');
// 	toggle.mousedown(function() {
// 		$(this).parent().parent().siblings("#slidingBarContent").slideToggle('1000', function() {
// 			toggle.text($(this).is(':visible') ? "▲" : "▼");
// 		});
// 	});
// });

// carousel
jQuery(function($) {
	function generatePages() {
		var _total, i, _link;
		_total = $( "#carousel" ).rcarousel( "getTotalPages" );
		
		for ( i = 0; i < _total; i++ ) {
			_link = $( "<a href='#'></a>" );
			
			$(_link)
				.bind("click", {page: i},
					function( event ) {
						$( "#carousel" ).rcarousel( "goToPage", event.data.page );
						event.preventDefault();
					}
				)
				.addClass( "bullet off" )
				.appendTo( "#pages" );
		}
		
		// mark first page as active
		$( "a:eq(0)", "#pages" )
			.removeClass( "off" )
			.addClass( "on" )
			.html('<div class="bullet"><div class="dot"></div></div>');
	}

	function pageLoaded( event, data ) {
		$( "a.on", "#pages" )
			.removeClass( "on" )
			.html('<div class="bullet"></div>');

		$( "a", "#pages" )
			.eq( data.page )
			.addClass( "on" )
			.html('<div class="bullet"><div class="dot"></div></div>');
			
		$("#weBuild").addClass("bounceInRight");
	}
	
	$("#carousel").rcarousel(
		{
			visible: 1,
			step: 1,
			speed: 700,
			auto: {
				enabled: true
			},
			width: 960,
			height: 400,
			start: generatePages,
			pageLoaded: pageLoaded
		}
	);
	
	$( "#ui-carousel-next" )
		.add( "#ui-carousel-prev" )
		.add( ".bullet" )
		.hover(
			function() {
				$( this ).css( "opacity", 0.7 );
			},
			function() {
				$( this ).css( "opacity", 1.0 );
			}
		);
});

// animated scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var $target = $(this.hash), target = this.hash;
    	var targetOffset = $target.offset().top;
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: targetOffset
            }, 1000, function() { location.hash = target; });
            return false;
        }
    }
});

//Hightlight float_nav's bullet on relavent section
$(function(){
    var sections = {},
        _height = $(window).height(),
        i = 0;

    // Grab positions of our sections
    $('section').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this   = $(this),
            pos     = $this.scrollTop();
            //$parent = {};

        for(i in sections){
            //$parent = $('[name="' + i + '"]').parent();
            //you now have a reference to a jQuery object that is the parent of this section

            if(sections[i] > pos && sections[i] < pos + _height){
                $('#float_nav a').removeClass('active');
                $('#float_nav' + i).addClass('active');
            }  
        }
    });
});