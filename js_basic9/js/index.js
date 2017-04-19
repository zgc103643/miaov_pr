/**
 * Created by joy on 2017/4/20.--home
 */
window.onload = function () {
    var oUl1 = document.getElementById("ul1");
    var aLi = oUl1.getElementsByTagName("li");

    var iNum = 0;

    /*加定时器，自动给刷新*/
    setInterval(function () {

        /*获取时间--必须放在定时器里面才能生效*/
        var oDate = new Date();
        var oHour = oDate.getHours();
        var oMin = oDate.getMinutes();
        var oSec = oDate.getSeconds();
        /*秒变化*/
        var aImg = aLi[4].getElementsByTagName("img");
        var str= toZero(oSec);
        aImg[0].src = "img/"+str[0]+".JPG";
        aImg[1].src = "img/"+str[1]+".JPG";

        /*分变化*/
        var aImg2 = aLi[2].getElementsByTagName("img");
        var str2= toZero(oMin);
        aImg2[0].src = "img/"+str2[0]+".JPG";
        aImg2[1].src = "img/"+str2[1]+".JPG";

        /*小时变化*/
        var aImg0 = aLi[0].getElementsByTagName("img");
        var str0= toZero(oHour);
        aImg0[0].src = "img/"+str0[0]+".JPG";
        aImg0[1].src = "img/"+str0[1]+".JPG";

    },1000);

    /*弹出补零后的时间*/
    /*alert("hour:" + str0+"min:" + str2 + "osec:"+ str);*/

    /*补零*/
    function toZero(time) {
        if(time < 10){
            return "0" + time;
        }
        else{
            return ""+ time;
        }
    }
}