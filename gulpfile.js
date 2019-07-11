//Использую константы, тк эти данные не должны быть переопределены
const { watch, src, dest, parallel, series  } = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const imagemin = require('gulp-imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const twig = require('gulp-twig');
const typograf = require('gulp-typograf');

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
    return del('build/**/**/**/*.*');
}

// Сборка из twig в html и типографирование
function buildPages() {
    return src('src/pages/*.twig')
        .pipe(twig())
        .pipe(typograf({ locale: ['ru', 'en-US'] }))
        .pipe(dest('build/'));
}

//Сборка из scss в css с добавлением префиксов и минимизированием
function buildStyles() {
    return src('src/styles/*.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(dest('build/styles/'));
}

function buildScripts() {
    return src('src/scripts/**/*.scripts')
        .pipe(dest('build/scripts/'));
}

//Минимизация изображений
function buildAssets(cb) {
    // Уберём пока картинки из общего потока
    src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
        .pipe(dest('build/assets/'));

    src('src/assets/img/**/*.*')
        .pipe(imagemin())
        .pipe(dest('build/assets/img'));

    // Раньше функция что-то вовзращала, теперь добавляем вместо этого искусственый колбэк
    // Это нужно, чтобы Галп понимал, когда функция отработала и мог запустить следующие задачи
    cb();
}

function watchFiles() {
    watch(['src/pages/*.twig', 'src/pages/*.html'], buildPages);
    watch('src/styles/*.scss', buildStyles);
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