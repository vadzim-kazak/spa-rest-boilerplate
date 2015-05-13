// Main gulp module
var gulp = require('gulp');
// Dependencies management
var bower = require('gulp-bower');
// HTML file processor
var processhtml = require('gulp-processhtml');
// Require js module
var requirejs = require('requirejs');

var distFolder = './dist/app';

/**
 * Project building task
 */
gulp.task('build', ['init', 'optimization', 'html']);

/**
 * Bower dependencies downloading task
*/
gulp.task('init', function() {
    return bower({ directory: './libs'});
});

/**
 * Scripts processing task
 */
gulp.task('optimization', function () {
    requirejs.optimize({
        appDir: './app',
        baseUrl: 'js',
        dir: distFolder,
        mainConfigFile: './app/js/main.js',
        name: 'main',
        removeCombined: true,
        fileExclusionRegExp: /.html$|.txt$/,
        optimizeCss: 'standard'
    });
});

/**
 * HTML processing task
 */
gulp.task('html', function() {

    return gulp.src('./app/*.html')
               .pipe(processhtml())
               .pipe(gulp.dest(distFolder));
});