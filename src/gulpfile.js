const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// const buildDir = 'src/build/';


gulp.task('bundle', () => {
    return gulp.src('src/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('src/build/bundle-file'));
});

gulp.task('minify-js', () => {
    return gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/build/minify-file'));
});


gulp.task('default', gulp.series('bundle', 'minify-js'));
