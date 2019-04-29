/*
* @Author: Administrator
* @Date:   2017-12-02 09:09:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-04 15:50:24
*/
var map = {
    TeacherResearch: "教师科研",
    StudentResearch: "学生科研",
    TeachState: "教学平台",
    StuffManage: "人员管理",

    ScienceProject: "科研项目",
    Patent: "专利",
    AcademicPapers: "学术论文",
    AchievementAdoption: "成果采纳",
    Writting: "著作",
    Reward: "获奖",

    StudentProject: "项目",
    CompetitionAward: "竞赛获奖",
    // AcademicPapers:"学术论文",
    // Patent: "专利",

    EducationReform: "教改项目",
    EducationPaper: "教学论文",
    TeachingMaterial: "教材",
    TeacherTraining: "教师培训",
    TeacherAward: "教师获奖",
    CompetitionGuidance: "竞赛指导",
    PracticeBase: "实习基地",
    Laboratory: "实验室",

    TeacherInfo: "教师信息",
    OtherTeacherInfo: "其他教师信息",
    StudentInfo: "学生信息",
    StudentAccount: "学生账号",
}

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

        },
        AcademicPapers: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '学术论文名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一作者',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '刊物级别',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '发表时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"其他"}],
            orderable: [0, 2, 3, 4, 6],

        },
        AchievementAdoption: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '采纳成果名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一完成人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '采纳单位',
                    name: 'department',
                    flatten: false
                }, {
                    id: 5,
                    title: '采纳时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"科研项目类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],

        },
        Patent: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '授权专利名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一发明人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '专利种类',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '授权时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"专利名称"},{"title":"专利类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],

        },
        Reward: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '获奖科研成果名称（种类）',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一责任人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '获奖等级',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '获奖时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"其他"}],
            orderable: [0, 2, 3, 4, 6],

        },
        Writting: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '著作题目',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一作者',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '职称',
                    name: 'jobName',
                    flatten: true
                }, {
                    id: 5,
                    title: '出版时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"其他"}],
            orderable: [0, 2, 3, 4, 6],

        }
    },
    StudentResearch: {
        AcademicPapers: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '学术论文名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一作者',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '刊物级别',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '发表时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"其他"}],
            orderable: [0, 2, 3, 4, 6],
        },
        CompetitionAward: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '项目名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一责任人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '获奖等级',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '获奖时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"竞赛获奖名称"},{"title":"竞赛获奖类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        StudentProject: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '项目名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一责任人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '项目级别',
                    name: 'lavel',
                    flatten: true
                }, {
                    id: 5,
                    title: '立项时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"项目类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        Patent: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '授权专利名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一发明人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '专利种类',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '授权时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"专利名称"},{"title":"专利类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
    },
    TeachState: {
        EducationReform: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '教改项目名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一责任人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '项目级别',
                    name: 'level',
                    flatten: true
                }, {
                    id: 5,
                    title: '立项时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"教改项目名称"},{"title":"教改项目类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        EducationPaper: {
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
                    title: '第一作者',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '刊物级别',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '发表时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"教学论文名称"},{"title":"教学论文类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        TeachingMaterial: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '著作题目',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一作者',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '职称',
                    name: 'jobName',
                    flatten: true
                }, {
                    id: 5,
                    title: '出版时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"教材名称"},{"title":"教材类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        TeacherTraining: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '培训名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '参加人',
                    name: 'participantNames',
                    flatten: true
                }, {
                    id: 4,
                    title: '职称',
                    name: 'jobName',
                    flatten: true
                }, {
                    id: 5,
                    title: '培训时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"教材名称"},{"title":"教材类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        TeacherAward: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '项目名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '第一责任人',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '获奖等级',
                    name: 'awardLevel',
                    flatten: true
                }, {
                    id: 5,
                    title: '获奖时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"教师获奖名称"},{"title":"教师获奖类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        CompetitionGuidance: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '竞赛名称',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '指导老师',
                    name: 'guideTeacher',
                    flatten: true
                }, {
                    id: 4,
                    title: '竞赛级别',
                    name: 'raceLevel',
                    flatten: true
                }, {
                    id: 5,
                    title: '竞赛时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"项目名称"},{"title":"第一责任人"},{"title":"立项时间"},{"title":"其他"}],
            orderable: [0, 2, 3, 4, 6],
        },
        Laboratory: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '实验室',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '指导老师',
                    name: 'guideTeacher',
                    flatten: true
                }, {
                    id: 4,
                    title: '实验室地址',
                    name: 'address',
                    flatten: false
                }, {
                    id: 5,
                    title: '创立时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"实验室名称"},{"title":"实验室类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],
        },
        PracticeBase: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '实习基地',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '对接老师',
                    name: 'guideTeacher',
                    flatten: true
                }, {
                    id: 4,
                    title: '实习地点',
                    name: 'address',
                    flatten: false
                }, {
                    id: 5,
                    title: '对接时间',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '信息完整度',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [{"title":"实习基地名称"},{"title":"实习基地类型"},{"title":"第一责任人"},{"title":"立项时间"}],
            orderable: [0, 2, 3, 4, 6],

        },
    },
    StuffManage: {
        TeacherInfo: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '姓名',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '工号',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '职称',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '职务',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '专业',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 7,
                    title: '财务账号',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 8,
                    title: '联系方式',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 9,
                    title: '邮箱',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [],
            orderable: [0, 2, 3, 4, 6],
        },
        OtherTeacherInfo: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '姓名',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '单位',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '工号',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '职称',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '职务',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 7,
                    title: '专业',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 8,
                    title: '财务账号',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 9,
                    title: '联系方式',
                    name: 'completeRate',
                    flatten: false
                }, {
                    id: 10,
                    title: '邮箱',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [],
            orderable: [0, 2, 3, 4, 6],
        },
        StudentInfo: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '姓名',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '学号',
                    name: 'author',
                    flatten: true
                }, {
                    id: 4,
                    title: '专业',
                    name: 'arrangement',
                    flatten: true
                }, {
                    id: 5,
                    title: '年级',
                    name: 'date',
                    flatten: false
                }, {
                    id: 5,
                    title: '联系方式',
                    name: 'date',
                    flatten: false
                }, {
                    id: 6,
                    title: '邮箱',
                    name: 'completeRate',
                    flatten: false
                }
            ],
            importColumns: [],
            orderable: [0, 2, 3, 4, 6],
        },
        StudentAccount: {
            columns: [
                {
                    id: 1,
                    title: '序号',
                    name: 'order',
                    flatten: false
                }, {
                    id: 2,
                    title: '学生姓名',
                    name: 'name',
                    flatten: false
                }, {
                    id: 3,
                    title: '学生账号',
                    name: 'author',
                    flatten: true
                }
            ],
            importColumns: [],
            orderable: [],
        },
    }
};

