angular.module('starter.main_shangbiao_detail', [])
  .controller('MainShangBiaoDetailCtrl', function($scope,$state,$http) {
    console.log("商标详情");

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

    $scope.id = $state.id;


    $http.get(basePath+'/api/sbdetail?id='+ $scope.id)
      .success(function(res){
        if(res.response.success==1){
          //成功
          $scope.data = res.response.data;
          //alert(res.response.data);
        }
      })


    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }


  })






