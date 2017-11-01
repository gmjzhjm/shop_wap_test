$(function(){
	
	var num=parseInt($(".order_val").val());
	var max_val=10000;
	console.log(max_val);
	$(".buyminus").bind('click',function(){
		if(num>0){
			num-=1;
			$(".order_val").val(num);
			/*total=price*num;
			$(".bottom_left i").text(total);
			if(num==0){
				$(this).addClass("hui_btn");
			}
			*/
		}
		/*else{
			$(this).addClass("hui_btn")
		}
		*/
	});
	$(".buyadd").bind('click',function(){
		if(num<max_val){/*10库存量*/						
			num+=1;
			$(".order_val").val(num);
			/*total=price*num;
			$(".bottom_left i").text(total);
			if(num>0){
				$(".minus").removeClass("hui_btn");
			}
			*/
		}
	});
	$(".maxnum").bind('click',function(){
		$(".order_val").val(max_val);
		num=max_val;
	});
	
})
