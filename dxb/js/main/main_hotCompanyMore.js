angular.module('starter.main_hotCompanyMore', [])
  .controller('MainHotCompanyMoreCtrl', function($scope,$http,$rootScope,$state) {
    $scope.basepath=basePath;
    var hotPageVar={
      key:'',
      controlLoad:'',
      hasMore:true,
      pageCount:1,
      mydata:[]
    };

    $http.get(basePath+"/api/enterprise/hot?page=1"+"&page_size=10")
      .success(function(res){
        $scope.sourceData=res.response.data;
        //alert($scope.sourceData.length);
        hotPageVar.mydata=hotPageVar.mydata.concat($scope.sourceData);
        hotPageVar.controlLoad='1';
        $scope.hasmore=true;
        hotPageVar.hasMore=res.response.pager.has_more;
      })


    //  上拉加载

    $scope.loadMore = function(){
      console.log("load");
      if(hotPageVar.hasMore==true){
        hotPageVar.pageCount=hotPageVar.pageCount+1;
        $http.get(basePath+"/api/enterprise/hot?page="+hotPageVar.pageCount+"&page_size=10")
          .success(function(res){
            if(res.response.success==1){

              //hotPageVar.pageCount=hotPageVar.pageCount+1;
              hotPageVar.mydata=hotPageVar.mydata.concat(res.response.data);
              $scope.sourceData=hotPageVar.mydata;
              if(!$scope.$$phase) {
                $scope.$apply();
              }

              hotPageVar.hasMore=res.response.pager.has_more;
              //hotPageVar.controlLoad='1';
              $scope.hasmore=res.response.pager.has_more;
              $scope.$broadcast('scroll.infiniteScrollComplete');
            }
          })
      }
      else{

        $scope.hasmore=false;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
      console.log("loadmore");
    }

    $scope.otherConnect = function(){
      $(".prompt").removeClass("hide");
      GeneralTipsHeight($(".prompt .content"));
    }
    $scope.selectConnect = function(meg){
      $(".otherConnect span").text(meg);
      $(".prompt").addClass("hide");
    }

    function GeneralTipsHeight(GeneralTipsHeight){
      var screenHeight = $(window).height();
      var height = parseInt(GeneralTipsHeight.css("height").split("px")[0])+10;

      var endTop = (screenHeight-height)/2;

      GeneralTipsHeight.css("top",endTop);
    }


    $(".prompt").bind("click",function(e){
      var target = $(e.target);
      if(target.closest(".prompt .content").length == 0){
        $(".prompt").addClass("hide");
      }else{

      }
    })


    $scope.toCompany = function(company){
      $rootScope.companyData = company;
      $state.go("tab.main_company");
    }


  })




