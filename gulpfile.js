'use strict';

var gulp = require('gulp');

gulp.task('starter', function() {
    console.log('Starter');
});

gulp.task('main-scripts', function() {
    return browserify({
        entries: './lib/index.js',
        extensions: ['.js.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulpif(distribute, buffer()))
    .pipe(gulpif(distribute, uglify()))
    .pipe(gulpif(distribute, rename({suffix: '.min'})))
    .pipe(gulp.dest(path));
});

function scripts(watch) {
    var path = distribute ? paths.scripts.dist : paths.scripts.dev;
    var bundler, rebundle;
    bundler = browserify({
        entries: './gulp/assets/javascripts/main.js',
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
