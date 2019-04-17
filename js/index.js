/*
* @Author: Administrator
* @Date:   2017-12-02 09:09:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-04 15:50:24
*/

var map = {
	"教师科研":"TeacherResearch",
	"学生科研":"StudentResearch",
	"教学平台":"TeachState",

	"科研项目":"ScienceProject",
	"专利":"Patent",
	"学术论文":"AcademicPapers",
	"成果采纳":"AchievementAdoption",
	"著作":"Writting",
	"获奖":"Reward",

	"项目":"StudentProject",
	"竞赛获奖":"CompetitionAward",
	"学术论文":"AcademicPapers",
	"专利":"Patent",
	
	"教学平台":"TeachState",
	"教学平台":"TeachState",
	"教学平台":"TeachState",

	"教改项目": "EducationaReform",
	"教学论文": "EducationPaper",
	"教材": "TeachingMaterial",
	"教师培训": "TeacherTraining",
	"教师获奖": "TeacherAward",
	"竞赛指导": "CompetitionGuidance",
	"实习基地": "PracticeBase",
	"实验室": "Laboratory"

}

function header(){
	var header = '<div class="pull-left">\
	<img src="../../../img/logo.png" height="43">\
	</div>\
	<div class="pull-right">\
	<ul class="nav navbar-nav pull-right"><!-- .open -->\
	<li class="dropdown notifications hidden-xs">\
	<a class="collection_btn" href="../Collection/Collection.html"><span aria-hidden="true" class="fa fa-star-o"></span>\
	</a>\
	</li>\
	<li class="dropdown notifications hidden-xs">\
	<a class="recycle_btn" href="../RecycleBin/RecycleBin.html"><span aria-hidden="true" class="fa fa-trash-o"></span>\
	</a>\
	</li>\
	<li class="dropdown user hidden-xs"><a data-toggle="dropdown" class="dropdown-toggle" href="#">\
	<img width="34" height="34" src="../../../img/head1.jpeg" />zylin<b class="caret"></b></a>\
	<ul class="dropdown-menu">\
	<li><a href="../../reset.html">\
	<i class="icon-gear"></i>修改密码</a>\
	</li>\
	<li><a href="../../login.html">\
	<i class="icon-signout"></i>安全退出</a>\
	</li>\
	</ul>\
	</li>\
	</ul>\
	</div>';

	$(".topnav").html(header);
}

function footer() {
	var footer ='<div class="center-block">\
	<!-- <img src="../../img/footerlogo.png" width="40"> -->\
	<span>地址：浙江省杭州市下沙高教园区学正街18号</span><br><span id="copyright">Copyright © 浙江工商大学ITObase</span>\
	</div>';
	$(".footer").html(footer);
}

