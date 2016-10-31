angular.module('starter.main_search', [])
  .controller('MainSearchCtrl', function($scope,$http) {



    $scope.basepath=basePath;
    var searchPageVar={
      key:'',
      controlLoad:'',
      hasMore:true,
      pageCount:1,
      mydata:[]
    };
    //searchPageVar.mydata=new Array();
    //$scope.barHeight=$(".bar")[0].clientHeight+"px";
    $scope.barHeight=document.getElementsByClassName("bar")[0].clientHeight;
    //search
    $scope.gosearch = function(){

      //console.log(searchPageVar.key);
      searchPageVar.key=document.getElementById("searchInfo").value;
      $http.get(basePath+"/api/enterprise/search?key="+searchPageVar.key+"&page=1"+"&page_size=10")
        .success(function(res){
          if(res.response.success==1){
            $scope.sourceData=res.response.data;
            searchPageVar.mydata=searchPageVar.mydata.concat($scope.sourceData);
            searchPageVar.controlLoad='1';
            $scope.hasmore=res.response.pager.has_more;
            searchPageVar.hasMore=res.response.pager.has_more;
            //if(res.response.pager.has_more==false){
            //
            //  $scope.hasmore=false;
            //}
          }
        })
    }
    if(localStorage.getItem("isSearchKey") == "1"){
      localStorage.setItem("isSearchKey","0")
      $scope.hot_key = localStorage.getItem("hot_key");
      document.getElementById("searchInfo").value=$scope.hot_key;
      $scope.gosearch();
    }

    //  上拉加载

    $scope.loadMore = function(){

      if(searchPageVar.controlLoad==''){

      }else{
        if(searchPageVar.hasMore==true){
          searchPageVar.pageCount=searchPageVar.pageCount+1;
          $http.get(basePath+"/api/enterprise/search?key="+searchPageVar.key+"&page="+searchPageVar.pageCount+"&page_size=10")
            .success(function(res){
              if(res.response.success==1){
                searchPageVar.mydata=searchPageVar.mydata.concat(res.response.data);
                console.log(searchPageVar.mydata);
                $scope.sourceData=searchPageVar.mydata;
                //$scope.$digest();
                $scope.hasmore=res.response.pager.has_more;
                searchPageVar.hasMore=res.response.pager.has_more;
                searchPageVar.controlLoad='1';
                $scope.$broadcast('scroll.infiniteScrollComplete');
              }
            })
        }
        else{
          $scope.hasmore=false;
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }

      }
      console.log("loadmore");

    };

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
      $rootScope.company = company
      $state.go("tab.main_company");
    }


  })
