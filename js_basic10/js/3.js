/**
 * Created by Administrator on 2017/4/25.--office
 */
window.onload = function () {
    //alert(json["Netscape"]);

    displayDiv();
}

var json = {
    'HTMl': '“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。……',
    'Netscape': '网景是网景通信公司（Netscape Communications Corporation）的常用简称。……',
    'Brendan Eich': '布兰登·艾奇（Brendan Eich，1961年～），JavaScript的发明人……',
    '网景导航者': '网景领航员（Netscape Navigator）又称导航者，是网景公司开发的网络浏览器……'
}

function displayDiv() {
    var oCont = document.getElementById("cont");
    var aP = oCont.getElementsByTagName("p");
    var oTips = document.getElementById("tips");
    var oSpan0 = document.getElementById("html");
    var l = oSpan0.offsetLeft;
    var t = oSpan0.offsetTop;
    console.log("l:" +l);
    console.log("t:" +t);



   /*移入oSpan0或oTips，马上响应*/
   var timer = null;
    oSpan0.onmouseover = oTips.onmouseover = function () {
        oTips.style.display="block";
        oTips.style.left =l - 50 + 'px';
        oTips.style.top = t+ 25  + 'px';
        clearTimeout(timer);

    }
    oSpan0.onmouseout = oTips.onmouseout = function () {
        timer = setTimeout(function () {
            oTips.style.display="none";
        },200);

    }
}
