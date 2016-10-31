angular.module('starter').config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('tab.main_hotCompanyMore', {
      url: '/main_hotCompanyMore',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_hotCompanyMore.html',
          controller: 'MainHotCompanyMoreCtrl'
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

    .state('tab.main_company', {
      url: '/main_company',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company.html',
          controller: 'MainCompanyCtrl'
        }
      }
    })

    .state('tab.main_gongshang', {
      url: '/main_gongshang',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_gongshang.html',
          controller: 'MainGongShangCtrl'
        }
      }
    })

    .state('tab.main_company_nianbao', {
      url: '/main_company_nianbao',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company_nianbao.html',
          controller: 'MainCompanyNianBaoCtrl'
        }
      }
    })

    .state('tab.main_company_nianbao_detail', {
      url: '/main_company_nianbao_detail',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company_nianbao_detail.html',
          controller: 'MainCompanyNianBaoDetailCtrl'
        }
      }
    })

    .state('tab.main_company_tupu', {
      url: '/main_company_tupu',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company_tupu.html',
          controller: 'MainCompanyTuPuCtrl'
        }
      }
    })

    .state('tab.main_biangeng', {
      url: '/main_biangeng',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_biangeng.html',
          controller: 'MainBianGengCtrl'
        }
      }
    })

    .state('tab.main_duiwai', {
      url: '/main_duiwai',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_duiwai.html',
          controller: 'MainDuiWaiCtrl'
        }
      }
    })

    .state('tab.main_shixin', {
      url: '/main_shixin',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_shixin.html',
          controller: 'MainShiXinCtrl'
        }
      }
    })

    .state('tab.main_guquan', {
      url: '/main_guquan',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_guquan.html',
          controller: 'MainGuQuanCtrl'
        }
      }
    })

    .state('tab.main_guquan_detail', {
      url: '/main_guquan_detail',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_guquan_detail.html',
          controller: 'MainGuQuanDetailCtrl'
        }
      }
    })

    .state('tab.main_beizhixingren', {
      url: '/main_beizhixingren',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_beizhixingren.html',
          controller: 'MainBeiZhiXingRenCtrl'
        }
      }
    })

    .state('tab.main_qianshui', {
      url: '/main_qianshui',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_qianshui.html',
          controller: 'MainQianShuiCtrl'
        }
      }
    })

    .state('tab.main_shangbiao', {
      url: '/main_shangbiao',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_shangbiao.html',
          controller: 'MainShangBiaoCtrl'
        }
      }
    })

    .state('tab.main_shangbiao_detail', {
      url: '/main_shangbiao_detail',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_shangbiao_detail.html',
          controller: 'MainShangBiaoDetailCtrl'
        }
      }
    })

    .state('tab.main_yuming', {
      url: '/main_yuming',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_yuming.html',
          controller: 'MainYuMingCtrl'
        }
      }
    })

    .state('tab.main_zhuanli', {
      url: '/main_zhuanli',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_zhuanli.html',
          controller: 'MainZhuanLiCtrl'
        }
      }
    })

    .state('tab.main_zhuanli_detail', {
      url: '/main_zhuanli_detail',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_zhuanli_detail.html',
          controller: 'MainZhuanLiDetailCtrl'
        }
      }
    })

    .state('tab.main_company_baogao', {
      url: '/main_company_baogao',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company_baogao.html',
          controller: 'MainCompanyBaoGaoCtrl'
        }
      }
    })
























});