const prefixUrl = 'https://nei.netease.com/api/apimock/65f140b55e2da50e553e4a5a8be4f9ba/'
// const prefixUrl = 'http://192.168.1.140:8080/'
// const prefixUrl = 'http://192.168.1.106:8080/'

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------构建导航栏--------------------------------------*/
/*----------------------------------------------------------------------------------------*/

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
        <input type="button" id="fileupload" class="btn btn-primary upLoadBtn" value="上传"/>\
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

function setCategoryTree(obj){
    $.each(obj.data, function(index, val) {
        switch (val.uniqueName){
            case "TeacherResearch":
                mainNav = mainNav+'<li id="'+val.uniqueName+'">\
			<a href="../TeacherResearch/ScienceProject.html"><span aria-hidden="true" class="fa fa-pencil-square-o""></span>教师科研</a>\
			</li>';
                var subNav = '<ul class="nav nav-pills nav-stacked '+val.uniqueName+'" style="display:none">';
                $.each(val.categoryLeaves, function(index, item) {
                    subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'">\
                    <a href="'+ item.categoryLeafName + '.html">' + map[item.categoryLeafName] +'</a>'
                });
                subNav=subNav+'</ul>';
                $("#sub-nav").append(subNav);
                break;

            case "StudentResearch":
                mainNav = mainNav+'<li id="'+val.uniqueName+'">\
			<a href="../StudentResearch/StudentProject.html"><span aria-hidden="true" class="fa fa-file-text"></span>学生科研</a>\
			</li>';
                var subNav = '<ul class="nav nav-pills nav-stacked '+val.uniqueName+'" style="display:none">';
                $.each(val.categoryLeaves, function(index, item) {
                    subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'">\
                    <a href="'+ item.categoryLeafName + '.html">' + map[item.categoryLeafName] +'</a>'
                });
                subNav=subNav+'</ul>';
                $("#sub-nav").append(subNav);
                break;

            case "TeachState":
                mainNav = mainNav+'<li id="'+val.uniqueName+'">\
			<a href="../TeachState/EducationReform.html"><span aria-hidden="true" class="fa fa-book"></span>教学平台</a>\
			</li>'
                var subNav = '<ul class="nav nav-pills nav-stacked '+val.uniqueName+'" style="display:none">';
                $.each(val.categoryLeaves, function(index, item) {
                    subNav = subNav + '<li id="'+item.formId+'" class="'+item.categoryLeafName+'">\
                    <a href="'+ item.categoryLeafName + '.html">' + map[item.categoryLeafName] +'</a>'
                });
                subNav=subNav+'</ul>';
                $("#sub-nav").append(subNav);
                break;
        }
    });

    mainNav = mainNav+'<li id="StuffManage">\
	<a href="../StuffManage/TeacherInfo.html"><span aria-hidden="true" class="fa fa-users"></span>人员管理</a>\
	</li><li id="TagManage">\
	<a href="../TagManage/TagStore.html"><span aria-hidden="true" class="fa fa-tags"></span>标签管理</a>\
	</li></ul></div>'

    $("#sub-nav").append('<ul class="nav nav-pills nav-stacked StuffManage" style="display: none">\
	<li id="TeacherInfo" class="TeacherInfo">\
	<a href="TeacherInfo.html">教师信息</a>\
	</li>\
	<li id="OtherTeacherInfo" class="OtherTeacherInfo">\
	<a href="OtherTeacherInfo.html">其他教师信息</a>\
	</li>\
	<li id="StudentInfo" class="StudentInfo">\
	<a href="StudentInfo.html">学生信息</a>\
	</li>\
	<li id="StudentAccount" class="StudentAccount">\
	<a href="StudentAccount.html">学生账号</a>\
	</li>\
	</ul>\
	<ul class="nav nav-pills nav-stacked TagManage" style="display:none">\
	<li id="TagStore" class="TagStore">\
	<a href="TagStore.html">语义标签库</a>\
	</li>\
	<li id="TagDocument" class="TagDocument">\
	<a href="TagDocument.html">语义标签文档</a>\
	</li>\
	</ul>');

    $("#main-nav").html(mainNav);
}

