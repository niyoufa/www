angular.module('starter.tab-account', [])
  .controller('AccountCtrl', function($scope,$state) {

    init();

    function init(){
      localStorage.setItem("state","account");
      $scope.headimgurl = localStorage.getItem("headimgurl");
      $scope.nickname = localStorage.getItem("nickname");
    }

    $scope.setup=function(){
      $state.go("tab.setup");
    }

    $scope.toOrder = function(){
      $state.go("tab.account_order");
    }

    $scope.toAddress = function(){
      localStorage.setItem("state","account");
      $state.go("tab.account_chooseAddress");
    }

    $scope.toBusiness = function(){
      localStorage.setItem("state","account");
      $state.go("tab.account_business");
    }
    $scope.toBill=function(){
      $state.go("tab.account_bill");
    }
    $scope.toSale=function(){
      $state.go("tab.account_sale");
    }
  })
