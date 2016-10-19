/**
 * Created by zp on 16/4/14.
 */
angular.module('starter.main_special',[])
.controller('MainSpecialCtrl',function($scope,$state,$http,$ionicLoading){
    // 跳转到订单详情
    $scope.toDetail = function(_id){
      $scope.divsearch=true;
      $state.go("tab.main_detail",{id:_id});
    }





    init();
    // 初始化方法
    function init(){
      var now_time = (new Date()).valueOf();
      $scope.now_time = Math.round(now_time / 1000);
      if (now_time)
        setInterval(function () {
          $scope.now_time = Math.round((new Date()).valueOf() / 1000);
          $scope.$digest(); // 通知视图模型的变化
        }, 1000);

      $ionicLoading.show();

      $scope.times = {};
      $http.get(basePath + "api/goods/list/special")
        .success(function (response) {
          if (response.response.success == 1) {
            if(response.response.data.length>0){
              for(var i=0;i<response.response.data.length;i++){
                response.response.data[i].cent=response.response.data[i].sales/response.response.data[i].stock*100;
              }
              $scope.specials = response.response.data;
            }


            $ionicLoading.hide();
          }
        });
    }

  })

  .filter('timeFormat',function(){
    return function(input){
      var out = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      if(input > 0){
        if(input>=60*60){
          var hours = Math.floor(input/3600);
          if(hours <= 9){
            hours = "0" + hours;
          }else if(hours>24){
            var day = Math.floor(hours/24);
            var hours2 = hours%24;
          }
          var seconds = Math.round((input - hours*3600)%60);
          if(seconds <= 9){
            seconds = "0" + seconds;
          }
          var minutes = Math.round((input - hours*3600 - seconds)/60);
          if(minutes <= 9){
            minutes = "0" + minutes;
          }
        }else if(input>=60){
          var seconds = Math.round(input%60);
          if(seconds <= 9){
            seconds = "0" + seconds;
          }
          var minutes = Math.round((input - seconds)/60);
          if(minutes <= 9){
            minutes = "0" + minutes;
          }
        }else{
          var seconds = Math.round(input);
          if(seconds <= 9){
            seconds = "0" + seconds;
          }
        }
        if(day>0){
          out = day+"天 "+ hours2+":"+minutes+":"+seconds;
        }else{
          out = hours+":"+minutes+":"+seconds;
        }
      }else{
        out = '00:00:00';
      }

      return out;
    }
  })
  .filter('dateFormat',function(){
    return function(input){
      var out = 0;
      if(input > 0){
        out = new Date(parseInt(input) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
      }else{
        out = '00:00:00';
      }

      return out;
    }
  });

