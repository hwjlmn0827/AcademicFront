/*
* @Author: Administrator
* @Date:   2018-01-09 20:15:32
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-09 20:51:12
*/
$(function(){

	C1 = window.location.href.split("?")[1];
	id = C1.split("=")[1];

	function scienceFillDetailAjax(id) {
		$.ajax({
			type: "get",
			url: prefixUrl + "Achievements/"+id+"",
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
	scienceFillDetailAjax(id)

	$('#planTime').fdatepicker();//时间选择
	$('.form-control').css('display', 'none');

	$(document).on('click', '#addOne', function(event) {
		console.log($(this))
		if($('.addInput input:text').length<5) {
			$('.addInput').append('<input type="text" class="form-control" name="otherPartners" placeholder="请填写其他参与人"><span class="glyphicon glyphicon-remove remove2" aria-hidden="true"></span>')
			$('.needExpend').animate({height:'+=30px'});
			$('input[name="otherPartners"]').AutoComplete({
				'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
				'itemHeight': 20,
				'width': 180
			});//.AutoComplete('show')
		}
	});
	
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
			url: prefixUrl + "ScientificProject",
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
				"projectMaterial": "/file/123456",
				"knotMaterial": "/file/123456xu",
				"projectContract": "/file/dfaadf",
				"id": "54094",
				"categoryLeafName": "成果采纳",
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
				if (obj.err) {
					$('#saveSuccess').modal('show')
				}
			},
			Error: function() {
				alert("服务器出错");
			}
		})


	});
	$('#otherPartners').AutoComplete({
		'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
		'itemHeight': 20,
		'width': 180
	});//.AutoComplete('show')
	$('.stext').AutoComplete({
		'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
		'itemHeight': 20,
		'width': 120
	});

	//上传附件
	$('.Uploadfile').click(function(event) {
		
	});
})


