/*
* @Author: Administrator
* @Date:   2018-05-11 01:40:18
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-30 23:39:52
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
            $('#TagManage a').addClass('current');
            $("#sub-nav").children('.nav').css('display', 'none');
            $('.TagManage').css('display','block')
            $('#TagDocument').addClass('active');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}

function tagdocBuildTable() {
	var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"第一责任人"},{"title":"项目类型"},{"title":"时间"},{"title":"语义标签"}];
	//给table加一个id 是二级目录的名字
	$('#tagdocTable').DataTable({
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
			api.columns([3,4,6]).indexes().flatten().each( function ( i ) {
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

function tagdocTableDataAjax() {
	$.ajax({
		type: "get",
		url: prefixUrl + "assets/tags/all",
		data: {
		},
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
			tagdocTable_setTableData(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}



function tagdocTable_setTableData(obj) {
	var option_array = [];
    var option_array1 = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th3").append("<option value='"+item.author+"'>"+item.author+"</option>");
		};
        if ($.inArray(item.categoryLeafName, option_array1)<0) {
            option_array1.push(item.categoryLeafName)
            $("#th4").append("<option value='"+map[item.categoryLeafName]+"'>"+map[item.categoryLeafName]+"</option>");
        };
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#tagdocTable').dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="#" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.author+'</span>',
			'<span>'+map[item.categoryLeafName]+'</span>',
			'<span>'+item.date+'</span>',
			'<span>'+item.tags+'</span>\
			</div>',
			])
	});
}

$(function() {
	indexStart()
    catagoryAjax()
    tagdocBuildTable()
    tagdocTableDataAjax()
})
