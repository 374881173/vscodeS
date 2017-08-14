window.onload=function(){
	var container=document.getElementById("container");
	var pics=document.getElementById("pics");
	var dots=document.getElementById("dots").getElementsByTagName("span");
	var next=document.getElementById("next");
	var prev=document.getElementById("prev");
	var index=1;
	var sid=0;
	var sporting=false;
	function animate(distance){
		var myLeft=parseInt(pics.style.left)+distance;
		pics.style.left=myLeft+"px";
		function(){
  			if(myLeft>-520){
    		pics.style.left=-2600+'px';
    	}
    	  if(myLeft<-2600){
    		pics.style.left=-520+'px';
    	}
          	 	 };
		
	}
	function changeDot(){
		for(var i=0,len=dots.length;i<len;i++){
			if(dots[i].className=="on"){
				dots[i].className='';
				break;
			}
		}
		dots[index-1].className="on"
	}
	next.onclick=function(){
		
		if(index==5){
			index=1;
		}else{
			index++;
		}
		changeDot();
		animate(-520);
	}
	prev.onclick=function(){
		
		if(index==1){
			index=5;
		}else{
			index--;
		}
		changeDot();
		animate(+520);
	}
	for(var i=0,length=dots.length;i<length;i++){
		dots[i].onclick=function(){
			
			nowIndex=parseInt(this.getAttribute("index"));
			animate(-520*(nowIndex-index))
			index=nowIndex;
			changeDot()
		}
	}
	function go(){
		sid=setInterval(next.onclick,2000);
	}
	go();
	function end(){
		clearInterval(sid);
	}
	container.onmouseover=end;
	container.onmouseout=go;
}
