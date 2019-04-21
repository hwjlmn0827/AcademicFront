/*
* @Author: Administrator
* @Date:   2017-12-03 15:12:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-12 09:09:29
*/
$(function(){
    indexStart()
    catagoryAjax("TeacherResearch", "ScienceProject")

    C1 = window.location.href.split("?")[1];
    id = C1.split("=")[1];
    $('.form-control').css('display', 'none');
    fillDetailAjax('ScientificProject', id)

    $('#planTime').fdatepicker();//时间选择
    var participant = []
    $.ajax({
        type: "get",
        url: "http://123.206.190.167:8080/dissertation/participant",
        data: {
        },
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(obj) {
            console.log("参与人名单")
            console.log(obj)
            $.each(obj.data, function(index, val) {
                participant.push(val.name)
            });
            console.log(participant)
        },
        Error: function() {
            alert("服务器出错");
        }
    })
    $('input[name="otherPartners"]').AutoComplete({
        'data': participant,
        'itemHeight': 20,
        'width': 180
    });
    $(document).on('click', '#addOne', function(event) {

        if($('.addInput input:text').length<5) {
            $('.addInput').append('<input type="text" class="form-control" name="otherPartners" placeholder="请填写其他参与人"><span class="glyphicon glyphicon-remove remove2" aria-hidden="true"></span>')
            $('.needExpend').animate({height:'+=30px'});
            $('input[name="otherPartners"]').AutoComplete({
                'data': participant,
                'itemHeight': 20,
                'width': 180
            });//.AutoComplete('show')
        }
    });
    //自动补全标签
    var tags = []
    $.ajax({
        type: "get",
        url: "http://123.206.190.167:8080/dissertation/tag",
        data: {
        },
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(obj) {
            console.log("标签自动补全")
            console.log(obj)
            $.each(obj.data, function(index, val) {
                tags.push(val.uniqueName)
            });
            console.log(tags)
        },
        Error: function() {
            alert("服务器出错");
        }
    })
    $('.stext').AutoComplete({
        'data': tags,
        'itemHeight': 20,
        'width': 120
    });
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
        url: "http://123.206.190.167:8080/dissertation/ScientificProject",
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
            "projectMaterial": $('.downfile_1').attr('href'),
            "knotMaterial": $('.downfile_2').attr('href'),
            "projectContract": $('.downfile_3').attr('href'),
            "id": "54094",
            "categoryLeafName": "ScienceProject",
            "categoryTreeName": "TeacherResearch",
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
            if (!obj.err) {
                $('#saveSuccess').modal('show')
            } else {

            }
        },
        Error: function() {
            alert("服务器出错");
        }
    })

})


	





