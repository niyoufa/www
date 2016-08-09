/**
 * Created by zhangxiaogui on 16/7/15.
 */
var InterValObjP,InterValObjE;
var countP = 60,countE = 60;
var curCountP,curCountE;
function sendPhoneMessage() {
    var phoneNum = $(".phoneNum").val();
    var regexp = /^[0-9]{11}$/;
    if(!regexp.test(phoneNum)){
        var phone = $(".Tips");
        GeneralTips(phone);
        phone.text("请填写正确的手机号");
        phone.slideDown(300);
        setTimeout(function(){
            phone.slideUp(300);
        },1500);
    }else{
        //向后台发送处理数据
        //var data = {phoneNum:phoneNum};
        //ajaxCommon("get_verify_code.cgi",requestJson(data),successFunc_Verify);
        $(".phoneCode").attr("disabled","true");
        curCountP = countP;
        $(".phoneCode").val(curCountP + "秒后重发");
        InterValObjP = window.setInterval(SetRemainTime, 1000);

    }



}

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



function sendEmailMessage() {
    var email = $(".email").val();
    var regexp = /^([a-zA-Z0-9_-])+((@qq.com)|(@163.com)|(@126.com)|(@189.cn)|(@sina.com)|(@hotmail.com)|(@gmail.com)|(@139.com))$/;
    if(!regexp.test(email)){
        var emailtips = $(".Tips");
        GeneralTips(emailtips);
        emailtips.text("请填写正确的email");
        emailtips.slideDown(300);
        setTimeout(function(){
            emailtips.slideUp(300);
        },1500);
    }else{
        //向后台发送处理数据
        //var data = {phoneNum:phoneNum};
        //ajaxCommon("get_verify_code.cgi",requestJson(data),successFunc_Verify);
        $(".emailCode").attr("disabled","true");
        curCountE = countE;
        $(".emailCode").val(curCountE + "秒后重发");
        InterValObjE = window.setInterval(SetRemainTime2, 1000);

    }



}

//timer处理函数
function SetRemainTime2() {
    if (curCountE == 0) {
        window.clearInterval(InterValObjE);//停止计时器
        $(".emailCode").removeAttr("disabled");
        $(".emailCode").val("再次发送");
    }
    else {
        curCountE--;
        $(".emailCode").val(curCountE + "秒后重发");
    }
}