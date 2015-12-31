var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(cb) {

  browserSync.init({
    online: true,
    server: {
      baseDir: './',
    },
  });

  /* Watch Less */
  gulp.watch(['./hello.less'])
        .on('change', function(changed) {
          console.log('### INFO: less file changed');
          less(gulp.src(changed.path), function() {})
              .pipe(browserSync.stream());
        }
    );

});
