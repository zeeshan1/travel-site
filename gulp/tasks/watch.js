var gulp = require('gulp'),
	watch= require('gulp-watch'),	
	browserSyn = require('browser-sync').create();

	gulp.task('watch', function(){
		browserSyn.init({			
			server: {
				baseDir: "app"
			}
		});

		watch('./app/index.html', function(){
			browserSyn.reload();
		});
		watch('./app/assets/styles/**/*.css', function(){
			gulp.start('cssInject');
		});	
	});
	gulp.task('cssInject', ['styles'], function(){
		return gulp.src('./app/temp/styles/style.css')
			.pipe(browserSyn.stream());
	});
	