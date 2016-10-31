angular.module('starter.account_gaunyu', [])
  .controller('AccountGuanyuCtrl', function($scope,$http) {
    var basePath = "http://221.226.241.34:61186/";
    $http.get(basePath+'api/my/aboutus')
      .success(function(res){
        var contactArr = res.response.data.contact;
        var description = res.response.data.desc;
        $scope.intro = description;
        console.log(contactArr);
        for(var i = 0;i<contactArr.length;i++){
          var htmlText = contactArr[i].desc + ":" + contactArr[i].value;
          //alert(htmlText);
          var childNode = document.createElement("p");
          childNode.innerHTML += htmlText;
          document.getElementById("contacts").appendChild(childNode);
        }

      })

  })




