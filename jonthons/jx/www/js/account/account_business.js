/**
 * Created by zp on 16/3/8.
 */
angular.module("starter.account_business",[])
  .controller("AccountBusinessCtrl",function($scope,$state,$http,$ionicModal,$ionicActionSheet){
    init();

    function init(){
      if(localStorage.getItem("device") == "iOS"){
      }else if(localStorage.getItem("device") == "Android"){
      }else{
        var url= window.location.href.split("#")[0];
        $http.get(basePath+"pay/util/wx_share.php?url="+encodeURIComponent(url))
          .success(function(res){
            wx.checkJsApi({
              jsApiList: [
                'getLocation',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
              ],
              success: function (res) {
              }
            });
            wx.config({
              debug:false,
              appId:res.appId,
              timestamp:res.timestamp,
              nonceStr:res.nonceStr,
              signature:res.signature,
              jsApiList:['onMenuShareTimeline','onMenuShareAppMessage','getLocation']
            });
            wx.onMenuShareTimeline({
              title:"匠鲜科技",
              //desc:"简约而不简单，无“毒”有偶范盒+颜值爆表范盒+元气满满范盒+智慧加分范盒+炯炯有神范盒等于25元...",
              link:"https://www.jonthons.com/jx/www/load.html?invite_user=56f3c7b4988c7d434729ff32",
              imgUrl:"https://www.jonthons.com/images/logo/icon_jx.png",
              success:function(){
              },
              fail:function(res){
              }
            });
            wx.onMenuShareAppMessage({
              title: '匠鲜科技', // 分享标题
              desc: '匠鲜商城，你值得拥有', // 分享描述
              link: "https://www.jonthons.com/jx/www/load.html?invite_user=56f3c7b4988c7d434729ff32", // 分享链接
              imgUrl: 'https://www.jonthons.com/images/logo/icon_jx.png', // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {
                // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
            });
          })
      }
    }

    $scope.doRefresh = function() {
      $scope.loadMore=true;
      getchartinfo();
      $scope.$broadcast('scroll.refreshComplete');
    }

    //chart info
    function getchartinfo(){
      $http.get(basePath+"api/jxcredit/sum?user_id="+localStorage.getItem("user_id"))
        .success(function(res){
          if(res.response.success==1){
            var week=res.response.data.daily_sum;
            $scope.today_sum=res.response.data.today_sum;
            $scope.all_sum=res.response.data.all_sum;
            var lineChartData = {
              labels : [week[0][0],week[1][0],week[2][0],week[3][0],week[4][0],week[5][0],week[6][0]],
              datasets : [
                {
                  label: "My First dataset",
                  fillColor : "rgba(220,220,220,0.2)",
                  strokeColor : "rgba(220,220,220,1)",
                  pointColor : "rgba(220,220,220,1)",
                  pointStrokeColor : "#fff",
                  pointHighlightFill : "#fff",
                  pointHighlightStroke : "rgba(220,220,220,1)",
                  data : [week[0][1],week[1][1],week[2][1],week[3][1],week[4][1],week[5][1],week[6][1]]
                }
              ]

            }
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
              responsive: true
            });
          }
        })
    }
    getchartinfo();

    // 模式弹窗，分享用的提示
    // ************************************************************************************************
    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //当我们用完模型时，清除它！
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // 当隐藏模型时执行动作
    $scope.$on('modal.hide', function() {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function() {
      // 执行动作
    });

    $('#code').html("");
    $('#code').qrcode({width:180,height:180,foreground:"#000000",background:"#f7f7f9",text:"123"});


    $scope.goshare=function(){

      if(localStorage.getItem("device") == "iOS"){
        $ionicActionSheet.show({
          buttons: [{
            text: '分享给微信好友'
          }, {
            text: '分享至微信朋友圈'
          }],
          titleText: '分享',
          cancelText: '取消',
          cancel: function() {
            // 取消时执行
          },

          buttonClicked: function(index) {
            Wechat.share({
              message: {
                title: "DH",
                description: "东汇商城，你值得拥有",
                thumb: "https://banana.meiguoyouxian.com/images/891111.jpg",
                media: {
                  type: Wechat.Type.LINK,
                  webpageUrl: "https://meiguoyouxian.com/api/youzan/www/load.html"
                }
              },
              scene: index
            }, function() {
              console.log(reason);
              return true;
            }, function(reason) {
              return true;
            });
          }
        });
      }else if(localStorage.getItem("device" == "Android")){
      }else{
        $scope.modal.show();  //微站
      }
    }
  })
