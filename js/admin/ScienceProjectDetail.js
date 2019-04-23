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

    fillDetailAjax("TeacherResearch", "ScienceProject", 'ScientificProject', id)

    $('#planTime').fdatepicker();//时间选择
    var participant = []
    $.ajax({
        type: "get",
        url: prefixUrl + "participant",
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
        url: prefixUrl + "tag",
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
