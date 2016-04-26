var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gType = require('gulp-typescript');

gulp.task('default', function () {
    gulp.src('lib/greeter.ts')
    .pipe(gType({
        outFile: 'greeting.js'
    }))
    .pipe(gulp.dest('build/development/js'));
});