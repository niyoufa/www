angular.module('starter.cart_chooseAddress', [])
  .controller('ChooseAddressCtrl', function($ionicLoading,$http,$stateParams,$scope,$ionicHistory,$state) {

    init();

    function init(){
      $ionicLoading.show();
      $http.get(basePath+"api/address?user_id="+localStorage.getItem("user_id"))
        .success(function(response){
          $scope.addresses = response.response.data;
          $ionicLoading.hide();
        })
    }

    $scope.chooseAddress = function(address){
      localStorage.setItem("address",JSON.stringify(address));
      $ionicHistory.goBack();
    }

    $scope.toAddAddress = function(){
      if(localStorage.getItem("state") == "account"){
        $state.go("tab.account_addAddress");
      }else if(localStorage.getItem("state") == "cart"){
        $state.go("tab.cart_addAddress");
      }else if(localStorage.getItem("state") == "main"){
        $state.go("tab.main_addAddress");
      }
    }

    $scope.toEditAddress = function(address){
      var myaddress=JSON.stringify(address);
      if(localStorage.getItem("state") == "account"){
        $state.go("tab.account_editAddress",{id:myaddress});
      }else if(localStorage.getItem("state") == "cart"){
        $state.go("tab.cart_editAddress",{id:myaddress});
      }else if(localStorage.getItem("state") == "main"){
        $state.go("tab.main_editAddress",{id:myaddress});
      }
    }


    //删除地址
    $scope.toDeleteAddress = function(mes){
      //alert(JSON.stringify(mes));
      $http.delete(basePath+"api/address?address_id="+mes._id)
        .success(function(res){
          init();
        })
    }




  })
