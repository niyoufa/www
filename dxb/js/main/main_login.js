angular.module('starter.main_login', [])
  .controller('MainLoginCtrl', function($scope,$http,$rootScope,$state,$ionicLoading,$ionicHistory) {
    $scope.user = {};

    $scope.suo = 0;

    $scope.toRegister = function(){
      $state.go("tab.main_register");
    }

    $scope.toForgetPassowrd = function(){
      $state.go("tab.main_forget_password");
    }

    $scope.doLogin = function(){
      $http({
        method: 'POST',
        url:basePath+'/api/user/login',
        data: "mobile="+$scope.user.mobile+"&password="+$scope.user.password,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
      }).success(function(response){
        alert(JSON.stringify(response));
        localStorage.setItem("headimgurl",response.response.data.wx_user.headimgurl);
        localStorage.setItem("nickname",response.response.data.wx_user.nickname);
        localStorage.setItem("user_id",response.response.data._id);
        $ionicHistory.clearHistory();
        $state.go("tab.main");
      }).error(function(response){

      })
    }

    $scope.doLoginWX = function(){
      $ionicLoading.show();
      if(localStorage.getItem("device") == "Android" && $scope.suo == 0){
        $scope.suo = 1;
        var extraInfo = cordova.require('com.xulei.weixin.cordova.ExtraInfo');
        extraInfo.wx_login(function(message) {
          $ionicLoading.hide();
          if(message.length>2){
            localStorage.setItem("isLogin","1");
            localStorage.setItem("login_code",message);
            var uni = JSON.parse(localStorage.getItem("login_code")).unionid;
            $http({
              method: 'POST',
              url:basePath+'/api/user/login/weixin/app',
              data: "wx_info="+localStorage.getItem("login_code"),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            }).success(function(response){
              $ionicLoading.hide();
              $scope.suo = 0;
              localStorage.setItem("openid",response.response.data.wx_info);
              localStorage.setItem("headimgurl",JSON.parse(localStorage.getItem("login_code")).headimgurl);
              localStorage.setItem("nickname",JSON.parse(localStorage.getItem("login_code")).nickname);
              localStorage.setItem("unionid",response.response.data.unionid);
              localStorage.setItem("user_id",response.response.data._id);
              localStorage.setItem("isLogin","1");
              $ionicHistory.clearHistory();
              localStorage.setItem("main_cache","1");
              $state.go("tab.main");
            }).error(function(response){
              $scope.suo = 0;
              $ionicLoading.hide();
            })

          }
        }, function(message) {
          $ionicLoading.hide();
        }, []);

      }else if(localStorage.getItem("device") == "iOS" && $scope.suo == 0){
        $scope.suo = 1;
        window.plugins.Pay.initWX();
        window.plugins.Pay.login(function(mes){
          $ionicLoading.hide();
          //var unionid = JSON.parse(mes).unionid;
          //var wx_info = mes;
          $http({
            method: 'POST',
            url:basePath+'api/user/business',
            //data: "mobile="+openid,
            data: "unionid="+JSON.parse(mes).unionid+"&wx_info="+mes,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          }).success(function(response){
            $scope.suo = 0;
            alert(JSON.stringify(response));
            localStorage.setItem("openid",response.response.data.wx_info);
            localStorage.setItem("headimgurl",response.response.data.wx_info.headimgurl);
            localStorage.setItem("nickname",response.response.data.wx_info.nickname);
            localStorage.setItem("unionid",response.response.data.unionid);
            localStorage.setItem("user_id",response.response.data._id);
            $ionicHistory.clearHistory();
          }).error(function(response){

          })

        })
      }
    }

  })




