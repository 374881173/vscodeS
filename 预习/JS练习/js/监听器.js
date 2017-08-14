function addEvent(elem,evenType,func){
	if(elem!=null&&typeof elem=="object"){
		if(-[1,]){
			elem.addEventListener(evenType,func);
		}else{
			elem.attachEvent("on"+evenType,func;)
		}
	}else(
		alert("不是对象");
	)
}
