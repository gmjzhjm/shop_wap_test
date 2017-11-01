$(function(){
	$(".goumai").bind("click",function(){
		$(".goumai").find("input").removeClass("checked");
		$(this).find("input").addClass("checked");
	})
})
