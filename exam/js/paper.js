/**
 * Created by Administrator on 2016/9/28.
 * 试卷模块
 */
angular.module("app.paperModule",["ng"])
    .controller("paperListController",["$scope",function ($scope) {

    }])
    .controller("paperAddController",["$scope",function($scope){
        alert(1);
    }]);
/*angular.module("app.paperModule",["ng","app.subjectModule"])
    .controller("paperListController",["$scope",function ($scope) {

    }])
    /*.controller("paperAddController",["$scope","SubjectCommonService","paperModule","$routeParams","paperService", function ($scope,SubjectCommonService,paperModule,$routeParams,paperService) {
        //将查询到的所有方向数据绑定到作用域当中
        SubjectCommonService.getAllDepartment(function (data) {
            $scope.departments = data;
        });
        $scope.model = paperModule.model;
        var id = $routeParams.id;
            if(id!=0){
                paperModule.addSubjectId(id);
                paperModule.addSubject(angular.copy($routeParams));
            }
        $scope.savePaper = function(){
            paperService.savePaper($scope.model,function (data) {
                alert(data);
            })
        }
    }])
    .factory("paperService",["$http","$httpParamSerializer",function ($http,$httpParamSerializer) {
        return {
            savePaper:function (model,handler) {
                var obj = {};
                for(var key in model){
                    var val = model[key];
                    switch(key){
                        case "dId":
                            obj["paper.department"]=val;
                            break;
                        case "title":
                            obj["paper.title"]=val;
                            break;
                        case "desc":
                            obj["paper.description"]=val;
                            break;
                        case "tt":
                            obj["paper.totalPoints"]=val;
                            break;
                        case "at":
                            obj["paper.answerQuestionTime"]=val;
                            break;
                        case "scores":
                            obj["scores"]=val;
                            break;
                        case "subjects":
                            obj["subjects"]=val;
                            break;
                    }
                }
                obj = $httpParamSerializer(obj);
                $http.post("http://172.16.0.5:7777/test/exam/manager/saveExamPaper.action",obj,{
                    headers:{
                        "Content-type":"application/x-www-form-urlencoded"
                    }
                }).success(handler);
            }
        };
    }])
    .factory("paperModule",function () {
        return {
            model:{
                dId:1,
                title:"",
                desc:"",
                tt:"",
                at:"",
                scores:[],
                subjectIds:[],
                subjects:[]
            },
            addSubjectId:function (id) {
                this.model.subjectIds.push(id);
            },
            addSubject:function (subject) {
                this.model.subjects.push(subject);
            }
        };
    })*/