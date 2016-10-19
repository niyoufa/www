angular.module('starter.account_order', [])
  .controller('AccountOrderCtrl', function($scope,$state,$http,$ionicLoading,$ionicPopup) {
    $scope.$on('$ionicView.beforeEnter', function(e) {

      init();
      initData();
    });
    $scope.infiniteInfo='加载更多...';
    var orderPageVar={
      key:'',
      controlLoad:'',
      hasMore:true,
      pageCount:1,
      mydatapaied:[],
      mydatanopay:[]
    };

    var noPay=new Array();
    var paied=new Array();
    function init() {
      $scope.pay_type="wx_wap";
      if(localStorage.getItem("toOrder_state") == "0"){
        localStorage.setItem("toOrder_state","1");
        $scope.ispaid = false;
      }else{
        $scope.ispaid = true;
      }
    }


    function initData(){
      //网络请求
      $ionicLoading.show();
      paied=[];
      noPay=[];
      $http.get(basePath+"/api/order/list?user_id="+localStorage.getItem("user_id")+"&page_size=10&page=1")
        .success(function(res){
          $ionicLoading.hide();
          orderPageVar.pageCount=1;
          orderPageVar.mydatapaied=[];
          orderPageVar.mydatanopay=[];
          var singledata = res.response.data;
          if(res.response.success==1)
          {

            if(res.response.data.length!=0){
              for(var i=0;i<singledata.length;i++) {

                if(singledata[i].pay_status.value == 0){
                  orderPageVar.mydatanopay.push(singledata[i]);
                }else if(singledata[i].pay_status.value == 1){
                  orderPageVar.mydatapaied.push(singledata[i]);
                }
              }
              orderPageVar.hasMore=$scope.hasmore=res.response.pager.has_more;
              if($scope.hasmore==true){

                $scope.loadMore();
              }
              $scope.paied = orderPageVar.mydatapaied;
              $scope.noPay = orderPageVar.mydatanopay;
            }
          }else{
            var alertPopup = $ionicPopup.alert({
              title: '请求失败!',
              template: '<center>'+res.response.return_code+'</center>'
            });
            alertPopup.then(function(res) {
              console.log('Thank you for not eating my delicious ice cream cone');
            });
          }
        }).error(function(){
          $ionicLoading.hide();
        })

    }


    $scope.toDragLeft = function(){
      $scope.ispaid = false;
    }
    $scope.toDragRight = function(){
      $scope.ispaid = true;
    }


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
            template: '<center>'+res.response.return_code+'</center>'
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
            initData();
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

    $scope.turnPay=function(){
      $scope.paidClick();
    }
    $scope.turnNoPay=function(){
      $scope.unpaidClick();
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

    $scope.doRefresh=function(){
      initData();
      $scope.$broadcast('scroll.refreshComplete');
    }


    //  上拉加载

    $scope.loadMore = function(){

      //if(orderPageVar.controlLoad==''){
      //
      //
      //}else{
      if(orderPageVar.hasMore==true){
        orderPageVar.pageCount=orderPageVar.pageCount+1;
        $http.get(basePath+"/api/order/list?user_id="+localStorage.getItem("user_id")+"&page_size=10&page="+orderPageVar.pageCount)
          .success(function(res){
            if(res.response.success==1){
              var singledata=res.response.data;
              for(var i=0;i<singledata.length;i++) {

                if(singledata[i].pay_status.value == 0){
                  orderPageVar.mydatanopay.push(singledata[i]);
                }else if(singledata[i].pay_status.value == 1){
                  orderPageVar.mydatapaied.push(singledata[i]);
                }
              }
              //if(orderPageVar.pageCount=res.response.pager.max_page-1){
              //  $scope.infiniteInfo='已加载全部内容!';
              //}
              orderPageVar.hasMore=$scope.hasmore=res.response.pager.has_more;
              $scope.paied = orderPageVar.mydatapaied;
              $scope.noPay = orderPageVar.mydatanopay;
              $scope.$broadcast('scroll.infiniteScrollComplete');
            }
          })
      }
      else{
        $scope.hasmore=false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }

      //}
      console.log("loadmore");

    };


// 取消订单

    $scope.cancelOrder=function(mes){
      var confirmPopup = $ionicPopup.confirm({
        title: '东 信 宝',
        template: '<center>确认取消?</center>',
        buttons: [{text:"取消"},{text:"确认",type: 'button-positive',onTap: function(e) {
        $scope.cancelOrder1(mes);
      }}]
      });
      confirmPopup.then(function(res) {

      });
    }
    $scope.cancelOrder1=function(mes){

      $ionicLoading.show();
      $http.put(basePath+"/api/order/cancel?id="+mes)
        .success(function(res){


          $http.get(basePath+"/api/order/list?user_id="+localStorage.getItem("user_id")+"&page_size=20&page=1&pay_status=1")
            .success(function(res){
              $ionicLoading.hide();
              var singledata = res.response.data;
              if(res.response.success==1) {
                if(res.response.data.length!=0){
                  noPay = [];
                  paied = [];
                  for(var i=0;i<singledata.length;i++) {
                    if(singledata[i].pay_status.value == 0){
                      noPay.push(singledata[i]);
                    }else if(singledata[i].pay_status.value == 1){
                      paied.push(singledata[i]);
                    }
                  }
                  $scope.noPay = noPay;
                  $scope.paied = paied;
                }

              }else{
                var alertPopup = $ionicPopup.alert({
                  title: '请求失败!',
                  template: '<center>'+res.response.return_code+'</center>'
                });
                alertPopup.then(function(res) {
                  console.log('Thank you for not eating my delicious ice cream cone');
                });
              }
            }).error(function(){
              $ionicLoading.hide();
            })
        }).error(function(){
          $ionicLoading.hide();
        })
    }
  })




