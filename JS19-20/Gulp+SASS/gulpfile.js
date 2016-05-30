var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('build',function(){

	gulp.src(['production/css/*.scss'])
		.pipe(concat('style.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(csso())
		.pipe(gulp.dest('release/css'))

	gulp.src(['production/js/*.js'])
        .pipe(concat('final.js'))
        .pipe(uglify())
        .pipe(gulp.dest('release/js'))


    gulp.src('production/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('release/img'))

});

gulp.watch(['production/js/*.js','production/css/*'],function(event){
	gulp.run('build');
});

gulp.task('default', function() {
	gulp.run('build');
});