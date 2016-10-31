angular.module('starter.main_company_nianbao', [])
  .controller('MainCompanyNianBaoCtrl', function($scope,$state) {
    console.log("企业年报");


    $scope.toDetail = function(){
      $state.go("tab.main_company_nianbao_detail");
    }

    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }

    $scope.go_nianbao_detail = function(){
      $state.go("tab.main_company_nianbao_detail")
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

  })