function alertModal() {
	var alertModal =
	'<!-- saveSuccess -->\
	<div class="modal fade tips" id="saveSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-check-circle-o" aria-hidden="true">&nbsp;&nbsp;提交成功!</i>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- sureLeave -->\
	<div class="modal fade question" id="sureLeave" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;离开后将不会保存修改内容，是否仍要离开？</i>\
	</div>\
	<div class="modal-footer">\
	<button type="button" class="btn btn-danger fa fa-check sureLeaveYes">是</button>\
	<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal">否</button>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- sureDelete -->\
	<div class="modal fade question" id="sureDelete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;确认删除？</i>\
	</div>\
	<div class="modal-footer">\
	<button type="button" class="btn btn-danger fa fa-check sureDeleteYes" >是</button>\
	<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal">否</button>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- Modal -->\
	<div class="modal fade tips" id="saveFail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-triangle" aria-hidden="true">&nbsp;&nbsp;修改失败</i>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- InportModal -->\
	<div class="modal fade upload" id="myModalInport" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog" role="document">\
	<div class="modal-content">\
	<div class="modal-header">\
	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
	<span class="modal-title">上传文件</span>\
	</div>\
	<div class="modal-body">\
	<form enctype="multipart/form-data" method="post" name="uploadForm">\
	<input type="file" class="btn btn-default" name="file" id="fff" />\
	<input type="button" class="btn btn-primary upLoadBtn" value="上传" onclick="fileupload()"  data-toggle="modal" data-target="#inportSuccess"  data-dismiss="modal"/>\
	</form>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- collection-->\
	<div class="modal fade tips" id="collection" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-check-circle-o" aria-hidden="true">&nbsp;&nbsp;已收藏</i>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- needpickdata-->\
	<div class="modal fade tips" id="needpickdata" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;请选择数据</i>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- sureDelete_data-->\
	<div class="modal fade question" id="sureDelete_data" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;是否确认删除选中数据？</i>\
	</div>\
	<div class="modal-footer">\
	<button type="button" class="btn btn-danger fa fa-check sureDelete_dataYes">是</button>\
	<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal" data-dismiss="modal">否</button>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- sureRecover_data-->\
	<div class="modal fade question" id="sureRecover_data" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;是否确认恢复选中数据？</i>\
	</div>\
	<div class="modal-footer">\
	<button type="button" class="btn btn-danger fa fa-check sureRecover_dataYes">是</button>\
	<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal" data-dismiss="modal">否</button>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- sureMoveIn_data-->\
	<div class="modal fade textInput" id="sureMoveIn_data" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
		<div class="modal-dialog modal-sm" role="document">\
			<div class="modal-content">\
				<div class="modal-body">\
				<span>请输入已存在的收藏夹名称</span>\
					<input type="text" id="collectName" name="collectName" />\
				</div>\
				<div class="modal-footer">\
					<button type="button" class="btn btn-danger fa fa-check sureMoveIn_dataYes"  data-toggle="modal" data-target="#collection" >确认</button>\
					<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal">取消</button>\
				</div>\
			</div>\
		</div>\
	</div>\
	<!-- sureMoveOut_data-->\
	<div class="modal fade question" id="sureMoveOut_data" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-body">\
	<i class="fa fa-exclamation-circle" aria-hidden="true">&nbsp;&nbsp;是否确认移出收藏夹？</i>\
	</div>\
	<div class="modal-footer">\
	<button type="button" class="btn btn-danger fa fa-check sureMoveOut_dataYes">是</button>\
	<button type="button" class="btn btn-primary fa fa-remove" data-dismiss="modal" data-dismiss="modal">否</button>\
	</div>\
	</div>\
	</div>\
	</div>\
	<!-- InportSuccess -->\
	<div class="modal fade" id="inportSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-lg" role="document">\
	<div class="modal-content">\
	<div class="modal-header">\
	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
	<span class="modal-title">导入结果</span>\
	</div>\
	<div class="modal-body">\
	<table  id="inportResult" class="globalTable table table-bordered">\
	<tbody>\
	<tr>\
	<td>1</td>\
	<td>1</td>\
	<td>2</td>\
	<td>8</td>\
	</tr>\
	<tr>\
	<td>1</td>\
	<td>1</td>\
	<td>2</td>\
	<td>8</td>\
	</tr>\
	<tr>\
	<td>1</td>\
	<td>1</td>\
	<td>2</td>\
	<td>8</td>\
	</tr>\
	<tr>\
	<td>1</td>\
	<td>1</td>\
	<td>2</td>\
	<td>8</td>\
	</tr>\
	<tr>\
	<td>1</td>\
	<td>1</td>\
	<td>2</td>\
	<td>8</td>\
	</tr>\
	</tbody>\
	</table>\
	<div class="inportInfo">\
	本次成功导入<span>50</span>条信息，重复信息<span>5</span>条，错误信息<span>10</span>条\
	</div>\
	</div>\
	</div>\
	</div>\
	</div>';
	$('body').prepend(alertModal)
}



