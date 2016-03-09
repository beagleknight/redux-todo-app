var gulp         = require('gulp'),
    $            = require('gulp-load-plugins')({ lazy: true }),
    env          = process.env.NODE_ENV || 'development',
    isProduction = env === 'production' || env === 'staging',
    browserSync  = require('browser-sync').create();

gulp.task('clean', function () {
    gulp.src('./public')
        .pipe($.plumber())
        .pipe($.clean());
});

gulp.task('libs', function () {
    gulp.src([
          './node_modules/systemjs/dist/system.js',
          './node_modules/expect/umd/expect.js',
          './node_modules/redux/dist/redux.js',
          './node_modules/react/dist/react.js',
          './node_modules/react-dom/dist/react-dom.js'
        ])
        .pipe($.plumber())
        .pipe($.concat('libs.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('scripts', function () {
    gulp.src(['./src/scripts/**/*.js'])
        .pipe($.plumber())
        .pipe($.preprocess({
            context: {
                NODE_ENV: env,
            }
        }))
        .pipe($.babel({
            presets: ["react", "es2015"],
            plugins: ["transform-object-rest-spread"]
        }))
        .pipe($.if(isProduction, $.stripDebug()))
        .pipe($.if(isProduction, $.uglify()))
        .pipe(gulp.dest('./public/js'));

});

gulp.task('templates', function () {
    gulp.src(['./src/templates/**/*.jade'])
        .pipe($.plumber())
        .pipe($.jade({
          pretty: true
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['scripts', 'templates', 'libs']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/scripts/**/*.js', ['scripts']);
    gulp.watch('./src/templates/**/*.jade', ['templates']);
});

gulp.task('server', function() {
    browserSync.init({
        port: 8001,
        files: ['./public'],
        ui: {
          port: 9001
        },
        server: {
            baseDir: './public',
        }
    })
});

gulp.task('dev', ['watch', 'server']);

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);
