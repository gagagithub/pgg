var main = function(){


$(".glyphicon-star").click(function() {
	
	confirm("I'm ready to go!");

    $(this).toggleClass("active");
  
  });

};

$(document).ready(main);