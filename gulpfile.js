'use strict';

var gulp        = require('gulp');
var notify      = require('gulp-notify');
// JSX Configuration
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var watchify    = require('watchify');
var reactify    = require('reactify');
// Styles
var sass        = require('gulp-ruby-sass');

gulp.task('default', function() {
    return scripts(true);
});

gulp.task('styles', function() {
});
function scripts(watch) {
    var bundler, rebundle, path;
    path = './demo/scripts/';
    bundler = browserify({
        entries: './demo/scripts/application.js',
        extensions: ['.js.jsx'],
        debug: true,
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch // required to be true only for watchify
    });
    if(watch) {
        bundler = watchify(bundler);
    }

    bundler.transform(reactify);

    rebundle = function() {
        var stream = bundler.bundle();
        stream.on('error', handleErrors);
        stream = stream.pipe(source('main.js'));
        return stream.pipe(gulp.dest(path))
        .pipe(notify({
            title: 'Bundler transform finished',
            subtitle: 'Transform finished',
            message: 'Transform finished',
            onLast: true
        }));
    };
    bundler.on('update', rebundle);
    return rebundle();
}

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}
