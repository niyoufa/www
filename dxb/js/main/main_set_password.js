angular.module('starter.main_set_password', [])
  .controller('MainSetPasswordCtrl', function($scope,$interval,$http,$rootScope,$state,$ionicLoading,$ionicHistory,$ionicPopup) {

    function popAlert(mes){
      var alertPopup = $ionicPopup.alert({
        title: '东信宝',
        template: '<center>'+mes+'</center>'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }

    $scope.do_modify_password = function(){
     if(document.getElementById("new_password").value == ""){
       popAlert('新密码不符合要求');
     }else if(document.getElementById("sure_password").value == ""){
       popAlert('新密码不符合要求');
     }else if(document.getElementById("new_password").value.length <6){
       popAlert('新密码不符合要求');
     }else if(document.getElementById("sure_password").value.length <6){
       popAlert('新密码不符合要求');
     }else if(document.getElementById("sure_password").value.length >16 || document.getElementById("new_password").value.length >16){
       popAlert('新密码不符合要求');
     } else if(document.getElementById("new_password").value != document.getElementById("sure_password").value){
       popAlert('新密码输入不一致');
     }else{
       $http({
         method:'POST',
         url:basePath+'/api/user/forgetpwd',
         data:'mobile='+$rootScope.return_phone+
         '&newpassword='+document.getElementById("sure_password").value+
         '&code='+$rootScope.return_Code,
         headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
       })
         .success(function(res){
           if(res.response.success==1){
             popAlert('密成功找回密码');
             $ionicHistory.goBack(-2);

             $ionicHistory.clearHistory();

           }else{
             popAlert(res.response.return_code);
           }
         })
         .error(function(res){
           popAlert(res.response.return_code);
         });
     }

  }


  });




