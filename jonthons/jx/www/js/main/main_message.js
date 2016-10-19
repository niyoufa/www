angular.module('starter.main_message', [])
  .controller('MainMessageCtrl', function($sce,$rootScope,$ionicHistory,$compile,$ionicLoading,$rootScope,$http,$stateParams,$scope,$ionicModal,$state) {

    init();


    function init(){
      // 获取消息
      getMessage();
    }

    function getMessage(){
      //alert("123");
      $http.get(basePath+"api/usermessage?user_id="+localStorage.getItem("user_id"))
        .success(function(res){
          if(res.response.success == 1){
            if(res.response.data.length > 0){
              $scope.messages = res.response.data;
            }else{
              $scope.tips = "暂无消息";
            }

          }
        })
    }
    //delect all messages
    $scope.toDelAllMessage = function(){
      $http.delete(basePath+"api/user_message/clearall?user_id="+localStorage.getItem("user_id"))
        .success(function(res){
          if(res.response.success == 1){
            getMessage();
          }
        })
    }
    //delect a message
    $scope.toDelMessage = function(message_id){
      $http.delete(basePath+"api/user_message?user_message_id="+message_id)
        .success(function(res){
          if(res.response.success == 1){
            getMessage();
          }
        })
    }
  })
