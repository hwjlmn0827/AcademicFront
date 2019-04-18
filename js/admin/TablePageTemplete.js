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
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '科研项目名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '科研项目类型',
                    name: 'type',
                    flatten: true
                }, {
                    id: 4,
                    title: '主持人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 5,
                    title: '等级',
                    name: 'lavel',
                    flatten: true
                }, {
                    id: 6,
                    title: '立项时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 7,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title": "科研项目名称"}, {"title": "科研项目类型"}, {"title": "第一责任人"}, {"title": "立项时间"}],
            orderable: [0, 2, 3, 4, 5, 7],
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
        var titleObj = {'title': mapColums[i].title}
        columns.push(titleObj)
    }

    var orderable = cmap[mainDirectory][subDirectory]['orderable'];
    var orderableList = []
    for (var i = 0; i < orderable.length; i++) {
        orderableList.push({"orderable": false, "targets": orderable[i]})
    }

    var flattenObj = mapColums.filter(function(item, index){
        return mapColums[index].flatten == true;
    })
    var flatten = flattenObj.map(x => x.id)

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

//填充数据 OK
function fillTableDataAjax(mainDirectory, subDirectory, requestDataSource) {
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
            setTableData(mainDirectory, subDirectory, obj)
        },
        Error: function () {
            alert("服务器出错");
        }
    })
}

//填充数据具体操作 OK
function setTableData(mainDirectory, subDirectory, obj) {
    console.log('setTableData')
    $('#' + subDirectory).dataTable().fnClearTable();
    var mapColums = cmap[mainDirectory][subDirectory]['columns'];


    var option_array = []
    var flattenObj = mapColums.filter(function(item, index){
        return mapColums[index].flatten == true;
    })
    var flattenCount = flattenObj.length

    for (var i = 0; i < flattenCount; i++) {
        option_array[i] = [];
    }
    console.log(flattenObj)

    $.each(obj.data, function (index, item) {

        $.each(flattenObj, function (idx, obj) {
            if ($.inArray(item[obj.name], option_array[idx]) < 0) {
                option_array[idx].push(item[obj.name])
                $("#th" + obj.id).append("<option value='" + item[obj.name] + "'>" + item[obj.name] + "</option>");
            }
        })

        order = index + 1;
        var completeRate = Math.round(item.completeRate * 100)

        var columnContent = []
        columnContent.push('<input type="checkbox">')
        columnContent.push('<span>' + order + '</span>')
        $.each(mapColums, function (idx, para) {
            switch(para.name) {
                case 'name':
                    columnContent.push('<a href="' + subDirectory + 'Detail.html?id=' + item.id + '" id="' + item.id + '">' + item.name + '</a>')
                    break;
                case 'type':
                case 'author':
                case 'lavel':
                case 'date':
                    columnContent.push('<span>' + item[para.name] + '</span>')
                    break;
                case 'completeRate':
                    columnContent.push(
                        '<div class="progress tableProgress">\
                        <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width: ' + completeRate + '%">\
			            ' + completeRate + '%\
			            </div>\
			            </div>')
                    break;
                default:
                    break;
            }
        })
        $('#' + subDirectory).dataTable().fnAddData(columnContent)
    });
}

// 上传组件 TODO para? @ziyi
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
    $("#import_selected").attr("href", url + ids)

}

// TODO OK without TEST @ziyi
function importResult(mainDirectory, subDirectory) {
    var importColumns = cmap[mainDirectory][subDirectory]['importColumns'];
    // var importLen = importColumns.length
    $('#importResult').DataTable({
        responsive: false,
        searching: false,
        bLengthChange: false,
        bPaginate: false,
        aLengthMenu: [5],
        bSort: false,
        bInfo: false,
        "columns": importColumns,
        "bRetrieve": false,
        "bFilter": false, //过滤功能
    });
}

// 选中序号构造url TODO caturl @ziyi
function makeURL(mainDirectory, subDirectory, fileName) {
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
    $("#import_selected").attr("href", url + ids)
}

//批量删除
$(document).on('click', '.sureDelete_dataYes', function () {
    var subDirectory = 'ScienceProject'
    deleteData(subDirectory)
});

function deleteData(subDirectory) {
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
                $('#' + subDirectory).DataTable().rows('.tr_selected').remove().draw(false);
            }
            ;
        },
        Error: function () {
            alert("服务器出错");
        }
    })
}

$(function () {
    indexStart()
    importResult("TeacherResearch", "ScienceProject")
    catagoryAjax("TeacherResearch", "ScienceProject")
    buildTable("TeacherResearch", "ScienceProject")
    fillTableDataAjax('TeacherResearch', 'ScienceProject', 'ScientificProject')

    $(".datepicker").datepicker({endDate: new Date()});
    $('.dateSearch').click(function (event) {
        timeSearch('ScientificProject')
    });
})












