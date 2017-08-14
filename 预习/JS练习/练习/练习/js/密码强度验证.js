window.onload=function(){
				var $=function(_id){
					var obj=document.getElementById(_id);
					return obj;
				}
				var pwd=$("pwd");
				var div1=$("div1");
				var sp1=$("sp1");
				var sp2=$("sp2");
				var sp3=$("sp3");
				var div2=$("div2");
				var regNum=/[0-9]/;
				var regStr=/[a-zA-Z]/;
				var fStrNum=/\W/;
				pwd.onkeyup=function(){
					if(pwd.value.length<=16){
						div1.style.display="inline-block";
						div2.style.display="none"
						
					}
				}
		}