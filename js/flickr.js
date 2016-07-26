$(document).ready(function() {


// Pull photos from Flickr
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var animal = $(this).text();
var title =  $(this).title;
  var date =  $(this).date;



var flickrOptions = {
  tags: "german shepherd, border collie, black terrier",
  tagmode: "any",
  format: "json"
};



function displayPhotos(data) {
  var photoHTML = '';

  var saved_results = data;
  var indexOfImage;
  $.each(data.items,function(i,photo) {
    if(i < 15){

   photoHTML += '<li class="layout">';

   photoHTML += '<a href="' + photo.media.m + '" data-lightbox="image" data-title="';
                photoHTML += 'Photo Title: ' + data.title + '</br>';
                photoHTML += 'Photo Date: ' + data.date + '</br>';
                photoHTML += '">';
                photoHTML += '<img alt="" src="' + photo.media.m + '" photo_index ="' + i + '"></a></li>';

  }


  }); // end each
  //photoHTML += '</ul>';
  $('#imageGallery').html(photoHTML);



//Prevent flickr page/overlay load
  // $('li').on('click', '.img-responsive', function(e) {
  //         e.preventDefault();
  //
  //
  //
  // }); //end li click function event

}//end callback for the api request
$.getJSON(flickerAPI, flickrOptions, displayPhotos);


// end of first API Request and JSON callback on initial page load
//
//
// Beginning of 2nd API request

$("button").click(function (event) {
    event.preventDefault();//
    //event.stopPropagation();
    // the AJAX part
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };

    $.getJSON(flickerAPI, flickrOptions, displayPhotos);






  });




}); //DOCUMENT.READY END
