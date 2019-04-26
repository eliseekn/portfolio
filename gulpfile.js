var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
	return gulp.src('assets/css/src/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css/src/')
	);
});

gulp.task('uglifycss', function() {
  	return gulp.src('assets/css/src/*.css')
		.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": true
		  }))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('assets/css/dist/')
	);
});

gulp.task('uglifyjs', function() {
	return gulp.src('assets/js/src/*.js')
		.pipe(uglify())
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('assets/js/dist/')
	);
});

gulp.task('default', function() {
	gulp.watch('assets/css/src/*.scss', gulp.series('sass'));
	gulp.watch('assets/css/src/*.css', gulp.series('uglifycss'));
	gulp.watch('assets/js/src/*.js', gulp.series('uglifyjs'));
});