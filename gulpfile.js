const gulp = require('gulp')
const stylus = require('gulp-stylus')

gulp.task('default', () => {
  gulp.src('src/css.styl')
      .pipe(stylus({
        compress: true
      }))
      .pipe(gulp.dest('build'))
})

const watcher = gulp.watch('src/css.styl', ['default'])
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
})

gulp.task('one', (cb) => {
  console.log('task one is done')
  cb()
})

gulp.task('default', ['one'])