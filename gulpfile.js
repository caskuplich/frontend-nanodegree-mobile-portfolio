var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('minify-images', ['clean'], function() {
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src('js/*')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', ['clean'], function() {
  return gulp.src(['*.html', '!index.html', 'views/**/*', 'css/*'], { base: '.' })
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['minify-images', 'scripts', 'pages'], function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
      cssInline: {
        src: gulp.src('css/style.css'),
        tpl: '<style>%s</style>'
      }
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