var mainNav = '<div class="nav-collapse"><ul class="nav"><li id="adminHomePage"><a href="../HomePage/adminHomePage.html"><span aria-hidden="true" class="fa fa-home"></span>首页</a></li>';
function setCategoryTree(obj){
	$.each(obj.data, function(index, val) {
		switch (val.uniqueName){
			case "TeacherResearch":
			mainNav = mainNav+'<li id="'+val.uniqueName+'">\
			<a href="../TeacherResearch/ScienceProject.html"><span aria-hidden="true" class="fa fa-pencil-square-o""></span>教师科研</a>\
			</li>';
			var subNav = '<ul class="nav nav-pills nav-stacked '+val.uniqueName+'" style="display:none">';
			$.each(val.categoryLeaves, function(index, item) {
				switch (item.categoryLeafName){
					case "ScienceProject":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'">\
					<a href="ScienceProject.html">科研项目</a>\
					</li>'
					break;
					case "AcademicPapers":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
					<a href="AcademicPapers.html">学术论文</a>\
					</li>'
					break;
					case "AchievementAdoption":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
					<a href="AchievementAdoption.html">成果采纳</a>\
					</li>'
					break;
					case "Patent":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
					<a href="Patent.html">专利</a>\
					</li>'
					break;
					case "Reward":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
					<a href="Reward.html">获奖</a>\
					</li>'
					break;
					case "Writting":
					subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
					<a href="Writting.html">著作</a>\
					</li>'
					break;
				}
			});
subNav=subNav+'</ul>';
$("#sub-nav").append(subNav);
break;

case "学生科研":
mainNav = mainNav+'<li id="'+val.uniqueName+'">\
<a href="../StudentResearch/StudentProject.html"><span aria-hidden="true" class="fa fa-file-text"></span>学生科研</a>\
</li>';
var subNav = '<ul class="nav nav-pills nav-stacked TeacherResearch '+val.uniqueName+'" style="display:none">';
$.each(val.categoryLeaves, function(index, item) {
	switch (item.categoryLeafName){
		case "学术论文":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="AcademicPapers.html">学术论文</a>\
		</li>'
		break;
		case "竞赛获奖":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="CompetitionAward.html">竞赛获奖</a>\
		</li>'
		break;
		case "项目":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="StudentProject.html">项目</a>\
		</li>'
		break;
		case "专利":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="Patent.html">专利</a>\
		</li>'
		break;
	}
});
subNav=subNav+'</ul>';
$("#sub-nav").append(subNav);
break;

case "教学平台":
mainNav = mainNav+'<li id="'+val.uniqueName+'">\
<a href="../TeachState/EducationaReform.html"><span aria-hidden="true" class="fa fa-book"></span>教学平台</a>\
</li>'
var subNav = '<ul class="nav nav-pills nav-stacked '+val.uniqueName+'" style="display:none">';
$.each(val.categoryLeaves, function(index, item) {
	switch (item.categoryLeafName){
		case "教改项目":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="EducationaReform.html">教改项目</a>\
		</li>'
		break;
		case "教学论文":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="EducationPaper.html">教学论文</a>\
		</li>'
		break;
		case "教材":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href=TeachingMaterial.html">教材</a>\
		</li>'
		break;
		case "教师培训":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="TeacherTraining.html">教师培训</a>\
		</li>'
		break;
		case "教师获奖":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="TeacherAward.html">教师获奖</a>\
		</li>'
		break;
		case "竞赛指导":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="CompetitionGuidance.html">竞赛指导</a>\
		</li>'
		break;
		case "实习基地":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="PracticeBase.html">实习基地</a>\
		</li>'
		break;
		case "实验室":
		subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'" >\
		<a href="Laboratory.html">实验室</a>\
		</li>'
		break;
	}
});
subNav=subNav+'</ul>';
$("#sub-nav").append(subNav);
break;

}
});
mainNav = mainNav+'<li id="人员管理">\
<a href="../StuffManage/TeacherInfo.html"><span aria-hidden="true" class="fa fa-users"></span>人员管理</a>\
</li><li id="标签管理">\
<a href="../TagManage/TagStore.html"><span aria-hidden="true" class="fa fa-tags"></span>标签管理</a>\
</li></ul></div>'
$("#sub-nav").append('<ul class="nav nav-pills nav-stacked 人员管理" style="display:none">\
	<li id="TeacherInfo" class="教师信息">\
	<a href="TeacherInfo.html">教师信息</a>\
	</li>\
	<li id="OtherTeacherInfo" class="其他教师信息">\
	<a href="OtherTeacherInfo.html">其他教师信息</a>\
	</li>\
	<li id="StudentInfo" class="学生信息">\
	<a href="StudentInfo.html">学生信息</a>\
	</li>\
	<li id="StudentAccount" class="学生账号">\
	<a href="StudentAccount.html">学生账号</a>\
	</li>\
	</ul><ul class="nav nav-pills nav-stacked 标签管理" style="display:none">\
	<li id="" class="语义标签库">\
	<a href="TagStore.html">语义标签库</a>\
	</li>\
	<li id="" class="语义标签文档">\
	<a href="TagDocument.html">语义标签文档</a>\
	</li>\
	</ul>');


$("#main-nav").html(mainNav);
}


