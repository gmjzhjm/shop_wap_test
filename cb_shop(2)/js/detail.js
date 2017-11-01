$(document).ready(function() {
	function tel_box_show() {
		$('.mask').show();
		$('.tel_box').show();
	}

	function tel_box_hide() {
		$('.mask').hide();
		$('.tel_box').hide();
	}
	
	function wx_box_show(){
		$('.mask').show();
		$('.wx_box').show();
	}
	
	function wx_box_hide(){
		$('.mask').hide();
		$('.wx_box').hide();
	}
	
	$('#tel').click(function() {
		tel_box_show();
	});

	$('.mask,.tel_box_close').click(function() {
		tel_box_hide();
		return false;
	});
	
	
	
	$('#wx_img').click(function(){
		wx_box_show();
		return false;
	});
	$('.mask').click(function() {
		wx_box_hide();
		return false;
	});
	
});