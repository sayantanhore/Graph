const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-ruby-sass');
const karmaServer = require('karma').Server;


gulp.task('lint', () => {
  return gulp.src(['src/**/*.js', '!node_modules/**', '!src/scripts/bundle.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('sass', () => {
  return sass('src/stylesheets/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('src/stylesheets/'));
});

gulp.task('build', () => {

});

gulp.task('watch', () => {
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
});

gulp.task('test', done => {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('default', ['lint'], () => {
  console.log('No lint error!');
});
