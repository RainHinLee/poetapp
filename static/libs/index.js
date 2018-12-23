
	(function (){
		var Router= Spine.Controller.sub({
			addHash : function (hash){  //--增加hash
				var target = document.location.hash.slice(1);
				var isContain = this.containHash(hash);
				if(!target.length){
					document.location.hash = hash
					return
				};
				if(isContain){
					return target
				};
				document.location.hash = target+'&'+hash;
				return document.location.hash
			},

			removeHash:function (hash){  //---移除hash
				var target = document.location.hash.slice(1);
				var str = '&'+hash;
				var index1 = target.indexOf(hash)
				var index2 = target.indexOf(str);
				if(index2>=0){
					document.location.hash = target.replace(str,'');
				}else if(index1>=0){
					document.location.hash = target.replace(hash,'');
				};

				return document.location.hash;
			},

			disposeHash:function (oldHash,newHash){  //---处理hash变化情况；增加hash数组，删除hash数组
				var oldHashs = oldHash.split('&');
				var newHashs = newHash.split('&');
				return {
					removes : this.diffHash(oldHashs,newHashs), //--移除的hash项
					adds : this.diffHash(newHashs,oldHashs)  //--增加的hash项
				}
			},

			diffHash:function (origin,target){  //---数组差值项；返回origin数组中有而target数组中无的项；
				var str = target.join('&');
				var result = [];

				origin.forEach(function (item,index){
					if(str.indexOf(item)<0){ //--该项不再target中
						result.push(item)
					}
				});
				return result;
			},

			change:function (ev){  //---hashchange事件
				var oldHash = this.getHash(ev.oldURL);
				var newHash = this.getHash(ev.newURL);
				var changes = this.disposeHash(oldHash,newHash);
				var removes = changes.removes;
				var adds = changes.adds;
				this.fire(removes,'remove');  //--移除hash项
				this.fire(adds,'add') //---增加hash项
				this.trigger('change',[ev,changes]);
			},

			fire:function (hashs,type){  //---发布事件
				hashs.forEach(function (hash,index){
					var name = hash+':'+type
					this.trigger(name)
				}.bind(this))
			},

			getHash:function (url){ //--取得链接的hash值
				var urls = url.split('#');
				var hash = urls.slice(1).join('#');
				return hash
			},

			containHash:function (hash){  //---当前路径是否包含hash
				var target = document.location.hash;
				return target.indexOf(hash)>=0;
			},

			reset:function (){
				document.location.hash && (document.location.hash = '');
				$(window).on('hashchange',this.change.bind(this));
			},

			init: function (){
				this.reset();
			}
		});
		window.router = new Router();
	})(window)
	window.dispatcher = $({})   //---事件订阅者
