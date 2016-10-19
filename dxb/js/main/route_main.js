var app=angular.module('starter')
app.directive("toolDirective", function() {
  return {
    restrict : "AE",
    template : ' <div id="mod1" style="width:100%; padding:3vw 0; background: #037ed7; color:#fff; font-size: 4vw; text-align:center">' +
    '<div style="width:100%;font-size: 5.5vw; margin-bottom: 15px">{{company.basicinfo.entname}}</div>' +
    '<span style="font-size: 3vw; background: #1291eb; padding: 2px 8px; border-radius: 8px;">更新：{{company.basicinfo.changedate | date}}</span>' +
    '<div style="width:100%; text-align: right; padding-right: 4vw; margin-top: 5px; font-size: 3vw;"><img src="img/viewa7.png" style="width:15px;">' +
    ' <span ng-if="company.basicinfo.count > 10000">浏览{{company.basicinfo.count | filterLiulan }}万+次</span>' +
    ' <span ng-if="company.basicinfo.count <= 10000">浏览{{company.basicinfo.count}}次</span>' +
    '</div>' +
    '<div style="width:100%; height:60px; background: #037ed7"></div>' +
    '</div>' +
    '<div style="width:100%; height:60px; margin-top: -60px; background: rgba(0,0,0,0.4); color:#fff">' +
    '<ul>' +
    '<li style="width:33%; text-align: center; float: left; border-right: 1px solid rgba(255,255,255,0.5); height:30px; margin-top: 15px;">' +
    '<div class="bigName">{{company.basicinfo.frname}}</div>' +
    '<div class="smallName">法定代表人</div>' +
    '</li>' +
    '<li style="width:34%;text-align: center; float: left; border-right: 1px solid rgba(255,255,255,0.5); height:30px; margin-top: 15px;">' +
    '<div class="bigName">{{company.basicinfo.regcap|shortenMore}}</div>' +
    '<div class="smallName">注册资金</div></li>' +
    '<li style="width:33%;text-align: center; float: left;height:30px; margin-top: 15px;">' +
    '<div class="bigName">{{company.basicinfo.esdate}}</div>' +
    '<div class="smallName">成立日期</div> </li> ' +
    '</ul>' +
    ' </div>'+
    '<div id="mod3" style="width:100%; padding: 0 4%; line-height: 35px; background: #fff; border-bottom: 1px solid #e0e0e0; height:35px;">'+
    '<span style="background: #037ed7; float: left; width:20px; height:20px; text-align: center; margin-top: 8px; display: inline-block; border-radius: 50%;">'+
      '<i class="ion ion-ios-telephone" style="color:#fff; font-size: 6vw; position: absolute; margin-left: -5px;"></i>'+
      '</span>'+
      '<div style="display: inline-block;font-size: 4.5vw; margin-left: 4px; color:#666">{{company.contact_info.phonenumber}}</div>'+
  '<div style="float: right;color:#666" class="otherConnect" ng-click="otherConnect()"><span>其他联系方式</span> <i class="ion ion-ios-arrow-down" style="color:#666; font-size: 5vw;"></i></div>'+
  '</div>',
  };
});

app.filter('shorten',function(){
  return function(str){
    var newStr;
    var newNum;
    var num=parseInt(str);
    if(num>9999){
       newNum=(num/10000).toFixed(2);
       newStr=newNum.toString()+"万";
    }else{
       newStr=str;
    }
    return newStr;
  }
});

app.filter('shortenMore',function(){
  return function(str){
    var num=parseInt(str);
    var newStr;
    if(num>=10000){
      newStr=((num/10000).toFixed(2)).toString()+"亿元";
    }else if(num<10000){
      newStr=(num.toFixed(2)).toString()+"万元";
    }
    return newStr;
  }
})

app.filter('filterLiulan',function(){
  return function(str){
    var num=parseInt(str);
    var result = num / 10000;
    return parseInt(result);
  }
})

app.filter('filterData',function(){
  return function(str){
    var data=str;
    var result = data.replace(/[/]/g,'-');
    return result;
  }
})

app.filter('isNull',function(){
  return function(str){
    if(str == ""){
      return "-";
    }else{
      return result;
    }
  }
})

app.filter('bir',function(){
  return function(str){
    var newStr0=str.substring(6,10);
    var newStr1=str.substring(10,12);
    var newStr2=str.substring(12,14);
    return newStr0+"-"+newStr1+"-"+newStr2;

  }

})


app.filter('date',function(){
  return function(str){
    var newStr;
    var myDate = new Date();
    var year=(myDate.getFullYear()).toString();
    var mou=(myDate.getMonth()+1).toString();
    var date=(myDate.getDate()).toString();
    if(mou.length==1){
      mou="0"+mou;
    }
    var newStr=year+"-"+mou+"-"+date;
    if(newStr==str){
      newStr="今日";
    }else{
      newStr=str;
    }
    return newStr;
  }
});

app.config(function ($stateProvider,$urlRouterProvider) {
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
      cache: 'true',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_search.html',
          controller: 'MainSearchCtrl'
        }
      }
    })

    .state('tab.main_company', {
      url: '/main_company',
      cache: 'true',
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
      cache: 'true',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_company_baogao.html',
          controller: 'MainCompanyBaoGaoCtrl'
        }
      }
    })


    .state('tab.main_baogao_model', {
      url: '/main_baogao_model',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_baogao_model.html',
          controller: 'MainBaoGaoModelCtrl'
        }
      }})

    .state('tab.main_login', {
      url: '/main_login',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_login.html',
          controller: 'MainLoginCtrl'
        }
      }})
    .state('tab.main_register', {
      url: '/main_register',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_register.html',
          controller: 'MainRegisterCtrl'
        }
      }})
    .state('tab.main_forget_password', {
      url: '/main_forget_password',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_forget_password.html',
          controller: 'MainForgetPasswordCtrl'
        }
      }})
    .state('tab.main_set_password', {
      url: '/main_set_password',
      cache: 'false',
      views: {
        'tab-main': {
          templateUrl: 'templates/main/main_set_password.html',
          controller: 'MainSetPasswordCtrl'
        }
      }})






















});
