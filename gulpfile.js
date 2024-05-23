'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const gulpRename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const SCSS_PATH = 'src/sass/**/*.+(scss|sass)'

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src(SCSS_PATH)
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulpRename({
            prefix: "",
            suffix: ".min"
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch(SCSS_PATH, gulp.parallel('styles'))
    gulp.watch('src/*.html').on("cgange", browserSync.reload)
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'))
