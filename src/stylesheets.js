import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import config from './config'

const $ = plugins()

gulp.task('stylesheets', () => gulp.src(`sass/*.{scss,sass}`)
  .pipe($.plumber(config.plumberHandler))
  .pipe($.sass(config.sassSettings))
  .pipe($.combineMq())
  .pipe($.autoprefixer(config.autoprefixer))
  .pipe($.size({ title: 'Stylesheets!', showFiles: true }))
  .pipe(gulp.dest('./dist'))
  .pipe($.cssnano({ autoprefixer: config.autoprefixer, add: true }))
  .pipe($.rename({ suffix: '.min' }))
  .pipe($.size({ title: 'Stylesheets!', showFiles: true }))
  .pipe(gulp.dest('./dist'))
  .pipe($.plumber.stop()))
