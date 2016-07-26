/* Hide toggle on tablets and larger screens as page loads*/




$(document).ready(function(){
  if(window.innerWidth <= 414){
  $('#nav').hide();
  $('.heading').html('<button id="toggleButton">Flickr Dogs</button>');

  }
});

$('.heading').on('click', function(){
  $('#nav').toggle('slow');
});

$(window).resize(function(){
	if(window.innerWidth >= 414) {
		$("#nav").show();
      $('.heading').html('<h1>My favorite dog photos from Flickr</h1>');


	}
});

$(window).resize(function(){
	if(window.innerWidth < 414) {

      	$("#nav").hide();
          $('.heading').html('<button id="toggleButton">Flickr Dogs</button>');

	}
});
