/**
 * Created by zhangxiaogui on 16/7/19.
 */

var app = angular.module('mycompany',[])
app.controller('CompanyCtrl',function($scope,$http){

    $scope.userName = sessionStorage.userName;
    $scope.token = sessionStorage.token;

        $(".fileImg").change(function(){
            var objUrl = getURL(this.files[0]);
            if(objUrl != undefined) {
                var typeImg = $(this).val().split(".")[$(this).val().split(".").length-1];
                if(typeImg =="jpg" || typeImg == "png" || typeImg == "JPG" || typeImg == "PNG"){
                    $(this).next().next("img").attr("src", objUrl);
                    $(this).parent(".picture").find(".imagebg").removeClass("hide");
                }else{
                    var imgType = $(".Tips");
                    GeneralTips(imgType);
                    imgType.text("图片类型只能上传jpg、png!");
                    imgType.slideDown(300);
                    setTimeout(function(){
                        imgType.slideUp(300);
                    },1500);
                }
            }
            else{

            }
        });
        $(".picture .pic_btn").click(function(){
            $(this).parents(".picture").find("input").click();

        })
    //上传按钮
    $(".sendBtn").click(function(){
        $("#formImg").ajaxSubmit(function(res){
            if(res.response.success==1){

            }else if(res.response.success==-1){

            }else{

            }
        })
    })

    $scope.toIndex = function(){
        window.location.href = "index.html";
    }

    $scope.doLogout = function(){
        sessionStorage.token = undefined;
        window.location.href = "index.html";
    }


//建立一個可存取到該file的url
    function getURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }
})
