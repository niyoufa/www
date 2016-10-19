angular.module('starter.cart_success', [])
  .controller('CartSuccessCtrl', function($http,$stateParams,$scope,$ionicHistory,$state) {

    $scope.toMain = function(){
      $ionicHistory.clearHistory();
      $state.go("tab.main");
    }

  })
