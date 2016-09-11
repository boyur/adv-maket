'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    uncss = require('gulp-uncss'),
    rename = require("gulp-rename"),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer');

const pug = require('gulp-pug2');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('sass', function () {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('mini-css', function() {
    return gulp.src('./out/*.css')
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('uncss', function () {
    return gulp.src('./css/main.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./out'));
});

gulp.task('pug:render', function() {
    return gulp.src('pug/index.pug')
        .pipe(pug({
            yourTemplate: 'Locals'
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('pug:compile', function() {
    return gulp.src('pug/index.pug')
        .pipe(pug.compile())
        .pipe(gulp.dest('./'));
});