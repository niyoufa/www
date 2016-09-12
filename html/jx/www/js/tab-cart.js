angular.module('starter.tab-cart', [])
    .controller('CartCtrl', function($ionicLoading,$rootScope,$scope,$http,$state) {

      init();

      function init(){
        localStorage.setItem("state","cart");
        // 初始化购物车数据
        $scope.carts = JSON.parse(localStorage.getItem("carts"));
        calcTotalPrice();
      }

      $scope.addNum = function(good){
        for(var i=0;i<$scope.carts.length;i++){
          if($scope.carts[i]._id == good._id){
            $scope.carts[i].num = $scope.carts[i].num + 1;
            calcTotalPrice();
            localStorage.setItem("carts",JSON.stringify($scope.carts));
          }
        }
      }

      $scope.subNum = function(good){
        for(var i=0;i<$scope.carts.length;i++){
          if($scope.carts[i]._id == good._id){
            if($scope.carts[i].num > 1){
              $scope.carts[i].num = $scope.carts[i].num - 1;
              calcTotalPrice();
              localStorage.setItem("carts",JSON.stringify($scope.carts));
            }

          }
        }
      }

      $scope.doDelete = function(good){
        for(var i=0;i<$scope.carts.length;i++){
          if($scope.carts[i]._id == good._id){
            $scope.carts.splice(i, 1);
            calcTotalPrice();
            localStorage.setItem("carts",JSON.stringify($scope.carts))
          }
        }
      }

      $scope.toOrder = function(){
        console.log(JSON.stringify($scope.carts));
        //alert("user_id="+localStorage.getItem("user_id")+"&carts="+JSON.stringify($scope.carts));
        if($scope.totalPrice == 0){
        }else{
          $http({
            method: 'POST',
            url:basePath+'api/order/validate',
            data: "user_id="+localStorage.getItem("user_id")+"&carts="+JSON.stringify($scope.carts),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
          }).success(function(response){
            if(response.response.success == 1){
              $state.go("tab.cart_order");
            }else{
              alert(response.response.return_code);
            }
          }).error(function(response){
          })
        }
      }

      // 计算总价
      function calcTotalPrice(){
        var totalPrice = 0;
        for(var i=0;i<$scope.carts.length;i++){
          totalPrice = totalPrice+$scope.carts[i].shop_price*$scope.carts[i].num;
          //alert(totalPrice);
        }
        $scope.totalPrice = totalPrice;
      }



    })
