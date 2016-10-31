angular.module('starter.main_company_baogao', [])
  .controller('MainCompanyBaoGaoCtrl', function($scope,$http,$state,$rootScope,$ionicHistory,$ionicPopup) {

    init();

    function init(){
      initData();
      getBaogao();
    }

    function initData(){
      $scope.user = {};
      $scope.pay_type="wx_wap"
    }

    function getBaogao(){
      $http.get(basePath+"/api/product/list?type=report")
        .success(function(res){
          if(res.response.success == 1){
            $scope.baogao = res.response.data[0];
          }
        })

    }




    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }

    function GeneralTipsHeight(GeneralTipsHeight){
      var screenHeight = $(window).height();
      var height = parseInt(GeneralTipsHeight.css("height").split("px")[0])+10;

      var endTop = (screenHeight-height)/2;

      GeneralTipsHeight.css("top",endTop);
    }


    $(".prompt").bind("click",function(e){
      var target = $(e.target);
      if(target.closest(".prompt .content").length == 0){
        $(".prompt").addClass("hide");
      }else{

      }
    })

    // 一个确认对话框
    $scope.toPay = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: '确认信息',
        template: '请再次确认输入的邮箱和手机号码的真是有效性，您购买的产品将会以报告的形式发送到已确认的邮箱'+$scope.user.email+"输入错误将不再重复发送报告，请务必确认其真实有效",
        buttons: [
          { text: '取消' },
          {
            text: '<b>确认</b>',
            type: 'button-positive',
            onTap: function(e) {
              if(localStorage.getItem("device") == "wechat"){
                WeChatPay();
              }else if(localStorage.getItem("devce") == "Android"){
                AndroidPay();
              }else if(localStorage.getItem("devce") == "iOS"){
                IosPay();
              }

            }
          },
        ]
      });
    };

    function IosPay(){

    }

    function AndroidPay(){

    }


    function WeChatPay(){
      var car = '[{"_id":"'+$scope.baogao._id+'","num":1}]';
      var timestamp=new Date().getTime().toString();
      var stringA =
        "carts="+encodeURIComponent(car)+
        "&contact_name="+encodeURIComponent(localStorage.getItem("nickname"))+
        "&email="+encodeURIComponent($scope.user.email)+
        "&enterprise_id="+$rootScope.company._id+
        "&mobile="+$scope.user.mobile+
        "&mobile_type="+localStorage.getItem("mobile_type")+
        "&openid="+localStorage.getItem("openid")+
        "&origin_code="+localStorage.getItem("origin_code")+
        "&pay_type="+$scope.pay_type+
        "&timestamp="+timestamp+
        "&user_id="+localStorage.getItem("user_id");
      var stringSignTemp = stringA+"&key=87B2447B04E5AA93F00C21A5B98F32A0";
      var sign=hex_md5(stringSignTemp).toUpperCase();

      $http({
        method: 'POST',
        url:basePath+'/api/order',
        data:
          "carts="+encodeURIComponent(car)+
          "&contact_name="+encodeURIComponent(localStorage.getItem("nickname"))+
          "&email="+encodeURIComponent($scope.user.email)+
          "&enterprise_id="+$rootScope.company._id+
          "&mobile="+$scope.user.mobile+
          "&mobile_type="+localStorage.getItem("mobile_type")+
          "&openid="+localStorage.getItem("openid")+
          "&origin_code="+localStorage.getItem("origin_code")+
          "&pay_type="+$scope.pay_type+
          "&timestamp="+timestamp+
          "&user_id="+localStorage.getItem("user_id")+
          "&sign="+sign,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
      }).success(function(res){
        if(res.response.success == 1){
          onBridgeReady(res.response.data.prepay_id);
        }else{
          var alertPopup = $ionicPopup.alert({
            title: '失败!',
            template: res.response.return_code
          });
          alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
          });
        }
      }).error(function(error){
      })
    }

    function onBridgeReady(prepay_id){
      var timestamp=new Date().getTime().toString();
      var nonceStr = randomString(32);
      var stringA = "appId=wx5265b3c0067c5b20&nonceStr="+nonceStr+"&package=prepay_id="+prepay_id+"&signType=MD5&timeStamp="+timestamp;
      var stringSignTemp = stringA+"&key=nf6h6df65149b8v461mn6j13g1n7hf69";
      sign=hex_md5(stringSignTemp).toUpperCase();
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId" : "wx5265b3c0067c5b20",     //公众号名称，由商户传入
          "timeStamp": timestamp,         //时间戳，自1970年以来的秒数
          "nonceStr" : nonceStr, //随机串
          "package" : "prepay_id="+prepay_id,
          "signType" : "MD5",         //微信签名方式：
          "paySign" : sign //微信签名
        },
        function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ) {
            $ionicHistory.clearHistory();
            localStorage.setItem("toOrder", "1");
            localStorage.setItem("toOrder_state", "1");
            $state.go("tab.account");
          }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
            $ionicHistory.clearHistory();
            localStorage.setItem("toOrder","1");
            localStorage.setItem("toOrder_state","0");
            $state.go("tab.account");
          }
        }
      );
    }

    function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }


  })




