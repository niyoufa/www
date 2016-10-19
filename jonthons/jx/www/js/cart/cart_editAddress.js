angular.module('starter.cart_editAddress', [])
  .controller('CartEditAddress', function($http,$stateParams,$scope,$ionicHistory,$state,$ionicLoading,$ionicPopup) {

    var address=$stateParams.id;
    var province;
    console.log(address);
    var myaddress=JSON.parse(address);

    $scope.address={};
    $scope.address.name=myaddress.contact_name;
    $scope.address.tel=myaddress.contact_mobile;

    $scope.pro=myaddress.area;
    $scope.city=myaddress.city;
    $scope.dis=myaddress.district;
    $scope.select=function(){
      $scope.pro='请选择';
      $scope.city='请选择';
      $scope.dis='请选择';
      $scope.provinces = province;

    }

    $scope.changeProvince = function(chooseItem){
      initCity(chooseItem.name);
    }
    $scope.changeCity = function(chooseItem,cityItem){
      initDistrict(chooseItem.name,cityItem.name);
    }


    // 获取省份方法
    function initProvince(){
      //$ionicLoading.show();
      console.log("test");
      $http.get(basePath+"api/address/lib?method=province")
        .success(function(response){
          province=response.response.data;
          console.log(JSON.stringify(response));
        })
    }
    initProvince();
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
        if(province==undefined&&city==undefined&&district==undefined){
          $http.put(basePath+"api/address?address_id="+myaddress._id+"&city="+myaddress.city+"&area="+myaddress.area+"&district="+myaddress.district+"&detailed_address="+$scope.address.detail+"&remark=备注2&contact_mobile="+$scope.address.tel+"&contact_name="+$scope.address.name)
              .success(function(response){
                if(response.response.success == 1){
                  //localStorage.setItem("address",JSON.stringify(response.response.data));
                  $ionicHistory.goBack(-1);
                }else{
                  popup(response.response.return_code);
                }
                $ionicLoading.hide();
              }).error(function(response){
              })
        }else{
          $http.put(basePath+"api/address?address_id="+myaddress._id+"&city="+city.name+"&area="+province.name+"&district="+district.name+"&detailed_address="+$scope.address.detail+"&remark=备注2&contact_mobile="+$scope.address.tel+"&contact_name="+$scope.address.name)
              .success(function(response){
                if(response.response.success == 1){
                  //localStorage.setItem("address",JSON.stringify(response.response.data));
                  $ionicHistory.goBack(-1);
                }else{
                  popup(response.response.return_code);
                }
                $ionicLoading.hide();
              }).error(function(response){
              })
        }

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
