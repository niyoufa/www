angular.module('starter.account_bindtel', [])
  .controller('AccountBindtelCtrl', function($scope,$http,$interval,$ionicHistory) {
    //获取验证码
    $scope.mymodel="获取验证码";
    var basePath = "http://221.226.241.34:61186/";

    $scope.getCode=function(){
      if($scope.mymodel=="获取验证码"){
        //alert(1);
        if(document.getElementById('phone').value == ""){
          alert("请输入手机号");
          return;
        }
        if((/^1[3|4|5|7|8]\d{9}$/.test(document.getElementById('phone').value))){

          //调短信接口

          $http.post(basePath+'api/sms?mobile='+document.getElementById('phone').value)
            .success(function(res){
              if(res.response.success==1){
                console.log(res.response.code);
                getCode=res.response.code;
              }
            })

          var time=60;
          document.getElementById("code").style.color='#fc0';
          $scope.mymodel=60+"s";

          $scope.vtelcode=$interval(function() {
            if ($scope.mymodel == 1+'s') {
              $interval.cancel($scope.vtelcode);
              document.getElementById("code").style.color='#ea534f';
              $scope.mymodel = '重新获取';
              return;
            }
            time--;
            console.log(time);
            $scope.mymodel=time+"s";
          }, 1000)
        }else{
          $cordovaToast.showShortCenter('号码错误');
        }
      }
    }

    $scope.commit = function(){
      if(document.getElementById("inputCode").value == ""){
        //如果输入的验证码为空
        alert("验证码不能为空!");
        return;
      }
      if(document.getElementById("inputCode").value == getCode){
        alert("手机号码修改成功");
        $ionicHistory.goBack();
      }else{
        alert("填写验证码有误" + getCode);
      }
    }
  })




