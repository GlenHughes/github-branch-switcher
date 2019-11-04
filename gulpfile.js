const gulp = require("gulp")
const rename = require("gulp-rename")
const	uglify = require("gulp-uglify-es").default

gulp.task("js", () => (  
	gulp.src("src/*.js")
		.pipe(rename("extension.min.js"))
    .pipe(uglify())
		.pipe(gulp.dest("dist/"))
))

gulp.task("default", gulp.parallel("js"))