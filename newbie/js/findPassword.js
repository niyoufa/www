/**
 * Created by zhangxiaogui on 16/7/17.
 */

var app = angular.module('myFindPassword',[])
app.controller('FindCtrl',function($scope,$http){
    var isExist;
    var InterValObjP;
    var countP = 60;
    var curCountP;
    $scope.judgeNum=function(){
        var pattern = /^1[34578]\d{9}$/;
        if (!pattern.test($(".phoneNum").val())) {
            //$scope.myTips="hehe";
            var phone = $(".Tips");
            GeneralTips(phone);
            phone.text("请填写正确的手机号");
            phone.slideDown(300);
            setTimeout(function(){
                phone.slideUp(300);
            },1500);
        }
        else{
            $http.get('http://credit.dhui100.com:10000/api/user/exist/info?mobile='+$(".phoneNum").val())
                .success(function(res){
                    if(res.response.success==1){
                        if(res.response.data.is_exist==0){
                            isExist=0;
                            var phone = $(".Tips");
                            GeneralTips(phone);
                            phone.text("该手机号未注册");
                            phone.slideDown(300);
                            setTimeout(function(){
                                phone.slideUp(300);
                            },1500);
                        }else{
                            isExist=1;

                        }
                    }
                })
        }
    }


    $(".phoneCode").click(function(){
        if(isExist==1){
            $http.get('http://credit.dhui100.com:10000/api/checkcode/mobile?mobile='+$(".phoneNum").val())
                .success(function(res){
                   if(res.response.success==1){
                       $(".phoneCode").attr("disabled","true");
                       curCountP = countP;
                       $(".phoneCode").val(curCountP + "秒后重发");
                       InterValObjP = window.setInterval(SetRemainTime, 1000);
                   }
                })
        }
    })


    $scope.judgePW0 = function(){
        var regexp = /^[0-9a-zA-Z]*$/;
        if($(".newPwd").val().length < 6 || $(".newPwd").val().length >20 || !regexp.test($(".newPwd").val())) {
            var phone = $(".Tips");
            GeneralTips(phone);
            phone.text("密码长度必须为6到20位之间且只能拼音或字母组合");
            phone.slideDown(300);
            setTimeout(function(){
                phone.slideUp(300);
            },1500);
        }
    }

    $scope.phoneCode=function(){
        if($(".phoneCodeInput").val().length!=6){
            var phone = $(".Tips");
            GeneralTips(phone);
            phone.text("请输入正确验证码");
            phone.slideDown(300);
            setTimeout(function(){
                phone.slideUp(300);
            },1500);
        }
    }

    var isame;
    $scope.judgePW = function(){
        if($(".newPwd").val()!=$(".newPwd2").val()){
            isame=0;
            var phone = $(".Tips");
            GeneralTips(phone);
            phone.text("两次输入密码不一致");
            phone.slideDown(300);
            setTimeout(function(){
                phone.slideUp(300);
            },1500);
        }else{
            isame=1;
        }
    }
    $scope.toIndex = function(){
        window.location.href = "index.html";
    }

    $scope.sureChange=function(){
        var regexp = /^[0-9a-zA-Z]*$/;
        if($(".newPwd").val().length < 6 || $(".newPwd").val().length >20 || !regexp.test($(".newPwd").val())) {
            var phone = $(".Tips");
            GeneralTips(phone);
            phone.text("密码长度必须为6到20位之间且只能拼音或字母组合");
            phone.slideDown(300);
            setTimeout(function(){
                phone.slideUp(300);
            },1500);
        }
         else if(isame==1){
            $http({
                method:'POST',
                url:'http://credit.dhui100.com:10000/api/user/password/reback',
                data:'mobile='+$('.phoneNum').val()+
                    "&mobile_code="+$('.phoneCodeInput').val()+
                    "&new_password="+hex_md5($('.newPwd').val())+
                    "&re_new_password="+hex_md5($('.newPwd2').val()),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
            }).success(function(res){
                if(res.response.success==1){
                    location.href="index.html";
                }
            })
        }
    }

    //function sendPhoneMessage() {
    //    var phoneNum = "12345678990";
    //    var regexp = /^[0-9]{11}$/;
    //    if(!regexp.test(phoneNum)){
    //        var phone = $(".Tips");
    //        GeneralTips(phone);
    //        phone.text("请填写正确的手机号");
    //        phone.slideDown(300);
    //        setTimeout(function(){
    //            phone.slideUp(300);
    //        },1500);
    //    }else{
    //        //向后台发送处理数据
    //        //var data = {phoneNum:phoneNum};
    //        //ajaxCommon("get_verify_code.cgi",requestJson(data),successFunc_Verify);
    //        $(".phoneCode").attr("disabled","true");
    //        curCountP = countP;
    //        $(".phoneCode").val(curCountP + "秒后重发");
    //        InterValObjP = window.setInterval(SetRemainTime, 1000);
    //
    //    }
    //
    //
    //
    //}

//timer处理函数
    function SetRemainTime() {
        if (curCountP == 0) {
            window.clearInterval(InterValObjP);//停止计时器
            $(".phoneCode").removeAttr("disabled");
            $(".phoneCode").val("再次发送");
        }
        else {
            curCountP--;
            $(".phoneCode").val(curCountP + "秒后重发");
        }
    }



})
