angular.module('starter.account_order', [])
  .controller('AccountOrderCtrl', function($scope,$state,$http,$ionicLoading) {
    $scope.$on('$ionicView.beforeEnter', function(e) {
      init();
    });

    function init() {
      $scope.pay_type="wx_wap";
      if(localStorage.getItem("toOrder_state") == "0"){
        localStorage.setItem("toOrder_state","1");
        $scope.ispaid = false;
      }else{
        $scope.ispaid = true;
      }
    }


    //网络请求
    $ionicLoading.show();
    $http.get(basePath+"/api/order/list?user_id="+localStorage.getItem("user_id")+"&page_size=20&page=1&pay_status=1")
      .success(function(res){
        if(res.response.success==1)
        {
          if(res.response.data.length!=0){
            for(var i=0;i<res.response.data.length;i++) {
              var singledata = res.response.data[i];
              if(i == 0){
                singledata.pay_status.value = 0;

              }


              if (singledata.order_goods.length > 1) {
                //alert(singledata.order_goods.length);
                //res.response.data[i].noone = 1;
                //if(singledata.order_goods.length>3){
                //  res.response.data[i].myid="str"+ i.toString();
                //  var mywidth=80*(singledata.order_goods.length+1);
                //  document.getElementById(singledata.myid).style.width=mywidth.toString()+"px";
                //}
              }

            }
            $scope.myorders=res.response.data;

          }else{

          }

          $ionicLoading.hide();
        }
      }).error(function(){
        $ionicLoading.hide();

      })


    $scope.toPay = function(order){
      if(localStorage.getItem("device") == "wechat"){
        WeChatPay(order);
      }
    }

    function WeChatPay(order){
      var timestamp=new Date().getTime().toString();
      var stringA =
        "openid="+localStorage.getItem("openid")+
        "&order_id="+order.order_id+
        "&pay_type="+$scope.pay_type+
        "&timestamp="+timestamp;
      var stringSignTemp = stringA+"&key=87B2447B04E5AA93F00C21A5B98F32A0";
      var sign=hex_md5(stringSignTemp).toUpperCase();

      $http({
        method: 'POST',
        url:basePath+'/api/order',
        data:
        "openid="+localStorage.getItem("openid")+
        "&order_id="+order.order_id+
        "&pay_type="+$scope.pay_type+
        "&timestamp="+timestamp+
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
            localStorage.setItem("toOrder_state", "1");
            init();
          }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
            localStorage.setItem("toOrder_state","0");
            init();
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


    //已支付
    $scope.paidClick=function(){
      if(!$scope.ispaid){
        $scope.ispaid = true;
      }
    }

    //待支付
    $scope.unpaidClick=function(){
      if($scope.ispaid) {
        $scope.ispaid = false;
      }

    }

    $scope.godetail=function(mes){
      $state.go('tab.account_detail', {id:mes} );

    }
  })




