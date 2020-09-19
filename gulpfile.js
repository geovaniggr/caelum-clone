const gulp = require("gulp");
const { series } = require("gulp");

const uglifyCSS = require("gulp-uglifycss");
const uglifyJS = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const image = require("gulp-image");
const ref = require("gulp-useref-min");
const gulpIF = require("gulp-if");
const htmlmin = require("gulp-htmlmin");

const rebase = require('./gulp-functions/rebase-css');
const HTMLReplace = require('./gulp-functions/html-source-replace');

const CSSTask = () => {
  return gulp
    .src("src/styles/**/*.css")
    .pipe(rebase())
    .pipe(uglifyCSS({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build"));
};

const JSTask = () => {
  return gulp
    .src("src/js/**/*")
    .pipe( babel({
        presets: ["@babel/env"],
    }))
    .pipe(uglifyJS())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build"));
};

const IMGTask = () => {
  return gulp
    .src("src/resources/**/*")
    .pipe(image({
        optipng: true,
        svgo: true,
        concurrent: true,
    }))
    .pipe(gulp.dest("build/resources"));
};

const HTMLTask = () => {
  return gulp
    .src("index.html")
    .pipe(HTMLReplace({ replace: ["src/resources", "resources"], }))
    .pipe(ref())
    .pipe(gulpIF("*.html", htmlmin({ collapseWhitespace: true})))
    .pipe(gulp.dest("build"));
};

const CompleteRoutine = () => {
  return gulp
    .src("index.html")
    .pipe(HTMLReplace({ replace: ["src/resources", "resources"], }))
    .pipe(ref())
    .pipe(gulpIF("*.js", babel({ presets: ["@babel/env"], })))
    .pipe(gulpIF("*.js", uglifyJS()))
    .pipe(gulpIF("*.css", rebase()))
    .pipe(gulpIF("*.css", uglifyCSS()))
    .pipe(gulpIF("*.html", htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest("build"));
};

gulp.task("CSSTask", CSSTask);
gulp.task("JSTask", JSTask);
gulp.task("HTMLTask", HTMLTask);
gulp.task("IMGTask", IMGTask);
gulp.task("CompleteRoutine", CompleteRoutine);

module.exports.default = series(HTMLTask, CSSTask, JSTask);
