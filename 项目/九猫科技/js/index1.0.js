/**
 * Created by Administrator on 2016-06-23.
 */
//网站动画的在低版本的没有 只有 全屏样式
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
        keyboardScrolling:true
    })
});
$(function(){
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
