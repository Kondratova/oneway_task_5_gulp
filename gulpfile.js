//Использую константы, тк эти данные не должны быть переопределены
const { watch, src, dest, parallel, series  } = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const twig = require('gulp-twig');
const typograf = require('gulp-typograf');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Девсервер
function devServer(cb) {
    let params = {
        watch: true,
        reloadDebounce: 150,
        notify: false,
        server: { baseDir: './build' },
    };

    browserSync.create().init(params);
    cb();
}

//Удаление всех файлов в папках
function clearBuild() {
    return del('build/**/*.*');
}

// Сборка из twig в html и типографирование
function buildPages() {
    return src('src/pages/*.twig')
        .pipe(twig())
        .pipe(typograf({ locale: ['ru', 'en-US'] }))
        .pipe(dest('build/'));
}

//Сборка из scss в css с добавлением префиксов и минимизированием
function buildStyles(cd) {
    src('src/styles/*.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(dest('build/styles/'));

    src(['src/styles/slick/*.css', 'src/styles/magnific/*.css'])
        .pipe(dest('build/styles/'));
    cd();
}

function buildScripts(cb) {
    src('src/scripts/index.js')
        .pipe(webpack({ output: { filename: 'bundle.js' } }))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(dest('build/scripts/'));

    src(['src/scripts/slick/*.js',
        'src/scripts/magnific/*.js',
        'src/scripts/api/*.js'])
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(dest('build/scripts/'));
    cb();
}

//Минимизация изображений
function buildAssets(cb) {
    src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
        .pipe(dest('build/assets/'));

    src(['src/assets/img/**/*.*', '!src/assets/img/icons/*.svg'])
        // .pipe(imagemin())
        .pipe(dest('build/assets/img/'));

    // Раньше функция что-то вовзращала, теперь добавляем вместо этого искусственый колбэк
    // Это нужно, чтобы Галп понимал, когда функция отработала и мог запустить следующие задачи
    cb();
}

function watchFiles() {
    watch(['src/pages/*.twig', 'src/pages/*.html'], buildPages);
    watch(['src/styles/**/*.scss', 'src/styles/**/*.css'], buildStyles);
    watch('src/scripts/**/*.js', buildScripts);
    watch('src/assets/**/*.*', buildAssets);
}

// Указываем функции, которые будут доступны из терминала
// Команда «по умолчанию» -- default -- будет срабатывать при вызове gulp без аргументов
exports.default =
    series(
        clearBuild,
        parallel(
            devServer,
            series(
                parallel(buildPages, buildStyles, buildScripts, buildAssets),
                watchFiles
            )
        )
    );