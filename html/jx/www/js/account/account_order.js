/**
 * Created by zp on 16/3/8.
 */
angular.module("starter.account_order",[])
.controller("AccountOrderCtrl",function($scope,$state,$http){
    $http.get(basePath+"api/order/list?user_id="+localStorage.getItem("user_id"))
      .success(function(res){
        //alert(JSON.stringify(res.response.data));
        //alert(localStorage.getItem("user_id"));
        if(res.response.success==1)
        {

          if(res.response.data.length!=0){
            for(var i=0;i<res.response.data.length;i++){
              var singledata=res.response.data[i];
              //pic more than 3
              if(singledata.order_goods.length>1){
                //alert(singledata.order_goods.length);
                res.response.data[i].noone=1;
                //if(singledata.order_goods.length>3){
                //  res.response.data[i].myid="str"+ i.toString();
                //  var mywidth=80*(singledata.order_goods.length+1);
                //  document.getElementById(singledata.myid).style.width=mywidth.toString()+"px";
                //}
              }

            }
            //alert(JSON.stringify(res.response.data));
            $scope.myorders=res.response.data;
          }else{

          }
        }
      })

    $scope.godetail=function(mes){
      console.log(mes);
      $state.go('tab.account_detail', {id:mes} );
    }


  })
