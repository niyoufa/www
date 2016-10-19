angular.module('starter.main_guquan_detail', [])
  .controller('MainGuQuanDetailCtrl', function($scope,$state) {
    console.log("股权出质详情");

    $scope.guquan = $state.guquan;

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

    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }


  })




