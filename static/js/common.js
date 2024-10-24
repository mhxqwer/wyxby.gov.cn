//头部二维码
$(".header .menu li").hover(function(){
  $(this).find(".drop").stop(true,false).slideDown('fast');
},function(){
	   $(this).find(".drop").hide();
   });

//头部二维码
$(".header .menu li").hover(function(){
  $(this).find(".drop_bywx").stop(true,false).slideDown('fast');
},function(){
	   $(this).find(".drop_bywx").hide();
   });

//头部二维码_多个
$(".header .menu li").hover(function(){
  $(this).find(".drop_more").stop(true,false).slideDown('fast');
},function(){
	   $(this).find(".drop_more").hide();
   });

//头部二维码2
$(".header .menu li").hover(function(){
  $(this).find(".drop_wx").stop(true,false).slideDown('fast');
},function(){
	   $(this).find(".drop_wx").hide();
   });

//导航选中效果
try{
	var str = $(".curmb").text(); 
	var str1 = str.split(">")[1];
	if($.trim(str1)!=''){
	$(".mainnav li").each(function(){
		if( $.trim($(this).find("a b").text()).search($.trim(str1))>-1){
			$(this).addClass("on");
		}
	})
	}
}catch(e){}

//手机版头部导航
$(".navtoggle").click(function(){
	$(".mainnav_mobile").slideToggle("fast");
	$(this).toggleClass("navclose");
})



//判断当前字符串是否以str开始 先判断是否存在function是避免和js原生方法冲突，自定义方法的效率不如原生的高
if (typeof String.prototype.startsWith != 'function'){
	String.prototype.startsWith = function(str) {
		return this.slice(0, str.length) == str;
	};
}
//判断当前字符串是否以str结束
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function(str) {
		return this.slice(-str.length) == str;
	};
}


//百度统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?747b063b4aa598a65ea1ef5d2da1c33d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//自动推送白度代码
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//文件状态
$(".state").each(function(i) {
	if($.trim($(this).find("font").text()) == ""){
		$(this).remove();	
	}
});
$("#login").load("/bysiteapps/webpage/checkLogin.jsp .dllogin");