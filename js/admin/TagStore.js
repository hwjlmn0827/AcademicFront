/*
* @Author: Administrator
* @Date:   2017-12-19 13:20:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-30 23:32:32
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
            $('#TagStore').addClass('active');
        },
        Error: function() {
            alert("服务器出错");
        }
    })
}

function tag_buildTable() {
    var columns =[{"title":"序号"},{"title":"语义标签名称"},{"title":"相关项目数量"},{"title":"操作"}];
    //给table加一个id 是二级目录的名字
    $('#tagStoreTable').DataTable({
        responsive: true,
        searching: false,
        "bSort":false,
        "columns":columns,
        "bLengthChange": false,
        "bRetrieve": true,
        "bFilter": true, //过滤功能
        "aLengthMenu":[8]
    });
}

function searchTags(){
    $.ajax({
        type: 'get',
        url: prefixUrl + 'tag',
        data: {
        },
        async: true,
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {
            console.log(data)
            console.log("标签列表长度为="+data.data.length)
            setTags(data.data)
        },
        Error: function() {
            alert("服务器出错");
        }
    })
}

function setTags(data) {
    for (var i = 0; i <= data.length; i++) {
        var tagOrder = i+1
        $('#tagsList').append('<a href="#/Article.aspx?kid='+i+'">'+data[i].uniqueName+'</a>')
        $('#tagStoreTable').dataTable().fnAddData([
            '<span id='+data[i].id+'>'+tagOrder+'</span>',
            '<span id='+data[i].uniqueName+'>'+data[i].uniqueName+'</span>',
            '<span id='+data[i].status+'>'+data[i].count+'</span>',
            '<button type="button" class="btn btn-warning tagbtn_reName"  data-toggle="modal" data-target="#renameTag">重命名</button><button type="button" class="btn btn-danger tagbtn_delete">删除</button>',
        ])
    };
}

$(document).on('click','.tagbtn_delete',function(){
    $('#sureDelete_data').modal('show')
    $('.sureDelete_dataYes').click(function(event) {
        var id = $(this).parents("tr").first().children().attr("id")
        // var id = $(this).siblings().first().children().attr("id")
        var tag = $(this).parents('tr')[0]
        console.log(tag);

        $('#sureDelete_data').modal('hide')
        $.ajax({
            type: "POST",
            url: prefixUrl + "tag/delete",
            data: JSON.stringify({
                "id": id
            }),
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                console.log(data)
                if (data.err) {
                    $('#tagStoreTable').DataTable().rows('.tr_selected').remove().draw(false);
                }
                ;
            },
            Error: function () {
                alert("服务器出错");
            }
        })
    });
})

$(document).on('click','.sureTagYes',function(){
    var tagName = $('#tagName').val();
    console.log("new tag "+tagName)
    var dataTable = $('#tagStoreTable').DataTable();
    var info = dataTable.page.info();
    var dataRows = info.recordsTotal+1;
    console.log("现行数"+dataRows)
    $.ajax({
        type: 'POST',
        url: prefixUrl + 'tag',
        data: JSON.stringify({
            "uniqueName": tagName,
        }),
        async: true,
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {
            console.log(data)
            if (data.data) {
                console.log("新增标签"+data.data)
                $('#tagStoreTable').dataTable().fnAddData([
                    '<span id='+data.data+'>'+dataRows+'</span>',
                    '<span id='+tagName+'>'+tagName+'</span>',
                    '<span id="SELF">0</span>',
                    '<button type="button" class="btn btn-warning tagbtn_reName"  data-toggle="modal" data-target="#renameTag">重命名</button><button type="button" class="btn btn-danger tagbtn_delete">删除</button>',
                ])
                $('#newTag').modal('hide')
            };
        },
        Error: function() {
            alert("服务器出错");
        }
    })

})

$(document).on('click','.tagbtn_reName',function(){
    var name = $(this).parents('tr').children("td").eq(1).children("span").text()
    var id = $(this).parents('tr').children("td").eq(0).children("span").attr('id');
    var status = $(this).parents('tr').children("td").eq(2).children("span").attr('id');
    console.log("rename tag origin  "+name)
    $('.temp').attr('id', name);
    $('.sureTagYes2').attr('id', id);
    $('.cancelTagYes2').attr('id', status);
})

$(document).on('click','.sureTagYes2',function(){
    var tagName = $('#tagName2').val();
    console.log("rename tag   "+tagName)
    var name = $(this).parent('.temp').attr('id');
    var id = $(this).attr('id');
    var status = $(this).siblings('.cancelTagYes2').attr('id');
    console.log(name+" "+id+" "+status)
    $.ajax({
        type: 'post',
        url: prefixUrl + 'tag',
        data: JSON.stringify({
            "uniqueName": tagName,
            "status":status,
            "id": id
        }),
        async: true,
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {

            console.log("重命名标签")
            console.log(data.data)
            $('#renameTag').modal('hide')
            window.location.reload()
        },
        Error: function() {
            alert("服务器出错");
        }
    })
})

$(function() {
    indexStart()
    catagoryAjax()
    tag_buildTable()
    searchTags()
})