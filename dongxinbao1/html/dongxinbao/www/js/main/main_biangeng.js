angular.module('starter.main_biangeng', [])
  .controller('MainBianGengCtrl', function($scope,$state,$rootScope) {
    console.log("变更信息");

    var clientHeight=document.getElementsByClassName("view-container")[0].offsetHeight;
    var headBarHeight=document.getElementsByClassName("bar")[0].clientHeight;
    var mod1Height=document.getElementById("mod1").clientHeight;
    var mod3Height=document.getElementById("mod3").clientHeight;
    $scope.myScrollHeight=clientHeight-headBarHeight-mod1Height-mod3Height-95;

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

  })




