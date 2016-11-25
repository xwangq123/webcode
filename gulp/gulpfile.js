const gulp = require('gulp');

//创建任务 default
gulp.task('default', function () {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./static'));//能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。
});


