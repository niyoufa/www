angular.module('starter.main_shangbiao', [])
  .controller('MainShangBiaoCtrl', function($scope,$state,$http,$rootScope) {
    console.log("商标信息");
    $scope.toDetail = function(data){
      $state.id = data.id;
      $state.go("tab.main_shangbiao_detail");
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
          $scope.brands = res.response.data.business;
        }
      })


    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }


  })




