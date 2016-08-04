
var loadOne = $(document).ready(function() {


var spotifyAPI = "https://api.spotify.com/v1/search";
var albumHTML = "";
var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
//var spotifyAlbumAPI ="https://open.spotify.com/album/3IYDzrfKn9I6zp8zYgUQmr";
//var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/3IYDzrfKn9I6zp8zYgUQmr/tracks";

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
            array.push(spotifyAlbumAPI + album.id);

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

                albumHTML += '<li data-name="' + data.artists[0].name + '">';
                albumHTML += '<a href="' + data.images[0].url + '" data-lightbox="albums" data-title="';
                albumHTML += 'Album Name: ' + data.name + '</br>';
                albumHTML += 'Artist Name: ' + data.artists[0].name + '</br>';
                albumHTML += 'Release Date: ' + data.release_date + '</br>';
                albumHTML += 'SpotifyURL: ' + data.external_urls.spotify + '</br>';
                albumHTML += '">';
                albumHTML += '<img src="' + data.images[0].url + '"alt="' + data.name + '"></a></li>';

                $('#albums').html(albumHTML);
                // $('.musicButton1').click(function() {
                //     tinysort('ul#albums>li', { attr: 'data-name' });
                // });

                $('.musicButton1').click(function() {
                    tinysort('ul#albums>li', { selector: 'img', attr: 'alt' });
                });
            });
        });
    }

    createAlbumList();
});

 });


  $('.musicButton1').click(function() {
      tinysort('ul#albums>li', { attr: 'data-name' });
  });

  $('.musicButton2').click(function() {
      tinysort('ul#albums>li', { selector: 'img', attr: 'alt' });
  });

  // $('.musicButton2').click(function() {
  //     tinysort('ul#albums2>li', { selector: 'img', attr: 'alt' });
  // });
