//
// $(document).ready(function() {
//
//
// var spotifyAPI = "https://api.spotify.com/v1/search";
// var albumHTML = "";
// var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
// var  playingCssClass = 'playing';
// var audioObject = null;
// var search = "Firebug";
//
// //function to get individual album api:
// function getAlbumInfo(callback) {
//     $.getJSON(spotifyAPI, {
//         q: search,
//         type: "album",
//         limit: 12,
//     }, function(data) {
//
//         var array = [];
//
//
//         $.each(data.albums.items, function(i, album) {
//            console.log(data.albums.items);
//
//            // filter out albums/collections from array that are not my band's songs &/or albums..get IDs from array/objects logged out to console
//             if((album.id == "6HWxqdryeaBrcVNExMyzXC")||(album.id == "2NeiklEJ3gQE7bV9cp27hZ")||(album.id == "5sah14CPmQ1v2FUp2AKDql")||(album.id == "2GLF9bjkeGaKSiPAyLEWRb"))
//          {
//
//          }
//          else
//          {
//           // push our albums to the array
//           array.push(spotifyAlbumAPI + album.id);
//
//         }
//
//
//         });
//
//
//         callback(array);
//
//
//     });
//
//
// }

// getAlbumInfo(function(result) {
//
//     //get additional info from api to create photo list:
//     function createAlbumList() {
//
//         $.each(result, function(i, album) {
//             $.getJSON(result[i], {
//                 q: search,
//                 type: "album",
//                 limit: 12
//             }, function(data) {
//                 // audioObject = new Audio(data.tracks.items[0].preview_url);
//                 //audioObject.play();
//
//                 albumHTML += '<li data-name="' + data.artists[0].name + '">';
//                 albumHTML += '<a href="' + data.images[0].url + '" data-lightbox="albums" data-title="';
//                 albumHTML += 'Album Name: ' + data.name + '</br>';
//                 albumHTML += 'Audio Tracks: ' + data.tracks.items[0].preview_url + '</br>';
//                 albumHTML += 'Artist Name: ' + data.artists[0].name + '</br>';
//                 albumHTML += 'Release Date: ' + data.release_date + '</br>';
//                 albumHTML += 'SpotifyURL: ' + data.external_urls.spotify + '</br>';
//                 albumHTML += '">';
//                 albumHTML += '<img src="' + data.images[0].url + '"alt="' + data.name + '"></a></li>';
//
//                 $('#albums').html(albumHTML);
//
//                 $('#albums > li > a').click(function(e){
//                  //target = e.target;
//                  //$('albums').removeClass("selected");
//                  //target = $(this).addClass("selected");
//
//                 audioObject = new Audio(data.tracks.items[0].preview_url);
//
//                 if (target !== null) {
//                 //  audioObject.play();
//
//                 if (target.hasClass(playingCssClass)) {
//                     audioObject.pause();
//                     } else {
//                 if (audioObject) {
//                 //audioObject.pause();
//                 }
//
//               //  audioObject = new Audio(data.tracks.items[0].preview_url);
//                 audioObject.play();
//                 target.addClass(playingCssClass);
//                 audioObject.addEventListener('ended', function () {
//                     target.removeClass(playingCssClass);
//                 });
//                 audioObject.addEventListener('pause', function () {
//                     target.removeClass(playingCssClass);
//                 });
//
//
//         }
//     }
//                });
//
//
//                 $('.musicButton1').click(function() {
//                     tinysort('ul#albums>li', { selector: 'img', attr: 'alt' });
//                 });
//
//                 $('.musicButton2').click(function() {
//                     tinysort('ul#albums>li', { selector: 'img', attr: 'photo_index' });
//                 });
//             });
//         });
//     }
//
//     createAlbumList();
// });
//
//  });


