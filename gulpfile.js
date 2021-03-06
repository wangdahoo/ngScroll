var gulp = require('gulp');
var clean = require('gulp-clean');
var fs = require('fs');
var _ = require('underscore');
var q = require('q');

gulp.task('clean:tpl', function () {
  return gulp.src('src/templates.js', {read: false})
    .pipe(clean());
});

/* tpl */
var tpl_dir = 'src/templates/';
gulp.task('tpl', ['clean:tpl'], function (cb) {
  fs.readdir(tpl_dir, function (err, files) {
    if (err) throw err;
    var views = [];
    var defer = q.defer();

    _.each(files, function (fileName) {
      fs.readFile(tpl_dir + fileName, function (err, data) {
        if (err) throw err;
        var tplName = fileName.replace('.html', '');
        views.push({
          name: tplName,
          html: data.toString()
        });
        if (views.length == files.length) {
          defer.resolve();
        }
      });
    });

    defer.promise.then(function () {
      var body = {};
      _.each(views, function (tpl) {
        body[tpl.name] = tpl.html;
      });

      var Templates = 'module.exports = ' + JSON.stringify(body);

      fs.writeFile('src/templates.js', Templates, function (err) {
        if (err) throw err;
        cb();
      })
    });

  });
});

/* build */
var execFile = require('child_process').execFile;
gulp.task('build', ['tpl'], function (cb) {
  execFile('webpack', function (error, stdout, stderr) {
    if (error) {
      throw error;
    }
    console.log(stdout);
    cb();
  });
});

/* watch */
gulp.task('watch', function () {
  // build
  gulp.watch('src/**/*.*', ['build']);
});


/* docs */
var replace = require('gulp-replace');

gulp.task('docs:clean', function() {
  return gulp.src('docs/', {read: false})
    .pipe(clean());
});

gulp.task('docs:copy', ['docs:clean'], function () {
  return gulp.src([
    'demo/index.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular/angular.min.js.map',
    'dist/angular-scroll.js'
  ])
    .pipe(gulp.dest('docs/'));
});

gulp.task('docs', ['docs:copy'], function () {
  return gulp.src('demo/index.html')
    .pipe(replace('../bower_components/angular/angular.min.js', 'angular.min.js'))
    .pipe(replace('../dist/angular-scroll.js', 'angular-scroll.js'))
    .pipe(gulp.dest('docs/'));
});