function fillDetail(obj) {
	$.each(obj.data, function(key, val) {
		if (!val) {
			$("input[name='"+key+"']").parents(".formBlock").addClass('unfilled')
		};
	});
	var participantNames
	var order
	$.each(obj.data.participantNames, function(index, item) {
		if (index==0) {
			participantNames = item
		} else {
			participantNames += ','+item
		}
		order = index +1
		if (order==1) {
			$('.addInput').html('<input type="text" class="form-control" name="otherPartners" id="otherPartners" placeholder="请填写其他参与人" value="'+item+'"  style="display:none">\
				<i id="addOne" class="fa fa-plus-square" aria-hidden="true" style="display: none;"></i>\
				<span class="glyphicon glyphicon-remove remove1" aria-hidden="true"  style="display: none;"></span>')
		} else {
			$('.addInput').append('<input type="text" class="form-control" name="otherPartners" placeholder="请填写其他参与人" value="'+item+'" style="display:none"><span class="glyphicon glyphicon-remove remove2" aria-none="true" style="display:none"></span>')
		}
	});
	$.each(obj.data.tag, function(index, val) {
		$('.plus-tag').css('display', 'block');
		$('.plus-tag').append('<a value="-1" title="one" href="javascript:void(0);"><span>'+val+'</span><em style="display: none;" ></em></a>')
	});
	$(".name").html(obj.data.name);
	$("input[name='name']").val(obj.data.name)

	$(".author").html(obj.data.author)
	$("input[name='author']").val(obj.data.author)

	$(".department").html(obj.data.department)
	$("input[name='department']").val(obj.data.department)

	$(".jobName").html(obj.data.jobName)
	$("input[name='jobName']").val(obj.data.jobName)

	$(".type").html(obj.data.type)
	$("input[name='type']").val(obj.data.type)

	$(".planTime").html(obj.data.date)
	$("input[name='date']").val(obj.data.date)

	$(".source").html(obj.data.source)
	$("input[name='source']").val(obj.data.source)

	$(".projectNumber").html(obj.data.projectNumber)
	$("input[name='projectNumber']").val(obj.data.projectNumber)

	$(".funds").html(obj.data.funds)
	$("input[name='funds']").val(obj.data.funds)

	$(".knotForm").html(obj.data.knotForm)
	$("input[name='knotForm']").val(obj.data.knotForm)

	$(".otherPartners").html(participantNames)
	var completeRate=Math.round(obj.data.completeRate*100)

	$('.progress-bar').css('width', completeRate+'%');
	$('.progress-bar span').text(completeRate+'%');

	// $('#lixiang').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
	// $('#proofMaterial1').html(filename)
	// $('#jieti').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
	// $('#proofMaterial2').html(filename)
	// $('#hetong').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
	// $('#proofMaterial3').html(filename)


}

// $(document).on('click', '#main-nav li', function() {
// 	var subNavId = $(this).attr('id');
	// alert($(this).attr('id'));
	// $("#sub-nav").children('.nav').css('display', 'none');
	// $("."+subNavId).css('display', 'block');
	//样式
	// $('.current').removeClass('current')
	// $(this).children('a').addClass('current');
// })