var mainNav = '<div class="nav-collapse"><ul class="nav"><li id="adminHomePage"><a href="../HomePage/adminHomePage.html"><span aria-hidden="true" class="fa fa-home"></span>首页</a></li>';

$(document).on('click', '#main-nav li', function() {
    var subNavId = $(this).attr('id');
    $("#sub-nav").children('.nav').css('display', 'none');
    $("."+subNavId).css('display', 'block');
    $('.current').removeClass('current')
    $(this).children('a').addClass('current');
})

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------TablePageTemplate------------------------------*/
/*----------------------------------------------------------------------------------------*/

//获取目录 OK
function catagoryAjax(mainDirectory, subDirectory) {
    var mainClass = '.' + mainDirectory
    var mainId = '#' + mainDirectory + ' a'
    var subClass = '.' + subDirectory
    $.ajax({
        type: "get",
        url: prefixUrl + "categoryTree",
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
        type: "GET",
        url:prefixUrl + 'asset/'  + requestDataSource,
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
                    // columnContent.push('<a href="' + subDirectory + 'Detail.html" id="' + item.id + '">' + item.name + '</a>')
                    columnContent.push('<a href="' + subDirectory + 'Detail.html?id=' + item.id + '" id="' + item.id + '">' + item.name + '</a>')
                    break;
                case 'type':
                case 'author':
                case 'lavel':
                case 'level':
                case 'jobName':
                case 'arrangement':
                case 'department':
                case 'guideTeacher':
                case 'raceLevel':
                case 'awardLevel':
                case 'participantNames':
                case 'address':
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

// 导出模版
function doDownloadTemplate(mainDirectory, subDirectory, requestDataSource) {
    var url = prefixUrl + 'excel/template/' + requestDataSource + '?fileName=' + map[mainDirectory] + '-' + map[subDirectory] + '模板'
    window.open(url)
}

function doDownloadAll(mainDirectory, subDirectory, requestDataSource) {
    var url = prefixUrl + 'excel/all/' + requestDataSource + '?fileName=' + map[mainDirectory] + '-' + map[subDirectory] + '全部'
    window.open(url)
}

// 选中序号构造下载url TODO
function doDownloadSelected(mainDirectory, subDirectory, requestDataSource) {
    var url = prefixUrl + 'excel/'+ requestDataSource +'&fileName=' + map[mainDirectory] + '-' + map[subDirectory] + '部分&ids='
    var ids = ""
    $("input:checked").each(function () {
        var id = $(this).parent().next().next().find("a").attr("id")
        ids = ids + id + ","
    })
    if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
    }
    window.open(url + ids)
}

function fileupload(requestDataSource) {
    alert(prefixUrl + "excel/" + requestDataSource)
    var formdata = new FormData($("form[name='uploadForm']")[0])
    $.ajax({
        url: prefixUrl + "excel/" + requestDataSource,
        type: "post",
        data: formdata,
        contentType: false,
        processData: false,
        cache: false,
        success: function (data) {
        }
    })
}

function importResult(mainDirectory, subDirectory, requestDataSource) {
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
        url: prefixUrl + "assets/deleted",
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

function timeSearch(mainDirectory, subDirectory, requestDataSource) {
    var startDate
    var endDate
    var current = new Date().Format("yyyy-MM-dd");
    if($(".dateInput2").val()) {
        current =$(".dateInput2").val()
        $.ajax({
            type: "get",
            url: prefixUrl + "asset/" + requestDataSource+"/date",
            data: {
                "current": current
            },
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                console.log(data)
                setTableData(mainDirectory, subDirectory, data)
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
            url: prefixUrl + "asset/" + requestDataSource +"/date",
            data: {
                "begin": startDate,
                "end": endDate
            },
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                setTableData(mainDirectory, subDirectory, data)
            },
            Error: function() {
                alert("服务器出错");
            }
        })

    }

}

//显示收藏夹
$(document).on('click', '.btn-collection', function(event) {
    $.ajax({
        type: "GET",
        url: prefixUrl + "collection/columns",
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(obj) {
            $('#collectName').AutoComplete({
                'data':  obj.columnList,
                'itemHeight': 20,
                'width': 180
            });
        },
        Error: function() {
            alert("服务器出错");
        }
    })
});

// //批量收藏
$(document).on('click', '.sureMoveIn_dataYes', function() {
    var idd = new Array();
    var collectionName = $('#collectName').val()
    console.log(collectionName)
    $("input[type='checkbox']:checked").each(function(i){
        idd[i] = $(this).parents("tr").children('td:eq(2)').children('a').attr('id');
        $('#sureMoveIn_data').modal('hide')
    });
    $.ajax({
        type: "POST",
        url: prefixUrl + "collection/addCollection",
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

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------DetailPageTemplate------------------------------*/
/*----------------------------------------------------------------------------------------*/

// TODO useless???
function buildDetailInfoBlock(mainDirectory, subDirectory, infoData) {
    var field = cmap[mainDirectory][subDirectory]['detailField'];
    var basicInfo = field.basicInfo
    var detailInfo = field['detailInfo']
    console.log('basicInfo',basicInfo)
    var basicInfoHtml = ''
    var detailInfoHtml = ''
    $.each(basicInfo, function (index, val) {
        if (val in infoData) {
            switch (val)
            {
                case 'name':
                    basicInfoHtml += '<div class="form-group col-md-6 formBlock wordBreak">\
                            <label class="formItem">*项目名称：</label>\
                            <input type="text" class="form-control" name="name" value="">\
                            <span class="originInfo name"></span>\
                        </div>'
            }
        }
    })

}

// TODO change id
function fillDetailAjax(mainDirectory, subDirectory, dataResource, id) {
    $.ajax({
        type: "get",
        // url: prefixUrl + 'asset/' +  dataResource + '/{id}',
        url: prefixUrl + 'asset/' +  dataResource + '/' + id,
        data: {
        },
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(obj) {
            console.log(obj, mainDirectory, subDirectory)
            fillDetail(obj)
        },
        Error: function() {
            alert("服务器出错");
        }
    })
}

function AutoDatafill() {
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
            $.each(obj.data, function(index, val) {
                participant.push(val.uniqueName)
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
}

function fillDetail(obj) {
    AutoDatafill()
    $.each(obj.data, function(key, val) {
        if (!val) {
            $("input[name='"+key+"']").parents(".formBlock").addClass('unfilled')
        };
    });
    var participantNames
    var order
    if (obj.data.participantNames) {
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
    }
    $.each(obj.data.tags, function(index, val) {
        console.log(val)
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

    $(".fund").html(obj.data.fund)
    $("input[name='fund']").val(obj.data.fund)

    $(".lavel").html(obj.data.lavel)
    $("input[name='lavel']").val(obj.data.lavel)

    $(".level").html(obj.data.level)
    $("input[name='level']").val(obj.data.level)

    $(".publicationName").html(obj.data.publicationName)
    $("input[name='publicationName']").val(obj.data.publicationName)

    $(".volume").html(obj.data.volume)
    $("input[name='volume']").val(obj.data.volume)

    $(".stage").html(obj.data.stage)
    $("input[name='stage']").val(obj.data.stage)

    $(".arrangement").html(obj.data.arrangement)
    $("input[name='arrangement']").val(obj.data.arrangement)

    $(".signatureType").html(obj.data.signatureType)
    $("input[name='signatureType']").val(obj.data.signatureType)

    $(".graduate").html(obj.data.graduate)
    $("input[name='graduate']").val(obj.data.graduate)

    $(".category").html(obj.data.category)
    $("input[name='category']").val(obj.data.category)

    $(".applyDate").html(obj.data.applyDate)
    $("input[name='applyDate']").val(obj.data.applyDate)

    $(".number").html(obj.data.number)
    $("input[name='number']").val(obj.data.number)

    $(".company").html(obj.data.company)
    $("input[name='company']").val(obj.data.company)

    $(".netNumber").html(obj.data.netNumber)
    $("input[name='netNumber']").val(obj.data.netNumber)

    $(".alisName").html(obj.data.alisName)
    $("input[name='alisName']").val(obj.data.alisName)

    $(".publish").html(obj.data.publish)
    $("input[name='publish']").val(obj.data.publish)

    $(".bookName").html(obj.data.bookName)
    $("input[name='bookName']").val(obj.data.bookName)

    $(".wordNumber").html(obj.data.wordNumber)
    $("input[name='wordNumber']").val(obj.data.wordNumber)

    $(".grade").html(obj.data.grade)
    $("input[name='grade']").val(obj.data.grade)

    $(".found").html(obj.data.found)
    $("input[name='found']").val(obj.data.found)

    $(".plannedTime").html(obj.data.plannedTime)
    $("input[name='plannedTime']").val(obj.data.plannedTime)

    $(".concludingForm").html(obj.data.concludingForm)
    $("input[name='concludingForm']").val(obj.data.concludingForm)

    $(".contractNum").html(obj.data.contractNum)
    $("input[name='contractNum']").val(obj.data.contractNum)

    $(".projectSource").html(obj.data.projectSource)
    $("input[name='projectSource']").val(obj.data.projectSource)

    $(".periodical").html(obj.data.periodical)
    $("input[name='periodical']").val(obj.data.periodical)

    $(".totalFee").html(obj.data.totalFee)
    $("input[name='totalFee']").val(obj.data.totalFee)

    $(".press").html(obj.data.press)
    $("input[name='press']").val(obj.data.press)

    $(".address").html(obj.data.address)
    $("input[name='address']").val(obj.data.address)

    $(".awardLevel").html(obj.data.awardLevel)
    $("input[name='awardLevel']").val(obj.data.awardLevel)

    $(".awardDepartment").html(obj.data.awardDepartment)
    $("input[name='awardDepartment']").val(obj.data.awardDepartment)

    $(".awardName").html(obj.data.awardName)
    $("input[name='awardName']").val(obj.data.awardName)

    $(".raceLevel").html(obj.data.raceLevel)
    $("input[name='raceLevel']").val(obj.data.raceLevel)

    $(".contactTeacher").html(obj.data.contactTeacher)
    $("input[name='contactTeacher']").val(obj.data.contactTeacher)

    $(".stuNumber").html(obj.data.stuNumber)
    $("input[name='stuNumber']").val(obj.data.stuNumber)

    $(".guideTeacher").html(obj.data.guideTeacher)
    $("input[name='guideTeacher']").val(obj.data.guideTeacher)

    $(".otherPartners").html(participantNames)
    var completeRate=Math.round(obj.data.completeRate*100)

    $('.progress-bar').css('width', completeRate+'%');
    $('.progress-bar span').text(completeRate+'%');

    $('#lixiang').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data.otherFileInfo[0]);
    $('#proofMaterial1').html(obj.data.otherTextInfo[0])
    $('#jieti').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data.otherFileInfo[1]);
    $('#proofMaterial2').html(obj.data.otherTextInfo[1])
    $('#hetong').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data.otherTextInfo[2]);
    $('#proofMaterial3').html(obj.data.otherTextInfo[2])
}

//下载附件
$('.Uploadfile').click(function(event) {
    var url = prefixUrl + '/file/' + id;
});

//上传附件
function upFileFunc1() {
    var files = $('#lixiang').prop('files');
    var data = new FormData();

    alert(files[0].name)
    var filename = files[0].name
    data.append('files', files[0]);
    $.ajax({
        url: prefixUrl + 'files',
        type: 'POST',
        data: data,
        dataType: 'JSON',
        cache: false,
        processData: false,
        contentType: false,
        success: function (obj) {
            console.log(obj)
            var url = prefixUrl + obj.data[0].split("/")[3] + '/' + obj.data[0].split("/")[4];
            alert(url)
            $('#lixiang').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", url);
            $('#proofMaterial1').html(filename)
        },
    });
}

function upFileFunc2() {
    var files = $('#jieti').prop('files');
    var data = new FormData();
    var filename = files[0].name
    data.append('jieti', files[0]);
    $.ajax({
        url: prefixUrl + '/files',
        type: 'POST',
        data: data,
        dataType: 'JSON',
        cache: false,
        processData: false,
        contentType: false,
        success: function(obj) {
            console.log(obj)
            $('#jieti').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
            $('#proofMaterial2').html(filename)
        },
    });
}

function upFileFunc3() {
    var files = $('#hetong').prop('files');
    var data = new FormData();
    var filename = files[0].name
    data.append('hetong', files[0]);
    $.ajax({
        url: prefixUrl + '/files',
        type: 'POST',
        data: data,
        dataType: 'JSON',
        cache: false,
        processData: false,
        contentType: false,
        success: function(obj) {
            console.log(obj)
            $('#hetong').parents('.formBlock').children('.filebtn').children('.downfile').attr("href", obj.data[0]);
            $('#proofMaterial3').html(filename)
        },
    });
}

//预览附件
$('.PreviewFile').click(function(event) {
    var beforeRef = $(this).parents('.formBlock').children('.filebtn').children('.downfile').attr('href');
    console.log(beforeRef)
    var fid = beforeRef.split("/")[5]
    var afterRef = "http://10.21.30.203:8012/onlinePreview?url="+beforeRef
    window.open(afterRef)
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
    $('.tagbtn').css('top', '65px');
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

    var id = window.location.href.split("?")[1].split("=")[1];
    alert(id)
    var data = {
        "id": id,
        "name": $("input[name='name']").val(),
        "type": $("input[name='type']").val(),
        "author": $("input[name='author']").val(),
        "date": $("input[name='date']").val(),
        "completeRate": 0.55,
        "projectNumber": $("input[name='projectNumber']").val(),
        "source": $("input[name='source']").val(),
        "funds": $("input[name='funds']").val(),
        "fund": $("input[name='fund']").val(),
        "found": $("input[name='found']").val(),
        "knotForm": $("input[name='knotForm']").val(),
        "projectMaterial": $('.downfile_1').attr('href'),
        "knotMaterial": $('.downfile_2').attr('href'),
        "projectContract": $('.downfile_3').attr('href'),
        "lavel": $("input[name='lavel']").val(),
        "level": $("input[name='level']").val(),
        "publicationName": $("input[name='publicationName']").val(),
        "volume": $("input[name='volume']").val(),
        "stage": $("input[name='stage']").val(),
        "arrangement": $("input[name='arrangement']").val(),
        "signatureType": $("input[name='signatureType']").val(),
        "graduate": $("input[name='graduate']").val(),
        "paper": $('.downfile_1').attr('href'),
        "certificate": $('.downfile_2').attr('href'),
        "department": $("input[name='department']").val(),
        "category": $("input[name='category']").val(),
        "applyDate": $("input[name='applyDate']").val(),
        "number": $("input[name='number']").val(),
        "company": $("input[name='company']").val(),
        "netNumber": $("input[name='netNumber']").val(),
        "prove": $('.downfile_1').attr('href'),
        "prove2": $('.downfile_2').attr('href'),
        "alisName": $("input[name='alisName']").val(),
        "achievementsName": $("input[name='achievementsName']").val(),
        "publish": $("input[name='publish']").val(),
        "bookName": $("input[name='bookName']").val(),
        "wordNumber": $("input[name='wordNumber']").val(),
        "book": $('.downfile_1').attr('href'),
        "grade": $("input[name='grade']").val(),
        "plannedTime": $("input[name='plannedTime']").val(),
        "concludingForm": $("input[name='concludingForm']").val(),
        "contractNum": $("input[name='contractNum']").val(),
        "projectSource": $("input[name='projectSource']").val(),
        "periodical": $("input[name='periodical']").val(),
        "press": $("input[name='press']").val(),
        "totalFee": $("input[name='totalFee']").val(),
        "address": $("input[name='address']").val(),
        "awardLevel": $("input[name='awardLevel']").val(),
        "awardDepartment": $("input[name='awardDepartment']").val(),
        "awardName": $("input[name='awardName']").val(),
        "raceLevel": $("input[name='raceLevel']").val(),
        "contactTeacher": $("input[name='contactTeacher']").val(),
        "stuNumber": $("input[name='stuNumber']").val(),
        "guideTeacher": $("input[name='guideTeacher']").val(),
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
    }

    $.ajax({
        type: "put",
        url: prefixUrl + 'asset/' + "ScientificProject",
        data: JSON.stringify(data),
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

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------小功能-----------------------------------------*/
/*----------------------------------------------------------------------------------------*/

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
    //ok
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

Date.prototype.Format = function (fmt) {
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

//复选框选择
$(document).on('click', 'tr td:not(:first)', function() {
    console.log($(this).siblings().first().children()[0])
    if ($(this).siblings().first().children().is(':checked') == false) {
        $(this).siblings().first().children().attr("checked", true);
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

/*----------------------------------------------------------------------------------------*/
/*-----------------------------------------页面调用----------------------------------------*/
/*----------------------------------------------------------------------------------------*/

function templateIndex(mainDirectory, subDirectory, requestDataSource) {
    indexStart()
    importResult(mainDirectory, subDirectory,requestDataSource)
    catagoryAjax(mainDirectory, subDirectory)
    buildTable(mainDirectory, subDirectory)
    fillTableDataAjax(mainDirectory, subDirectory, requestDataSource)

    $(".datepicker").datepicker({endDate: new Date()});
    $('.dateSearch').click(function (event) {
        timeSearch(mainDirectory, subDirectory, requestDataSource)
    });

    $(document).on('click', '#doDownloadTemplate', function () {
        doDownloadTemplate(mainDirectory, subDirectory, requestDataSource)
    })
    $(document).on('click', '#doDownloadAll', function () {
        doDownloadAll(mainDirectory, subDirectory, requestDataSource)
    })
    $(document).on('click', '#doDownloadSelected', function () {
        doDownloadSelected(mainDirectory, subDirectory, requestDataSource)
    })
    $(document).on('click', '#fileupload', function () {
        fileupload(requestDataSource)
    })
    $(document).on('click', '.sureDelete_dataYes', function () {
        deleteData(subDirectory)
    });
}
