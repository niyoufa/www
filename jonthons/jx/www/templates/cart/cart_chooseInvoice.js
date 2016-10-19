angular.module('starter.cart_chooseInvoice', [])
  .controller('ChooseInvoiceCtrl', function($http,$stateParams,$scope,$ionicHistory,$state) {

    init();

    function init(){
      $http.get(basePath+"api/invoice/list?user_id="+localStorage.getItem("user_id"))
        .success(function(response){
          $scope.invoices = response.response.data.invoice_list;
        })
    }

    $scope.toChooseInvoice = function(invoice){
      localStorage.setItem("invoice",JSON.stringify(invoice));
      $ionicHistory.goBack();
    }

    $scope.toAddInvoice = function(){
      if(localStorage.getItem("state") == "account"){
        $state.go("tab.account_addInvoice");
      }else if(localStorage.getItem("state") == "cart"){
        $state.go("tab.cart_addInvoice");
      }else if(localStorage.getItem("state") == "main"){
        $state.go("tab.main_addInvoice");
      }

    }

    $scope.deleInvoice=function(mes){
      $http.delete(basePath+"api/invoice?invoice_id="+mes)
        .success(function(res){
          if(res.response.success==1){
            init();
          }
        })
    }

  })
