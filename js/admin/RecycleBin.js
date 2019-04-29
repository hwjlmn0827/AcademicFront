/*
* @Author: Administrator
* @Date:   2018-05-11 00:05:06
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-04 16:23:48
*/
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
			$('.recycle_btn').css('background', 'rgba(0,0,0,0.04)');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}

function recycle_buildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"第一责任人"},{"title":"项目类型"},{"title":"时间"},{"title":"语义标签"}];
	//给table加一个id 是二级目录的名字
	$('#recycleTable').DataTable({
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
			api.columns([3,4,5,6]).indexes().flatten().each( function ( i ) {
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

function recycleTableDataAjax() {
	$.ajax({
		type: "get",
		url: prefixUrl + "assets/trash",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			recycleTable_setTableData(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}



function recycleTable_setTableData(obj) {
	// $('#recycleTable').dataTable().fnClearTable();
	var option_array = [];
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th3").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		if ($.inArray(item.categoryLeafName+item.categoryTreeName, option_array2)<0) {
			option_array2.push(item.categoryLeafName+item.categoryTreeName)
			$("#th4").append("<option value='"+map[item.categoryLeafName]+'-'+map[item.categoryTreeName]+"'>"+map[item.categoryLeafName]+'-'+map[item.categoryTreeName]+"</option>");
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#recycleTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="../'+item.categoryTreeName+'/'+item.categoryLeafName+'Detail.html?id="'+item.id+ 'id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.author+'</span>',
			'<span>'+map[item.categoryLeafName]+'-'+map[item.categoryTreeName]+'</span>',
			'<span>'+item.date+'</span>',
			'<span>'+item.tags+'</span>\
			</div>',
			])
	});
}
$(document).on('click','.sureRecover_dataYes',function(){
	var ids = [];
	$("input[type='checkbox']:checked").each(function(i){
		ids.push($(this).parents("tr").children('td:eq(2)').children('a').attr('id'));
		$(this).parents("tr").addClass('tr_selected')
	});
	$('#sureRecover_data').modal('hide')
	console.log(ids);
	$.ajax({
		type: "post",
		url: prefixUrl + "assets/recover",
		data: JSON.stringify({
			"ids":ids
		}),
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			if (obj.err) {
				$('#recycleTable').DataTable().rows('.tr_selected').remove().draw(false);
			};
		},
		Error: function() {
			alert("服务器出错");
		}
	})
})





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////高级搜索//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function multiple_buildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"第一责任人"},{"title":"项目类型"},{"title":"时间"},{"title":"语义标签"}];
  //给table加一个id 是二级目录的名字
  $('#multipleTable').DataTable({
  	responsive: true,
  	searching: false,
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
    	api.columns([3,4,5,6]).indexes().flatten().each( function ( i ) {
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

function multipleTableDataAjax_search(field,val) {
	$.ajax({
		type: "POST",
		url: prefixUrl + "assets/keyword",
		data: JSON.stringify({
			"baseParams": [
			{
				"name1": field,
				"val1": val,
				"operator": false,
				"name2": "",
				"val2": ""
			}
			]
		}),
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			if(obj.data.length>0){
				$(".search_inresult").attr('disabled', false);
			}else {
				$(".search_inresult").attr('disabled', true);
			}
			multipleTable_setTableData(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}


function multipleTableDataAjax_search_inresult(data) {
	$.ajax({
		type: "POST",
		url: prefixUrl + "assets/keyword",
		data: JSON.stringify(data),
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			multipleTable_setTableData(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}


function multipleTable_setTableData(obj) {
	$('#multipleTable').dataTable().fnClearTable();
	var option_array = [];
	var option_array2 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th3").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		if ($.inArray(item.categoryLeafName+item.categoryTreeName, option_array2)<0) {
			option_array2.push(item.categoryLeafName+item.categoryTreeName)
			$("#th4").append("<option value='"+item.categoryLeafName+'-'+item.categoryTreeName+"'>"+item.categoryLeafName+'-'+item.categoryTreeName+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#multipleTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="../'+map[item.categoryTreeName]+'/'+map[item.categoryLeafName]+'Detail.html?id="'+item.id+'"  id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.author+'</span>',
			'<span>'+item.categoryLeafName+'-'+item.categoryTreeName+'</span>',
			'<span>'+item.date+'</span>',
			'<span>'+item.tag+'</span>\
			</div>',
			])
	});
}

var dddata = {
	"baseParams": [
	]
}
$('.search').click(function(event) {
	var field = $(this).siblings('select').val()
	var val = $(this).siblings('input').val()
	dddata = {"baseParams": []}
	var arr = {
		"name1": field,
		"val1": val,
		"operator": false,
		"name2": "",
		"val2": ""
	}
	dddata.baseParams.push(arr)
	multipleTableDataAjax_search(field,val)
});

$('.search_inresult').click(function(event) {
	var field = $(this).siblings('select').val()
	var val = $(this).siblings('input').val()
	var arr = {
		"name1": field,
		"val1": val,
		"operator": false,
		"name2": "",
		"val2": ""
	}
	dddata.baseParams.push(arr)
	console.log(dddata)
	multipleTableDataAjax_search_inresult(dddata)

});

$(function() {
    indexStart()
    catagoryAjax()
    recycle_buildTable()
    recycleTableDataAjax()
})
