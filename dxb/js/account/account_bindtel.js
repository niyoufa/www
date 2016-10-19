angular.module('starter.account_bindtel', [])
  .controller('AccountBindtelCtrl', function($scope,$http,$interval,$ionicHistory,$ionicPopup,$ionicHistory,$state,$rootScope) {
    //获取验证码
    $scope.mymodel="获取验证码";
    //var basePath = "http://221.226.241.34:61186/";
    var getCodeStr;

    function popAlert(mes){
      var alertPopup = $ionicPopup.alert({
        title: '东信宝',
        template: '<center>'+mes+'</center>'
      });
      alertPopup.then(function(res) {
        if(mes=="绑定成功"){
          $ionicHistory.goBack(-1);
        }
      });
    }

    if($rootScope.mobile != ''){
      document.getElementById('phone').value = $rootScope.mobile;
    }

    $scope.getCode=function(){
      if($scope.mymodel=="获取验证码"){
        //alert(1);
        if(document.getElementById('phone').value == ""){
          popAlert("请输入手机号");
          return;
        }
        if((/^1[3|4|5|7|8]\d{9}$/.test(document.getElementById('phone').value))){

          //调短信接口

          //$http.post(basePath+'api/sms?mobile='+document.getElementById('phone').value)
          $http({
            method:'POST',
            url:basePath+'/api/sms',
            data:'mobile='+document.getElementById('phone').value,
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          })
            .success(function(res){
              if(res.response.success==1){
                console.log(res.response.code);
                getCodeStr=res.response.code;
              }
            });

          var time=60;
          document.getElementById("code").style.color='#fc0';
          $scope.mymodel=60+"s";

          $scope.vtelcode=$interval(function() {
            if ($scope.mymodel == 1+'s') {
              $interval.cancel($scope.vtelcode);
              document.getElementById("code").style.color='#ea534f';
              $scope.mymodel = '获取验证码';
              return;
            }
            time--;
            //console.log(time);
            $scope.mymodel=time+"s";
          }, 1000)
        }else{
          popAlert('号码错误');
        }
      }
    };

    $scope.commit = function(){
      if(document.getElementById('phone').value == ""){
        popAlert("手机号不能为空!");
      }else if(!(/^1[3|4|5|7|8]\d{9}$/.test(document.getElementById('phone').value))){
        popAlert("手机号码不正确!");
      }else if(document.getElementById("inputCode").value == ""){
        //如果输入的验证码为空
        popAlert("验证码不能为空!");
      }else{
      //alert(basePath+'/api/user/bundle'+'mobile='+document.getElementById('phone').value+
      $http({
        method:'POST',
        url:basePath+'/api/user/bundle',
        data:'mobile='+document.getElementById('phone').value+
          '&mobile_code='+document.getElementById("inputCode").value+
          '&user_id='+localStorage.getItem("user_id"),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
      })
        .success(function(res){
          if(res.response.success==1){
            localStorage.setItem("user_mobile",document.getElementById('phone').value);
            console.log(localStorage.getItem("user_mobile"));
            $rootScope.mobile=document.getElementById('phone').value;
            popAlert("绑定成功");

          }else{
            popAlert(res.response.return_code);
          }
        })
        .error(function(res){
          popAlert(res.response.return_code);
        })
      //if(document.getElementById("inputCode").value == getCodeStr){
      //  popAlert("手机号码修改成功");
      //  $ionicHistory.goBack();
      //}else{
      //  popAlert("填写验证码有误" + getCodeStr);
      //}
      }
    }
  })




