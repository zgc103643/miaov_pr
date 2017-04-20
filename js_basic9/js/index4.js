/**
 * Created by Administrator on 2017/4/20.--office
 */
/*数字新增滚动效果*/
window.onload = function () {
    var oUl1 = document.getElementById("ul1");
    var aDivs = oUl1.getElementsByTagName("div");
    var aLi = oUl1.getElementsByTagName("li");
    //var iNum  = 0;

    var old = "";

    var oImg1 = aLi[2].getElementsByTagName("img")[0];
    var oImg2 = aLi[5].getElementsByTagName("img")[0];
    play();
    /*加定时器，自动刷新*/
    setInterval(function () {
        oImg1.src = "img/"+"colon"+".JPG";
        oImg2.src = "img/"+"colon"+".JPG";
        setTimeout(function () {
            oImg1.src = "img/"+"colon1"+".JPG";
            oImg2.src = "img/"+"colon1"+".JPG";
        },500);
        play();
    },1000);

    /*弹出补零后的时间*/
    /*alert("hour:" + str0+"min:" + str2 + "osec:"+ str);*/

    /*自动获取时间*/
    function play() {
        var oDate = new Date();
        var iHour = oDate.getHours();
        var iMin = oDate.getMinutes();
        var iSec = oDate.getSeconds();
        var sTime = toZero(iHour) + toZero(iMin) + toZero(iSec);
        //alert(sTime);
        for(var i = 0; i < sTime.length; i ++){
            if(old[i] != sTime[i]){
                slide(i,sTime);
            }
            console.log(sTime);
        }
        old=sTime;
    }

        /*滑动图像*/
    function slide(n,time){//n表示第几个参数，time是时间字符串
        var aImg = aDivs[n].getElementsByTagName("img");
        aImg[1].src= "img/"+time[n]+".JPG"
        move(aDivs[n],'top',-170,400,function () {
            aImg[0].src = "img/"+time[n]+".JPG"
            aDivs[n].style.top = '';
        })
    }

    /*补零*/
    function toZero(time) {
        if(time < 10){
            return "0" + time;
        }
        else{
            return ""+ time;
        }
    }

    /*运动框架*/
    function move(obj,attr,target,duration,callback){
        var b = parseFloat(getComputedStyle(obj)[attr]);
        var c = target - b;
        var d = duration;
        var now = new Date().getTime();
        obj[attr] = setInterval(function(){
            var t = new Date().getTime() - now;
            var value = b + c / d * t;
            obj.style[attr] = value+"px";
            if(t >= d){
                clearInterval(obj[attr]);
                obj.style[attr] = target+"px";
                callback&&callback();//当到达目标值的时候执行回调函数
            }
        },30)
    }
}