'use strict'

notify = require('gulp-notify')
notifier = require('node-notifier')

module.exports = ->
  args = Array.prototype.slice.call(arguments)

  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>'
  }).apply(this, args)

  @emit('end') if @emit