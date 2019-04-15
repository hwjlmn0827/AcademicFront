/*
* @Author: Administrator
* @Date:   2018-01-09 10:58:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-09 11:02:12
*/
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
			$('.人员管理').css('display', 'block');
			$('#人员管理 a').addClass('current');
			$('.学生信息').addClass('active');
		},
		Error: function() {
			alert("服务器出错");
		}
	})
}

//构建表头
function buildTable(categoryLeafName) {
	var columns =[{"title":"序号"},{"title":"姓名"},{"title":"学号"},{"title":"专业"},{"title":"年级"},{"title":"联系方式"},{"title":"邮箱"}];
	$('.mainTable').attr('id', categoryLeafName);
	$('#'+categoryLeafName).DataTable({
		responsive: true,
		searching: true,
		"columns":columns,
		'bSort':false,
		"bLengthChange": false,
		"bRetrieve": true,
		"bFilter": true, //过滤功能
		"aLengthMenu":[15],
	});

}




function scienceTableDataAjax() {
	$.ajax({
		type: "get",
		url: "http://123.206.190.167:8080/dissertation/",
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




function setTableData(obj) {
	$('#学生信息').dataTable().fnClearTable();
	var option_array = [];
	$.each(obj.data, function(index, item) {
		if ($.inArray(item.author, option_array)<0) {
			option_array.push(item.author)
			$("#th4").append("<option value='"+item.author+"'>"+item.author+"</option>"); 
		};
		order = index + 1;
		var completeRate=Math.round(item.completeRate*100)
		$('#'+item.categoryLeafName).dataTable().fnAddData([
			'<input type="checkbox">',
			'<span>'+order+'</span>',
			'<a href="ScienceProjectDetail.html?id='+item.id+'" id="'+item.id+'">'+item.name+'</a>',
			'<span>'+item.type+'</span>',
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



$(function() {
	catagoryAjax()
	buildTable("学生信息")
	$('#学生信息_filter').addClass('hiddenFilter')
	// scienceTableDataAjax()

})
