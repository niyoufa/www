angular.module('starter.main_beizhixingren', [])
  .controller('MainBeiZhiXingRenCtrl', function($scope,$state,$rootScope) {
    console.log("变更信息");

    init();
    function init(){

      $scope.punishWrapList = new Array();
      //var count = $rootScope.company.caseinfolist.length;
      //for (var i=0; i<count; i++) {
      //  var obj = $rootScope.company.caseinfolist[i];
      //  $scope.groups[i] = {
      //    //name: "被执行案件"+(i+1).toString()+":"+obj.pendecno,
      //    name: (i+1).toString()+":"+obj.pendecno,
      //    object: obj,
      //    show: false
      //  };
      //}

      var count = $rootScope.company.punishedinfolist.length;
      for (var i=0; i<count; i++) {
        var punishInfo = $rootScope.company.punishedinfolist[i];
        $scope.punishWrapList[i] = {
          //name: (i+1).toString()+":"+punishInfo.CaseCode,
          name: (i+1).toString()+":",
          punishInfo: punishInfo,
          show: false
        };
      }

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



    //$scope.groups = [];
    //for (var i=0; i<10; i++) {
    //  $scope.groups[i] = {
    //    name: i,
    //    items: [],
    //    show: false
    //  };
    //  for (var j=0; j<1; j++) {
    //    $scope.groups[i].items.push(i + '-' + j);
    //  }
    //}

    $scope.toggleGroup = function(group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
      return group.show;
    };
    $scope.toBaogao = function(){
      $state.go("tab.main_company_baogao");
    }

  })


