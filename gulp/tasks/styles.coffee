'use strict'

gulp = require('gulp')
$ = require('gulp-load-plugins')()
handleErrors = require('../utils/handle-errors')
config = require('../config').styles
RELEASE = require('../config').RELEASE

gulp.task('styles', ->
  gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.settings))
    .on('error', handleErrors)
    .pipe($.if(! RELEASE, $.sourcemaps.write()))
    .pipe($.autoprefixer({ browsers: config.autoprefixerBrowsers }))
    .pipe($.csscomb())
    .pipe($.if(RELEASE, $.minifyCss()))
    .pipe(gulp.dest(config.dest))
)
