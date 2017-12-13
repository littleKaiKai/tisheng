let gulp = require('gulp')
let less = require('gulp-less')
let path = require('path')

gulp.task('less',function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
})

gulp.task('default', ['less'])