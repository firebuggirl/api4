
var loadOne = $(document).ready(function() {
var spotifyAPI = "https://api.spotify.com/v1/search";
var albumHTML = "";
var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
var search = "Rolling Stones";

//function to get individual album api:
function getAlbumInfo(callback) {
    $.getJSON(spotifyAPI, {
        q: search,
        type: "album",
        limit: 12
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
            });
        });
    }

    createAlbumList();
});

 });

/////////////////////////////////////
///
///End 1st API call for Rolling Stones
/////////////////////////////////////
/////////////////////////////////////


var loadTwo = $(document).ready(function() {

var spotifyAPI = "https://api.spotify.com/v1/search";
var albumHTML = "";
var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
var search = "Black Rebel Motorcycle CLub";

//function to get individual album api:
function getAlbumInfo2(callback) {
    $.getJSON(spotifyAPI, {
        q: search,
        type: "album",
          limit: 12
    }, function(data) {

        var array = [];

        $.each(data.albums.items, function(i, album) {
            console.log(data.albums.items);
            array.push(spotifyAlbumAPI + album.id);

        });


        callback(array);


    });


}

getAlbumInfo2(function(result) {

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

                $('#albums2').html(albumHTML);
            });
        });
    }

    createAlbumList();
});


});

////////////////////////////////////////////////
///////////////////////////////////////////////
///END 2nd API call for BMRC
///////////////////////////////////////////////
////////////////////////////////////////////////
var loadThree = $(document).ready(function() {
var spotifyAPI = "https://api.spotify.com/v1/search";
var albumHTML = "";
var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
var search = "Howlin' Wolf";

//function to get individual album api:
function getAlbumInfo3(callback) {
    $.getJSON(spotifyAPI, {
        q: search,
        type: "album",
        limit: 12
    }, function(data) {

        var array = [];

        $.each(data.albums.items, function(i, album) {
           console.log(data.albums.items);
            array.push(spotifyAlbumAPI + album.id);

        });


        callback(array);


    });


}

getAlbumInfo3(function(result) {

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

                $('#albums3').html(albumHTML);
            });
        });
    }

    createAlbumList();
});

 });

///////////////////////////////////////////////
///////////////////////////////////////////////
///End 3rd API call for Howlin' Wolf
///////////////////////////////////////////////
////









  $('.musicButton1').click(function(event) {
    event.preventDefault();
    //  tinysort('#albums>li', { q: 'Rolling Stones',  });
    //
    //

    var spotifyAPI = "https://api.spotify.com/v1/search";
    var albumHTML = "";
    var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
    var search = "Rolling Stones";

    //function to get individual album api:
    function getAlbumInfo(callback) {
        $.getJSON(spotifyAPI, {
            q: search,
            type: "album",
            limit: 12
        }, function(data) {

            var array = [];

            $.each(data.albums.items, function(i, album) {

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
                });
            });
        }

        createAlbumList();
    });
    //
    //
    //
  //loadTwo.hide();

  });



  $('.musicButton2').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    //  tinysort('#albums>li', { q: 'Rolling Stones',  });
    //
    //

    var spotifyAPI = "https://api.spotify.com/v1/search";
    var albumHTML = "";
    var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
    var search = "Black Rebel Motorcycle Club";

    //function to get individual album api:
    function getAlbumInfo(callback) {
        $.getJSON(spotifyAPI, {
            q: search,
            type: "album",
            limit: 12
        }, function(data) {

            var array = [];

            $.each(data.albums.items, function(i, album) {

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

                    $('#albums2').html(albumHTML);
                });
            });
        }

        createAlbumList();
    });





  });




  // $('.musicButton2').click(function() {
  //     tinysort('ul#albums4>li', { selector: 'img', attr: 'alt' });
  // });
