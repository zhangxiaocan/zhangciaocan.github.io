
$(function(){
	var a=false;
	var b=false;
	var c=false;
	var d=false;
	$("#phonenum").focus(function(){
		$(this).css("border","1px solid red");
		$(".one").css("background-color","pink").css("border","1px solid red");
		$(".one img").attr("src","third/address/image/iphone.png");
		// $("").css("border","1px solid orange");
	}).blur(function(){
		var reg=/^1\d{10}$/;
		var phonenum=$("#phonenum").val();
		var username=localStorage.getItem(phonenum);
		if(phonenum==''){
			$("#tip1").html("手机号不能为空！")
			$(this).css("border","2px solid red");
			$(".one").css("background-color","pink").css("border","2px solid red");
			$(".one img").attr("src","third/address/image/iphone.png");

			a=false;
		}else if(reg.test(phonenum)==false){
			$("#tip1").html("输入正确11位手机号，以1开头!")
			$(this).css("border","2px solid red");
			$(".one").css("background-color","pink").css("border","2px solid red");
			$(".one img").attr("src","third/address/image/iphone.png");
			a=false;
		}else if(username){
			$("#tip1").html("此帐号已被注册!");
			$(this).css("border","2px solid red");
			$(".one").css("background-color","pink").css("border","2px solid red");
			$(".one img").attr("src","third/address/image/iphone.png");
			a=false;
		}else{
			$("#tip1").html("成功");
			$(this).css("border","1px solid green");
			$(".one").css("background-color","lightblue").css("border","1px solid green");
			$(".one img").attr("src","third/address/image/iphone1.png");
			
			a=true;
		}
	});
	var code;
	$(".getnum").click(function(){
		code="";
		var codeLength=6;
		var checkCode=$("#number1").val();
		var selectChar=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
		// var color={"red","yellow","lightblue","green","red","orange","gray","white"}
		for(var i=0;i<codeLength;i++){
			var charIndex=Math.floor(Math.random()*36);
			// var newcolor=Math.floor(Math.random()*8);
			code+=selectChar[charIndex];
			// for(var j=0;j<codeLength;j++){
			// 	$("code")
			// }
			
			
		}
		$("#codes").html(code);
		if(checkCode){
			checkCode.className="code";
			checkCode.value=code;
		}

	});
	$("#number1").focus(function(){
		$(this).css("border","1px solid red");
		$(".two").css("background-color","pink").css("border","1px solid red");
		$(".two img").attr("src","third/address/image/erweima.png");
			
	}).blur(function(){
		if($("#number1").val()==""){
			$("#tip2").html("请输入验证码！")
			// $(".getnum").click();
			$(this).css("border","1px solid black");
			$(".two").css("background-color","white").css("border","1px solid black");
			$(".two img").attr("src","third/address/image/erweima.png");
			b=false;
			
		}else if($("#number1").val()!=code){
			$("#tip2").html("验证码不正确")
			// $(".getnum").click();
			$(this).css("border","1px solid black");
			$(".two").css("background-color","white").css("border","1px solid black");
			$(".two img").attr("src","third/address/image/erweima.png");
			b=false;
			
		}else if($("#number1").val()==$("#codes").html()){
			// $(".getnum").val("获取验证码");
			$("#tip2").html("验证码正确")
			$(this).css("border","1px solid green");
			$(".two").css("background-color","lightblue").css("border","1px solid green");
			$(".two img").attr("src","third/address/image/erweima1.png");
			
			b=true;
		}
	});

	$("#password").focus(function(){
		$(this).css("border","1px solid red");
		$(".three").css("background-color","pink").css("border","1px solid red");
		$(".three img").attr("src","third/address/image/lock1.png");
		
	}).blur(function(){
		var reg=/^\w{6,12}$/
		var password=$("#password").val();
		var oldpassword=localStorage.getItem(password);
		if(password==""){
			$("#tip3").html("密码不能为空！")
			$(this).css("border","1px solid black");
			$(".three").css("background-color","white").css("border","1px solid black");
			$(".three img").attr("src","third/address/image/lock1.png");
			c=false;
		}else if(reg.test(password)==false){
			$("#tip3").html("密码只能为数字字母下划线,6到12位！")
			$(this).css("border","1px solid black");
			$(".three").css("background-color","white").css("border","1px solid black");
			$(".three img").attr("src","third/address/image/lock1.png");
			c=false;
		}else{
			$("#tip3").html("成功");
			$(this).css("border","1px solid green");
			$(".three").css("background-color","lightblue").css("border","1px solid green");
			$(".three img").attr("src","third/address/image/lock.png");
			
			c=true;
		}
	});
	$("#aginpassword").focus(function(){
		$(this).css("border","1px solid red");
		$(".four").css("background-color","pink").css("border","1px solid red");
		$(".four img").attr("src","third/address/image/lock1.png");
		
	}).blur(function(){
		var aginpassword=$("#aginpassword").val();
		if(aginpassword==$("#password").val()){
			$("#tip4").html("密码正确！");
			$(this).css("border","1px solid green");
			$(".four").css("background-color","lightblue").css("border","1px solid green");
			$(".four img").attr("src","third/address/image/lock.png");
			d=true;
		}else if(aginpassword==""){
			$("#tip4").html("密码不能为空！")
			$(this).css("border","1px solid black");
			$(".four").css("background-color","white").css("border","1px solid black");
			$(".four img").attr("src","third/address/image/lock1.png");
			d=false;
		}else{
			$("#tip4").html("两次密码不同，请输入正确密码！");
			$(this).css("border","1px solid black");
			$(".four").css("background-color","white").css("border","1px solid black");
			$(".four img").attr("src","third/address/image/lock1.png");
			d=false;
		}
	});

	$("#btn").click(function(){console.log(11)
		if(a&&b&&c&&d){

			localStorage.setItem($("#phonenum").val(),$("#password").val())
			window.location.href="submit.html";
		}else{
			alert("注册失败！重新注册！")
			window.location.href="regist.html";
		}
	});
	
});