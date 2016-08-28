// Includes ---------------------------------------------

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    stylish         = require('jshint-stylish'),
    imageMin        = require('gulp-imagemin'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync'),
    path            = require('path');

// Directories ------------------------------------------

var devAssets   = path.join(__dirname, '/assets'),
    prodAssets  = path.join(__dirname, '/public'),
    srcDirs     = {
        sass:       path.join(devAssets, '/sass'),
        scripts:    path.join(devAssets, '/js'),
        images:     path.join(devAssets, '/img')
    },
    destDirs    = {
        css:        path.join(prodAssets, '/css'),
        scripts:    path.join(prodAssets, '/js'),
        images:     path.join(prodAssets, '/img')
    },
    files       = {
        sass:       path.join(srcDirs.sass, '/*.scss'),
        scripts:    path.join(srcDirs.scripts, '/*.js'),
        images:     path.join(srcDirs.images, '/**/*')
    };

// Tasks ------------------------------------------------

// Sass
gulp.task('sass', function() {
    return gulp.src(files.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destDirs.css));
        // .pipe(browserSync.reload({stream: true}));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(srcDirs.sass, ['sass']);
});

// Default
gulp.task('default', ['sass']);