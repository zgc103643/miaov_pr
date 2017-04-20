/**
 * Created by joy on 2017/4/20.--home
 */
/*将index.js进行函数封装*/
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
        changeImg(4,oSec);

        /*分变化*/
        changeImg(2,oMin);

        /*小时变化*/
        changeImg(0,oHour);

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

    /*时分秒时切换图像*/
    function changeImg(i,time) {
        var aImg = aLi[i].getElementsByTagName("img");
        var str= toZero(time);
        aImg[0].src = "img/"+str[0]+".JPG";
        aImg[1].src = "img/"+str[1]+".JPG";
    }
}