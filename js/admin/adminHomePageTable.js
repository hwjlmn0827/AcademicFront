/*
* @Author: Administrator
* @Date:   2017-12-19 15:29:18
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-05 13:01:52
*/
var usrName
$(function() {
	var C1 = window.location.href.split("?")[1];
	usrName = C1.split("=")[1];
	$('.indexName h3').html(usrName)
	teacherTableDataAjax(0,usrName)
	$('#教师科研').children().eq(0).addClass('stuffType_selected')
	studentTableDataAjax(0,usrName)
	$('#学生科研').children().eq(0).addClass('stuffType_selected')
	teacherStateTableDataAjax(0,usrName)
	$('#教学平台').children().eq(0).addClass('stuffType_selected')


})
function catagoryAjax() {
	$.ajax({
		type: "get",
		url: prefixUrl + "categoryTree",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(data) {
			setCategoryTree(data)
			$('#adminHomePage a').addClass('current');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////教师科研的数据获取//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function teacher_buildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"科研项目类型"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"完整度"}];
	//给table加一个id 是二级目录的名字
	$('#teacherTable').DataTable({
		responsive: true,
		searching: true,
		"columns":columns,
		"bLengthChange": false,
		"bRetrieve": true,
		"bFilter": true, //过滤功能
		"aLengthMenu":[12],
		"columnDefs": [ 
		{ "orderable": false, "targets": 0 },
		{ "orderable": false, "targets": 2 },
		{ "orderable": false, "targets": 3 },
		{ "orderable": false, "targets": 4 },
		{ "orderable": false, "targets": 6 }
		],
		initComplete: function () {
			var api = this.api();
			api.columns([3,4]).indexes().flatten().each( function ( i ) {
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



function teacherTableDataAjax(type,name) {
	if (type==0) {
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/relative",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log('教师科研相关')
				console.log(obj)
				teacherTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==1){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/author",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				teacherTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==2){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/participant",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				teacherTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}
}



function teacherTable_setTableData(obj) {
	$('#teacherTable').dataTable().fnClearTable();
	var option_array = [];
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th4").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		if ($.inArray(item.categoryLeafName+item.categoryTreeName, option_array2)<0) {
			option_array2.push(item.categoryLeafName+item.categoryTreeName)
			$("#th3").append("<option value='"+item.categoryLeafName+'-'+item.categoryTreeName+"'>"+item.categoryLeafName+'-'+item.categoryTreeName+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#teacherTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="#" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.categoryTreeName+"-"+item.categoryLeafName+'</span>',
			'<span>'+item.author+'</span>',
			'<span>'+item.date+'</span>',
			'<div class="progress tableProgress">\
			<div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: '+completeRate+'%">\
			'+completeRate+'%\
			</div>\
			</div>',
			])
	});
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////学生科研的//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function student_buildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"科研项目类型"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"完整度"}];
	//给table加一个id 是二级目录的名字
	$('#studentTable').DataTable({
		responsive: true,
		searching: true,
		"columns":columns,
		"bLengthChange": false,
		"bRetrieve": true,
		"bFilter": true, //过滤功能
		"aLengthMenu":[12],
		"columnDefs": [ 
		{ "orderable": false, "targets": 0 },
		{ "orderable": false, "targets": 2 },
		{ "orderable": false, "targets": 3 },
		{ "orderable": false, "targets": 4 },
		{ "orderable": false, "targets": 6 }
		],
		initComplete: function () {
			var api = this.api();
			api.columns([3,4]).indexes().flatten().each( function ( i ) {
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

function studentTableDataAjax(type,name) {
	if (type==0) {
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/relative",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log('学生科研相关')
				console.log(obj)
				studentTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==1){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/author",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				studentTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==2){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/participant",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				studentTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}
}

function studentTable_setTableData(obj) {
	$('#studentTable').dataTable().fnClearTable();
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array2)<0) {
			option_array2.push(item.author)
			$("#th4").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#studentTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="#" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.type+'</span>',
			'<span>'+item.author+'</span>',
			'<span>'+item.date+'</span>',
			'<div class="progress tableProgress">\
			<div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: '+completeRate+'%">\
			'+completeRate+'%\
			</div>\
			</div>',
			])
	});
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////教学平台的数据获取//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function teacherState_buildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"科研项目类型"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"完整度"}];
	//给table加一个id 是二级目录的名字
	$('#teacherStateTable').DataTable({
		responsive: true,
		searching: true,
		"columns":columns,
		"bLengthChange": false,
		"bRetrieve": true,
		"bFilter": true, //过滤功能
		"aLengthMenu":[12],
		"columnDefs": [ 
		{ "orderable": false, "targets": 0 },
		{ "orderable": false, "targets": 2 },
		{ "orderable": false, "targets": 3 },
		{ "orderable": false, "targets": 4 },
		{ "orderable": false, "targets": 6 }
		],
		initComplete: function () {
			var api = this.api();
			api.columns([3,4]).indexes().flatten().each( function ( i ) {
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

function teacherStateTableDataAjax(type,name) {
	if (type==0) {
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/relative",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log('教师科研相关')
				console.log(obj)
				teacherStateTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==1){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/author",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				teacherStateTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}else if(type==2){
		$.ajax({
			type: "get",
			url: prefixUrl + "assets/participant",
			data: {
				"name":usrName
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(obj) {
				console.log(obj)
				teacherStateTable_setTableData(obj)
			},
			Error: function() {
				alert("服务器出错");
			}
		})
	}
}

function teacherStateTable_setTableData(obj) {
	$('#teacherStateTable').dataTable().fnClearTable();
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array2)<0) {
			option_array2.push(item.author)
			$("#th4").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#teacherStateTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="#" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.type+'</span>',
			'<span>'+item.author+'</span>',
			'<span>'+item.date+'</span>',
			'<div class="progress tableProgress">\
			<div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: '+completeRate+'%">\
			'+completeRate+'%\
			</div>\
			</div>',
			])
	});
}

$(document).on('click','.btn_stuffType .btn-primary',function() {
	$(this).siblings('.btn-primary').removeClass('stuffType_selected')
	$(this).addClass('stuffType_selected')
	var categoryTreeName = $(this).parent('.btn_stuffType').attr('id');
	var count = ($("#"+categoryTreeName+" .btn-primary").index($(this)))
	console.log("点击后的cateName" +categoryTreeName)
	console.log("点击后的count" +count)
	switch(categoryTreeName) {
		case("教师科研"):
		teacherTableDataAjax(count,name)
		break;
		case("学生科研"):
		studentTableDataAjax(count,name)
		break;
		case("教学平台"):
		teacherStateTableDataAjax(count,name);
		break;
	}
})

