angular.module('starter.account_advice', [])
  .controller('AccountAdviceCtrl', function($scope,$http,$ionicHistory,$ionicPopup) {
    function popAlert(mes){
      var alertPopup = $ionicPopup.alert({
        title: '东信宝',
        template: '<center>'+mes+'</center>'
      });
      alertPopup.then(function(res) {
        if(mes=='提交成功!'){
          $ionicHistory.goBack(-1);
        }

      });
    }

    document.getElementById('feedback_content').onkeydown=function(){

      if(document.getElementById('feedback_content').value.length >= 301){
        document.getElementById('feedback_content').value=(document.getElementById('feedback_content').value).substring(0,300);
      }
      console.log(document.getElementById('feedback_content').value.length);

    }
    $scope.commit = function(){


      var feedback_content = document.getElementById('feedback_content').value;
      var feedback_contact = document.getElementById('feedback_contact').value;

      var regexpEmail =/^(([a-zA-Z0-9_-])+|([a-zA-Z0-9_-])+.([a-zA-Z0-9_-])+)((@qq.com)|(@163.com)|(@126.com)|(@189.cn)|(@sina.com)|(@hotmail.com)|(@gmail.com)|(@139.com)|(@([a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+)))$/;




      if(feedback_content == ''){
        popAlert('请输入反馈内容！');
      }else if(feedback_contact == ''){
        popAlert('请输入联系方式！');
      }else if(feedback_contact.indexOf('@')>= 0 ){
        if(!regexpEmail.test(feedback_contact)) {
          popAlert("请填写正确email")
        }else{

          $http({
            method:'POST',
            url:basePath+'/api/feedback',
            params:{
              'user_id':'57b56007fb6dec201c4c2b9b',
              'feedback_content':feedback_content,
              'feedback_contact':feedback_contact,
              'mobile_type':'01'
            }
          }).success(function(res){
            popAlert('提交成功!');

          }).error(function(err){
            popAlert('提交失败!');
          });
        }
      } else if(feedback_contact.length != 11){
        popAlert("请填写正确的手机号码")
      } else if(!(/^1[3|4|5|7|8]\d{9}$/.test(document.getElementById('feedback_contact').value))){
        popAlert("请填写正确的手机号码")
      }
      else{
        $http({
          method:'POST',
          url:basePath+'/api/feedback',
          params:{
            'user_id':'57b56007fb6dec201c4c2b9b',
            'feedback_content':feedback_content,
            'feedback_contact':feedback_contact,
            'mobile_type':'01'
          }
        }).success(function(res){
          popAlert('提交成功!');
        }).error(function(err){
          popAlert('提交失败！');
        });
      }

    }

  })




