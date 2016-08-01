"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');



gulp.task("concatScripts", function() {
   return gulp.src([
        'js/jquery-2.2.0.min.js',
        'js/flickr.js',
         'js/navtoggle.js',
         'js/spotify.js',
         'js/imdb.js',
        'js/lightbox.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"))
});


gulp.task("default", ["hello"], function(){
    console.log('The default task!');
});
