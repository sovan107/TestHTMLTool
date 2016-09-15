
/* required methods*/
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');
var watch       = require('gulp-watch');

/*tasks*/

gulp.task('htmltesttoolDevs', function(){
    
    return gulp.src('src/js/*.js')
                .pipe(concat('myJs.js'))
                .pipe(gulp.dest('src'))
                .pipe(rename('myJs1.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('bin'));
                
});
gulp.task('htmltesttoolDevsDist', function(){
    
    return gulp.src(['src/myJs.js'])
                .pipe(rename('myJs.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('bin'));
                
});

gulp.task('watch', function(){
   
    gulp.watch('src/js/*js', ['htmltesttoolDevs']);
});
gulp.task('default', function(callback){
      runSequence('htmltesttoolDeps', 'htmltesttoolDist', callback)  
});
    
gulp.task('htmltesttoolDeps', function(){
    return gulp.src(['bower_components/modernizr/modernizer.js',
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/bootstrap.js'])
                .pipe(concat('htmltesttool.js'))
                .pipe(gulp.dest('src'));
});

gulp.task('htmltesttoolDist', function(){
    
    return gulp.src(['src/htmltesttool.js'])
                .pipe(rename('htmltesttool.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('bin'));
});