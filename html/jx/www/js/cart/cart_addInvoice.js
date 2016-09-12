angular.module('starter.cart_addInvoice', [])
  .controller('AddInvoiceCtrl', function($timeout,$http,$stateParams,$scope,$ionicActionSheet,$ionicHistory,$state) {

    init();

    function init(){
      $scope.invoice = {}; // 方便input取值用的
      $scope.type_name = "企业";
      $scope.invoice_type = "enterprise";
    }

    $scope.save = function(){
      if($scope.invoice.invoice_header == undefined){
        alert("请填写抬头");
      }else{
        $http({
          method: 'POST',
          url:basePath+'api/invoice',
          data: "user_id="+localStorage.getItem("user_id")+"&invoice_type="+$scope.invoice_type+"&invoice_header="+$scope.invoice.invoice_header,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        }).success(function(response){
          if(response.response.success == 1){
            localStorage.setItem("invoice",JSON.stringify(response.response.data));
            $ionicHistory.goBack(-2);
          }else{
            alert(response.response.return_code);
          }
        }).error(function(response){
        })
      }
    }

    $scope.show = function() {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '个人' },
          { text: '企业' }
        ],
        titleText: '发票类型',
        cancelText: '取消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          if(index == 0){
            $scope.type_name="个人";
            $scope.invoice_type = "personal";
          }else{
            $scope.type_name="企业";
            $scope.invoice_type = "enterprise";
          }
          return true;
        }
      });

      // For example's sake, hide the sheet after two seconds
      $timeout(function() {
        hideSheet();
      }, 2000);

    };

  })
