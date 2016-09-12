/**
 * Created by zp on 16/3/30.
 */
angular.module('starter.main_search',[])
.controller('MainSearchCtrl',function($scope,$http,$state){
    $scope.focus=function(){
      $scope.hots=[];
      $scope.searchinfo=true;
      var historylist=localStorage.getItem("myhistory");
      if(localStorage.getItem("myhistory")){
        if(JSON.parse(historylist).length>5){
          $scope.searchs=JSON.parse(historylist).slice(0,5);
        }else{
          $scope.searchs=JSON.parse(historylist);
        }
      }
    }

    function trim(mes){ //删除左右两端的空格
      return mes.replace(/(^\s*)|(\s*$)/g, "");
    }

    $scope.gosearch=function(){
      var myinput=document.getElementById("mysearch").value;
      if(trim(myinput)!=''){
        if(localStorage.getItem("myhistory")){
          var myarr=JSON.parse(localStorage.getItem("myhistory"));
          for(var i=0;i<myarr.length;i++){
            if(myarr[i]==myinput){
              myarr.splice(i,1);
              //alert(JSON.stringify(myarr));
            }
          }
          myarr.unshift(myinput);
          localStorage.setItem("myhistory",JSON.stringify(myarr));
        }else{
          var myarr=[myinput];

          localStorage.setItem("myhistory",JSON.stringify(myarr));
        }

        $http.get(basePath+"api/search?search_text="+trim(myinput))
          .success(function(res){
            if(res.response.success==1){
              if(res.response.data!=''){
                $scope.hots=res.response.data;
              }
            }
          })
        $scope.searchinfo=false;
        $scope.mysearch= 1;
        $scope.sousuo=1;
      }
    }

    $scope.choosehistory=function(mes){
      console.log(mes);
      document.getElementById("mysearch").value=mes;
      $scope.searchinfo=false;
    }
  })
