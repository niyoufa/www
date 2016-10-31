angular.module('starter.tab-main', [])
  .controller('MainCtrl', function($scope,$state,$http,$ionicSlideBoxDelegate,$rootScope) {

    init();

    function init(){
      initData();

      //initTest();
      initWeChat();

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
      localStorage.setItem("user_id","57b56007fb6dec201c4c2b9b");
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
      $http.get(basePath+"/api/main/banner/list?page=1&page_size=15")
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
      $state.go("tab.main_hotCompanyMore");
    }

    $scope.toSearch = function(){
      $state.go("tab.main_search");
    }

    $scope.toCompany = function(company){
      $rootScope.company = company
      $state.go("tab.main_company");
    }

    $scope.toHotSearch = function(hot){
      localStorage.setItem("isSearchKey","1");
      localStorage.setItem("hot_key",hot);
      $state.go("tab.main_search");
    }

  })




