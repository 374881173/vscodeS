window.onload=function(){
	var container=document.getElementById('container');
	var pics=document.getElementById('pics');
	var dots=document.getElementById('dots').getElementsByTagName('span');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
    var on=1;
    var sid=null;
    var sporting=false;
          function animate(distance){
          	 var myLeft=parseInt(pics.style.left)+distance;
          	 pics.style.left=myLeft+"px";
    TweenLite( pics,0.3 ,{ alpha:100 ,left:myLeft-1,top:0, ease:Easing.Circ.easeOut,onUpdate:function(){
    	sporting=true;
    },onComplete:
          	 	function(){
           
          	if(myLeft>-520){
    		pics.style.left=-2600+'px';
    	}
    	  if(myLeft<-2600){
    		pics.style.left=-520+'px';
    	}
    	 sporting=false;
          	 	} },);
          	
          }
      function changeDot(){
      	for(var i=0;i<dots.length;i++){
               if(dots[i].className=='on'){
               	dots[i].className='';
               	break;
               }
      	}
          dots[on-1].className='on';
      	
      }
    prev.onclick=function(){
    	if(sporting){
    		return;
    	}
    	animate(520);
    	if(on==1){
    		on=5;
    	}else{
    	on--;}
    	changeDot();
    	
    };

    next.onclick=function(){
    	if(sporting){
    		return;
    	}
    	animate(-520);
    	if(on==5){
    	 on=1;	
    	}else{
    	on++;}
    	changeDot();
    };
    for(var i=0;i<dots.length;i++){
    	dots[i].onclick=function(){
    		if(sporting){
    		return;
    	}
           var index=parseInt(this.getAttribute('index'));
           var dis=-520*(index-on);
            animate(dis);
            on=index;
    		changeDot();
    	};
    } 
   function start(){ 
   	sid=setInterval(next.onclick,3000);
   }
   function end(){
   	clearInterval(sid)
   }
   container.onmouseover=end;
   container.onmouseout=start;
   start();
};