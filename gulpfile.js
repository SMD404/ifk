const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');

function style() {
    return gulp.src('app/blocks/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
}

function html() {
    return gulp.src('app/templates/pages/**/index.pug')
        .pipe(pug({
            pretty: true,
            locals: {
                addClass: function(name, mods, addClass) {
                    mods = mods || [];
                    addClass = addClass || '';
                    let value = '';

                    mods.forEach(function(element) {
                        value += ' ' + name + '_' + element;
                    });

                    return (value + ' ' + addClass).trim();
                }
            }
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream())
}

function fontsTransfer() {
    return gulp.src('app/templates/static/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'))
}

// function js() {
//   return gulp.src(['node_modules/jquery/dist/jquery.js', 'app/script/**/*.*'])
//     .pipe(gulp.dest('dist/js'))
// }

function bundleJS() {
    return browserify('app/script/main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js'));
};

function imageTransfer() {
    return gulp.src('app/templates/static/img/*.*')
        .pipe(gulp.dest('dist/img'))
}

function icons() {
    return gulp.src('app/templates/static/icons/*.svg')
        .pipe(replace('&gt;', '>'))
        .pipe(rename({ prefix: 'icon-' }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '',
                    sprite: 'icons.svg'
                }
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false,
                namespaceIDs: false,
                dimensionAttributes: false
            }
        }))
        .pipe(gulp.dest('dist/img/icons/'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('app/**/*.scss', style);
    gulp.watch('app/**/*.pug', html).on('change', browserSync.reload);
    gulp.watch('app/templates/static/**/*.{png,jpg,jpeg,gif,webp,svg}', gulp.series(icons, imageTransfer));
    gulp.watch('app/**/*.js', gulp.series(bundleJS)).on('change', browserSync.reload);
}

gulp.task('build', gulp.series(icons, html, style, imageTransfer, fontsTransfer, bundleJS, function(done) {
    done();
}));

gulp.task('watch:dev', gulp.series('build', gulp.parallel(watch)));

exports.style = style
exports.html = html
exports.bundleJS = bundleJS
exports.icons = icons
exports.fontsTransfer = fontsTransfer
exports.imageTransfer = imageTransfer
exports.watch = watch