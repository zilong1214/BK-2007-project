
// 设定 gulp 打包压缩规范的 js文件

// 1,加载相关依赖包
// 加载 gulp 依赖包
const gulp = require('gulp')

// 加载 css 相关的依赖包
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')

// 加载 del 删除依赖包
const del = require('del')

// 加载 js 相关的依赖包
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

// 加载 html 相关的依赖包
const htmlmin = require('gulp-htmlmin')

// 加载 服务器依赖包
const webserver = require('gulp-webserver')

// 加载 sass依赖包
const sass = require('gulp-sass')

// 2，制定各种文件的打包规范

// css的打包规范
const cssHandler = function(){
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe( gulp.dest('./dist/css') )
}

// js的打包规范
const jsHandler = function(){
    return gulp.src('./src/js/*.js')
    .pipe( babel({presets:['@babel/env']}) )
    .pipe( uglify() )
    .pipe( gulp.dest ( './dist/js' ) )
}

// html的打包压缩规范
const htmlHandler = function(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,
        removeComments:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        collapseBooleanAttributes:true,
        collapseWhitespace:true,
        minifyCSS:true,
        minifyJS:true,
        
    }))
    .pipe(gulp.dest ('./dist/pages') )
}

// sass 打包规范
const sassHandler = function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe( gulp.dest('./dist/css'))
}

// 不要打包压缩的文件的规范

// 图片的规范
const imgHandler = function(){
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'));
}

// 音频的规范
const audioHandler = function(){
    return gulp.src('./src/audio/**')
    .pipe(gulp.dest('./dist/audio'));
}

// 视频的规范
const videoHandler = function(){
    return gulp.src('./src/video/**')
    .pipe(gulp.dest('./dist/video'));
}

// 插件的规范
const ditHandler = function(){
    return gulp.src('./src/dit/**')
    .pipe(gulp.dest('./dist/dit'));
}

// 3, 制定 自动监听规范
const watchHandler = function(){
    gulp.watch( './src/css/*.css', cssHandler );
    gulp.watch( './src/js/*.js', jsHandler );
    gulp.watch( './src/pages/*.html', htmlHandler );
    gulp.watch( './src/images/**', imgHandler );
    gulp.watch( './src/audio/**', audioHandler );
    gulp.watch( './src/video/**', videoHandler );
    gulp.watch( './src/dit/**', ditHandler );
    gulp.watch( './src/sass/*.scss', sassHandler );

}


// 4, 执行 删除规范
// 在执行新的打包压缩之前 ，先删除之前的文件
const delHandler = function(){
    return del(['./dist']);
}

// 5, 执行 webserver 服务器规范
const webserverHandler = function(){
    return gulp.src('./dist')
    .pipe( webserver({
        host:'127.0.0.1',
        port:'8080',
        open:'./pages/index.html',
        livereload:true,
    }))
}

// 6, 指定导出文件
// 以默认程序形式导入要执行的程序文件内容

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel( cssHandler, jsHandler, htmlHandler, imgHandler , audioHandler , videoHandler , ditHandler,sassHandler),
    webserverHandler,
    watchHandler,
);