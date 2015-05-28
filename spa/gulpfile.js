// Gulp module
var gulp = require('gulp');
// Dependencies management
var bower = require('gulp-bower');
// CommonJS dependencies processor
var browserify = require('browserify');
// Vinyl source streams convertor
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
// Browsefy source code changes watcher
var watchify = require('watchify');
// HTML file processor
var processhtml = require('gulp-processhtml');
// Sass compiler
var sass = require('gulp-sass');
// Source maps creator
var sourcemaps = require('gulp-sourcemaps');
// Files content merge
var concat = require('gulp-concat');
// Source code changes watcher
var watch = require('gulp-watch');
// Prevent pipe from breaking on error
var plumber = require('gulp-plumber');
// Live reload node server
var livereload = require('gulp-livereload');
// Pipe conditions plugin
var gulpif = require('gulp-if');
// Minify css resources
var minifyCss = require('gulp-minify-css');
// Minify js files
var uglify = require('gulp-uglify');

// App source code folder
var appFolder = './app';
// App Dist folder
var distFolder = './dist/app';
// Bower dependencies folder
var libsFolder = appFolder + '/js/libs';

/**
 * Project initialization task
 */
gulp.task('init', function() {
    // Download all bower dependencies
    return bower({ directory: libsFolder});
});

/**
 * Project Dist building task
 */
gulp.task('buildDist', ['init', 'browserifyDist', 'sassDist', 'htmlDist']);

/**
 * Project building task
 */
gulp.task('build', ['init', 'browserify', 'sass']);

/**
 * Reload
 */
gulp.task('watch', ['browserifyWatch', 'sassWatch', 'htmlWatch'], function() {
    livereload.listen({port: 35729 });
});

/**
 * Browserify dev building task
 */
gulp.task('browserify', ['init'], function(){
    bundleShare(initBrowserify());
});

/**
 * Browserify Dist building task
 */
gulp.task('browserifyDist', ['init'], function(){
    bundleShare(initBrowserify(false), false);
});

/**
 *  SASS processing task
 */
gulp.task('sass', ['init'], function () {
    processSass()
});

/**
 *  SASS Dist processing task
 */
gulp.task('sassDist', ['init'], function () {
    processSass(false)
});

/**
 * HTML processing task
 */
gulp.task('htmlDist', function() {

    return gulp.src(appFolder + '/*.html')
        .pipe(processhtml())
        .pipe(gulp.dest(distFolder));
});

gulp.task('browserifyWatch', function(){

    var browserify = initBrowserify(true);
    bundleShare(browserify);

    var watcher = watchify(browserify);
    watcher.on('update', function(){
        bundleShare(browserify);
    });
});

gulp.task('htmlWatch', function() {

    watch('./app/**/*.html', function () {
        gulp.src(appFolder + '/*.html')
            .pipe(livereload());
    });
})

/**
 * SASS/CSS files watcher
 */
gulp.task('sassWatch', ['sass'], function () {
    watch('./app/**/*.scss', function () {
        gulp.start('sass');
    });
});

/**
 *
 * @param isDevBuild
 * @returns {*}
 */
function initBrowserify(isDevBuild) {

    if (typeof isDevBuild === 'undefined') {
        isDevBuild = true;
    }

    var browserifyInstance = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false,
        debug: true
    });

    browserifyInstance.add(appFolder + '/js/main.js');
    return browserifyInstance;
}

/**
 *
 * @param browserify
 * @param isDevBuild
 */
function bundleShare(browserify, isDevBuild) {

        if (typeof isDevBuild === 'undefined') {
            isDevBuild = true;
        }

        browserify.bundle()
                  .on('error', function(err){
                       console.log(err.message);
                       this.emit('end');
                  })
                  .pipe(source('main.js'))
                  .pipe(buffer())
                  .pipe(sourcemaps.init({loadMaps: true}))
                        .pipe(gulpif(!isDevBuild, uglify()))
                  .pipe(sourcemaps.write('./'))
                  .pipe(gulp.dest(distFolder + '/js'))
                  .pipe(gulpif(isDevBuild, livereload()));
}

/**
 *
 * @param isDevBuild
 */
function processSass(isDevBuild) {

    if (typeof isDevBuild === 'undefined') {
        isDevBuild = true;
    }

    gulp.src('./app/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(concat('style.css'))
            .pipe(gulpif(!isDevBuild, minifyCss()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distFolder + '/css'))
        .pipe(gulpif(isDevBuild, livereload()));
}