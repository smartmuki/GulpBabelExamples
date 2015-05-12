var gulp = require("gulp");
var babel = require("gulp-babel");


gulp.task('babelify', function() {
	return gulp.src('src/**')
				.pipe(babel())
				.pipe(gulp.dest('dist'));	
});


gulp.task('watchbabel', function() {
	return gulp.watch('src/**', function() {
		gulp.run('babelify');
	});
});

gulp.task('default', ['babelify', 'watchbabel']);