angular.module('starter.account_advice', [])
  .controller('AccountAdviceCtrl', function($scope,$http) {

    $scope.commit = function(){

      var feedback_content = document.getElementById('feedback_content').value;
      var feedback_contact = document.getElementById('feedback_contact').value;

      if(feedback_content == ''){
        alert('请输入反馈内容！');
      }else if(feedback_contact == ''){
        alert('请输入联系方式！');
      }else{
        var url = 'http://221.226.241.34:61186/api/feedback';
        $http({
          method:'POST',
          url:url,
          params:{
            'user_id':'57b56007fb6dec201c4c2b9b',
            'feedback_content':feedback_content,
            'feedback_contact':feedback_contact,
            'mobile_type':'01'
          }
        }).success(function(res){
          alert('提交成功！');
        }).error(function(err){
          alert('提交失败！');
        });
      }

    }

  })




