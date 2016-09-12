/**
 * Created by zp on 16/3/29.
 */
angular.module('starter.account_bill',[])
.controller('AccountBillCtrl',function($scope,$http,$state,$ionicLoading){
    var myarr=[{remark:1,data:'3月1号',accoun:'2000',ordernum:'1111111',name:'zp',orderdetails:[{name:'鱼',count:'3',money:'300'},{name:'虾',count:'3',money:'300'},{name:'牛奶',count:'3',money:'300'}]},{remark:2,data:'3月2号',accoun:'2000',ordernum:'1111111',name:'zp',orderdetails:[{name:'鱼',count:'3',money:'300'},{name:'虾',count:'3',money:'300'},{name:'牛奶',count:'3',money:'300'}]},{remark:3,data:'3月3号',accoun:'2000',ordernum:'1111111',name:'zp',orderdetails:[{name:'鱼',count:'3',money:'300'},{name:'虾',count:'3',money:'300'},{name:'牛奶',count:'3',money:'300'}]}];
    //$scope.orders=myarr;
    $scope.isnum=1;
    $scope.isClick=1;
    myclick("day");
    $scope.toClick=function(num){
      $scope.isClick=num;
      if(num==1){
        num="day";
      }else{
        num="month";
      }
      myclick(num);
    }
    function myclick(num){
      $ionicLoading.show();
      $scope.noinf=false;
      $http.get(basePath+"api/statistic/goods?type="+num+"&user_id="+localStorage.getItem("user_id"))
        .success(function(res){
          $ionicLoading.hide();
          if(res.response.success==1){
            if(res.response.data!=[]){
              for(var i=1;i<res.response.data.length+1;i++){
                res.response.data[i-1].remark=i;
                $scope.noinf=true;
              }
            }
            $scope.orders=res.response.data;
          }
        })
        .error(function(){
          $ionicLoading.hide();
        })
    }

    $scope.totClick=function(num){
      if(localStorage.getItem("clicknum")==num){
        num=0-num;
        $scope.isClass=num;
      }else{
        $scope.isClass=num;
      }
      localStorage.setItem("clicknum",num);

    }
  })
