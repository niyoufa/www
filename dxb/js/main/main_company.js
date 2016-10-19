angular.module('starter.main_company', [])
  .controller('MainCompanyCtrl', function($scope,$state,$http,$rootScope,$ionicLoading) {


    init();

    function init(){
      $ionicLoading.show();
      $http.get(basePath+"/api/enterprise?regno="+$rootScope.companyData.no+"&keyno="+$rootScope.companyData.keyno+"&name="+$rootScope.companyData.name)
        .success(function(res){
          $ionicLoading.hide();

          $rootScope.company = res.response.data;


        })
    }

    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }



    $scope.toGongshang = function(){
      //showComingSoon();
      $state.go("tab.main_gongshang");
    }

    $scope.toNianbao = function(){
      showComingSoon();
      //$state.go("tab.main_company_nianbao");
    }

    $scope.toTupu = function(){
      showComingSoon();
      //$state.go("tab.main_company_tupu");
    }

    $scope.toBiangeng = function(){
      //showComingSoon();
      $state.go("tab.main_biangeng");
    }

    $scope.toDuiwai = function(){
      //showComingSoon();
      $state.go("tab.main_duiwai");
    }

    $scope.toShixin = function(){
      //showComingSoon();
      $state.go("tab.main_shixin");
    }

    $scope.toGuquan = function(){
      //showComingSoon();
      $state.go("tab.main_guquan");
    }

    $scope.toBeizhixingren = function(){
      //showComingSoon();
      $state.go("tab.main_beizhixingren");
    }

    $scope.toQianShui = function(){
      showComingSoon();
      //$state.go("tab.main_qianshui");
    }

    $scope.toShangbiao = function(){
      showComingSoon();
      //$state.go("tab.main_shangbiao");
    }

    $scope.toYuming = function(){
      showComingSoon();
      //$state.go("tab.main_yuming");
    }

    $scope.toZhuanli = function(){
      //showComingSoon();
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

    function showComingSoon(){

      $(".comingSoon").slideDown("fast");
      setTimeout('$(".comingSoon").slideUp("fast")',1000);
    }


    $(".prompt").bind("click",function(e){
      var target = $(e.target);
      if(target.closest(".prompt .content").length == 0){
        $(".prompt").addClass("hide");
      }else{

      }
    })


























  })




