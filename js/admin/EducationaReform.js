/*
* @Author: Administrator
* @Date:   2018-06-09 12:56:20
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-09 14:32:30
*/
//获取目录
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
			$('.教改项目').addClass('active');
			$('.教学平台').css('display', 'block');
			$('#教学平台 a').addClass('current');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}

//构建表头
function buildTable(categoryLeafName) {
	var columns =[{"title":""},{"title":"序号"},{"title":"教改项目名称"},{"title":"第一责任人"},{"title":"项目级别"},{"title":"立项时间"},{"title":"信息完整度"}];
	//给table加一个id 是二级目录的名字
	$('.mainTable').attr('id', categoryLeafName);
	$('#'+categoryLeafName).DataTable({
		responsive: true,
		searching: true,
		// "bSort":false,
		"columns":columns,
		"bLengthChange": false,
		"bRetrieve": true,
		"bFilter": true, //过滤功能
		"aLengthMenu":[15],
		"columnDefs": [ 
		{ "orderable": false, "targets": 0 },
		{ "orderable": false, "targets": 2 },
		{ "orderable": false, "targets": 3 },
		{ "orderable": false, "targets": 4 },
		{ "orderable": false, "targets": 6 }
		],
		initComplete: function () {
			var api = this.api();
			api.columns([3,4,5]).indexes().flatten().each( function ( i ) {
				var column = api.column( i );
				var select = $('<select id="th'+i+'"><option value="">'+columns[i].title+'</option></select>')
				.appendTo( $(column.header()).empty() )
				.on( 'change', function () {
					var val = $.fn.dataTable.util.escapeRegex(
						$(this).val()
						);
					column
					.search( val ? '^'+val+'$' : '', true, false )
					.draw();
				} );
				column.data().unique().sort().each( function ( d, j ) {
					select.append( '<option value="'+d+'">'+d+'</option>' )
				} );
			} );
		},
	});
	// $('tr').children("th:first").removeClass('sorting');

}



//填充数据
function scienceTableDataAjax() {
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/EducationProject",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			setTableData(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}



//填充数据具体操作
function setTableData(obj) {
	$('#教改项目').dataTable().fnClearTable();
	var option_array = [];
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th3").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		if ($.inArray(item.lavel, option_array2)<0) {
			option_array2.push(item.lavel)
			$("#th4").append("<option value='"+item.lavel+"'>"+item.lavel+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#'+item.categoryLeafName).dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="ScienceProjectDetail.html?id='+item.id+'" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.author+'</span>',
			'<span>'+item.lavel+'</span>',
			'<span>'+item.date+'</span>',
			'<div class="progress tableProgress">\
			<div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: '+completeRate+'%">\
			'+completeRate+'%\
			</div>\
			</div>',
			])
	});
}



// 上传组件
function fileupload() {
	var formdata = new FormData($("form[name='uploadForm']")[0])
	$.ajax({
		url:"http://123.206.190.167:8080/dissertation/excel/assetsSelected",
		type:"post",
		data:formdata,
		contentType: false, 
		processData: false,
		cache: false,
		success: function(data) {
			console.log(data)
		}
	})
}


// 选中序号构造下载url
function makeURL () {
	var url = 'http://123.206.190.167:8080/dissertation/excel/assetsSelected?categoryLeafName=教改项目' +
	'&uniqueName=教学平台&fileName=教师信息.xlsx&ids='
	var ids = ""
	$("input:checked").each(function () {
		var id = $(this).parent().next().next().find("a").attr("id")
		ids = ids + id + ","
	})
	if (ids.length > 0) {
		ids = ids.substring(0, ids.length - 1)
	}
	console.log(ids)
	$("#import_selected").attr("href", url + ids)

}

function inportResult() {
	var columns =[{"title":"教改项目名称"},{"title":"教改项目类型"},{"title":"第一责任人"},{"title":"立项时间"}];
	//给table加一个id 是二级目录的名字
	$('#inportResult').DataTable({
		responsive: false,
		searching:false,
		bLengthChange:false,
		bPaginate:false,
		aLengthMenu:[5],
		bSort:false,
		bInfo:false,
		"columns":columns,
		"bLengthChange": false,
		"bRetrieve": false,
		"bFilter": false, //过滤功能
		
	});
}

//批量删除
$(document).on('click', '.sureDelete_dataYes', function() {
	var idd = [];
	$("input[type='checkbox']:checked").each(function(i){
		idd.push($(this).parents("tr").children('td:eq(2)').children('a').attr('id'));
		$(this).parents("tr").addClass('tr_selected')
	});
	$('#sureDelete_data').modal('hide')
	console.log(idd);
	$.ajax({
		type: "POST",
		url: "http://123.206.190.167:8080/dissertation/assets/deleted",
		data: JSON.stringify({
			"ids": idd
		}),
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(data) {
			console.log(data)
			if (data.err) {
				$('#教改项目').DataTable().rows('.tr_selected').remove().draw(false);
			};
		},
		Error: function() {
			alert("服务器出错");
		}

	})
});


$(function() {
	inportResult()
	catagoryAjax()
	buildTable("教改项目")
	scienceTableDataAjax()
	$(".datepicker").datepicker({endDate:new Date()});
	$('.dateSearch').click(function(event) {
		timeSearch('EducationProject')
	});

})


