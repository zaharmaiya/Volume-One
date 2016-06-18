'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concatCss = require('gulp-concat-css');

gulp.task('scripts', function() {
  return gulp.src(['js/jquery-1.12.3.js','js/*.js'])
    .pipe(concat('all.js'))
	.pipe(uglify())
    .pipe(gulp.dest('js/build/'));
});
gulp.task('sass', function () {
  return gulp.src(['css/variable.scss','css/reset.scss','css/style.scss'])
	.pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
	.pipe(concatCss("styles.css"))
	.pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('css/build/'));
});
 
gulp.task('default', function(){
  gulp.run(['sass','scripts']);
  gulp.watch(["css/*.scss","js/*.js"], function(event){
    gulp.run('sass');
	gulp.run('scripts');
  });
});