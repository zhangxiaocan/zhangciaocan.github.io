$(function(){
	var a=false;
	var b=false;
	var c=false;
	$("#name").focus(function(){
		$(this).css("border","1px solid red");
		$(".one").css("background-color","pink").css("border","1px solid red");
		$(".one img").attr("src","third/address/image/personal.png");
	}).blur(function(){
		
		var name=$("#name").val(); 
		var username=localStorage.getItem(name);
		if(username==null){
			$(".tip1").html("用户名还没注册，快去注册吧").css("color","red");
			$(this).css("border","1px solid black");
			$(".one").css("background-color","white").css("border","1px solid black");
			$(".one img").attr("src","third/address/image/personal.png");
			a=false;
			
			
		}
		else if(name==''){
			$(".tip1").html("用户名不能为空！").css("color","red");
			$(this).css("border","2px solid red");
			$(".one").css("background-color","pink").css("border","2px solid red");
			$(".one img").attr("src","third/address/image/personal.png");
			a=false;
		}else{
			$(".tip1").html("用户名正确！").css("color","lightgreen");
			$(this).css("border","1px solid green");
			$(".one").css("background-color","lightblue").css("border","1px solid green");
			$(".one img").attr("src","third/address/image/personal1.png");
			a=true;
		}
	});
	$("#password").focus(function(){
		$(this).css("border","1px solid red");
		$(".two").css("background-color","pink").css("border","1px solid red");
		$(".two img").attr("src","third/address/image/lock1.png");
		
	}).blur(function(){
		var reg=/^\w{6,12}$/;
		var password=$("#password").val();
		var oldpassword=localStorage.getItem($("#name").val());
		if(password==""){
			$(".tip2").html("密码不能为空！").css("color","red");
			$(this).css("border","1px solid black");
			$(".two").css("background-color","white").css("border","1px solid black");
			$(".two img").attr("src","third/address/image/lock1.png");
			c=false;
		}else if(reg.test(password)==false){
			$(".tip2").html("密码只能为数字字母下划线,6到12位！").css("color","red");
			$(this).css("border","1px solid black");
			$(".two").css("background-color","white").css("border","1px solid black");
			$(".two img").attr("src","third/address/image/lock1.png");
			c=false;
		}else if(password==oldpassword){
			$(".tip2").html("成功").css("color","lightgreen");
			$(this).css("border","1px solid green");
			$(".two").css("background-color","lightblue").css("border","1px solid green");
			$(".two img").attr("src","third/address/image/lock.png");
			c=true;
		}else{
			$(".tip2").html("密码不正确！").css("color","red");
			$(this).css("border","1px solid black");
			$(".two").css("background-color","white").css("border","1px solid black");
			$(".two img").attr("src","third/address/image/lock1.png");
			c=false;
		}
	});
var code;
	$(".number").click(function(){
		code="";
		var codeLength=6;
		var checkCode=$("#number").val();
		var selectChar=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
		for(var i=0;i<codeLength;i++){
			var charIndex=Math.floor(Math.random()*36);
			code+=selectChar[charIndex];
			
		}
		$("#codes").html(code);
		if(checkCode){
			checkCode.className="code";
			checkCode.value=code;
		}

	});
	$("#number").focus(function(){
		$(this).css("border","1px solid red");
	}).blur(function(){
		if($("#number").val()==""){
			$(".tip3").html("请输入验证码！").css("color","red");
			$(this).css("border","1px solid black");
			b=false;
			
		}else if($("#number").val()!=code){
			$(".tip3").html("验证码不正确").css("color","red");
			// $(".getnum").click();
			$(this).css("border","1px solid black");
			b=false;
			
		}else if($("#number").val()==$("#codes").html()){
			// $(".getnum").val("获取验证码");
			$(".tip3").html("验证码正确").css("color","lightgreen");
			$("#codes").css("backgroundColor","lightgreen");
			$(this).css("border","1px solid green");
			b=true;
		}
	});
	$("#btn").click(function(){
		if(a&&b&&c){
			localStorage.setItem("username",$("#name").val());
			$("#but1").val($("#name").val());
			window.location.href="url.html";


		}
	});
	$("#personsalt").click(function(){
		window.location.href="regist.html";
	})
});
























