var koa = require('koa');
var router = require('koa-router')();
var useragent = require('koa-useragent');
var serve = require('koa-serve');
var favicon = require('koa-favicon');
var path = require('path');
var fs = require('fs');
var swig = require('swig');
var models = require('./model/index.js');

var app = koa();
var port = '18080';

//--
app.name = 'poetapp'; 
app.use(serve('static'));  //---设置静态文件目录
app.use(router.routes(),router.allowedMethods());  //---设置路由
app.use(useragent()); //---用户代理

//---路由
router.get("",function* (next){  //---首页
	//console.log(this,ctx,next)
	// var file =ctx.userAgent.isMobile ?  path.resolve(__dirname,'./views/mobile.html') : path.resolve(__dirname,'./views/index.html')
	
	
	var file =  path.resolve(__dirname,'./views/mobile.html');
	var template = swig.compileFile(file);
	
	this.set('Cache-Control', 'no-cache');
	
	this.type = 'text/html; charset=utf-8';
	this.body = template({models});
});


//---service-worker.js
router.get("/service-worker.js",function* (next){  //---首页
	var file = path.resolve(__dirname,'./static/libs/service-worker.js');
	this.type = 'text/javascript';
	this.body = fs.readFileSync(file,{encoding:"utf8"});
});

app.listen(port);

/*

	
	
	
	
	
 * 
 * 
 * 
 * *
 * 
 * */