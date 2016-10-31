// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//测试服务器
var basePath = "http://221.226.241.34:61186";

angular.module('starter', [
  'ionic',
  'ngCordova',
  'starter.tab-main',
  'starter.tab-account',
  'starter.account_bindtel',
  'starter.account_advice',
  'starter.account_fuwu',
  'starter.account_gaunyu',
  'starter.account_order',
  'starter.main_hotCompanyMore',
  'starter.main_search',
  'starter.main_company',
  'starter.main_gongshang',
  'starter.main_company_nianbao',
  'starter.main_company_nianbao_detail',
  'starter.main_company_tupu',
  'starter.main_biangeng',
  'starter.main_duiwai',
  'starter.main_shixin',
  'starter.main_guquan',
  'starter.main_guquan_detail',
  'starter.main_beizhixingren',
  'starter.main_qianshui',
  'starter.main_shangbiao',
  'starter.main_shangbiao_detail',
  'starter.main_yuming',
  'starter.main_zhuangli',
  'starter.main_zhuangli_detail',
  'starter.main_company_baogao',
  'starter.services'
])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    // 开机前提前禁掉tab栏位
    $rootScope.$on('$ionicView.beforeEnter', function(event, view) {
      $rootScope.isHideTabBar = (
        // account
        view.stateName === 'tab.account_advice'
        ||view.stateName === 'tab.account_bindtel'
        ||view.stateName === 'tab.account_fuwu'
        ||view.stateName === 'tab.account_guanyu'
        ||view.stateName === 'tab.account_order'
        // main
        ||view.stateName === 'tab.main_hotCompanyMore'
        ||view.stateName === 'tab.main_search'
        ||view.stateName === 'tab.main_company'
        ||view.stateName === 'tab.main_gongshang'
        ||view.stateName === 'tab.main_company_nianbao'
        ||view.stateName === 'tab.main_company_nianbao_detail'
        ||view.stateName === 'tab.main_company_tupu'
        ||view.stateName === 'tab.main_biangeng'
        ||view.stateName === 'tab.main_duiwai'
        ||view.stateName === 'tab.main_shixin'
        ||view.stateName === 'tab.main_guquan'
        ||view.stateName === 'tab.main_guquan_detail'
        ||view.stateName === 'tab.main_beizhixingren'
        ||view.stateName === 'tab.main_qianshui'
        ||view.stateName === 'tab.main_shangbiao'
        ||view.stateName === 'tab.main_shangbiao_detail'
        ||view.stateName === 'tab.main_yuming'
        ||view.stateName === 'tab.main_company_baogao'
        ||view.stateName === 'tab.main_zhuanli'
        ||view.stateName === 'tab.main_zhuanli_detail'

      );
      console.log('Before Enter..', view.stateName);
    });

})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.views.swipeBackEnabled(false);


    // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

});
