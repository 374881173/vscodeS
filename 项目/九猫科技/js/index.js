/*** Created by Administrator on 2016-06-14.*/
//网站动画的效果
console.info($(window).height());
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
        fixedElements: '#nav-fix',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollingSpeed:1000,
        controlArrowColor: 'transparent',
        css3: true,
        loopHorizontal:true,
        keyboardScrolling:true,
        afterLoad: function (anchorLink, index) {
            switch(index){
                case 1:
                    move('#section-1 #slide-1 .main-content .content').scale(1).duration('2s').ease('in').ease('in').end();
                    move('#nav-fix').set("display","none").ease('in').end();
                    break;
                case 2:
                    move('#section-2 .main-content .title p:last-child').scale(1).ease('in').ease('in').end();
                    move('#section-2 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:first-child a').set("margin-left","0px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(2) a').set("margin-left","0px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(3)').set("padding-left","0px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(4)').set("padding-left","0px").ease('in').end();
                    break;
                case 3:
                    move('#section-3 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-3 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-3 .main-content .content .imgList:first-child').set("margin-top","150px").end(
                        function(){
                            move('#section-3 .main-content .content .imgList:last-child').set("margin-top","0px").ease('in').end();
                        });
                    break;
                case 4:
                    move('#section-4 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-4 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-4 .main-content .content .imgList:first-child').set("padding-top","0px").end(function(){
                        move('#section-4 .main-content .content .imgList:nth-child(2)').set("margin-top","0px").end(function(){
                            move('#section-4 .main-content .content .imgList:last-child').set("margin-top","0px").ease('in').end();});
                    });
                    break;
                case 5:
                    move('#section-5 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-5 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-5 .main-content .content').scale(1).ease('in').end();
                    break;
                case 6:
                    move('#section-6 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-6 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-6 .main-content .process:first-child').set("margin-top","15px").duration('0.2s').end(function(){
                        move('#section-6 .main-content .process:nth-child(2)').set("margin-top","15px").duration('0.2s').end(function(){
                            move('#section-6 .main-content .process:nth-child(3)').set("margin-top","15px").duration('0.2s').end(function(){
                                move('#section-6 .main-content .process:nth-child(4)').set("margin-top","15px").duration('0.2s').end(function(){
                                    move('#section-6 .main-content .process:nth-child(5)').set("margin-top","15px").duration('0.2s').end(function(){
                                        move('#section-6 .main-content .process:last-child').set("margin-top","15px").duration('0.2s').end()
                                    })
                                })
                            })
                        })
                    });
                    break;
                case 7:
                    move('#section-7 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-7 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-7 .main-content .content .imgList:first-child').set("padding-top","0px").end(function(){
                        move('#section-7 .main-content .content .imgList:nth-child(2)').set("margin-top","0px").end(function(){
                            move('#section-7 .main-content .content .imgList:last-child').set("margin-top","0px").ease('in').end();});
                    });
                    break;
                case 8:
                    move('#section-8 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-8 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-8 .main-content .content').scale(1).ease('in').end();
                    break;
                case 9:
                    move('#section-9 .main-content .title p').set("margin-top","0px").ease('in').end();
                    move('#section-9 .main-content .title p:last-child').scale(1).ease('in').end();
                    move('#section-9 .main-content .mouse-click1').scale(1).ease('in').end();
                    move('#section-9 .main-content .content2 .map').set("padding-right","0px").ease('in').end();
                    move('#section-9 .main-content .content2 .tel').set("padding-left","0px").ease('in').end();
                    break;
            }
        },
        onLeave: function (index,nextIndex,direction) {
            switch(index){
                case 1:
                    move('#section-1 #slide-1 .main-content .content').scale(0).ease('in').end();
                    move(' #nav-fix').set("display","block").ease('in').end();
                    break;
                case 2:
                    move('#section-2 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-2 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:first-child a').set("margin-left","-100px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(2) a').set("margin-left","-100px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(3)').set("padding-left","100px").ease('in').end();
                    move('#section-2 .main-content .imgList .hcwd:nth-child(4)').set("padding-left","100px").ease('in').end();
                    break;
                case 3:
                    move('#section-3 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-3 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-3 .main-content .content .imgList:first-child').set("margin-top","200px").end(
                        function(){
                            move('#section-3 .main-content .content .imgList:last-child').set("margin-top","15px").ease('in').end();
                        }
                    );
                    break;
                case 4:
                    move('#section-4 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-4 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-4 .main-content .content .imgList:first-child').set("padding-top","50px").end(function(){
                        move('#section-4 .main-content .content .imgList:nth-child(2)').set("margin-top","50px").end(function(){
                            move('#section-4 .main-content .content .imgList:last-child').set("margin-top","50px").ease('in').end();});
                    });
                    break;
                case 5:
                    move('#section-5 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-5 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-5 .main-content .content').scale(0.5).ease('in').end();
                    break;
                case 6:
                    move('#section-6 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-6 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-6 .main-content .process:first-child').set("margin-top","0px").duration('0.2s').end(function(){
                        move('#section-6 .main-content .process:nth-child(2)').set("margin-top","-15px").duration('0.2s').end(function(){
                            move('#section-6 .main-content .process:nth-child(3)').set("margin-top","-30px").duration('0.2s').end(function(){
                                move('#section-6 .main-content .process:nth-child(4)').set("margin-top","-50px").duration('0.2s').end(function(){
                                    move('#section-6 .main-content .process:nth-child(5)').set("margin-top","-70px").duration('0.2s').end(function(){
                                        move('#section-6 .main-content .process:last-child').set("margin-top","-100px").duration('0.2s').end()
                                    })
                                })
                            })
                        })
                    });
                    break;
                case 7:
                    move('#section-7 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-7 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-7 .main-content .content .imgList:first-child').set("padding-top","30px").end(function(){
                        move('#section-7 .main-content .content .imgList:nth-child(2)').set("margin-top","30px").end(function(){
                            move('#section-7 .main-content .content .imgList:last-child').set("margin-top","30px").ease('in').end();});
                    });
                    break;
                case 8:
                    move('#section-8 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-8 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-8 .main-content .content').scale(0).ease('in').end();
                    break;
                case 9:
                    move('#section-9 .main-content .title p').set("margin-top","-20px").ease('in').end();
                    move('#section-9 .main-content .title p:last-child').scale(0).ease('in').end();
                    move('#section-9 .main-content .mouse-click1').scale(0).ease('in').end();
                    move('#section-9 .main-content .content2 .map').set("padding-right","100px").ease('in').end();
                    move('#section-9 .main-content .content2 .tel').set("padding-left","100px").ease('in').end();
                    break;


            }
        },
     /*   afterSlideLoad:function(anchorLink,index,slideIndex,direction){
            move('#slide-1 .main-content .content').scale(1).ease('in').end();
            move('#slide-2 .main-content .content').scale(1).ease('in').end();
            move('#slide-3 .main-content .content').scale(1).ease('in').end();
            move('#slide-4 .main-content .content').scale(1).ease('in').end();


        },
        onSlideLeave:function(anchorLink,index,slideIndex,direction){
            move('#slide-1 .main-content .content').scale(0.8).ease('in').end();
            move('#slide-2 .main-content .content').scale(0.8).ease('in').end();
            move('#slide-3 .main-content .content').scale(0.8).ease('in').end();
            move('#slide-4 .main-content .content').scale(0.8).ease('in').end();



        }*/
    })
});
$(function(){
    //导航
    $(".nav li a").on("click",function(){
        $(this).css("background-color","transparent");
    })
    //客服
    //第二张图片划过的变化*
    //第三张图片划过的变化*
    $(".cs").on("mouseover",function(){
        $(this).find(".trzz").show()
    })
    $(".cs").on("mouseout",function(){
        $(this).find(".trzz").hide()
    })
    //第四张图片划过的变化*
    $(".wc").on("mouseover",function(){
        $(this).parents("#section-4").find(".brand").removeClass("wcc")
        $(this).addClass("wcc");
    })
    $(".wc").on("mouseout",function(){
        $(this).removeClass("wccr");
    })
    //第六张图片划过的变化*
    $(".process").on("mouseover",function(){
        $(this).parents("#section-6").find(".process").removeClass("pp");
        $(this).addClass("pp");
    })
    $(".process").on("mouseout",function(){
        $(this).removeClass("pp");
    })
});

