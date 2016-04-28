var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gType = require('gulp-typescript'),
    gWatch = require('gulp-watch');

var tsFiles = "lib/*.ts";

gulp.task('default', function () {
    gulp.src('lib/greeter.ts')
    .pipe(gType({
        outFile: 'greeting.js'
    }))
    .pipe(gulp.dest('build/development/js'));
});

gulp.task('main', function () {
    gulp.src('lib/greeter.ts')
    .pipe(gType({
        outFile: 'greeting.js'
    }))
    .pipe(gulp.dest('build/development/js'));
});

gulp.watch(tsFiles, ['default']);