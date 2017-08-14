// JavaScript Document
$(function(){
	$(".Nav li").hover(
		function(){
			var i=$(".Nav li").index(this);
			if($(".Nav li").attr("class")!="" && $(".Nav li").attr("class")=="NavSelectBg"){
				$(".Nav li").eq(i).addClass("NavSelectBg_add");	
			}else{
				$(".Nav li").eq(i).addClass("NavSelectBg_add");
			}
	    },
		function(){
			var i=$(".Nav li").index(this);
			$(".Nav li").eq(i).removeClass("NavSelectBg_add");
		}
	)
	$(function(){
		var pLen=$(".information p").length;
		//alert(pLen);
		for(var i=0;i<pLen;i++){
			$(".information p").eq(i).children("span:gt(0)").css({"padding-left":"40px"});	
		}	
	})
	$("a").attr({"target":"_blank"});	
})//导航鼠标移上去效果

$(document).ready(function(){
	$(".slides ul li").hide();
	$(".slides ul li").eq(0).show();
	var slides_lens=$(".slides ul li").length;
	$(".slidesSelect a").css({"background-color":"#81d7fa","color":"#000"});
	$(".slidesSelect a").eq(0).css({"background-color":"#ffffff","color":"green"});
	var times;
	var i=0;
	
	times=setInterval(function(){
		i+=1;
		if(i>slides_lens-1){i=0;}
		sprot(i);	
	}	,5000);//初始化开始调用切换
	
	
	$(".slidesNav").hover(
		function(){
			clearInterval(times);
		},function(){
			times=setInterval(function(){
				i+=1;
				if(i>slides_lens-1){i=0;}
				sprot(i);	
			}	,5000);
		}
	)//鼠标移上slidesNav容器停止调用，移开继续调用
	
	$(".slidesSelect a").mouseover(function(){
		var index=$(".slidesSelect a").index(this);	
		i=index;
		sprot(i);
	})//鼠标以上选项卡切换
	
	function sprot(i){
		$(".slidesSelect a").css({"background-color":"#81d7fa","color":"#000"});
		$(".slidesSelect a").eq(i).css({"background-color":"#ffffff","color":"green"});
		$(".slides ul li").hide();
		$(".slides ul li").eq(i).stop().fadeIn();
	}

})


function slides_02(){
	$(".mainRightTopSlides ul li").hide();
	$(".mainRightTopSlides ul li").eq(0).show();
	var mainRightTopSlides_lens=$(".mainRightTopSlides ul li").length;
	$(".mainRightTopSlidesSelect a").css({"background-color":"#81d7fa","color":"#000"});
	$(".mainRightTopSlidesSelect a").eq(0).css({"background-color":"#ffffff","color":"green"});
	var time;
	var j=0;
	
	time=setInterval(function(){
		j+=1;
		if(j>mainRightTopSlides_lens-1){j=0;}
		sprots(j);	
	}	,3000);//初始化开始调用切换
	
	
	$(".mainRightTopSlides").hover(
		function(){
			clearInterval(time);
		},function(){
			time=setInterval(function(){
				j+=1;
				if(j>mainRightTopSlides_lens-1){j=0;}
				sprots(j);	
			}	,3000);
		}
	)//鼠标移上slidesNav容器停止调用，移开继续调用
	
	$(".mainRightTopSlidesSelect a").mouseover(function(){
		var indexs=$(".mainRightTopSlidesSelect a").index(this);	
		j=indexs;
		sprots(j);
	})//鼠标以上选项卡切换
	
	function sprots(j){
		$(".mainRightTopSlidesSelect a").css({"background-color":"#81d7fa","color":"#000"});
		$(".mainRightTopSlidesSelect a").eq(j).css({"background-color":"#ffffff","color":"green"});
		$(".mainRightTopSlides ul li").hide();
		$(".mainRightTopSlides ul li").eq(j).stop().fadeIn();
	}
}



