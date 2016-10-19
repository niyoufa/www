angular.module('starter.cart_editAddress', [])
  .controller('CartEditAddress', function($http,$stateParams,$scope,$ionicHistory,$state,$ionicLoading) {
    //alert($stateParams.id);
    var address=$stateParams.id;
    var province;
    console.log(address);
    var myaddress=JSON.parse(address);
    //alert($('#name').val());
    $scope.address={}
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
      if($scope.address.name == undefined){
        alert("请填写收货人");
      }else if($scope.address.tel == undefined){
        alert("请填写手机号码");
      }else{
        if(!city&&!province&&!district){
          province.name=myaddress.area;
          city.name=myaddress.city;
          district.name=myaddress.district;
        }
//        $ionicLoading.show();
        //$http({
        //  method: 'PUT',
        //  url:basePath+'api/address',
        //  data: "city="+city.name+"&district="+district.name+"&area="+province.name+
        //  "&detailed_address="+$scope.address.detail+
        //  "&remark=&contact_mobile="+$scope.address.tel+
        //  "&contact_name="+$scope.address.name+
        //  "&user_id="+localStorage.getItem("user_id"),
        //  //"&user_id=56da9da1988c7d277c9e1690",
        //  headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        //})

        $http.put(basePath+"api/address?address_id="+myaddress._id+"&city="+city.name+"&area="+province.name+"&district="+district.name+"&detailed_address="+$scope.address.detail+"&remark=备注2&contact_mobile="+$scope.address.tel+"&contact_name="+$scope.address.name)
          .success(function(response){
            $ionicLoading.show();
            if(response.response.success == 1){
              //localStorage.setItem("address",JSON.stringify(response.response.data));
              $ionicHistory.goBack(-1);
            }else{
              alert(response.response.return_code);
            }
            $ionicLoading.hide();
          }).error(function(response){
          })
      }
    }


  })
