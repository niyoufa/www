angular.module('starter.tab-main', ['ionic'])
  .controller('MainCtrl', function($compile,$ionicPlatform,$ionicLoading,$rootScope,$scope,$state,$http,$ionicHistory) {


    //initAndroid();
    //initWx();
    //initTest();


    //initWxJX(); // 匠鲜微信登录
    initWxJXTest() // 匠鲜微信登录测试




    function initTest(){
      localStorage.setItem("user_id","56f3d7dd988c7d444931714a");
      localStorage.setItem("openid","oJav5wrskfnLDy1gvJdUEu_Zh0G4");
      localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/Y7b2BPeBSTPaezaZmPuia1UPpWQl4QKej7N7l2LFicK7rTnicd7bZJJ0FbxmPa3ClYibeqTDX8IJGrkdk4vrG7ADXF9ShBGpwACia/0");
      localStorage.setItem("nickname","徐雷");
      init();
    }

    function initAndroid(){
      basePath = "http://banana.meiguoyouxian.com:8002/";
      if(localStorage.getItem("isLogin") != "1"){
        $state.go("tab.main_login");
      }else{
        init();
      }
    }

    function initIos(){
      if(localStorage.getItem("isLogin") != "1"){
        $state.go("tab.main_login");
      }else{
        init();
      }
    }

    function initWx(){
      var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") { // 微站
        if($rootScope.isLogin != "1"){
          code = getQueryString('code');
          initUser();
        }else{
          init();
        }
      }
    }

    function trim(mes){ //删除左右两端的空格
      return mes.replace(/(^\s*)|(\s*$)/g, "");
    }

    $scope.choosehistory=function(mes){
      console.log(mes);
      document.getElementById("mysearch").value=mes;
      $scope.searchinfo=false;
    }
    //搜索相关
    $scope.search=function(mes){
      console.log(mes);
    }
    //get focus about search
    $scope.focus=function(){
      var historylist=localStorage.getItem("myhistory");
      if(JSON.parse(historylist).length>5){
        $scope.searchs=JSON.parse(historylist).slice(0,5);
      }else{
        $scope.searchs=JSON.parse(historylist);
      }

      console.log("zp");
      $scope.searchinfo=true;
    }
    $scope.gosearch=function(){
      var myinput=document.getElementById("mysearch").value;
      if(trim(myinput)!=''){
        if(localStorage.getItem("myhistory")){
          var myarr=JSON.parse(localStorage.getItem("myhistory"));
          for(var i=0;i<myarr.length;i++){
            if(myarr[i]==myinput){
              myarr.splice(i,1);
              //alert(JSON.stringify(myarr));
            }
          }
          myarr.unshift(myinput);
          localStorage.setItem("myhistory",JSON.stringify(myarr));
        }else{
          var myarr=[myinput];

          localStorage.setItem("myhistory",JSON.stringify(myarr));
        }

        $http.get(basePath+"api/search?search_text="+trim(myinput))
          .success(function(res){
            if(res.response.success==1){
              if(res.response.data!=''){
                $scope.hots=res.response.data;
              }
            }
          })
        $scope.searchinfo=false;
        $scope.mysearch= 1;
        $scope.sousuo=1;

      }


    }

    function initWxJX(){
      var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") { // 微站
        if($rootScope.isLogin != "1"){
          code = getQueryString('code');
          initUserJX();
        }else{
          init();
        }
      }
    }

    function initWxJXTest(){
      localStorage.setItem("user_id","56ea6c19988c7d3b052c770f");
      localStorage.setItem("openid","o4vobwIe4VwlhXTI2y1FHYzE0eWk");
      localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/Y7b2BPeBSTPaezaZmPuia1UPpWQl4QKej7N7l2LFicK7rTnicd7bZJJ0FbxmPa3ClYibeqTDX8IJGrkdk4vrG7ADXF9ShBGpwACia/0");
      localStorage.setItem("nickname","徐雷");
      init();
    }

    //function initPlatform(){
    //  localStorage.setItem("state","main");
    //  var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    //  if(localStorage.getItem("device") == "iOS"){      // ios原生
    //    if(localStorage.getItem("isLogin") != "1"){
    //      $state.go("tab.main_login");
    //    }else{
    //      init();
    //    }
    //  }else if(localStorage.getItem("device") == "Android"){   // android 原生
    //    if(localStorage.getItem("isLogin") != "1"){
    //      $state.go("tab.main_login");
    //    }else{
    //      init();
    //    }
    //  }else if (ua.match(/MicroMessenger/i) == "micromessenger") { // 微站
    //    if(ua.indexOf("android") > 0 )
    //    {
    //      basePath = "http://banana.meiguoyouxian.com:8002/";
    //    }
    //    if($rootScope.isLogin != "1"){
    //      code = getQueryString('code');
    //      initUser();
    //    }else{
    //      init();
    //    }
    //  }else{
    //    localStorage.setItem("user_id","56efa0f172b3026bfc1f63ec");
    //    localStorage.setItem("openid","oJav5wrskfnLDy1gvJdUEu_Zh0G4");
    //    localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/Y7b2BPeBSTPaezaZmPuia1UPpWQl4QKej7N7l2LFicK7rTnicd7bZJJ0FbxmPa3ClYibeqTDX8IJGrkdk4vrG7ADXF9ShBGpwACia/0");
    //    localStorage.setItem("nickname","徐雷");
    //    init();
    //  }
    //}


    // 初始化方法
    function init(){

      // 长购新品默认选中第一个
      // 搜索相关
      $scope.isClick = 1;
      $scope.mysearch = 1;

      //localStorage.setItem("carts","[]");  // 清空购物车方法，测试用的
      localStorage.setItem("state","main");
      $ionicLoading.show();
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
      if(localStorage.getItem("carts") == null){
        localStorage.setItem("carts","[]");
      }
      initLocalStory("isLogin");  // 判断是否登录
      initLocalStory("detail_good");  // 跳转到商品详情的商品数据
      initLocalStory("invoice");      // 默认发票信息
      initLocalStory("address");      // 默认的地址
      initLocalStory("super_code");   // 超级验证码
      initLocalStory("godetail");   // 从订单详情到登录再到登录用的（赵鹏）mylogin.js
      initLocalStory("unionid");    // 微信唯一表示
      initLocalStory("openid");     // 微信openid
      initLocalStory("headimgurl"); // 微信头像
      initLocalStory("nickname");   // 微信昵称
      initLocalStory("wx_info");   // 微信获取的信息，在wxLogin会用到

      // 加载第一个icon的商品列表
      getIcon01Html();
      getIcon01Data();

    }

    function getIcon01Data(){
      // 加载商品
      $http.get(basePath+"api/main")
        .success(function(response) {
          if(response.response.success == 1){
            $scope.news = response.response.data.new;
            $scope.hots = response.response.data.hot;
            $scope.banners = response.response.data.banner;
            $scope.catelogs = response.response.data.catelog;
            localStorage.setItem("super_code",response.response.data.config.super_code);
            $ionicLoading.hide();
          }
        });
    }

    function getIcon01Html(){
      $http.get(basePath+"jx/www/main.php")
        .success(function(response) {
          var ele = $compile(response)($scope);
          angular.element($('#customHtml')).append(ele);
        });
    }

    $scope.toClick = function(num){
      $scope.isClick = num;
      if(num==3){
        $scope.hots=null;
        $scope.mysearch = 2;
      }else{
        $http.get(basePath+"api/main")
          .success(function(response) {
            if(response.response.success == 1){
              if(num==1){
                $scope.hots = response.response.data.hot;
              }else{
                $scope.hots = response.response.data.new;
              }
            }
          })
      }


    }

    $scope.toMessage = function(){
      $state.go("tab.main_message");
    }

    $scope.toClass = function(id){
      $state.go("tab.main_class",{id:id});
    }

    // 跳转到订单详情
    $scope.toDetail = function(_id){
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

    function initUser(){
      // 长购新品默认选中第一个
      // 搜索相关
      $scope.isClick = 1;
      $scope.mysearch = 1;

      localStorage.setItem("state","main");
      $http.get("https://meiguoyouxian.com/newapi/wx/wx_access.php?method=getDHWXUserInfo&code="+code)
        .success(function(response){
          //localStorage.setItem("unionid",response.unionid);
          localStorage.setItem("openid",response.openid);
          localStorage.setItem("headimgurl",response.headimgurl);
          localStorage.setItem("nickname",response.nickname);
          $http({
            method: 'POST',
            url:basePath+'api/user',
            //data: "mobile="+openid,
            //data: "unionid="+localStorage.getItem("unionid")+"&wx_info="+JSON.stringify(response),
            data: "unionid="+localStorage.getItem("openid")+"&wx_info="+JSON.stringify(response),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          }).success(function(res){
            localStorage.setItem("user_id",res.response.data._id);
            $rootScope.isLogin = "1";
            init();
          }).error(function(error){
            //alert(error);
            //alert(JSON.stringify(response));
          })
        }).error(function(response){
          //alert(JSON.stringify(response));
        });
    }

    function initUserJX(){
      // 长购新品默认选中第一个
      // 搜索相关
      $scope.isClick = 1;
      $scope.mysearch = 1;
      alert(code);
      localStorage.setItem("state","main");
      $http.get("https://www.jonthons.com/pay/util/wx_access.php?method=getWXUserInfo&code="+code)
        .success(function(response){
            alert(JSON.stringify(response.response));
          //localStorage.setItem("unionid",response.unionid);
          localStorage.setItem("openid",response.openid);
          localStorage.setItem("headimgurl",response.headimgurl);
          localStorage.setItem("nickname",response.nickname);
          localStorage.setItem("wx_info",JSON.stringify(response));
          $http({
            method: 'POST',
            url:basePath+'api/user',
            //data: "mobile="+openid,
            //data: "unionid="+localStorage.getItem("unionid")+"&wx_info="+JSON.stringify(response),
            data: "unionid="+localStorage.getItem("openid")+"&wx_info="+JSON.stringify(response)+
                  "&mobile=&password=&invite_code=&invite_user=",
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          }).success(function(res){
            localStorage.setItem("user_id",res.response.data._id);
            localStorage.setItem("openid",res.response.data.wx_info.openid);
            localStorage.setItem("unionid",res.response.data.wx_info.unionid);
            $rootScope.isLogin = "1";
            if(res.response.success == 1){
              init();
            }else{
              $state.go("tab.main_wxLogin");
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


  })
