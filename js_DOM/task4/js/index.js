/**
 * Created by joy on 2017/4/30.--home
 */

/*鼠标移过em时，tips显示*/
var json = {
    'HTML': ['“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。……','https://www.shanbay.com'],
    'Netscape': ['网景是网景通信公司（Netscape Communications Corporation）的常用简称。……','http://www.runoob.com/css/css-tutorial.html'],
    'Brendan Eich': ['布兰登·艾奇（Brendan Eich，1961年～），JavaScript的发明人……','http://www.imooc.com/learn/603'],
    '网景导航者': ['网景领航员（Netscape Navigator）又称导航者，是网景公司开发的网络浏览器……','https://github.com'],
    'Java': ['网景领航员（Netscape Navigator）又称导航者，是网景公司开发的网络浏览器……','https://github.com'],
    'Sun': ['网景领航员（Netscape Navigator）又称导航者，是网景公司开发的网络浏览器……','https://github.com'],
}

window.onload = function () {
    displayDiv();
}

/*显示元素*/
function displayDiv() {
    var oCont = document.getElementById("cont");
    var aEm = oCont.getElementsByTagName("em");
    var oTips = document.getElementById("tips");
    //console.log(aEm.length);
    for(var i = 0; i < aEm.length; i ++){
        var timer = null;
        aEm[i].onmouseover = function () {
            var sHint = this.innerHTML;
            insertElem(json[sHint][0],json[sHint][1]);
            setPosition(this);
            clearTimeout(timer);
            oTips.onmouseover= function (){
                oTips.style.display="block";
                clearTimeout(timer);
            }
        }
        aEm[i].onmouseout = oTips.onmouseout= function (){
            timer = setTimeout(function () {
                oTips.style.display="none";
            },200);
        }
    }
}

//设定弹框的位置
function setPosition(obj){
    var oTips = document.getElementById("tips");
    var oCont =document.getElementById("cont");
    var contH = oCont.offsetTop + oCont.offsetHeight;//cont底边距离顶部的高度
    var contW = oCont.offsetLeft + oCont.offsetWidth;//cont右边距离左边的宽度
    var objH = obj.offsetTop + obj.offsetHeight;//obj底边距离顶部的高度
    var objW = obj.offsetLeft + obj.offsetWidth;//obj底边距离左边的高度
    var l=0,t=0;
    console.log("contW:"+contW+";objW:"+ objW);
    console.log("contH:"+contH+";objH:"+ objH);

    /*根据蓝色文字与顶边和底边距离，设定t值*/
    if(contH -objH < 154 ){//朝上
         t = obj.offsetTop -154 + 'px';
    }
    else{//朝下
         t = obj.offsetTop + 25 + 'px';
    }
    /*根据蓝色文字与顶边和底边距离，设定t值*/

    /*根据蓝色文字与左边和右边距离，设定l值*/
    if(contW - obj.offsetLeft + 50< 204){//靠右边:cont距离文字的距离小于tips宽
        l = contW - 204 -5+ 'px';
    }
    else if(obj.offsetLeft - oCont.offsetLeft < 50){//靠左边：cont和文字距离小于50
        l = oCont.offsetLeft + 5+'px'
    }
    else{//放在该放的地方
        l = obj.offsetLeft - 50 + 'px';
    }
    /*根据蓝色文字与左边和右边距离，设定l值*/

    oTips.style.display="block";
    oTips.style.left =l;
    oTips.style.top = t;

}
/*朝下或者朝上*/
function upOrDown(obj,bFlag) {
    var oTips = document.getElementById("tips");
    if(bFlag){//朝下
        var l = obj.offsetLeft - 50 + 'px';
        var t = obj.offsetTop + 25 + 'px';
        oTips.style.display="block";
        oTips.style.left =l;
        oTips.style.top = t;
    }
    else{//朝上
        var l = obj.offsetLeft - 50 + 'px';
        var t = obj.offsetTop -154 + 'px';
        oTips.style.display="block";
        oTips.style.left =l;
        oTips.style.top = t;
    }
}
//给弹框的p加内容，a加href属性
function insertElem(sStr,sLink) {
    var oTips = document.getElementById("tips");
    var oP = oTips.getElementsByTagName("p")[0];
    var oA = oTips.getElementsByTagName("a")[0];
    oP.innerHTML = sStr;
    oA.setAttribute("href",sLink);
}