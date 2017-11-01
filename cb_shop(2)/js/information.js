$(function() {
	
	var hammer = '';
	var currentIndex = 0;
	var body_width = $('body').width();
	var body_height = $('body').height();
	var window_height = $(window).height();
	$('#clipArea').height(window_height);

	$('#file').click(function() {
		$('.photoclip').show();
		$('.mask').show();
		//$('<button id="clipBtn">确定</button>').appendTo('#clipArea')
	});

	$("#clipArea").photoClip({
		width: body_width * 0.5125,
		height: body_width * 0.36,
		file: "#file",
		view: "#hit",
		ok: "#clipBtn",
		loadStart: function() {
			//console.log("照片读取中");
			$('.lazy_tip span').text('');
			$('.lazy_cover,.lazy_tip').show();
		},
		loadComplete: function() {
			//console.log("照片读取完成");
			$('.lazy_cover,.lazy_tip').hide();
		},
		clipFinish: function(dataURL) {
			$('#hit').attr('src', dataURL);
			$('.photoclip').hide();
			$('.mask').hide();
			$('#uploadfile_img').find('span').text('已选择');
			//saveImageInfo();
		}
	});
	
	$('#clipcancel').click(function(){
		$('.photoclip').hide();
		$('.mask').hide();
	});
	//图片上传
	function saveImageInfo() {
		var filename = $('#hit').attr('fileName');
		var img_data = $('#hit').attr('src');

		//var html='<img src="'+img_data+'"/>';
		$('#file').val(img_data);
		/*$.post("这里填写图片获取的网址", {
			image: img_data
		}, function(data) {
			if(data != '') {
				//			console.info(data);
				//data 为返回文件名；
				alert('提交成功');
			}
		});*/

	}

	/*获取文件拓展名*/
	function getFileExt(str) {
		var d = /\.[^\.]+$/.exec(str);
		return d;
	}
	_init_area();
});