$(document).ready(function() {


var spotifyAPI = "https://api.spotify.com/v1/search";
var albumHTML = "";
var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
var  playingCssClass = 'playing';
var audioObject = null;
var search = "Firebug";

//function to get individual album api:
function getAlbumInfo(callback) {
    $.getJSON(spotifyAPI, {
        q: search,
        type: "album",
        limit: 12,
    }, function(data) {

        var array = [];


        $.each(data.albums.items, function(i, album) {
           console.log(data.albums.items);

           // filter out albums/collections from array that are not my band's songs &/or albums..get IDs from array/objects logged out to console
            if((album.id == "6HWxqdryeaBrcVNExMyzXC")||(album.id == "2NeiklEJ3gQE7bV9cp27hZ")||(album.id == "5sah14CPmQ1v2FUp2AKDql")||(album.id == "2GLF9bjkeGaKSiPAyLEWRb"))
         {

         }
         else
         {
          // push our albums to the array
          array.push(spotifyAlbumAPI + album.id);

        }


        });


        callback(array);


    });


}

getAlbumInfo(function(result) {

    //get additional info from api to create photo list:
    function createAlbumList() {

        $.each(result, function(i, album) {
            $.getJSON(result[i], {
                q: search,
                type: "album",
                limit: 12
            }, function(data) {
                // audioObject = new Audio(data.tracks.items[0].preview_url);
                //audioObject.play();

                albumHTML += '<li data-name="' + data.artists[0].name + '">';
                albumHTML += '<a href="' + data.images[0].url + '" data-lightbox="albums" data-title="';
                albumHTML += 'Album Name: ' + data.name + '</br>';
                albumHTML += 'Audio Tracks: ' + data.tracks.items[0].preview_url + '</br>';
                albumHTML += 'Artist Name: ' + data.artists[0].name + '</br>';
                albumHTML += 'Release Date: ' + data.release_date + '</br>';
                albumHTML += 'SpotifyURL: ' + data.external_urls.spotify + '</br>';
                albumHTML += '">';
                albumHTML += '<img src="' + data.images[0].url + '"alt="' + data.name + '"></a></li>';

                $('#albums').html(albumHTML);

                $('#albums').click(function(e){
                 //target = e.target;
                 target = $(this);

                audioObject = new Audio(data.tracks.items[0].preview_url);

                if (target !== null) {
                //  audioObject.play();
                if (target.hasClass(playingCssClass)) {
                    audioObject.pause();
                    } else {
                if (audioObject) {
                //audioObject.pause();
                }

              //  audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.addClass(playingCssClass);
                audioObject.addEventListener('ended', function () {
                target.removeClass(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                target.removeClass(playingCssClass);
                });


        }
    }
               });


                $('.musicButton1').click(function() {
                    tinysort('ul#albums>li', { selector: 'img', attr: 'alt' });
                });

                $('.musicButton2').click(function() {
                    tinysort('ul#albums>li', { selector: 'img', attr: 'photo_index' });
                });
            });
        });
    }

    createAlbumList();
});

 });

















 $(document).ready(function() {


 var spotifyAPI = "https://api.spotify.com/v1/search";
 var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
 var search = "Firebug";

 //function to get individual album api:
 function getAlbumInfo(callback) {

     $.getJSON(spotifyAPI, {
         q: search,
         type: "album",
         limit: 20,
     }, function(data) {

          var array = [];


         $.each(data.albums.items, function(i, album) {
            console.log(data.albums.items);

         //    // filter out albums/collections from array that are not my band's songs &/or albums..get IDs from array/objects logged out to console
             if((album.id == "6HWxqdryeaBrcVNExMyzXC")||(album.id == "2NeiklEJ3gQE7bV9cp27hZ")||(album.id == "5sah14CPmQ1v2FUp2AKDql")||(album.id == "2GLF9bjkeGaKSiPAyLEWRb"))
          {

          }
          else
          {
           // push our albums to the array
           array.push(spotifyAlbumAPI + album.id);

         }

         });


         callback(array);


     });


 }

         getAlbumInfo(function(result) {

            //get additional info from api to create photo list:
                 function createAlbumList() {
                      var albumHTML = "";
                      $.each(result, function(i, album) {
                            $.getJSON(result[i], {
                            q: search,
                            type: "album",
                            limit: 12
                 }, function(data) {
                   //  audioObject = new Audio(data.tracks.items[0].preview_url);

                   albumHTML += '<li data-name="' + data.artists[0].name + '">';
                   albumHTML += '<a href="' + data.images[0].url + '" data-lightbox="albums" data-title="';
                   albumHTML += 'Album Name: ' + data.name + '</br>';
                   albumHTML += 'Audio Tracks: ' + new Audio(data.tracks.items[0].preview_url) + '</br>';
                   albumHTML += 'Artist Name: ' + data.artists[0].name + '</br>';
                   albumHTML += 'Release Date: ' + data.release_date + '</br>';
                   albumHTML += 'SpotifyURL: ' + data.external_urls.spotify + '</br>';
                   albumHTML += '">';
                   albumHTML += '<img src="' + data.images[0].url + '"alt="' + data.name + '"></a></li>';

                    $('#albums').html(albumHTML);



                                      $('.musicButton1').click(function() {
                                         tinysort('ul#albums>li', { selector: 'img', attr: 'alt' });
                                      });

                                     $('.musicButton2').click(function() {
                                        tinysort('ul#albums>li', { selector: 'img', attr: 'photo_index' });
                                     });






               $('#albums > li > a').click(clickAlbum(data));

                                     //defined elsewhere for clarity
                                     function clickAlbum(data) {
                                       return function(e) {
                                          // this is the function the click event will use
                                          //data variable is captured here
                                          //
                                         e.preventDefault();




                                               var  playingCssClass = 'playing',
                                               audioObject = new Audio(data.tracks.items[0].preview_url);


                                                 // stopMusic = $('#lightbox');

                                                  target = $(this);

                                              //target.append(audioObject);
                                                  if (target.hasClass(playingCssClass)) {
                                                   audioObject.pause();
                                                   }
                                                   else {
                                                      audioObject.play();
                                                   }

                                                  $('#albums > li').removeClass(playingCssClass);

                                                 // target.addClass(playingCssClass);

                                                  audioObject.addEventListener('ended', function () {
                                                  target.removeClass(playingCssClass);
                                                  });

                                                  audioObject.addEventListener('pause', function () {
                                                  target.removeClass(playingCssClass);
                                                 });


                                       }
                           };//end function clickAlbum
             });//end getAlbumInfo
         });//end each
     }//end function(data)

     createAlbumList();
  });

  });// end document.ready.....
