angular.module('starter.main_duiwai', [])
  .controller('MainDuiWaiCtrl', function($scope,$state,$rootScope) {
    console.log($rootScope.company.entinv);
    $scope.sourceData=$rootScope.company.entinv;

    console.log("对外投资");
    console.log(document.getElementsByClassName("view-container")[0].offsetHeight);
    var clientHeight=document.getElementsByClassName("view-container")[0].offsetHeight;
    var headBarHeight=document.getElementsByClassName("bar")[0].clientHeight;
    var mod1Height=document.getElementById("mod1").clientHeight;
    var mod2Height=document.getElementById("mod2").clientHeight;
    var mod3Height=document.getElementById("mod3").clientHeight;

    //console.log(mod2Height);
    console.log(mod3Height);
    console.log(mod1Height);
    //console.log(headBarHeight);
    $scope.myScrollHeight=clientHeight-mod1Height-mod3Height-110-headBarHeight;
    //console.log($scope.myScrollHeight);

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




