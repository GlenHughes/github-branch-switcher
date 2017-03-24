var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
	concat = require('gulp-concat');

gulp.task('js', function() {   
	gulp.src('src/js/script.js')
	.pipe(concat('extension.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(''));
});