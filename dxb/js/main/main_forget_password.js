angular.module('starter.main_forget_password', [])
  .controller('MainForgetPasswordCtrl', function($scope,$interval,$http,$rootScope,$state,$ionicLoading,$ionicHistory,$ionicPopup) {
    //获取验证码
    $scope.my_model="获取验证码";
    //var basePath = "http://221.226.241.34:61186/";
    var getCodeStr;

    function popAlert(mes){
      var alertPopup = $ionicPopup.alert({
        title: '东信宝',
        template:'<center>'+mes+'</center>'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }

    $scope.getCode=function(){
      if($scope.my_model=="获取验证码"){
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
              }else{
                popAlert(res.response.return_code);
              }
            })



          var time=60;
          document.getElementById("code").style.color='#fc0';
          $scope.my_model=60+"s";

          $scope.vtelcode=$interval(function() {
            if ($scope.my_model == 1+'s') {
              $interval.cancel($scope.vtelcode);
              document.getElementById("code").style.color='#ea534f';
              $scope.my_model = '获取验证码';
              return;
            }
            time--;
            console.log(time);
            $scope.my_model=time+"s";
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
          url:basePath+'/api/user/sms/verify',
          data:'mobile='+document.getElementById('phone').value+
          '&code='+document.getElementById("inputCode").value,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        })
          .success(function(res){
            if(res.response.success==1){
              $rootScope.return_phone = document.getElementById('phone').value;
              $rootScope.return_Code = document.getElementById("inputCode").value;
              $state.go("tab.main_set_password");
            }else{
              popAlert(res.response.return_code);
            }
          })
          .error(function(res){
            popAlert(res.response.return_code);
          });

      }
    };
    //$scope.toSetPassord = function(){
    //  $state.go("tab.main_set_password");
    //
    //}


  })




