var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src('src/**')
    .pipe(eslint({
      useEslintrc: true,
      envs: ['node']
    }))
    .pipe(eslint.format())
    // Brick on failure to be super strict
    .pipe(eslint.failAfterError());
});
