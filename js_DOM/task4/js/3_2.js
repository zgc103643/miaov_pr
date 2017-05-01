/**
 * Created by Administrator on 2017/4/25.--office
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
            //console.log( typeof this.innerHTML);

            var sHint = this.innerHTML;
            //console.log(json[sHint][0]);
            //console.log(json[sHint][1]);

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
    var l = obj.offsetLeft - 50 + 'px';
    var t = obj.offsetTop - 154+ 'px';
    //console.log(oTips.offsetHeight);
    oTips.style.display="block";
    oTips.style.left =l;
    oTips.style.top = t;

}
//给弹框的p加内容，a加href属性
function insertElem(sStr,sLink) {
    var oTips = document.getElementById("tips");
    var oP = oTips.getElementsByTagName("p")[0];
    var oA = oTips.getElementsByTagName("a")[0];
    oP.innerHTML = sStr;
    oA.setAttribute("href",sLink);
}