window.onload=function(){
	slides();
	sizeImge();	
	slides_02();
	mainRightFooterGiftMiddleContent();
	MemberMyIntegral();
}		
function slides(){
	if($(".slides ul li img").length!=""){
		$(".slides ul li img").height("393px");
	}
	else{return;}	
}
function mainRightFooterGiftMiddleContent(){
	var buttons_len=$(".mainRightFooterGiftMiddleContent ul li").length;
	for(var i=0;i<buttons_len;i++){
		$(".mainRightFooterGiftMiddleContent ul li").eq(i).children("a").last().attr({"class":"mainRightFooterGiftLinksButtons"});	
	}
	var img_size_sum=$(".mainRightFooterGiftMiddleContent ul li img");	
		var width_s=118;
		var height_s=113;
		for(var i=0;i<img_size_sum.length;i++){
			var image=new Image();
			image.src=img_size_sum[i].src;
			if(image.width>0 && image.height>0){
				flag=true;
				if(image.width/image.height>=width_s/height_s){
					if(image.width>width_s){
						img_size_sum[i].width=width_s;
						img_size_sum[i].height=(image.height*width_s)/image.width;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
				else{
					if(image.height>height_s){
						img_size_sum[i].height=height_s;
						img_size_sum[i].width=(image.width*height_s)/image.height;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
		 	}
		}	
}
function sizeImge(){
		var img_size_sum=$(".giftRecommendContent .giftRecommendImge span a img");	
		var width_s=47;
		var height_s=44;
		for(var i=0;i<img_size_sum.length;i++){
			var image=new Image();
			image.src=img_size_sum[i].src;
			if(image.width>0 && image.height>0){
				flag=true;
				if(image.width/image.height>=width_s/height_s){
					if(image.width>width_s){
						img_size_sum[i].width=width_s;
						img_size_sum[i].height=(image.height*width_s)/image.width;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
				else{
					if(image.height>height_s){
						img_size_sum[i].height=height_s;
						img_size_sum[i].width=(image.width*height_s)/image.height;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
		 	}
		}
}

function MemberMyIntegral(){
	var img_size_sum=$(".memberGiftListCenter ul li img");	
		var width_s=145;
		var height_s=120;
		for(var i=0;i<img_size_sum.length;i++){
			var image=new Image();
			image.src=img_size_sum[i].src;
			if(image.width>0 && image.height>0){
				flag=true;
				if(image.width/image.height>=width_s/height_s){
					if(image.width>width_s){
						img_size_sum[i].width=width_s;
						img_size_sum[i].height=(image.height*width_s)/image.width;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
				else{
					if(image.height>height_s){
						img_size_sum[i].height=height_s;
						img_size_sum[i].width=(image.width*height_s)/image.height;
					}
					else{
						img_size_sum[i].width=image.width;
						img_size_sum[i].height=image.height;
					}
				}
		 	}
		}	
}


//分页
$(function(){
	$(".paging a:gt(0)").css({"margin-left":"3px"});	
	$(".memberPaging a:gt(0)").css({"margin-left":"3px"});
	//$(".memberPaging a").attr({"class":"hei"});
})

$(document).ready(function(){
	var li_lens=$(".memberGiftListCenter li").length;
	var li_html=$(".memberGiftListCenter ul").html();
	$(".memberGiftListCenter ul").append(li_html);
	var li_len=$(".memberGiftListCenter li").length;
	var li_width=$(".memberGiftListCenter li").width();
	$(".memberGiftListCenter ul").css({"width":li_len*li_width+"px"});
	var i=0;
	var h;
	$(".left").click(function(){
		i-=1;		
		if(i*li_width<0){
			i=li_len-6;
			sprot(i);
		}
		if($(".memberGiftListCenter ul").css("left")==0+"px"){
			$(".memberGiftListCenter ul").css({"left":-(li_len*li_width)/2+"px"});
			i=li_lens-1;
			sprot(i);	
		}
		else{
			sprot(i);
		}
	})
	
	
	
	$(".right").click(function(){
		i+=1;
		if(i*li_width>li_len*li_width-580){
			i=0;
			sprot(i);	
		}
		if($(".memberGiftListCenter ul").css("left")==-(li_len*li_width)/2+"px"){
			$(".memberGiftListCenter ul").css({"left":"0px"});
			i=1;
			sprot(i);	
		}
		else{
			sprot(i);	
		}
	})
	
	
	
	function sprot(i){
		var sprot_width=-i*li_width;
		$(".memberGiftListCenter ul").stop().animate({"left":sprot_width+"px"});
	}
	$(".memberGiftListBox").mouseover(function(){
		clearInterval(h);
	})
	$(".memberGiftListBox").mouseout(function(){
		h=setInterval(function lefts0(){
		i+=1;
		if(i*li_width>li_len*li_width-580){
			i=0;
			sprot(i);	
		}
		if($(".memberGiftListCenter ul").css("left")==-(li_len*li_width)/2+"px"){
			$(".memberGiftListCenter ul").css({"left":"0px"});
			i=1;
			sprot(i);
		}
		else{
			sprot(i);	
		}	
	},2000);	
	})	
	h=setInterval(function lefts0(){
		i+=1;
		if(i*li_width>li_len*li_width-580){
			i=0;
			sprot(i);	
		}
		if($(".memberGiftListCenter ul").css("left")==-(li_len*li_width)/2+"px"){
			$(".memberGiftListCenter ul").css({"left":"0px"});
			i=1;
			sprot(i);
		}
		else{
			sprot(i);	
		}	
	},2000);
			
})