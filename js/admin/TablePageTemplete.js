/*
* @Author: Administrator
* @Date:   2017-11-29 14:41:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-09 23:48:32
*/

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












