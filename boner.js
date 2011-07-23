(function( $ ){

  $.fn.boner = function(options) {

  	var defaults = {
      'bSize'  : '10',
      'bSpeed' : '50'
    };
  
  	var options =  $.extend(defaults, options);
  	
  	this.each(function() {

      var $this = $(this);

      var reverse = false;

      var balls = "8";

      var shaftSegment = "=";

      var tip = "D";

      var size = 0;

      function grow() {

		var shaft = "";
      	
      	if(size > options.bSize) {
      		reverse = true;
      	} else if (size < 1) {
      		reverse = false;
      	}

      	if(reverse == false) {
      		
      		for (i=0;i<size;i++) {
     			shaft += shaftSegment;
      		}

      		$this.html(balls + shaft + tip);

      		size++;

      	} else if (reverse == true) {
      		      		
      		for (i=0;i<size;i++) {
     			shaft += shaftSegment;
      		}

      		$this.html(balls + shaft + tip);

      		size--;

      	}

      }

      setInterval(grow, options.bSpeed);

    });

  };
})( jQuery );