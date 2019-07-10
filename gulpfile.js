let { watch, src, dest, parallel, series  } = require('gulp');
let browserSync = require('browser-sync');
// let del = require('del');
let imagemin = require('gulp-imagemin');
let sass = require('gulp-sass');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

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

/*function clearBuild() {
    return del('build/');
}*/

// Сборка
function buildPages() {
    return src('src/pages/*.html')
        .pipe(dest('build/'));
}

function buildStyles() {
    return src('src/styles/*.sass')
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
    watch('src/pages/*.html', buildPages);
    watch('src/styles/*.sass', buildStyles);
    watch('src/scripts/**/*.js', buildScripts);
    watch('src/assets/**/*.*', buildAssets);
}

// Указываем функции, которые будут доступны из терминала
// Команда «по умолчанию» -- default -- будет срабатывать при вызове gulp без аргументов
// exports.default = series(
//     parallel(buildPages, buildStyles, buildScripts, buildAssets),
//     watchFiles
// );

exports.default =
    parallel(
        devServer,
        series(
            parallel(buildPages, buildStyles, buildScripts, buildAssets),
            watchFiles
        )
    );