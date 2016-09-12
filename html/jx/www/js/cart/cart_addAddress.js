angular.module('starter.cart_addAddress', [])
  .controller('AddAddressCtrl', function($ionicLoading,$scope,$http,$ionicHistory,$ionicPopup) {


    init();

    function init(){

      $scope.address = {}; // 方便input取值用的
      // 获取省份
      $ionicLoading.show();
      $http.get(basePath+"api/address/lib?method=province")
        .success(function(response){
          $scope.provinces = response.response.data;
          $ionicLoading.hide();
        })
    }

    $scope.changeProvince = function(chooseItem){
      initCity(chooseItem.name);
    }
    $scope.changeCity = function(chooseItem,cityItem){
      initDistrict(chooseItem.name,cityItem.name);
    }

    // 获取省份方法
    function initProvince(){
      $ionicLoading.show();
      $http.get(basePath+"api/address/lib?method=province")
        .success(function(response){
          $scope.provinces = response.response.data;
          $ionicLoading.hide();
        })
    }

    // 获取城市方法
    function initCity(province){
      $ionicLoading.show();
      $http.get(basePath+"api/address/lib?method=city&province="+province)
        .success(function(response){
          $scope.citys = response.response.data;
          $ionicLoading.hide();
        })
    }

    // 获取市区
    function initDistrict(province,city){
      $ionicLoading.show();
      $http.get(basePath+"api/address/lib?method=area&province="+province+"&city="+city)
        .success(function(response){
          $scope.districts = response.response.data;
          $ionicLoading.hide();
        })
    }

    // 添加地址
    $scope.add = function(province,city,district){
      if($scope.address.name == ''){
        popup("请填写收货人");
      }else if($scope.address.tel == ''){
        popup("请填写手机号码");
      }else{
//        $ionicLoading.show();
        $http({
          method: 'POST',
          url:basePath+'api/address',
          data: "city="+city.name+"&district="+district.name+"&area="+province.name+
          "&detailed_address="+$scope.address.detail+
          "&remark=&contact_mobile="+$scope.address.tel+
          "&contact_name="+$scope.address.name+
          "&user_id="+localStorage.getItem("user_id"),
          //"&user_id=56da9da1988c7d277c9e1690",
          headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        }).success(function(response){
          if(response.response.success == 1){
            localStorage.setItem("address",JSON.stringify(response.response.data));
            $ionicHistory.goBack(-2);
          }else{
            popup(response.response.return_code);
          }
          $ionicLoading.hide();
        }).error(function(response){
        })
      }
    }




      function popup(mes){
        var myPopup = $ionicPopup.show({
          title: mes,
          scope: $scope,
          buttons: [
            {
              text: '<b>知道了</b>',
              type: 'button-assertive',
              onTap: function (e) {
                myPopup.close();
              }
            },
          ]
        });
      }






  })
