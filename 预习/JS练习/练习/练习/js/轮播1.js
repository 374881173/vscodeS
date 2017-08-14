window.onload=function(){
	var pics=document.getElementById("pics");
	var container=document.getElementById("container");
	var dots=document.getElementById("dots").getElementsByTagName("span");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	function animate(distance){
		pics.style.left=parseInt(pics.style.left)+distance+"px";
	}	
	next.onclick=function(){
		animate(-520)	
	}
	prev.onclick=function(){
		animate(520)
}
}