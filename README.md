# Web-Front-Environment
搭建的前端开发自动环境,自己使用的版本

####目录说明

#####1. build 开发目录
1. css 样式文件
2. js 脚本文件
3. sass sass文件
4. img 图片资源

#####2. product 输出目录(上线文件)
1. css 样式文件(已处理压缩)
2. js 脚本文件(已压缩未混淆)
3. img 图片资源(压缩)

#####3. package.json
npm包管理本地文件,clone文件,npm install即可

#####4. gulpfile.js
自动化执行的文件
	1. css 处理样式文件
	2. js  处理js文件
	3. img 处理图片资源
	4. sass 自动编译scss文件
	5. watch 监听文件变化并自动编译(scss/css/js)
	6. re-html 替换html某些字段(js/css的引用值) 