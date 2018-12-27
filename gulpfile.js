let gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('watch', () => {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            port: 3322
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', () => {
            console.log('Server Restarted');
        });
});
