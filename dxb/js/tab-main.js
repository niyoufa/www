angular.module('starter.tab-main', [])
  .controller('MainCtrl', function($scope,$state,$http,$ionicSlideBoxDelegate,$rootScope) {




    init();

    function init(){
      initData();

      //initTest();
      initWeChat();
      //initIos();
      //initAndroid();

      getBanner();
      getHotSearch();
      getHotCompany();
    }

    function initData(){
      //热搜当前页数
      $scope.hotPage = 1;
      //热门企业页数
      $scope.hotCompanyPage = 1;
      //加载图片地址拼接用的
      $scope.basepath=basePath;

    }

    function initTest(){
      localStorage.setItem("device","wechat");
      localStorage.setItem("origin_code","WZ");


      localStorage.setItem("user_id","57d8e6f51d41c83a1e1c78d1");
      //localStorage.setItem("user_id","57d6f6781d41c80f2b211ce9");
      //localStorage.setItem("user_id","57b56007fb6dec201c4c2b9b");
      localStorage.setItem("openid","oPubtvhY7629N1rw2CW-CHThDWuw");
      localStorage.setItem("headimgurl","http://wx.qlogo.cn/mmopen/VNDQtnw16icKRURua8oU8mLwjr9SXbqp8nS53qpmJ3hp4ow4yS4fP2EEAN73xXaEeJMp9bupcibFajKa2piaXO73JbAIY3eZ4I1/0");
      localStorage.setItem("nickname","微笑太迷人");

      //01是苹果
      localStorage.setItem("mobile_type","01");
      //02是安卓
      localStorage.setItem("mobile_type","01");
      var ua = navigator.userAgent.toLowerCase();

    }

    function initWeChat(){

      var code = getQueryString('code');
      getWechatUser(code);

      localStorage.setItem("device","wechat");
      localStorage.setItem("origin_code","WZ");
      localStorage.setItem("mobile_type","01");
      var ua   = navigator.userAgent.toLowerCase();
      if(ua.match(/android/i) == "android")
      {
        localStorage.setItem("mobile_type","02");
      }
      if(ua.match(/iPhone/i) == "iPhone")
      {
        localStorage.setItem("mobile_type","01");
      }
      if(ua.match(/iPad/i) == "iPad")
      {
        localStorage.setItem("mobile_type","01");
      }

    }

    function initAndroid(){
      localStorage.setItem("device","Android");
    }

    function initIos(){
      localStorage.setItem("device","iOS");
    }

    function getBanner(){
      $http.get(basePath+"/api/main/banner/using/list")
        .success(function(res){
          if(res.response.success == 1){
            $scope.basePath = basePath;
            $scope.banners = res.response.data;
            $ionicSlideBoxDelegate.slide(0);
            $ionicSlideBoxDelegate.update();
          }
        })
    }

    function getHotSearch(){
      $http.get(basePath+"/api/search/list?page="+$scope.hotPage+"&page_size=4")
        .success(function(res){
          if(res.response.success == 1){
            $scope.hots = res.response.data;
            $scope.hotsPager = res.response.pager;
          }
        })
    }

    function getHotCompany(){
      $http.get(basePath+"/api/enterprise/hot?page=1&page_size=10")
        .success(function(res){
          if(res.response.success == 1){
            $scope.hotCompanys = res.response.data;
          }
        })
    }

    function getWechatUser(code){
      $http({
        method: 'POST',
        url:basePath+'/api/user/login/weixin',
        data: "code="+code,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
      }).success(function(res){
        if(res.response.success == 1){
          localStorage.setItem("device","wechat");
          localStorage.setItem("user_id",res.response.data._id);
          localStorage.setItem("user_mobile",res.response.data.mobile);
          $rootScope.mobile=res.response.data.mobile;
          localStorage.setItem("openid",res.response.data.wx_user.openid);
          localStorage.setItem("headimgurl",res.response.data.wx_user.headimgurl);
          localStorage.setItem("nickname",res.response.data.wx_user.nickname);
        }
      }).error(function(error){
      })
    }

    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }

    $scope.changeHot = function(){
      $scope.hotPage = $scope.hotPage + 1;
      if($scope.hotsPager.max_page < $scope.hotPage){
        $scope.hotPage = 1;
      }
      getHotSearch();
    }

    $scope.toHotCompanyMore = function(){
      if(localStorage.getItem("device") == "wechat"){
        $state.go("tab.main_hotCompanyMore");
      }else if(localStorage.getItem("isLogin") == "1"){
        $state.go("tab.main_hotCompanyMore");
      }else{
        $state.go("tab.main_login");
      }
    }

    $scope.toSearch = function(){
      if(localStorage.getItem("device") == "wechat"){
        $scope.toHotSearch(document.getElementById("inputInfo").value);
      }else if(localStorage.getItem("isLogin") == "1"){
        $scope.toHotSearch(document.getElementById("inputInfo").value);
      }else{
        $state.go("tab.main_login");
      }
    }

    $scope.toCompany = function(company){
      if(localStorage.getItem("device") == "wechat"){
        $rootScope.companyData = company;
        $state.go("tab.main_company");
      }else if(localStorage.getItem("isLogin") == "1"){
        $rootScope.companyData = company;
        $state.go("tab.main_company");
      }else{
        $state.go("tab.main_login");
      }
        //$rootScope.companyData = company;
        //$state.go("tab.main_company");
    }

    $scope.toHotSearch = function(hot){
      console.log(hot);
      if(localStorage.getItem("device") == "wechat"){
        localStorage.setItem("isSearchKey","1");
        localStorage.setItem("hot_key",hot);
        $state.go("tab.main_search");
      }else if(localStorage.getItem("isLogin") == "1"){
        localStorage.setItem("isSearchKey","1");
        localStorage.setItem("hot_key",hot);
        $state.go("tab.main_search");
      }else{
        $state.go("tab.main_login");
      }
    }

  })




