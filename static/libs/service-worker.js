
var CACHE_NAME = "poet_v41"; // 用于标注创建的缓存，也可以根据它来建立版本规范

var cacheFiles=[
	'/',
	'/static/style/index.css',
	'/static/images/user.jpg',
	'/static/images/01.png'
]

//---注册service worker;
self.addEventListener('install', function (event){
	self.skipWaiting(); 
	event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
           return cache.addAll(cacheFiles);
        })
    ); 
});	

//--激活
self.addEventListener('activate', function(ev){
	self.clients.claim()
	ev.waitUntil(
 		Promise.all([ // 清理旧版本
	       	caches.keys().then(function (cacheList){
	       		cacheList.map( function(cacheName){
	       			if (cacheName !== CACHE_NAME) {
	       			    caches.delete(cacheName);
	       			}
	       		})
		    })
		]).then(function (){ // 更新客户端
			return self.clients.claim()
		}).catch(function (){})
	)
});

//---http 请求劫持
self.addEventListener('fetch', function(event){
	console.log('fetch')
    event.respondWith(
        caches.match(event.request).then(function (response){
        	console.log(event)
        	if(response){ //--缓存中存在
        		return response
        	}else{ //--缓存中不存在
        		 var request = event.request.clone();
        		return fetch(request).then(function (res){
		        		if(!res || res.status !== 200 || res.type !== 'basic'){ //---未成功以及第三方请求
				            return res;
				        }else{
			            	var responseToCache = res.clone();
				            caches.open(CACHE_NAME).then(function(cache) {
				                cache.put(event.request, responseToCache);
				            });            	
				            return res
				        }
        		})
        	}
        }).catch(function (){})
    )
});

/* 
 
	

 
 
 
 
 
 
 */