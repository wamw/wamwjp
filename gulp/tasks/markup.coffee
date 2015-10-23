'use strict'

gulp = require('gulp')
$ = require('gulp-load-plugins')()
config = require('../config').markup
browserSync = require('browser-sync')
{variables} = require('../config')
handleErrors = require('../utils/handle-errors')

gulp.task('markup', ->
  gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.ejs(variables))
    .on('error', handleErrors)
    # .pipe($.htmllint())
    # .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
)
