// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//var basePath = "https://banana.meiguoyouxian.com:8001/";  // 微站与ios用这个
var basePath = "https://www.jonthons.com/";  //
//var basePath = "http://banana.meiguoyouxian.com:8002/";   // 安卓用这个

angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.tab-main',
  'starter.main_search',
  'starter.main_detail',
  'starter.main_class',
  'starter.main_login',
  'starter.main_wxLogin',
  'starter.main_message',
  'starter.main_special',
  'starter.tab-cart',
  'starter.tab-account',
  'starter.cart_order',
  'starter.cart_chooseInvoice',
  'starter.cart_addInvoice',
  'starter.cart_chooseAddress',
  'starter.cart_editAddress',
  'starter.cart_addAddress',
  'starter.cart_success',
  'starter.account_order',
  'starter.account_business',
  'starter.account_bill',
  'starter.account_sale',
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
      var device = ionic.Platform.device();
      var uuid = device.uuid;
      localStorage.setItem("uuid", uuid);
      localStorage.setItem("device", device.platform);
    });
    // 开机前提前禁掉tab栏位
    $rootScope.$on('$ionicView.beforeEnter', function(event, view) {

      $rootScope.isHideTabBar = (
        view.stateName === 'tab.main_detail'
        || view.stateName === 'tab.main_login'
        || view.stateName === 'tab.main_wxLogin'
        || view.stateName === 'tab.main_class'
        || view.stateName === 'tab.cart_order'
        || view.stateName === 'tab.main_order'
        || view.stateName === 'tab.main_message'
        || view.stateName === 'tab.main_chooseInvoice'
        || view.stateName === 'tab.main_addInvoice'
        || view.stateName === 'tab.main_chooseAddress'
        || view.stateName === 'tab.main_addAddress'
        || view.stateName === 'tab.cart_chooseInvoice'
        || view.stateName === 'tab.cart_addInvoice'
        || view.stateName === 'tab.cart_chooseAddress'
        || view.stateName === 'tab.cart_editAddress'
        || view.stateName === 'tab.cart_addAddress'
        || view.stateName === 'tab.cart_success'
        || view.stateName === 'tab.account_chooseAddress'
        || view.stateName === 'tab.account_addAddress'
        || view.stateName === 'tab.account_business'
      );
      console.log('Before Enter..', view.stateName);
    });


})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.views.swipeBackEnabled(false);
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

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
  // main start*************************************************
  .state('tab.main', {
    url: '/main',
    cache: 'true',
    views: {
      'tab-main': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })
    .state('tab.main_detail', {
      url: '/main_detail/:id',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_detail.html',
          controller: 'MainDetailCtrl'
        }
      }
    })
    .state('tab.main_order', {
      url: '/main_order',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/cart/cart_order.html',
          controller: 'CartOrderCtrl'
        }
      }
    })
    .state('tab.main_class', {
      url: '/main_class/:id',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_class.html',
          controller: 'MainClassCtrl'
        }
      }
    })
    .state('tab.main_search', {
      url: '/main_search',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_search.html',
          controller: 'MainSearchCtrl'
        }
      }
    })
    .state('tab.main_login', {
      url: '/main_login',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_login.html',
          controller: 'MainLoginCtrl'
        }
      }
    })
    .state('tab.main_wxLogin', {
      url: '/main_wxLogin',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_wxLogin.html',
          controller: 'MainWxLoginCtrl'
        }
      }
    })
      .state('tab.main_chooseAddress', {
        url: '/main_chooseAddress',
        cache: 'false',
        views: {
          'tab-main': {
            templateUrl: 'templates/cart/cart_chooseAddress.html',
            controller: 'ChooseAddressCtrl'
          }
        }
      })
      .state('tab.main_addAddress', {
        url: '/main_addAddress',
        cache: 'false',
        views: {
          'tab-main': {
            templateUrl: 'templates/cart/cart_addAddress.html',
            controller: 'AddAddressCtrl'
          }
        }
      })
    .state('tab.main_chooseInvoice', {
      url: '/main_chooseInvoice',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/cart/cart_chooseInvoice.html',
          controller: 'ChooseInvoiceCtrl'
        }
      }
    })
    .state('tab.main_addInvoice', {
      url: '/main_addInvoice',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/cart/cart_addInvoice.html',
          controller: 'AddInvoiceCtrl'
        }
      }
    })
    .state('tab.main_editAddress', {
      url: '/main_accountAddress/:id',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/cart/cart_editAddress.html',
          controller: 'CartEditAddress'
        }
      }
    })
    .state('tab.my_order', {
      url: '/my_order',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/account/account_order.html',
          controller: 'AccountOrderCtrl'
        }
      }
    })

    .state('tab.special', {
      url: '/special',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_special.html',
          controller: 'MainSpecialCtrl'
        }
      }
    })
    .state('tab.main_message', {
      url: '/main_message',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_message.html',
          controller: 'MainMessageCtrl'
        }
      }
    })
  // main end****************************************************


  // cart start****************************************************
    .state('tab.cart', {
      url: '/cart',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart.html',
          controller: 'CartCtrl'
        }
      }
    })
    .state('tab.cart_order', {
      url: '/cart_order',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_order.html',
          controller: 'CartOrderCtrl'
        }
      }
    })
    .state('tab.cart_chooseInvoice', {
      url: '/cart_chooseInvoice',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_chooseInvoice.html',
          controller: 'ChooseInvoiceCtrl'
        }
      }
    })
    .state('tab.cart_addInvoice', {
      url: '/cart_addInvoice',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_addInvoice.html',
          controller: 'AddInvoiceCtrl'
        }
      }
    })
    .state('tab.cart_chooseAddress', {
      url: '/cart_chooseAddress',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_chooseAddress.html',
          controller: 'ChooseAddressCtrl'
        }
      }
    })
    .state('tab.cart_addAddress', {
      url: '/cart_addAddress',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_addAddress.html',
          controller: 'AddAddressCtrl'
        }
      }
    })
    .state('tab.cart_success', {
      url: '/cart_success',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_success.html',
          controller: 'CartSuccessCtrl'
        }
      }
    })
    .state('tab.cart_editAddress', {
      url: '/cart_editAddress/:id',
      cache: 'false',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart_editAddress.html',
          controller: 'CartEditAddress'
        }
      }
    })
  // cart end****************************************************

    // account start****************************************************
    .state('tab.account', {
      url: '/account',
      cache: 'true',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })
    .state('tab.account_order', {
      url: '/account_order',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_order.html',
          controller: 'AccountOrderCtrl'
        }
      }
    })
    .state('tab.account_chooseAddress', {
      url: '/account_chooseAddress',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/cart/cart_chooseAddress.html',
          controller: 'ChooseAddressCtrl'
        }
      }
    })
    .state('tab.account_bill', {
      url: '/account_bill',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_bill.html',
          controller: 'AccountBillCtrl'
        }
      }
    })
    .state('tab.account_addAddress', {
      url: '/account_addAddress',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/cart/cart_addAddress.html',
          controller: 'AddAddressCtrl'
        }
      }
    })
      .state('tab.account_business', {
        url: '/account_business',
        cache: 'false',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account_business.html',
            controller: 'AccountBusinessCtrl'
          }
        }
      })
    .state('tab.account_sale', {
      url: '/account_sale',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/account_sale.html',
          controller: 'AccountSaleCtrl'
        }
      }
    })
    .state('tab.account_editAddress', {
      url: '/cart_accountAddress/:id',
      cache: 'false',
      views: {
        'tab-account': {
          templateUrl: 'templates/cart/cart_editAddress.html',
          controller: 'CartEditAddress'
        }
      }
    })

    // account end****************************************************



;



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

});
