/**
 * Created by zhangxiaogui on 16/7/17.
 */

$(".Tips").slideUp();
function GeneralTips(GeneralTips){
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    var height = parseInt(GeneralTips.css("height").split("px")[0])+50;
    var width = parseInt(GeneralTips.css("width").split("px")[0])+16;

    var endTop = (screenHeight-height)/2;
    var endLeft = (screenWidth-width)/2;

    GeneralTips.css("top",endTop);
    GeneralTips.css("left",endLeft);
}