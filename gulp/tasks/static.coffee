'use strict'

gulp = require('gulp')
config = require('../config').static

gulp.task('static', ->
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
)
