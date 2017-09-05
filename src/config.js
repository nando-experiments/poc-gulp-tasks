const notify = require('gulp-notify')
const bourbon = require('node-bourbon')

const defaults = {
  dist: 'dist',
  src: 'sass',
  plumberHandler: {
    errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
    })
  },
  sassSettings: {
    sourcemap: true,
    noCache: true,
    style: 'expanded',
    sourceComments: true,
    includePaths: [
      bourbon.includePaths,
      'node_modules'
    ]
  },
  autoprefixer: {
    browsers: [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 5',
      'opera >= 23',
      'ios >= 6',
      'android >= 4.4',
      'bb >= 10'
    ]
  }
}

module.exports = (options = {}) => {
  return Object.assign({}, defaults, options)
}
