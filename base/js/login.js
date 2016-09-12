/**
 * Created by zhangxiaogui on 16/7/17.
 */
var app = angular.module('myLogin',[]);
app.controller('loginCtrl',function($scope,$http){
    var rotate = ["rotate1","rotate2","rotate3","rotate4","rotate5","rotate6","rotate7","rotate8","rotate9"];
    var num = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '0','1','2','3','4','5','6','7','8','9'];

        //刷新验证码
        getCode();
        $(".refresh").click(function(){
            getCode();
        })

        //登录提交验证
        $(".btn").click(function(){
            var phone_email = $(".phone").val();
            var regexp = /^([a-zA-Z0-9_-])+((@qq.com)|(@163.com)|(@126.com)|(@189.cn)|(@sina.com)|(@hotmail.com)|(@gmail.com)|(@139.com))$|^[0-9]{11}$/;
            if(phone_email == ""){
                $scope.myTips="请填写登录账号";
                var phone_emailTips = $(".Tips");
                GeneralTips(phone_emailTips);
                phone_emailTips.text("请填写登录账号");
                phone_emailTips.slideDown(300);
                setTimeout(function(){
                    phone_emailTips.slideUp(300);
                },1500);
            }else if(!regexp.test(phone_email)){
                $scope.myTips="请填写正确的手机号或邮箱";
                var phone_emailTips = $(".Tips");
                GeneralTips(phone_emailTips);
                phone_emailTips.text("请填写正确的手机号或邮箱");
                phone_emailTips.slideDown(300);
                setTimeout(function(){
                    phone_emailTips.slideUp(300);
                },1500);
            }else if($(".loginPassword").val()==""){
                $scope.myTips="请填写密码";
                var phone_emailTips = $(".Tips");
                GeneralTips(phone_emailTips);
                phone_emailTips.text("请填写密码");
                phone_emailTips.slideDown(300);
                setTimeout(function(){
                    phone_emailTips.slideUp(300);
                },1500);
            }
            //alert($(".codeInput").val()+"!!!"+$(".codeNum0").text()+$(".codeNum1").text()+$(".codeNum2").text()+$(".codeNum3").text());
           else if($(".codeInput").val().toLowerCase()!=($(".codeNum0").text()+$(".codeNum1").text()+$(".codeNum2").text()+$(".codeNum3").text()).toLowerCase()){
                $scope.myTips="验证码错误";
                var phone_emailTips = $(".Tips");
                GeneralTips(phone_emailTips);
                phone_emailTips.text("验证码错误");
                phone_emailTips.slideDown(300);
                setTimeout(function(){
                    phone_emailTips.slideUp(300);
                },1500);
            }
            else{
                $http({
                    method:'POST',
                    url:'http://credit.dhui100.com:10000/api/user/signin',
                    data:'login='+$(".phone").val()+
                        '&password='+hex_md5($(".loginPassword").val()),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
                }).success(function(res){
                    if(res.response.success==1){
                        sessionStorage.token = res.response.data.access_token;
                        window.location.href='index.html';
                    }else{
                        showMsg("登录失败!用户名或密码错误!");
                    }


                })
            }

        })
    $scope.toIndex = function(){
        window.location.href = "index.html";
    }

    function showMsg(msg){
        var emailtips = $(".Tips");
        GeneralTips(emailtips);
        emailtips.text(msg);
        emailtips.slideDown(300);
        setTimeout(function(){
            emailtips.slideUp(300);
        },1500);
    }


    function getCode(){
        for(var i=0;i<4;i++){
            var randomNum_Class = parseInt(Math.random()*9);
            var randomNum_Num = parseInt(Math.random()*62);
            $(".codeNum"+i).removeClass().addClass("codeNum"+i).addClass(rotate[randomNum_Class]);
            $(".codeNum"+i).text(num[randomNum_Num]);
        }
    }

})

