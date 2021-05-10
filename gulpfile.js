const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
gulp.task('purgecss', () => {
    return gulp.src(['assets/vendor/bootstrap/css/bootstrap.min.css','node_modules/@fortawesome/fontawesome-free/css/all.min.css'])
        .pipe(purgecss({
            content: ['index.html']
        }))
        .pipe(gulp.dest('assets/css'))
})