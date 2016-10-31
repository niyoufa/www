angular.module('starter.tab-account', [])
  .controller('AccountCtrl', function($scope,$state) {

    $scope.$on('$ionicView.enter', function(e) {
      init();
    });



    function init(){

      $scope.headimgurl = localStorage.getItem("headimgurl");
      $scope.nickname = localStorage.getItem("nickname");
      if(localStorage.getItem("toOrder") == "1"){
        localStorage.setItem("toOrder","0");
        alert(localStorage.getItem("toOrder_state"));
        $state.go("tab.account_order");
      }

    }

    $scope.toAccountOrder = function(){
      $state.go("tab.account_order");
    }

    $scope.toBindTel = function(){
      $state.go("tab.account_bindtel");
    }

    $scope.toAdivce = function(){
      $state.go("tab.account_advice");
    }

    $scope.toFuwu = function(){
      $state.go("tab.account_fuwu");
    }

    $scope.toGuanyu = function(){
      $state.go("tab.account_guanyu");
    }

  })




