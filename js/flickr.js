$(document).ready(function() {


// Pull photos from Flickr
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";



var animal = $(this).text();


var flickrOptions = {
//  tags: "german shepherd, border collie, black terrier",
  tagmode: "any",
  id: "125100549@N08",

  format: "json"
};



function displayPhotos(data) {
  var photoHTML = '';

  var saved_results = data;
  var indexOfImage;
  $.each(data.items,function(i,photo) {

    if(i < 16){
               console.log(data.items);//log out data items to find key/value pairs in data array
                photoHTML += '<li class="layout">';
                photoHTML += '<a href="' + data.items[i].media.m + '" data-lightbox="image" data-title="';
                photoHTML += 'Photo Title: ' + data.items[i].title + '</br>';
                photoHTML += 'Author: ' + data.items[i].author + '</br>';
                photoHTML += 'Photo Date: ' + data.items[i].date_taken + '</br>';
                photoHTML += 'Photo description: ' + data.items[i].description.replace(/<(?:.|\n)*?>/gm, ''); + '</br>';//use reg expression to delete HTML tags thar are inside of description key value-for proper page load and keep gallery from breaking
                photoHTML += '">';
                photoHTML += '<img alt="" + src="' + data.items[i].media.m + '" photo_index ="' + i + '"></a></li>';

  }


  }); // end each
  //photoHTML += '</ul>';
  $('#imageGallery').html(photoHTML);



}//end callback for the api request
$.getJSON(flickerAPI, flickrOptions, displayPhotos);


// end of first API Request and JSON callback on initial page load
//
//
// Beginning of 2nd API request

// $(".flickrButtons").click(function (event) {
//     event.preventDefault();//
//     //event.stopPropagation();
//     // the AJAX part
//     var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//     var animal = $(this).text();
//     var flickrOptions = {
//       tags: "new orleans, forest, louisiana",
//       format: "json"
//     };
//
//     $.getJSON(flickerAPI, flickrOptions, displayPhotos);
//
//
//
//
$('.button1').click(function() {
    tinysort('ul#imageGallery>li>a', { attr: 'href' });
});

$('.button2').click(function() {
    tinysort('ul#imageGallery>li>a>img', { attr: 'src' });
});




//  });




}); //DOCUMENT.READY END
