'use strict'

gulp = require('gulp')
browserSync = require('browser-sync').create('gulp-static-coding')
config = require('../config').browserSync

gulp.task('browserSync', (cb) ->
  browserSync.init(config, cb)

  process.on('exit', ->
    browserSync.exit()
  )
)
