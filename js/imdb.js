var OMDBAPI = "http://www.omdbapi.com/?";
var movie = "Woodstock";
var movieHTML = "";
$.getJSON(OMDBAPI, {
    s: movie,
    r: "json"
}, function(data) {

    $.each(data.Search, function(i , movie) {
       console.log(data.Search);
        movieHTML += '<li class="layout" data-name="' + movie.Year + '">';
        movieHTML += '<a href="' + movie.Poster + '" data-lightbox="albums" data-title="';
        movieHTML += 'Title: ' + movie.Title + '</br>';
        movieHTML += 'Release Date: ' + movie.Year + '</br>';
        movieHTML += 'Movie ID: ' + movie.imdbID + '</br>';
        movieHTML += '">';
        movieHTML += '<img src="' + movie.Poster + '" alt="' + movie.Title + '"></a></li>';

        $('#albums4').html(movieHTML);

    });


});


$('.movieButton1').click(function() {
    tinysort('ul#albums4>li', { attr: 'data-name' });
});

$('.movieButton2').click(function() {
    tinysort('ul#albums4>li', { selector: 'img', attr: 'alt' });
});
