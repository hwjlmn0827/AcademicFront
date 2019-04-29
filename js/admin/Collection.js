//引入目录
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
            setCategoryTree(data);
            $('.collection_btn').css('background', 'rgba(0,0,0,0.04)');
        },
        Error: function() {
            alert("服务器出错");
        }
    })
}

//构建表头
function collection_buildTable() {
    var columns =[{"title":""},{"title":"序号"},{"title":"科研项目名称"},{"title":"第一责任人"},{"title":"项目类型"},{"title":"时间"},{"title":"语义标签"}];
    //给table加一个id 是二级目录的名字
    $('#collectionTable').DataTable({
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
            api.columns([3,4,5]).indexes().flatten().each( function ( i ) {
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
}

//填充数据
function collectionTableDataAjax() {
    $.ajax({
        type: "get",
        url: prefixUrl + "/collection/columns",
        data: {
        },
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(obj) {
            console.log(obj)
            collectionTable_setTableData(obj)
        },
        Error: function() {
            alert("服务器出错");
        }
    })
}


//填充数据具体操作
function collectionTable_setTableData(obj) {
    $('#collectionTable').dataTable().fnClearTable();
    var option_array = [];
    var option_array2 = [];
    var option_array3 = [];
    var order = 0;
    $.each(obj.data, function(index, item) {
        if ($.inArray(item.author, option_array)<0) {
            option_array.push(item.author)
            $("#th3").append("<option value='"+item.author+"'>"+item.author+"</option>");
        };
        if ($.inArray(item.projectType, option_array2)<0) {
            option_array2.push(item.projectType)
            $("#th4").append("<option value='"+item.projectType+"'>"+item.projectType+"</option>");
        };
        if ($.inArray(item.projectType, option_array3)<0) {
            option_array3.push(item.time)
            $("#th5").append("<option value='"+item.projectType+"'>"+item.projectType+"</option>");
        };
        order = index + 1;
        $('#collectionTable').dataTable().fnAddData([
            '<input type="checkbox">',
            '<span>'+order+'</span>',
            '<a href="#" id="'+item.assetsID+'">'+item.projectName+'</a>',
            '<span>'+item.author+'</span>',
            '<span>'+item.projectType+'</span>',
            '<span>'+item.time+'</span>',
            '<span>'+item.tags+'</span>\
			</div>',
        ])
    });
}

window.onload = function() {
    var contex_menu = {
        'context1' : {
            elements : [
                {
                    text : '查看收藏夹',
                    icon:'../../../css/images/file.png',
                    action : function(node) {
                        $.ajax({
                            type: "GET",
                            url: prefixUrl + "collection/favorites",
                            data:{
                                "column": "人工智能"
                            },
                            async: true,
                            dataType: "json",
                            contentType: "application/json",
                            success: function(obj) {
                                console.log(obj)
                                collectionTable_setTableData(obj)
                            },
                            Error: function() {
                                alert("服务器出错");
                            }
                        })

                    }
                },
                {
                    text : '删除收藏夹',
                    icon: '../../../css/images/delete.png',
                    action : function(node) {
                        console.log(node.text)
                        //删除该收藏夹
                        $.ajax({
                            type: "DELETE",
                            url: prefixUrl + "collection/column?column="+node.text,
                            data:{
                            },
                            async: true,
                            dataType: "json",
                            contentType: "application/json",
                            success: function(obj) {
                                console.log(obj)
                                if (obj.data=="删除成功") {
                                    node.removeNode();
                                };
                            },
                            Error: function() {
                                alert("服务器出错");
                            }
                        })
                    },
                }
            ]
        }
    };


    tree = createTree('div_tree','white',contex_menu);
    tree.drawTree();
    tree.createNode('新建文件夹',false,'../../../css/images/leaf.png',null,null,null);

//初始化收藏夹列表
    var reloadCollectionAjax = function(){
        $.ajax({
            type: "GET",
            url: prefixUrl + "collection/columns",
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(obj) {
                for (var i=0; i<obj.length; i++) {
                    node1 = tree.createNode(obj.data[i],false,'../../../css/images/star.png',null,null,'context1');
                }
            },
            Error: function() {
                alert("服务器出错");
            }
        })
    }
    reloadCollectionAjax()

//显示收藏夹内容
    $(document).on('click','#tree li:not(":first")',function(){

        var liName =$(this).children('span').children('a').text()
        console.log(liName)
        $.ajax({
            type: "GET",
            url: prefixUrl + "collection/favorites",
            data:{
                "column": liName
            },
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(obj) {
                console.log(obj)
                collectionTable_setTableData(obj)
            },
            Error: function() {
                alert("服务器出错");
            }
        })
    })
//新建收藏夹
    $(document).on('click','#tree li:nth-child(1) ',function(){
        $('#collectionTable').dataTable().fnClearTable();
        var liName =$(this).children('span').children('a').text()
        console.log(liName)
        $('#newCollection').modal('show')
    })
//弹框收藏夹
    $(document).on('click','#tree li:nth-child(1) ',function(){

        var liName =$(this).children('span').children('a').text()
        console.log(liName)
        $('#newCollection').modal('show')
    })
//添加收藏夹
    $(document).on('click','.sureCollectionYes',function(){
        console.log($('#collectName').val())
        if ($('#collectName').val()) {
            var collectName = $('#collectName').val()
            // 新增收藏夹？？？有问题
            $.ajax({
                type: "POST",
                url: prefixUrl + "collection/addColumn?column="+collectName,
                data:{
                },
                async: true,
                dataType: "json",
                contentType: "application/json",
                success: function(obj) {
                    console.log(obj)
                    if (obj.data =='创建成功') {
                        node1 = tree.createNode($('#collectName').val(),false,'../../../css/images/star.png',null,null,'context1');
                        $('#newCollection').modal('hide')
                    };
                },
                Error: function() {
                    alert("服务器出错");
                }
            })
        };
    })
//确认移出收藏夹
    $(document).on('click', '.sureMoveOut_dataYes', function() {
        var idd = new Array();
        $("input[type='checkbox']:checked").each(function(i){
            idd[i] = $(this).parents("tr").children('td:eq(2)').children('a').attr('id');
            $(this).parents("tr").addClass('tr_selected')

        });
        $('#sureMoveOut_data').modal('hide')
        console.log("此时收藏夹标签为："+$('.node_selected a').html())
        console.log(idd);
        $.ajax({
            type: "DELETE",
            url: prefixUrl + "collection/removeCollection",
            data: JSON.stringify({
                "column": $('.node_selected a').html(),
                "id": idd
            }),
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                if (data.err) {
                    $('#collectionTable').DataTable().rows('.tr_selected').remove().draw(false);
                };
            },
            Error: function() {
                alert("服务器出错");
            }

        })
    });
};

$(function() {
    indexStart()
    catagoryAjax()
    collection_buildTable()
    collectionTableDataAjax()
})

