/**
 * Created by zhangxiaogui on 16/7/19.
 */

var app = angular.module('myperson',[])
app.controller('PersonCtrl',function($scope,$http){
    //alert($(".pic1").attr('src'));
    //if(sessionStorage.token==undefined){
    //
    //}else{


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


        $(".sendBtn").click(function(){
            var mydate = new Date().toUTCString();
            var ak_id='23418403';
            var ak_secret='ab11861da89ed1abcbcf74ec4b1a5bc1';
            var options = {
                url : 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json',
                method: 'POST',
                body: '',
                headers: {
                    'X-Ca-Key':'23418403',
                    'X-Ca-Signature':'',
                    'accept': 'json',
                    'content-type': 'application/json',
                    'date': mydate,
                    'Authorization': ''
                }
            };
            var body;
            var file = document.getElementById("test").files[0];
            if (file) {

                var reader = new FileReader();
                reader.onload = function (e) {
                    //console.log(e.target.result.slice(22,e.target.result.length));
                    var parsebody={"inputs":[{"image":{"dataType":50,"dataValue":e.target.result.slice(22,e.target.result.length)},"configure":{"dataType":50,"dataValue":"{\"side\":\"face\"}"}}]};
                    body=JSON.stringify(parsebody);
                    console.log(body);
                    options.body=body;
                    var bodymd5=md5base64(body);
                    var stringToSign = options.method + "\n" + options.headers.accept + "\n" + bodymd5 + "\n" + options.headers['content-type'] + "\n" + options.headers.date + "\n" + "/rest/160601/ocr/ocr_idcard.json";
                    var mysig = mysha1(stringToSign,ak_secret);
                    options = {
                        url : 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json',
                        method: 'POST',
                        body: '',
                        headers: {
                            'X-Ca-Key':ak_id,
                            'X-Ca-Signature':mysig
                            //'accept': 'json',
                            //'content-type': 'application/json',
                            //'date': mydate,
                            //'Authorization': ''
                        }
                    };

                    //options.headers.Authorization = "Dataplus " + ak_id + ":" + mysig;
                    $http(options)
                        .success(function(res){
                            console.log(res);
                        })
                };


            }


            reader.readAsDataURL( file );
            //$("#formImg").ajaxSubmit(function(res){
            //   if(res.response.success==1){
            //       showMsg("申请成功!");
            //   }else if(res.response.success==-1){
            //       var emailtips = $(".Tips");
            //       GeneralTips(emailtips);
            //       emailtips.text("您离开太久，请重新登录");
            //       emailtips.slideDown(300);
            //       setTimeout(function(){
            //           emailtips.slideUp(300);
            //           var token = sessionStorage.token;
            //           window.location.href="login.html";
            //       },2000);
            //   }else{
            //       alert(res.response.return_code);
            //   }
            //})
            //var iframe1=.contentWindow;
            //console.log($("id_frame"));
            //location.href='personal.html'
        })

    function md5base64(mes){
        var md5str=hex_md5(mes);
        return base64encode(md5str);
    }

    function mysha1(str1,str2){
        return hex_hmac_sha1(str1,str2);
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
    //}

    function showMsg(msg){
        var emailtips = $(".Tips");
        GeneralTips(emailtips);
        emailtips.text(msg);
        emailtips.slideDown(300);
        setTimeout(function(){
            emailtips.slideUp(300);
        },1500);
    }


})
