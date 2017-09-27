$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); 
			//每个slide切换结束时也运行当前slide动画
			$(".topnav").slideDown(1000);
		} ,
		onSlideChangeStart: function(swiper){ 
			swiperAnimate(swiper); 
			//每个slide切换开始时也运行当前slide动画
			$(".topnav").slideUp(1000);
		} 

    });
    $("#but1").click(function(){
    	window.location.href="submit.html";
    });
    $("#but2").click(function(){
    	window.location.href="regist.html";
    });
    $("#but3").click(function(){
    	localStorage.removeItem("username");
    	window.location.href="url.html";

    });
    if(localStorage.getItem("username")==null){
    	$("#but1").val("登录");
    	$("#but1").attr("type","button");
    }else{
    	$("#but1").val(localStorage.getItem("username"));
    	$("#but1").attr("type","text");
    }

});
