angular.module('starter.main_wxLogin', [])
  .controller('MainWxLoginCtrl', function($rootScope,$ionicHistory,$compile,$ionicLoading,$rootScope,$http,$stateParams,$scope,$ionicModal,$state) {

    init();

    function init(){
      $scope.user = {};
    }

    $scope.toMain = function(){
      $ionicHistory.clearHistory();
      $state.go("tab.main");
    }

    $scope.toLogin = function(){
      if($scope.user.mobile == undefined){
        alert("请填写手机号");
      }else if($scope.user.inviteCode == undefined){
        alert("请填写邀请码");
      }else{
        login();
      }
    }

    function login(){
      $http({
        method: 'POST',
        url:basePath+'api/user',
        data: "unionid="+localStorage.getItem("openid")+"&wx_info="+localStorage.getItem("wx_info")+
        "&mobile="+$scope.user.mobile+"&password=123456&invite_code="+$scope.user.inviteCode+"&invite_user=",
        headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
      }).success(function(res){
        $rootScope.isLogin = "1";
        if(res.response.success == 1){
          $state.go("tab.main");
        }else{
          alert(res.response.error_msg);
        }
      }).error(function(error){
      })
    }


  })