Date.prototype.Format = function (fmt) { //author: meizz   
	var o = {  
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "H+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}  

//时间搜索
function timeSearch(LeafName) {
	var startDate
	var endDate
	// var current = new Date();
	var current = new Date().Format("yyyy-MM-dd");
	if($(".dateInput2").val()) {
		current =$(".dateInput2").val()
		$.ajax({
			type: "get",
				url: "http://123.206.190.167:8080/dissertation/"+LeafName+"/date",
				data: {
				"current": current
				},
				async: true,
				dataType: "json",
				contentType: "application/json",
				success: function(data) {
					console.log(data)
					setTableData(data)
				},
				Error: function() {
					alert("服务器出错");
				}

			})

	} else {
		startDate = $("input[name='dtBegin']").val()//new Date($("input[name='dtBegin']").val())
		endDate = $("input[name='dtEnd']").val()//new Date($("input[name='dtEnd']").val())
		console.log(startDate)
		console.log(endDate)
		console.log(current)
		$.ajax({
			type: "get",
			url: "http://123.206.190.167:8080/dissertation/"+LeafName+"/date",
			data: {
				"begin": startDate,
				"end": endDate
			},
			async: true,
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				setTableData(data)
			},
			Error: function() {
				alert("服务器出错");
			}
		})

	}

}

//显示收藏夹
// $(document).on('click', '.btn-collection', function(event) {
// 	$.ajax({
// 		type: "GET",
// 		url: "http://123.206.190.167:8080/dissertation/collection/columns",
// 		async: true,
// 		dataType: "json",
// 		contentType: "application/json",
// 		success: function(obj) {
// 			console.log(obj.data)
// 			$('#collectName').AutoComplete({
// 				'data':  obj.data,
// 				'itemHeight': 20,
// 				'width': 180
// 			});
// 		},
// 		Error: function() {
// 			alert("服务器出错");
// 		}
// 	})
//
// });



// //批量收藏
$(document).on('click', '.sureMoveIn_dataYes', function() {
	var idd = new Array();
	var collectionName = $('#collectName').val()
	console.log(collectionName)
	$("input[type='checkbox']:checked").each(function(i){
		idd[i] = $(this).parents("tr").children('td:eq(2)').children('a').attr('id');
		$('#sureMoveIn_data').modal('hide')

	});
	console.log(idd);
	$.ajax({
		type: "POST",
		url: "http://123.206.190.167:8080/dissertation/collection/addCollection",
		data:JSON.stringify({
			"column": collectionName,
			"id": idd
		}),
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(obj) {
			console.log(obj)
		},
		Error: function() {
			alert("服务器出错");
		}
	})
});

function indexStart() {
    console.log('indexStart')
	header()
	footer()
	alertModal()
	$(document).on('click', '.remove2', function(event) {
		console.log($(this).context)
		console.log($(this).className)
		$(this).prev().remove();
		$(this).remove();
		$('.needExpend').animate({height:'-=30px'});
	});
	$(document).on('click', '.remove1', function(event) {
		$(this).prev().prev().val("")
	});

	$('#btnBack').click(function(event) {
		if ($('.filebtn_before').css('display')=='inline') {
			window.location.href="ScienceProject.html";
		} else {
			$('#sureLeave').modal('show')
		}
	});


	$('#saveSuccess').on('show.bs.modal', function () {
		setTimeout(function(){$("#saveSuccess").modal("hide")},1200);
	})
	$('#collection').on('show.bs.modal', function () {
		setTimeout(function(){$("#collection").modal("hide")},1200);
	})
	$('.sureLeaveYes').click(function(event) {
		window.location.href="ScienceProject.html";
	});
	$('.fileRemove').click(function(event) {
		var x = $(this)
		$('.sureDeleteYes').click(function(event) {
			console.log(x)
			x.parent().siblings('.fileNanme').text('请上传文件').css({
				'color': 'gray',
				'font-style' : 'italic',
				'text-decoration':'underline'
			});;
			$('#sureDelete').modal('hide')
		})
	});
}

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------小功能-----------------------------------------*/
/*----------------------------------------------------------------------------------------*/

//复选框选择
$(document).on('click', 'tr td:not(:first)', function() {
	if ($(this).siblings().first().children().is(':checked') == false) {
		$(this).siblings().first().children().prop("checked", true);
	} else {
		$(this).siblings().first().children().prop("checked", false);
	}
})


// 保证只有一个选框有日期
$(".dateInput1").click(function(event) {
	$(".dateInput2").val("")
});
$(".dateInput2").click(function(event) {
	$(".dateInput1").val("")
});


function setCookie ( name, value, expdays ){    var expdate = new Date();    //设置Cookie过期日期
    expdate.setDate(expdate.getDate() + expdays) ;    //添加Cookie
    document.cookie = name + "=" + escape(value) + ";expires=" + expdate.toUTCString();
}

function getCookie ( name ){    //获取name在Cookie中起止位置
    var start = document.cookie.indexOf(name+"=") ;    if ( start != -1 )
    {
        start = start + name.length + 1 ;        //获取value的终止位置
        var end = document.cookie.indexOf(";", start) ;        if ( end == -1 )
            end = document.cookie.length ;        //截获cookie的value值,并返回
        return unescape(document.cookie.substring(start,end)) ;
    }    return "" ;
}

function delCookie ( name ){
    setCookie ( name, "", -1 ) ;
}
