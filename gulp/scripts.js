'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src([
      path.join(conf.paths.src, '/app/**/*.js'),
      // Add Bootstrap Ignore
      path.join('!' + conf.paths.src, 'app/core/style/bootstrap/**/*.js'),
      path.join('!' + conf.paths.src, 'app/core/**/*.js')])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
