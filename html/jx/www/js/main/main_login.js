angular.module('starter.main_login', ['ionic'])
  .controller('MainLoginCtrl', function($ionicHistory,$ionicLoading,$rootScope,$http,$stateParams,$scope,$ionicModal,$state) {

    var suo = 0;
    $scope.gowx = function(){
      if(localStorage.getItem("device") == "Android" && suo == 0){
        suo =1;
        document.addEventListener('deviceready', function() {
          var extraInfo = cordova.require('com.xulei.weixin.cordova.ExtraInfo');
          extraInfo.wx_login(function(message) {
            //alert(JSON.stringify(message));
            if(message.length>2){
              localStorage.setItem("isLogin","1");
              localStorage.setItem("login_code",message);
              //var uni = JSON.parse(localStorage.getItem("login_code")).unionid;
              var uni = JSON.parse(localStorage.getItem("login_code")).openid;
              $http({
                method: 'POST',
                url:basePath+'api/user',
                //data: "mobile="+openid,
                data: "unionid="+uni+"&wx_info="+localStorage.getItem("login_code"),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
              }).success(function(response){
                localStorage.setItem("openid",response.response.data.wx_info);
                localStorage.setItem("headimgurl",response.response.data.wx_info.headimgurl);
                localStorage.setItem("nickname",response.response.data.wx_info.nickname);
                localStorage.setItem("unionid",response.response.data.unionid);
                localStorage.setItem("user_id",response.response.data._id);
                $ionicHistory.clearHistory();
                suo = 0;
                $state.go("tab.main");
              }).error(function(response){
                suo = 0;
              })

            }
          }, function(message) {}, []);

        });
      }else if(localStorage.getItem("device") == "iOS" && suo ==0){
        suo =1;
        document.addEventListener('deviceready', function() {
          var extraInfo = cordova.require('cordova.Pay.Pay');
          extraInfo.myPay(function(message) {
            var openid=(JSON.parse(message)).unionid;
            var mymessage=JSON.parse(message);
            $http({
              method: 'POST',
              url:basePath+'api/user',
              data: "unionid="+openid+"&wx_info="+message,
              headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            }).success(function(response){
              //alert(JSON.stringify(response));
              //alert(message);
              localStorage.setItem("isLogin","1");
              localStorage.setItem("user_id",response.response.data._id);
              localStorage.setItem("unionid",mymessage.unionid);
              localStorage.setItem("openid",mymessage.openid);
              //localStorage.setItem("isLogin","1");
              localStorage.setItem("headimgurl",mymessage.headimgurl);
              localStorage.setItem("nickname",mymessage.nickname);
              //alert(mymessage.nickname);
              $ionicHistory.nextViewOptions({
                disableBack: true
              });
              suo = 0;
              $state.go("tab.main");
            }).error(function(response){
              suo = 0;
              //alert(JSON.stringify(response));
            })
          }, function(message) {}, []);
        });
      }

    }

    //$ionicModal.fromTemplateUrl('templates/modal/modal_specs.html', {// modal窗口选项
    //  scope: $scope,
    //  animation: 'silde-in-up'
    //}).then(function (modal) {
    //  $scope.modal = modal;
    //})
    //
    //$scope.showSpecs = function(){
    //  $scope.modal.show();
    //}
    //
    //$scope.toOrder = function(){
    //  $scope.modal.hide();
    //  $state.go("tab.main_order");
    //
    //}
    //
    //function haha(){
    //  $scope.modal.show();
    //}
    //haha();

  })
