angular.module('starter.main_zhuangli', [])
  .controller('MainZhuanLiCtrl', function($scope,$state,$http,$rootScope) {
    console.log("专利信息");

    $scope.toDetail = function(data){
      $state.data = data;
      $state.go("tab.main_zhuanli_detail");

    }

    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }

    function GeneralTipsHeight(GeneralTipsHeight){
      var screenHeight = $(window).height();
      var height = parseInt(GeneralTipsHeight.css("height").split("px")[0])+10;

      var endTop = (screenHeight-height)/2;

      GeneralTipsHeight.css("top",endTop);
    }


    $(".prompt").bind("click",function(e){
      var target = $(e.target);
      if(target.closest(".prompt .content").length == 0){
        $(".prompt").addClass("hide");
      }else{

      }
    })

    $http.get(basePath+"/api/enterprise?regno="+$rootScope.companyData.no+"&keyno="+$rootScope.companyData.keyno+"&name="+$rootScope.companyData.name)
      .success(function(res){
        if(res.response.success==1){
          //成功
          $scope.patents = res.response.data.patent;
        }
      })

    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }

    //$scope.patents = ['专利名称1','专利名称2','专利名称3','专利名称4'];

  })




