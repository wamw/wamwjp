'use strict'

$ = require('gulp-load-plugins')()
gulp = require('gulp')
webpack = require('webpack')
config = require('../config').webpack
handleErrors = require('../utils/handle-errors')

gulp.task('bundle', (cb) ->
  webpack(config, (error, stats) =>
    if not error
      return cb()
    handleErrors.call(@, error)
    cb()
  )
)
