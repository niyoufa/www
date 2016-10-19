angular.module('starter.tab-main', ['ionic'])
  .controller('MainCtrl', function($ionicPlatform,$scope,$state,$http,$ionicLoading,$rootScope,$stateParams,$ionicModal,$ionicHistory) {

    //initspec();
      $scope.$on('$ionicView.enter', function(e) {
        $ionicHistory.clearHistory();
      });

      $scope.doRefresh = function() {
        $scope.loadMore=true;
        init();
        $scope.$broadcast('scroll.refreshComplete');
      }

     $scope.gocart=function(){
       $state.go("tab.cart");
     }
     $scope.gomainorder=function(){
       alert(1);
       $state.go("tab.my_order");
     }


    $scope.goshopping=function(){
      $state.go('tab.special');
    }
    //initAndroid();
    //initWx();
    //initTest();

    initWxJX(); // 匠鲜微信登录
    //initWxJXTest() // 匠鲜微信登录测试




    function initTest(){
      localStorage.setItem("user_id","56efa0f172b3026bfc1f63ec");
      localStorage.setItem("openid","oJav5wrskfnLDy1gvJdUEu_Zh0G4");
      localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/Y7b2BPeBSTPaezaZmPuia1UPpWQl4QKej7N7l2LFicK7rTnicd7bZJJ0FbxmPa3ClYibeqTDX8IJGrkdk4vrG7ADXF9ShBGpwACia/0");
      localStorage.setItem("nickname","徐雷");
      init();
    }

    function initAndroid(){
      localStorage.setItem("device","Android");
        init();
    }

    function initIos(){
      localStorage.setItem("device","iOS");
      if(localStorage.getItem("isLogin") != "1"){
        $scope.divsearch=true;
        $state.go("tab.main_login");
      }else{
        init();
      }
    }



    function trim(mes){ //删除左右两端的空格
      return mes.replace(/(^\s*)|(\s*$)/g, "");
    }


    $scope.focus=function(){
      $scope.divsearch=true;
      $state.go("tab.main_search");
    }


    function initWxJX(){
      var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") { // 微站
          code = getQueryString('code');
        //alert(code);
          initUserJX();
      }
    }

    function initWxJXTest(){
      localStorage.setItem("user_id","56f3d7dd988c7d444931714a");
      localStorage.setItem("openid","o4vobwIe4VwlhXTI2y1FHYzE0eWk");
      localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/Y7b2BPeBSTPaezaZmPuia1UPpWQl4QKej7N7l2LFicK7rTnicd7bZJJ0FbxmPa3ClYibeqTDX8IJGrkdk4vrG7ADXF9ShBGpwACia/0");
      localStorage.setItem("nickname","徐雷");
      init();
    }



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




    $scope.toClass = function(id){
      $scope.divsearch=true;
      $state.go("tab.main_class",{id:id});
    }

    // 跳转到订单详情
    $scope.toDetail = function(_id){
      $scope.divsearch=true;
      $state.go("tab.main_detail",{id:_id});
    }

    function initLocalStory(name){
      if(localStorage.getItem(name) == null){
        localStorage.setItem(name,"");
      }
    }
    // ********************微信浏览器的方法 start ********************
    // 微信浏览器需要用到的方法，获取code
    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }


    function initUserJX(){
      // 长购新品默认选中第一个
      // 搜索相关
      $scope.isClick = 1;
      $scope.mysearch = 1;

      localStorage.setItem("state","main");
      $http.get("https://www.jonthons.com/pay/util/wx_access.php?method=getWXUserInfo&code="+code)
        .success(function(response){
          localStorage.setItem("unionid",response.unionid);
          localStorage.setItem("openid",response.openid);
          localStorage.setItem("headimgurl",response.headimgurl);
          localStorage.setItem("nickname",response.nickname);
          localStorage.setItem("wx_info",JSON.stringify(response));
          $http({
            method: 'POST',
            url:basePath+'api/user',
            //data: "mobile="+openid,
            data: "unionid="+localStorage.getItem("unionid")+"&wx_info="+JSON.stringify(response)+
            //data: "unionid="+localStorage.getItem("openid")+"&wx_info="+JSON.stringify(response)+
                  "&mobile=&password=&invite_code=&invite_user=",
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          }).success(function(res){
            console.log(res.response);
            localStorage.setItem("user_id",res.response.data._id);
            //localStorage.setItem("openid",res.response.data.wx_info.openid);
            //localStorage.setItem("unionid",res.response.data.wx_info.unionid);
            $rootScope.isLogin = "1";
            if(res.response.success == 1){
              init();
            }else{
              //$scope.divsearch=true;
              //$state.go("tab.main_wxLogin");
            }
          }).error(function(error){
            //alert(error);
            //alert(JSON.stringify(response));
          })


        }).error(function(response){
          //alert(JSON.stringify(response));
        });
    }
    // ********************微信浏览器的方法 end ********************
  $scope.toMessage=function(){
    $scope.divsearch=true;
    $state.go("tab.main_message");
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

