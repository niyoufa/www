angular.module('starter.main_class', [])
    .controller('MainClassCtrl', function($ionicLoading,$rootScope,$http,$stateParams,$scope,$ionicModal,$state) {
        //去购物车
        $scope.goCart=function(){
            $state.go("tab.cart");
        }

        init();

        function init(){
            // 初始化默认选中第一个
            $ionicLoading.show();
            getData();
        }

        function getData(){

            $http.get(basePath+"api/catelog/goodslistbox?user_id="+localStorage.getItem("user_id"))
                .success(function(response){
                    $scope.classes = response.response.data;
                    $scope.goods = $scope.classes[0].goods_list;
                    // 规格组
                    $scope.specs = $scope.classes[0].goods_list[0].sku_list[0].goods_brief;
                    $scope.box_name = $scope.goods[0].box_name;
                    $scope.goodsGroup = $scope.classes[0].goods_list[0].sku_list;
                    $scope.isClick_id = $scope.classes[0]._id;
                    $scope.good = $scope.classes[0].goods_list[0].sku_list[0];
                    $scope.good.num = 1;
                    $ionicLoading.hide();
                })
        }

        $scope.toChangeClass = function(class_){
            $scope.goods = class_.goods_list;
            $scope.isClick_id = class_._id;
            $scope.specs = class_.goods_list[0].sku_list[0].goods_brief;
            $scope.box_name = class_.goods_list[0].box_name;
            $scope.goodsGroup = class_.goods_list[0].sku_list;
            $scope.good = class_.goods_list[0].sku_list[0];
            $scope.good.num = 1;
        }

        $scope.toChangeGroup = function(goods){
            $scope.box_name = goods.box_name;
            // 规格组
            $scope.specs = goods.sku_list[0].goods_brief;
            $scope.goodsGroup = goods.sku_list;
            $scope.good = goods.sku_list[0];
            $scope.good.num = 1;
        }

        // 选择规格，价格改变
        $scope.chooseSpecs = function(group){
            $scope.good = group;
            $scope.good.num = 1;
            $scope.specs = group.goods_brief;
        }

        // 添加数量
        $scope.addNum = function(){
            $scope.good.num = $scope.good.num+1;
        }

        $scope.subNum = function(){
            if($scope.good.num >1){
                $scope.good.num = $scope.good.num-1;
            }else{
                $scope.good.num = 1;
            }
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
      //alert("加入购物车成功!");
      cartAnimation();
    }


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
  })
