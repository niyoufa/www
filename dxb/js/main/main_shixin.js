angular.module('starter.main_shixin', [])
  .controller('MainShiXinCtrl', function($scope,$state,$rootScope) {
      console.log($rootScope.company);
    console.log("失信信息");

    var clientHeight=document.getElementsByClassName("view-container")[0].offsetHeight;
    var headBarHeight=document.getElementsByClassName("bar")[0].clientHeight;
    var mod1Height=document.getElementById("mod1").clientHeight;
    var mod2Height=document.getElementById("mod2").clientHeight;
    var mod3Height=document.getElementById("mod3").clientHeight;
    $scope.myScrollHeight=clientHeight-mod1Height-mod3Height-40-headBarHeight-mod2Height;

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


    $scope.show=function(mes){
      //change class
      //console.log(mes);
      //console.log(document.getElementById(JSON.stringify(mes)));
      var allInfo=document.getElementsByClassName("ffoot")[mes];
      var iTagClass=document.getElementsByClassName("hhead")[mes].getElementsByTagName('i')[0];
      if(iTagClass.getAttribute("class")=="icon ion-chevron-right"){
        iTagClass.setAttribute("class","icon ion-chevron-down");
        allInfo.style.display='';
      }
      else{
        iTagClass.setAttribute("class","icon ion-chevron-right");
        allInfo.style.display='none';
      }
    }

    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }


  })




