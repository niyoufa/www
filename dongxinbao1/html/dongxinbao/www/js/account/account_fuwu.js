angular.module('starter.account_fuwu', [])
  .controller('AccountFuwuCtrl', function($scope,$http,$sce) {


    $http.get('http://221.226.241.34:61186/api/my/service')
      .success(function(response){

        var htmlRes = response.response.data.replace(/\n/g,'<br>').replace(/\n/g,'<pre>');

        $scope.fuwu = $sce.trustAsHtml(htmlRes);

      })


  })




