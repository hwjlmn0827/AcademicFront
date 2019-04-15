/**
* @Author: Administrator
* @Date:   2017-12-14 01:02:37
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-08 13:15:54
*/


$(function() {
	
	catagoryAjax()
//锚点
var navLabel = new Array('教师科研', "学生科研", '教学平台');
$('#main').pageScroller({ navigation: navLabel });
  //弹框表格
  var columns_1 =[{"title":"姓名"},{"title":"科研项目"},{"title":"学术论文"},{"title":"成果采纳"},{"title":"专利"},{"title":"获奖"},{"title":"著作"}];
  $('#homepageTeacherResearch').DataTable({
    "responsive": true,
    "searching": true,
    "columns":columns_1,
    "paging": "false",
    "bLengthChange": false,
    "bRetrieve": true,
				"bFilter": true, //过滤功能
				"aLengthMenu":[4],
				"columnDefs": [ 
				{ "orderable": false, "targets": 0 },
				],
			});

  var columns_2 =[{"title":"姓名"},{"title":"学术论文"},{"title":"竞赛获奖"},{"title":"项目"},{"title":"专利"}];

  $('#homepageStudentResearch').DataTable({
    "responsive": true,
    "searching": true,
    "columns":columns_2,
    "paging": "false",
    "bLengthChange": false,
    "bRetrieve": true,
				"bFilter": true, //过滤功能
				"aLengthMenu":[4],
				"columnDefs": [ 
				{ "orderable": false, "targets": 0 },
				],
			});


  var columns_3 =[{"title":"姓名"},{"title":"教改项目"},{"title":"教学论文"},{"title":"教材"},{"title":"教师培训"},{"title":"教室获奖"},{"title":"竞赛指导"},{"title":"实习基地"},{"title":"实验室"}];
  $('#homepageTeachState').DataTable({
    "responsive": true,
    "searching": true,
    "columns":columns_3,
    "paging": "false",
    "bLengthChange": false,
    "bRetrieve": true,
                "bFilter": true, //过滤功能
                "aLengthMenu":[4],
                "columnDefs": [ 
                { "orderable": false, "targets": 0 },
                ],
              });


  totalNumStatisticAjax("教师科研")
  totalNumStatisticAjax("学生科研")
  totalNumStatisticAjax("教学平台")
  teacherChart()
  studentChart()
  teachStateChart()
  totalChartAjax('教师科研')
  totalModalAjax('教师科研')
  $('#教师科研').children().eq(0).addClass('stuffType_selected')
  totalModalAjax('学生科研')
  $('#学生科研').children().eq(0).addClass('stuffType_selected')
  totalModalAjax('教学平台')
  $('#教学平台').children().eq(0).addClass('stuffType_selected')


})





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
      $('#adminHomePage a').addClass('current');
    },
    Error: function() {
      alert("服务器出错");
    }
  })
}




function totalNumStatisticAjax(categoryTreeName) {
 $.ajax({
  type: "get",
  url: "http://123.206.190.167:8080/dissertation/statistics/categoryTree/count?categoryTreeName="+categoryTreeName,
  data: {
  },
  async: true,
  dataType: "json",
  contentType: "application/json",
  success: function(obj) {
    console.log(obj)
    switch(categoryTreeName) {
      case("教师科研"):
      totalNumStatistic_1(obj);
      break;
      case("学生科研"):
      totalNumStatistic_2(obj);
      break;
      case("教学平台"):
      totalNumStatistic_3(obj);
      break;

    }
  },
  Error: function() {
   alert("服务器出错");
 }
})
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////项目总数和完整度////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




function totalNumStatistic_1(obj) {
  var leafName = ['科研项目','学术论文','专利','获奖','著作','成果采纳']
  var cpRate = new Array(6)
  var un_cpRate = new Array(6) 
  var itemObj={'科研项目':[0,1,0],'学术论文':[0,1,0],'专利':[0,1,0],'获奖':[0,1,0],'著作':[0,1,0],'成果采纳':[0,1,0]}
  var forcount = 0
  $.each(obj.data[0].statisticBeans, function(index, val) {
    var order = index+1
    itemObj[val.categoryLeafName][0] = val.completeRate
    itemObj[val.categoryLeafName][1] = 1-val.completeRate
    $(".teacherList tr:nth-child("+order+") td:nth-child(3)").html(val.count);
  })
  for(var i in itemObj) 
  {
    cpRate[forcount]=itemObj[i][0]
    un_cpRate[forcount]=itemObj[i][1]
    forcount++
  }

  $('#container-a').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: '百分比堆叠柱形图'
    },
    credits: { enabled: false},
    xAxis: {
      categories: leafName
    },
    yAxis: {
      min: 0,
      title: {
        text: '科研项目完整度/不完整度'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: '完整度',
      data: cpRate
    }, {
      name: '不完整度',
      data: un_cpRate
    }]
  });
}


