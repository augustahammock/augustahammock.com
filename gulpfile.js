// Includes ---------------------------------------------

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    stylish         = require('jshint-stylish'),
    imageMin        = require('gulp-imagemin'),
    newer           = require('gulp-newer'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
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
        sass:           path.join(srcDirs.sass, '/*.scss'),
        scriptsRoot:    path.join(srcDirs.scripts, '/*.js'),
        scripts:        path.join(srcDirs.scripts, '/**/*.js'),
        images:         path.join(srcDirs.images, '/**/*')
    };

// Tasks ------------------------------------------------

// Assets
gulp.task('images', function() {

    return gulp.src(files.images)
        .pipe(newer(destDirs.images))
        .pipe(imageMin({verbose: true}))
        .pipe(gulp.dest(destDirs.images));

});

// Sass
gulp.task('sass', function() {
    return gulp.src(files.sass)
        .pipe(plumber({
            errorHandler: notify.onError({
                title:      'Sass Error:',
                message:    '<%= error.message %>'})
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destDirs.css));
        // .pipe(browserSync.reload({stream: true}));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(files.scriptsRoot)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(plumber({
            errorHandler: notify.onError({
                title:      'JavaScript Error:',
                message:    'Line: <%= error.lineNumber %> -- <%= error.message %>'})
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destDirs.scripts));
});

// Sync
// gulp.task('sync', function () {
//     browserSync({
//         proxy:      'localhost:9999',
//         debugInfo:  false,
//         browser:    'google chrome',
//         open:       false,
//         notify:     false,
//     });
// });

// Watch
gulp.task('watch', function() {
    gulp.watch(files.sass, ['sass']);
    gulp.watch(files.scripts, ['scripts']);
    gulp.watch(files.images, ['images']);
});

// Default
gulp.task('default', ['images', 'sass', 'scripts', 'watch']);