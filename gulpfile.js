var gulp = require('gulp'),
	concat = require('gulp-concat'),	// 合并
	rename = require('gulp-rename'),	// 重命名
	uglify = require('gulp-uglify'),	// 压缩js
	minify = require('gulp-minify-css'),	// 压缩css
	sass = require('gulp-sass-china'),	// 编译scss
	imagemin =require('gulp-imagemin'),	// 压缩图片
	imageminJpegRecompress = require('imagemin-jpeg-recompress'), 	// jpg参数
	imageminOptipng = require('imagemin-optipng'),	// png参数
	htmlReplace = require('gulp-html-replace');


gulp.task('css',function(){
	// 压缩js
	gulp.src('bulid/css/*.css')
		.pipe(concat('common.css'))
		.pipe(minify())
		.pipe(rename('common.min.css'))
		.pipe(gulp.dest('product/css/'));
	console.log('Css');
});
gulp.task('js',function(){
	// 压缩不混淆js
	gulp.src(['bulid/js/*.js','!bulid/js/*.min.js'])
		.pipe(concat('common.js'))
		.pipe(uglify({mangle:false}))
		.pipe(rename('common.min.js'))
		.pipe(gulp.dest('product/js/'));
	console.log('Js');
});
gulp.task('img',function(){
	// 压缩图片
	gulp.src()
	console.log('Image');
});
gulp.task('sass',function(){
	// 编译sass
	gulp.src('bulid/sass/*.scss')
		.pipe(concat('common.scss'))
		.pipe(sass())
		.pipe(gulp.dest('bulid/css/'));
	console.log('Sass');
});
gulp.task('watch',function(){
	// 只监听sass文件,当文件保存时,执行编译
	gulp.watch('bulid/sass/*.scss',['sass']).on('change',function(e){
		console.log('Sass文件已修改'+e.path);
	});
	// 
	gulp.watch('bulid/css/*.css',['css']).on('change',function(e){
		console.log('css文件改动,自动编译中'+e.path);
	});
	gulp.watch('bulid/js/*.js',['js']).on('change',function(e){
		console.log('js文件改动,自动编译中'+e.path);
	});
});

// html 文件中部分替换
gulp.task('re-html',function(){
	gulp.src('bulid/index.html')
		.pipe(htmlReplace({js:'js/a.min.js',css:'css/a.min.css'}))
		.pipe(gulp.dest('bulid/'));
});



//配置参数:
// ===============================
//	压缩js
// 		uglify: https://github.com/terinjokes/gulp-uglify
//			1. mangle : 是否混淆变量名(bool)
//			2. compress : 是否完全压缩(bool)
//			3. preserveComments : 'all' 保留注释(str)
//			4. output : 
//		minify : 
//
//
//
//
//
//

