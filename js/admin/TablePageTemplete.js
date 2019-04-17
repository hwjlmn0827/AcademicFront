/*
* @Author: Administrator
* @Date:   2017-11-29 14:41:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-09 23:48:32
*/


//
var cmap = {
    TeacherResearch: {
        ScienceProject: {
            columns: ['序号', '科研项目名称', '科研项目类型', '主持人', '等级', '立项时间', '信息完整度'],
            importColumns: [{"title": "科研项目名称"}, {"title": "科研项目类型"}, {"title": "第一责任人"}, {"title": "立项时间"}],
            orderable: [0, 2, 3, 4, 5, 7],
            flatten: [3, 4, 5],
        }
    }
};

//获取目录 OK
function catagoryAjax(mainDirectory, subDirectory) {
    var mainClass = '.' + mainDirectory
    var mainId = '#' + mainDirectory + ' a'
    var subClass = '.' + subDirectory
    $.ajax({
        type: "get",
        url: "https://nei.netease.com/api/apimock/65f140b55e2da50e553e4a5a8be4f9ba/categoryTree",
        data: {},
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log('catagoryAjax success')
            setCategoryTree(data)
            $(mainClass).css('display', 'block');
            $(mainId).addClass('current');
            $(subClass).addClass('active');
        },
        Error: function () {
            alert("服务器出错");
        }
    })
}

//构建表头 OK
function buildTable(mainDirectory, subDirectory) {
    $('.mainTable').attr('id', subDirectory);

    var mapColums = cmap[mainDirectory][subDirectory]['columns'];
    var columns = [];
    for (var i = 0; i < mapColums.length; i++) {
        if (i == 0) {
            columns.push({'title': ''})
        }
        var titleObj = {'title': mapColums[i]}
        columns.push(titleObj)
    }

    var orderable = cmap[mainDirectory][subDirectory]['orderable'];
    var orderableList = []
    for (var i = 0; i < orderable.length; i++) {
        orderableList.push({"orderable": false, "targets": orderable[i]})
    }

    var flatten = cmap[mainDirectory][subDirectory]['flatten'];

    console.log('buildTable', columns, orderable, flatten)

    $('#' + subDirectory).DataTable({
        responsive: true,
        searching: true,
        // "bSort":false,
        "columns": columns,
        "bLengthChange": false,
        "bRetrieve": true,
        "bFilter": true, //过滤功能
        "aLengthMenu": [15],
        "columnDefs": orderableList,
        initComplete: function () {
            var api = this.api();
            api.columns(flatten).indexes().flatten().each(function (i) {
                var column = api.column(i);
                var select = $('<select id="th' + i + '"><option value="">' + columns[i].title + '</option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
            });
        },
    });
    $('tr').children("th:first").removeClass('sorting');
}


//填充数据 TODO test
function fillTableDataAjax(subDirectory, requestDataSource) {
    console.log('fillTableDataAjax')
    $.ajax({
        type: "get",
        url:"https://nei.netease.com/api/apimock/65f140b55e2da50e553e4a5a8be4f9ba/ScientificProject",
        data: {},
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function (obj) {
            console.log('fillTableDataAjax', obj)
            setTableData(subDirectory, obj)
        },
        Error: function () {
            alert("服务器出错");
        }
    })
}


//填充数据具体操作
function setTableData(subDirectory, obj) {
    console.log('setTableData')
    $('#' + subDirectory).dataTable().fnClearTable();
    var option_array = [];
    $.each(obj.data, function (index, item) {
        if ($.inArray(item.author, option_array) < 0) {
            option_array.push(item.author)
            $("#th4").append("<option value='" + item.author + "'>" + item.author + "</option>");
            $("#th5").append("<option value='" + item.author + "'>" + item.author + "</option>");
        }
        ;
        order = index + 1;
        var completeRate = Math.round(item.completeRate * 100)
        $('#' + item.categoryLeafName).dataTable().fnAddData([
            '<input type="checkbox">',
            '<span>' + order + '</span>',
            '<a href="ScienceProjectDetail.html?id=' + item.id + '" id="' + item.id + '">' + item.name + '</a>',
            '<span>' + item.type + '</span>',
            '<span>' + item.author + '</span>',
            '<span>' + item.lavel + '</span>',
            '<span>' + item.date + '</span>',
            '<div class="progress tableProgress">\
            <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: ' + completeRate + '%">\
			' + completeRate + '%\
			</div>\
			</div>',
        ])
    });
}


// 上传组件
function fileupload() {
    var formdata = new FormData($("form[name='uploadForm']")[0])
    $.ajax({
        url: "http://123.206.190.167:8080/dissertation/excel/assetsSelected",
        type: "post",
        data: formdata,
        contentType: false,
        processData: false,
        cache: false,
        success: function (data) {
            console.log(data)
        }
    })
}

// 选中序号构造下载url TODO @ziyi
function makeURL(mainDirectory, subDirectory, fileName) {
    var url = 'http://123.206.190.167:8080/dissertation/excel/assetsSelected?categoryLeafName=' + mainDirectory +
        '&uniqueName=' + subDirectory + '&fileName=' + fileName + '.xlsx&ids='
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

// TODO OK without TEST
function importResult(mainDirectory, subDirectory) {
    //给table加一个id 是二级目录的名字
    var importColumns = cmap[mainDirectory][subDirectory]['importColumns'];
    $('#importResult').DataTable({
        responsive: false,
        searching: false,
        bLengthChange: false,
        bPaginate: false,
        aLengthMenu: [5],
        bSort: false,
        bInfo: false,
        "columns": importColumns,
        "bLengthChange": false,
        "bRetrieve": false,
        "bFilter": false, //过滤功能
    });
}

// 选中序号构造url TODO @ziyi
function makeURL() {
    // var url = 'http://localhost:8080/dissertation/excel/scientificProjectSelected?categoryLeafName=科研项目' +
    var url = 'http://123.206.190.167:8080/dissertation/excel/scientificProjectSelected?categoryLeafName=科研项目' +
        '&uniqueName=教师科研&fileName=教师信息.xlsx&ids='
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

//批量删除
$(document).on('click', '.sureDelete_dataYes', function () {
    var idd = [];
    $("input[type='checkbox']:checked").each(function (i) {
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
        success: function (data) {
            console.log(data)
            if (data.err) {
                $('#科研项目').DataTable().rows('.tr_selected').remove().draw(false);
            }
            ;
        },
        Error: function () {
            alert("服务器出错");
        }

    })
});

$(function () {
    indexStart()
    importResult("TeacherResearch", "ScienceProject")
    catagoryAjax("TeacherResearch", "ScienceProject")
    buildTable("TeacherResearch", "ScienceProject")
    fillTableDataAjax('ScientificProject', 'ScientificProject')

    $(".datepicker").datepicker({endDate: new Date()});
    $('.dateSearch').click(function (event) {
        timeSearch('ScientificProject')
    });
})












