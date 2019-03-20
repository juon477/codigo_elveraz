'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/*.scss', gulp.series('sass'));
});


let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('./dist/styles/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
