var main = function(){


$("#menu-toggle").click(function() {
	
    $(this).toggleClass("glyphicon-heart").toggleClass("glyphicon-heart-empty");
  
  });

};

$(document).ready(main);