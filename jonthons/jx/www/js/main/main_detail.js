angular.module('starter.main_detail', [])
    .controller('MainDetailCtrl', function($compile,$ionicLoading,$rootScope,$http,$stateParams,$scope,$ionicModal,$state) {
        //去购物车
        $scope.goCart=function(){
            $state.go("tab.cart");
        }
    init();

    function init(){
      $ionicLoading.show();
      // 获取商品信息
      var good_id = $stateParams.id;
      $http.get(basePath+"api/goods?goods_id="+good_id)
        .success(function(response){
          $scope.good = response.response.data;
          // 默认商品价格
          $scope.good.num = 1;
          var ele = $compile($scope.good.goods_desc)($scope);
          angular.element($('#detailHtml')).append(ele);
          calcTotalPrice();
          $ionicLoading.hide();
        })
    }

    function calcTotalPrice(){
      $scope.totalPrice = $scope.good.shop_price*$scope.good.num;
    }

    // 添加购物车按钮
    $scope.addCart = function(){
      var carts = JSON.parse(localStorage.getItem("carts"));
      var isHave = 0;
      for(var i=0;i<carts.length;i++){
        if(carts[i]._id == $scope.good._id){
          isHave =1;
          carts[i].num = carts[i].num + $scope.good.num;
        }
      }
      if(isHave == 0){
        carts.push($scope.good);
      }
      localStorage.setItem("carts",JSON.stringify(carts));
      //alert("添加购物车成功!");
      cartAnimation();
    }

    // **************************刀哥在这里写动画效果***************************************
    function cartAnimation(){
      var offset = $('.img').offset();
      //var addCartOffset = $('.addCart').offset();
      var img = '<img class="u-flyer" src="'+$('.img').attr("ng-src")+'"/>';
      var flyer = $(img);
      flyer.fly({
        start: {
          left: offset.left,//0,//$(window).width()/2,
          top: offset.top//0//$('.img').height()/2
        },
        end: {
          left: $(window).width()-10,
          top: 25,
          width: 0,
          height: 0
        }
      });

    }

    // 添加数量
    $scope.addNum = function(){
      $scope.good.num = $scope.good.num+1;
      calcTotalPrice();
    }

    $scope.subNum = function(){
      if($scope.good.num >1){
        $scope.good.num = $scope.good.num-1;
      }else{
        $scope.good.num = 1;
      }
      calcTotalPrice();
    }



    $scope.toOrder = function(){
        $scope.modal.hide();
        localStorage.setItem("carts_detail","[]");
        var carts_detail = JSON.parse(localStorage.getItem("carts_detail"));
        carts_detail.push($scope.good);
        localStorage.setItem("carts_detail",JSON.stringify(carts_detail));
        $state.go("tab.main_order");
    }

    // 点击收藏
    $scope.toStow = function(){
        $http.get(basePath+"api/stow")
          .success(function(response){
            $scope.good = response.response.data;
            // 默认商品价格
            $scope.good.attr = $scope.good.attrs[0];
            $scope.good.num = 1;
            var ele = $compile($scope.good.goods_desc)($scope);
            angular.element($('#detailHtml')).append(ele);
            $ionicLoading.hide();
          })
    }

    })
