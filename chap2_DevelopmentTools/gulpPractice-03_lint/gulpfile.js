const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('default', function (done) {
  gulp.src(['es6/**/*.js', 'publie/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
  done();
});