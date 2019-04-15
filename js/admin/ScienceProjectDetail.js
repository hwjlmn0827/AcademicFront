/*
* @Author: Administrator
* @Date:   2017-12-03 15:12:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-12 09:09:29
*/
$(function(){
	catagoryAjax() 
	C1 = window.location.href.split("?")[1];
	id = C1.split("=")[1];
	scienceFillDetailAjax(id)
	$('#planTime').fdatepicker();//时间选择
	$('.form-control').css('display', 'none');
	//自动补全其他联系人？？无数据
	var participant = []
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/participant",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log("参与人名单")
			console.log(obj)
			$.each(obj.data, function(index, val) {
				participant.push(val.name)
			});
			console.log(participant)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
	$('input[name="otherPartners"]').AutoComplete({
		'data': participant,
		'itemHeight': 20,
		'width': 180
	});
	$(document).on('click', '#addOne', function(event) {

		if($('.addInput input:text').length<5) {
			$('.addInput').append('<input type="text" class="form-control" name="otherPartners" placeholder="请填写其他参与人"><span class="glyphicon glyphicon-remove remove2" aria-hidden="true"></span>')
			$('.needExpend').animate({height:'+=30px'});
			$('input[name="otherPartners"]').AutoComplete({
				'data': participant,
				'itemHeight': 20,
				'width': 180
			});//.AutoComplete('show')
		}
	});
	//自动补全标签
	var tags = []
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/tag",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log("标签自动补全")
			console.log(obj)
			$.each(obj.data, function(index, val) {
				tags.push(val.uniqueName)
			});
			console.log(tags)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
	$('.stext').AutoComplete({
		'data': tags,
		'itemHeight': 20,
		'width': 120
	});
});



function catagoryAjax() {
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/categoryTree",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(data) {
			setCategoryTree(data)
			$('.科研项目').addClass('active');
			$('.教师科研').css('display', 'block');
			$('#教师科研 a').addClass('current');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}
function scienceFillDetailAjax(id) {
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/ScientificProject/"+id+"",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			fillDetail(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}


$(document).on('click', '#btnChange', function(event) {
	$('.form-control').css('display', 'inline');
	$('.originInfo').css('display', 'none');
	$(this).css('display', 'none');
	$('#btnSave').css('display', 'inline');
	$('.fa-plus-square').css('display', 'inline');
	$('.glyphicon-remove').css('display', 'inline');
	$('.filebtn_before').css('display', 'none');
	$('.filebtn_after').css('display', 'inline');
	$('.plus-tag-add').css('display', 'block');
	$('.needExpend').animate({height:'315px'});
	$('input[name="otherPartners"]').css('display', 'inline');
	$('.glyphicon-remove').css('display', 'inline');
	$('em').css('display', 'block');

});
$(document).on('click', '#btnSave', function(event) {
	var tags = []
	$('.plus-tag span').each(function(index, el) {
		console.log($(el).text());
		tags.push($(el).text())
	});
	var others = []
	$('.addInput input[name="otherPartners"]').each(function(index, el) {
		others.push($(el).val())
	});
	$.ajax({
		type: "put",
		url: "http://123.206.190.167:8080/dissertation/ScientificProject",
		data: {
			"name": $("input[name='name']").val,
			"type": $("input[name='type']").val,				
			"author": $("input[name='author']").val,
			"date": $("input[name='date']").val,					
			"completeRate": 0.55,
			"projectNumber": $("input[name='projectNumber']").val,
			"source": $("input[name='source']").val,
			"funds": $("input[name='funds']").val,
			"knotForm": $("input[name='knotForm']").val,
			"projectMaterial": $('.downfile_1').attr('href'),
			"knotMaterial": $('.downfile_2').attr('href'),
			"projectContract": $('.downfile_3').attr('href'),
			"id": "54094",
			"categoryLeafName": "科研项目",
			"categoryTreeName": "教师科研",
			"uploader": "941112341",
			"tag": tags,
			"relative":others,
			"participantIds": [
			"qtgnHbbUEP",
			"qCdzULKrY4",
			"PAoasU6xQS"
			],
			"otherTextInfo": {},
			"otherFileInfo": {},
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			if (!obj.err) {
				$('#saveSuccess').modal('show')
			} else {

			}
		},
		Error: function() {
			alert("服务器出错");
		}
	})

})

	//下载附件
	$('.Uploadfile').click(function(event) {

		var url = 'http://123.206.190.167:8080/dissertation/file/'+id;
	});
	//上传附件
	function upFileFunc1() {
		var files = $('#lixiang').prop('files');
		var data = new FormData();
		var filename = files[0].name
		data.append('files', files[0]);
		$.ajax({
			url: 'http://123.206.190.167:8080/dissertation/files',
			type: 'POST',
			data: data,
			dataType: 'JSON',  
			cache: false,  
			processData: false,  
			contentType: false,
			success: function(obj) { 
				console.log(obj)
				$('#lixiang').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
				$('#proofMaterial1').html(filename)
			},
		});
	}

	function upFileFunc2() {
		var files = $('#jieti').prop('files');
		var data = new FormData();
		var filename = files[0].name
		data.append('jieti', files[0]);
		$.ajax({
			url: 'http://123.206.190.167:8080/dissertation/files',
			type: 'POST',
			data: data,
			dataType: 'JSON',  
			cache: false,  
			processData: false,  
			contentType: false,
			success: function(obj) { 
				console.log(obj)
				$('#jieti').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
				$('#proofMaterial2').html(filename)
			},
		});
	}

	function upFileFunc3() {
		var files = $('#hetong').prop('files');
		var data = new FormData();
		var filename = files[0].name
		data.append('hetong', files[0]);
		$.ajax({
			url: 'http://123.206.190.167:8080/dissertation/files',
			type: 'POST',
			data: data,
			dataType: 'JSON',  
			cache: false,  
			processData: false,  
			contentType: false,
			success: function(obj) { 
				console.log(obj)
				$('#hetong').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
				$('#proofMaterial3').html(filename)
			},
		});
}


	//预览附件
	$('.PreviewFile').click(function(event) {
		var beforeRef = $(this).parents('.formBlock').children('.filebtn').children('.downfile').attr('href');
		console.log(beforeRef)
		var fid = beforeRef.split("/")[5]
		var afterRef = "http://10.21.30.203:8012/onlinePreview?url="+beforeRef
		window.open(afterRef)
	});
	





