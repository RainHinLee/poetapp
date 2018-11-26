fis.match('model/*.js',{
	release:false,
	isMod:false
})

fis.match('model/index.js',{
	release:true,
	postprocessor(text){
		var rex=/module.exports\s*=\s*/g;
		return text.replace(rex,'');
		
	}
});