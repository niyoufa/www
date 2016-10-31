angular.module('starter.main_company', [])
  .controller('MainCompanyCtrl', function($scope,$state) {


    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }



    $scope.toGongshang = function(){
      $state.go("tab.main_gongshang");
    }

    $scope.toNianbao = function(){
      $state.go("tab.main_company_nianbao");
    }

    $scope.toTupu = function(){
      $state.go("tab.main_company_tupu");
    }

    $scope.toBiangeng = function(){
      $state.go("tab.main_biangeng");
    }

    $scope.toDuiwai = function(){
      $state.go("tab.main_duiwai");
    }

    $scope.toShixin = function(){
      $state.go("tab.main_shixin");
    }

    $scope.toGuquan = function(){
      $state.go("tab.main_guquan");
    }

    $scope.toBeizhixingren = function(){
      $state.go("tab.main_beizhixingren");
    }

    $scope.toQianShui = function(){
      $state.go("tab.main_qianshui");
    }

    $scope.toShangbiao = function(){
      $state.go("tab.main_shangbiao");
    }

    $scope.toYuming = function(){
      $state.go("tab.main_yuming");
    }

    $scope.toZhuanli = function(){
      $state.go("tab.main_zhuanli");
    }

    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
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