function totalNumStatistic_2(obj) {
  var leafName = ['学术论文','竞赛获奖','项目','专利']
  var cpRate = new Array(6)
  var un_cpRate = new Array(6) 
  var itemObj={'学术论文':[0,1,0],'竞赛获奖':[0,1,0],'项目':[0,1,0],'专利':[0,1,0]}
  var forcount = 0
  $.each(obj.data[0].statisticBeans, function(index, val) {
    var order = index+1
    itemObj[val.categoryLeafName][0] = val.completeRate
    itemObj[val.categoryLeafName][1] = 1-val.completeRate
    $('.studentData .item:nth-child('+order+') h1' ).html(val.count)

  })
  for(var i in itemObj) 
  {
    cpRate[forcount]=itemObj[i][0]
    un_cpRate[forcount]=itemObj[i][1]
    forcount++
  }
  $('#container-b').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: '百分比堆叠柱形图'
    },
    credits: { enabled: false},
    xAxis: {
      categories:leafName
    },
    yAxis: {
      min: 0,
      title: {
        text: '科研项目完整度/不完整度'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: '完整度',
      data: cpRate
    }, {
      name: '不完整度',
      data: un_cpRate
    }]
  });
}

function totalNumStatistic_3(obj) {
 var leafName = ['教改项目','教学论文','教材','教师培训','教师获奖','竞赛指导','实习基地','实验室']
 var cpRate = new Array(6)
 var un_cpRate = new Array(6) 
 var crNum = new Array(6) 
 var itemObj={'教改项目':[0,1,0],'教学论文':[0,1,0],'教材':[0,1,0],'教师培训':[0,1,0],'教师获奖':[0,1,0],'竞赛指导':[0,1,0],'实习基地':[0,1,0],'实验室':[0,1,0]}
 var forcount = 0
 $.each(obj.data[0].statisticBeans, function(index, val) {
  itemObj[val.categoryLeafName][0] = val.completeRate
  itemObj[val.categoryLeafName][1] = 1-val.completeRate
  itemObj[val.categoryLeafName][2] = val.count
})
 for(var i in itemObj) 
 {
  cpRate[forcount]=itemObj[i][0]
  un_cpRate[forcount]=itemObj[i][1]
  crNum[forcount]=itemObj[i][2]
  forcount++
}
$('#container-c').highcharts({
  chart: {
    type: 'column'
  },
  title: {
    text: '百分比堆叠柱形图'
  },
  credits: { enabled: false},
  xAxis: {
    categories: leafName
  },
  yAxis: {
    min: 0,
    title: {
      text: '科研项目完整度/不完整度'
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: '完整度',
    data: cpRate
  }, {
    name: '不完整度',
    data: un_cpRate
  }]
});

var options31 = {
  chart: {
    type: 'column'
  },
  title: {
    text: '教学平台（近三年）'                 
  },
  credits: { enabled: false},
  xAxis: {
    categories: leafName 
  },
  yAxis: {
    title: {
      text: '学术资源个数'                
    }
  },
  plotOptions: {
    column: {
      dataLabels: {
        inside: true
      }
    }
  },           
  series: [{                              
    name: leafName,                        
    data: crNum  }]

  };

  var chart = Highcharts.chart('container-31', options31);
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////近三年数据//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





function totalChartAjax(categoryTreeName) {
  $.ajax({
    type: "get",
    url: "http://123.206.190.167:8080/dissertation/statistics/categoryTree/year?categoryTreeName="+categoryTreeName,
    data: {
    },
    async: true,
    dataType: "json",
    contentType: "application/json",
    success: function(obj) {
      console.log('近三年数据')
      console.log(obj)
      switch(categoryTreeName) {
        case("教师科研"):
        teacherChart(obj.data);
        break;
        case("学生科研"):
        studentChart(obj.data);
        break;
        case("教学平台"):
        teachStateChart(obj.data);
        break;
      }
    },
    Error: function() {
     alert("服务器出错");
   }
 })
}



function teacherChart(obj) {
  var years = []
  var itemObj={'科研项目':[0,0,0],'学术论文':[0,0,0],'专利':[0,0,0],'获奖':[0,0,0],'著作':[0,0,0],'成果采纳':[0,0,0]}
  var subJ = []
  var subJ_array = []
  $.each(obj, function(index_0, val_0) {
    years.push(val_0.year)
    $.each(val_0.yearStatisticWrapBeans, function(index, val) {
      itemObj[val.categoryLeafName][index_0] = val.count
    })
  });
  for( var key in itemObj) {
    subJ.push(key)
    subJ_array.push(itemObj[key])
  }
  var options1 = {
    chart: {
      type: 'line',
    },
    title: {
      text: '教师科研'                 
    },
    credits: { enabled: false},
    xAxis: {
      categories: years   
    },
    yAxis: {
      title: {
        text: '学术资源个数'                
      }
    },
    series: [{                             
      name: subJ[0],                        
      data: subJ_array[0]
    },{                             
      name: subJ[1],                        
      data: subJ_array[1]  
    },{                             
      name: subJ[2],                        
      data: subJ_array[2]  
    },{                             
      name: subJ[3],                        
      data: subJ_array[3]  
    },{                             
      name: subJ[4],                        
      data: subJ_array[4]  
    },{                             
      name: subJ[5],                        
      data: subJ_array[5] } ]                   
    };
    var chart = Highcharts.chart('container-1', options1);
  }




  function studentChart(obj) {
    var years = []
    var itemObj={'学术论文':[0,0,0],'竞赛获奖':[0,0,0],'项目':[0,0,0],'专利':[0,0,0]}
    var subJ = []
    var subJ_array = []
    $.each(obj, function(index_0, val_0) {
      years.push(val_0.year)
      $.each(val_0.yearStatisticWrapBeans, function(index, val) {
        itemObj[val.categoryLeafName][index_0] = val.count
      })
    });
    for( var key in itemObj) {
      subJ.push(key)
      subJ_array.push(itemObj[key])
    }
    var options2 = {
      chart: {
      },
      title: {
        text: '学生科研（近三年）'                 
      },
      credits: { enabled: false},
      xAxis: {
        categories: years  
      },
      yAxis: {
        title: {
          text: '学术资源个数'                
        }
      },
      series: [{                              
        name: subJ[0],                        
        data: subJ_array[0]  },{                              
          name: subJ[1],                        
          data: subJ_array[1]  },{                              
            name: subJ[2],                        
            data: subJ_array[2]  },{                              
              name: subJ[3],                        
              data: subJ_array[3]  }]                   
            };
            var chart = Highcharts.chart('container-2', options2);


          }


          function teachStateChart(obj) {
            ['教改项目','教学论文','教材','教师培训','教师获奖','竞赛指导','实习基地','实验室']
            var years = []
            var itemObj={'教改项目':[0,0,0],'教学论文':[0,0,0],'教材':[0,0,0],'教师培训':[0,0,0],'教师获奖':[0,0,0],'竞赛指导':[0,0,0],'实习基地':[0,0,0],'实验室':[0,0,0]}
            var subJ = []
            var subJ_array = []
            $.each(obj, function(index_0, val_0) {
              years.push(val_0.year)
              $.each(val_0.yearStatisticWrapBeans, function(index, val) {
                itemObj[val.categoryLeafName][index_0] = val.count
              })
            });
            for( var key in itemObj) {
              subJ.push(key)
              subJ_array.push(itemObj[key])
            }
            var options32 = {
              chart: {
              },
              title: {
                text: '教学平台（近三年）'                 
              },
              credits: { enabled: false},
              xAxis: {
                categories: years
              },
              yAxis: {
                title: {
                  text: '学术资源个数'                
                }
              },
              series: [{                             
                name: subJ[0],                        
                data: subJ_array[0]
              },{                             
                name: subJ[1],                        
                data: subJ_array[1]  
              },{                             
                name: subJ[2],                        
                data: subJ_array[2]  
              },{                             
                name: subJ[3],                        
                data: subJ_array[3]  
              },{                             
                name: subJ[4],                        
                data: subJ_array[4]  
              },{                             
                name: subJ[5],                        
                data: subJ_array[5] 
              },{                             
                name: subJ[6],                        
                data: subJ_array[6] 
              },{                             
                name: subJ[7],                        
                data: subJ_array[7] } ]                   
              };
              var chart = Highcharts.chart('container-32', options32);

            }


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////标题头表格//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function totalModalAjax(categoryTreeName) {
  $.ajax({
    type: "get",
    url: "http://123.206.190.167:8080/dissertation/statistics/user/count",
    data: {
      "categoryTreeName": categoryTreeName,
      "type": 0
    },
    async: true,
    dataType: "json",
    contentType: "application/json",
    success: function(obj) {
      switch(categoryTreeName) {
        case("教师科研"):
        setTableData1(obj.data);
        break;
        case("学生科研"):
        setTableData2(obj.data);
        break;
        case("教学平台"):
        setTableData3(obj.data);
        break;
      }
    },
    Error: function() {
     alert("服务器出错");
   }
 })
}
//填充数据具体操作
function setTableData1(data) {
  $('#homepageTeacherResearch').dataTable().fnClearTable();
  var option_array = [];
  $.each(data, function(index, item) {
    order = index + 1;
    var itemObj={'科研项目':0,'学术论文':0,'专利':0,'获奖':0,'著作':0,'成果采纳':0}
    $.each(item.userStatisticsBeans, function(idx, val) {
      itemObj[val.categoryLeafName] = val.count
    });
    $('#homepageTeacherResearch').dataTable().fnAddData([
      '<a href="teacherTable.html?id='+item.userName+'" id="'+item.userName+'">'+item.userName+'</a>',
      '<span>'+itemObj['科研项目']+'</span>',
      '<span>'+itemObj['学术论文']+'</span>',
      '<span>'+itemObj['专利']+'</span>',
      '<span>'+itemObj['获奖']+'</span>',
      '<span>'+itemObj['著作']+'</span>',
      '<span>'+itemObj['成果采纳']+'</span>'
      ])
  });
}
function setTableData2(data) {
  $('#homepageStudentResearch').dataTable().fnClearTable();
  var option_array = [];
  $.each(data, function(index, item) {
    order = index + 1;
    var itemObj={'学术论文':0,'竞赛获奖':0,'项目':0,'专利':0}
    $.each(item.userStatisticsBeans, function(idx, val) {
      itemObj[val.categoryLeafName] = val.count
    });
    $('#homepageStudentResearch').dataTable().fnAddData([
      '<a href="studentTable.html?id='+item.userName+'" id="'+item.userName+'">'+item.userName+'</a>',
      '<span>'+itemObj['学术论文']+'</span>',
      '<span>'+itemObj['竞赛获奖']+'</span>',
      '<span>'+itemObj['项目']+'</span>',
      '<span>'+itemObj['专利']+'</span>',
      ])
  });
}
function setTableData3(data) {
  $('#homepageTeachState').dataTable().fnClearTable();
  var option_array = [];
  $.each(data, function(index, item) {
    order = index + 1;
    var itemObj={'教改项目':0,'教学论文':0,'教材':0,'教师培训':0,'教师获奖':0,'竞赛指导':0,'实习基地':0,'实验室':0}
    $.each(item.userStatisticsBeans, function(idx, val) {
      itemObj[val.categoryLeafName] = val.count
    });
    $('#homepageTeachState').dataTable().fnAddData([
      '<a href="teacherStateTable.html?id='+item.userName+'" id="'+item.userName+'">'+item.userName+'</a>',
      '<span>'+itemObj['教改项目']+'</span>',
      '<span>'+itemObj['教学论文']+'</span>',
      '<span>'+itemObj['教材']+'</span>',
      '<span>'+itemObj['教师培训']+'</span>',
      '<span>'+itemObj['教师获奖']+'</span>',
      '<span>'+itemObj['竞赛指导']+'</span>',
      '<span>'+itemObj['实习基地']+'</span>',
      '<span>'+itemObj['实验室']+'</span>'
      ])
  });
}
//点击三个按钮的切换
$(document).on('click','.btn_stuffType .btn-primary',function() {
  $(this).siblings('.btn-primary').removeClass('stuffType_selected')
  $(this).addClass('stuffType_selected')
  var categoryTreeName = $(this).parent('.btn_stuffType').attr('id');
  var count = ($("#"+categoryTreeName+" .btn-primary").index($(this)))
  console.log("点击后的cateName" +categoryTreeName)
  console.log("点击后的count" +count)
  $.ajax({
    type: "get",
    url: "http://123.206.190.167:8080/dissertation/statistics/user/count",
    data: {
      "categoryTreeName": categoryTreeName,
      "type": count
    },
    async: true,
    dataType: "json",
    contentType: "application/json",
    success: function(obj) {
      console.log('点击后的数据')
      console.log(obj)
      switch(categoryTreeName) {
        case("教师科研"):
        setTableData1(obj.data);
        break;
        case("学生科研"):
        setTableData2(obj.data);
        break;
        case("教学平台"):
        setTableData3(obj.data);
        break;
      }
    },
    Error: function() {
     alert("服务器出错");
   }
 })

});


