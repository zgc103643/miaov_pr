/**
 * Created by Administrator on 2017/4/20.--office
 */
/*index2基础上新增每隔半秒动一下*/
window.onload = function () {
    var oUl1 = document.getElementById("ul1");
    var aLi = oUl1.getElementsByTagName("li");

    var oImgColon = aLi[1].getElementsByTagName("img")[0];
    var oImgColon1 = aLi[3].getElementsByTagName("img")[0];

    play();
    /*加定时器，自动刷新*/
    setInterval(function () {

        /*获取时间--必须放在定时器里面才能生效*/


        /*闪烁的点*/
        oImgColon.src= "img/colon1.JPG";
        oImgColon1.src= "img/colon1.JPG";
        setTimeout(function () {
            oImgColon.src= "img/colon.JPG";
            oImgColon1.src= "img/colon.JPG";
        },500);
        play();

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

    /*自动获取时间*/
    function play() {
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
    }

    /*时分秒时切换图像*/
    function changeImg(i,time) {
        var aImg = aLi[i].getElementsByTagName("img");
        var str= toZero(time);
        aImg[0].src = "img/"+str[0]+".JPG";
        aImg[1].src = "img/"+str[1]+".JPG";
    }
}
