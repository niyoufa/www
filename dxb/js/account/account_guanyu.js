angular.module('starter.account_gaunyu', [])
  .controller('AccountGuanyuCtrl', function($scope,$http) {
    $http.get(basePath+'/api/my/aboutus')
      .success(function(res){
        var contactArr = res.response.data.contact;
        var description = res.response.data.desc;
        $scope.intro = description;
        console.log(contactArr);
        for(var i = 0;i<contactArr.length-1;i++){
          var htmlText = contactArr[i].desc + ":" + contactArr[i].value;
          //alert(htmlText);
          var title = document.createElement("label");
          title.innerHTML = contactArr[i].desc+" :";
          var desc = document.createElement("span");
          desc.innerHTML = contactArr[i].value;
          var childNode = document.createElement("p");
          childNode.className='contact-item';
          childNode.appendChild(title);
          childNode.appendChild(desc);
          document.getElementById("contacts").appendChild(childNode);
        }
        var copyRight = document.createElement("div");
        copyRight.innerHTML = contactArr[i].desc + ":" + contactArr[i].value;
        copyRight.className = 'copyRight';
        document.getElementById("contacts").appendChild(copyRight);

      })

  })




