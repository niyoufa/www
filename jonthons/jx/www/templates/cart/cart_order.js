angular.module('starter.cart_order', [])
    .controller('CartOrderCtrl', function($ionicLoading,$stateParams,$scope,$state,$http) {

        init();

        function init(){
            initTotalPrice();
            $scope.origin_code = "WZ";
            $scope.isHaveAddress = 1;
            $scope.type = "weixin";
            $scope.origin_code = "WZ";
            $scope.payTypeWX = true;
            $scope.payTypeDF = false;
            $scope.payTypeDHB = false;
            $scope.invoice = JSON.parse("{}");
            if(localStorage.getItem("invoice") == ""){
              $scope.invoice.invoice_header = "请选择发票信息";
              $scope.invoice._id = "";
            }else{
              $scope.invoice = JSON.parse(localStorage.getItem("invoice"));
            }
            if(localStorage.getItem("address") != ""){
              $scope.address = JSON.parse(localStorage.getItem("address"));
            }else{
              $scope.isHaveAddress = 0;
            }
        }

        function initTotalPrice(){
          if(localStorage.getItem("state") == "main"){
            $scope.pay_carts = localStorage.getItem("carts_detail");
            $scope.carts = JSON.parse(localStorage.getItem("carts_detail"));
            var totalPrice = 0;
            for(var i=0;i<$scope.carts.length;i++){
              totalPrice = totalPrice+$scope.carts[i].attr.shop_price*$scope.carts[i].num;
           }
            $scope.totalPrice = totalPrice;
          }else{
            $scope.pay_carts = localStorage.getItem("carts");
            $scope.carts = JSON.parse(localStorage.getItem("carts"));
            var totalPrice = 0;
            for(var i=0;i<$scope.carts.length;i++){
              totalPrice = totalPrice+$scope.carts[i].attr.shop_price*$scope.carts[i].num;
            }
            $scope.totalPrice = totalPrice;
          }

        }


        $scope.choosePayType = function(type){
            if(type == 'wx'){
                $scope.type = "weixin";
                $scope.payTypeWX = true;
                $scope.payTypeDF = false;
                $scope.payTypeDHB = false;
            }else if(type == 'df'){
                $scope.type = "cod";
                $scope.payTypeWX = false;
                $scope.payTypeDF = true;
                $scope.payTypeDHB = false;
            }else if(type == 'dhb'){
              $scope.type = "cod";
              $scope.payTypeWX = false;
              $scope.payTypeDF = false;
              $scope.payTypeDHB = true;
            }
        }

        // 选择发票
        $scope.toChooseInvoice = function(){
          if(localStorage.getItem("state") == "main"){
            $state.go("tab.main_chooseInvoice");
          }else if(localStorage.getItem("state") == "cart"){
            $state.go("tab.cart_chooseInvoice");
          }else if(localStorage.getItem("state") == "account"){
            $state.go("tab.account_chooseInvoice");
          }
        }

        //选择地址
        $scope.toChooseAddress = function(){
          if(localStorage.getItem("state") == "main"){
            $state.go("tab.main_chooseAddress");
          }else if(localStorage.getItem("state") == "cart"){
            $state.go("tab.cart_chooseAddress");
          }else if(localStorage.getItem("state") == "account"){
            $state.go("tab.account_chooseAddress");
          }

        }
        // 下单
        $scope.toPay = function(){
          if($scope.address == undefined){
            alert("请选择收货地址");
          }else{
            if(localStorage.getItem("device") == "iOS"){
              $scope.origin_code = "AP";
            }else if(localStorage.getItem("device") == "Android"){
              $scope.origin_code = "AP";
            }
            $ionicLoading.show();
            $http({
              method: 'POST',
              url:basePath+'api/order',
              data: "origin_code=" + $scope.origin_code+
              "&address_id="+$scope.address._id+
              "&user_id="+localStorage.getItem("user_id")+
              "&carts="+$scope.pay_carts+
              "&pay_type="+$scope.type+
              "&invoice_id="+$scope.invoice._id+
              "&openid="+localStorage.getItem("openid")+
              "&test=1",
              headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            }).success(function(response){
              if(response.response.success == 1){
                localStorage.setItem("carts","[]");
                $ionicLoading.hide();
                if($scope.type == "weixin"){
                  var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
                  // 微信浏览器
                  if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    onBridgeReady(response.response.data);
                  }else if(localStorage.getItem("device") == "Android"){
                      var extraInfo = cordova.require('com.xulei.weixin.cordova.ExtraInfo');
                      extraInfo.weixinPay(function(message) {
                          $ionicHistory.clearHistory();
                          $state.go("tab.cart_success");
                      }, function(message) {
                          $ionicHistory.clearHistory();
                          $state.go("tab.cart_success");
                      }, [response.response.data]);
                  }
                  else if(localStorage.getItem("device") == "iOS"){

                    var myJson=JSON.parse(response.response.data);
                    var prepay_id=myJson.prepayid;
                    var nonce_str=myJson.noncestr;
                    var sign=myJson.sign;
                    var mch_id=myJson.partnerid;
                    var app_id=myJson.appid;
                    var time=myJson.timestamp;

                    document.addEventListener('deviceready', function() {
                      var extraInfo = cordova.require('cordova.Pay.Pay');
                      extraInfo.myPay(function(message) {


                        $state.go("tab.order_list");
                      }, function(message) {}, [prepay_id,nonce_str,sign,mch_id,app_id,time]);
                    });
                  }
                }else if($scope.type == "cod"){
                  $state.go("tab.cart_success");
                }
              }else{

              }
            }).error(function(response){
            })
          }

        }

    function onBridgeReady(prepay_id){
      var timestamp=new Date().getTime().toString();
      var nonceStr = randomString(32);
      var stringA = "appId=wxea2f7cdb51e3c9ab&nonceStr="+nonceStr+"&package=prepay_id="+prepay_id+"&signType=MD5&timeStamp="+timestamp;
      var stringSignTemp = stringA+"&key=5AFA6C946BA7ED31AD0DB852B803AAF7";
      sign=hex_md5(stringSignTemp).toUpperCase();
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId" : "wxea2f7cdb51e3c9ab",     //公众号名称，由商户传入
          "timeStamp": timestamp,         //时间戳，自1970年以来的秒数
          "nonceStr" : nonceStr, //随机串
          "package" : "prepay_id="+prepay_id,
          "signType" : "MD5",         //微信签名方式：
          "paySign" : sign //微信签名
        },
        function(res){
          //$state.go("tab.main");
          if(res.err_msg == "get_brand_wcpay_request：ok" ) {
            $ionicHistory.clearHistory();
            $state.go("tab.order_list");
          }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
          else{
            $ionicHistory.clearHistory();
            $state.go("tab.order_list");
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
