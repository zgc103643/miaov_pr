/**
 * Created by Administrator on 2017/4/19.--office
 */
/*move中点击操作封装*/
window.onload = function () {
    var str = "我现在已经养成了一种习惯，就是每三二天要找你说几句不想对别人说的话。当然还有更多的话没有说出口来，但是只要我把它带到了你面前，我走开的时候自己就满意了，这些念头就不会再折磨我了。";
    var str1 = "";
    /*包span后的str1*/
    var cont = document.getElementById("cont");
    /*cont--专门装文字的盒子*/

    var oBtn1 = document.getElementById("btn1");
    var oBtn2 = document.getElementById("btn2");
    var spans = cont.getElementsByTagName("span");

    var iNum = 0;
    var timer = null;

    /*给文字包span*/
    for (var i = 0; i < str.length; i++) {
        str1 += '<span style="left:' + (i % 36 * 16) + 'px;top:' + (Math.floor(i / 36) * 30) + 'px;">' + str[i] + '</span>';
    }
    cont.innerHTML = str1;

    /*点击事件抽象函数*/
    function click(n,color) {
        clearInterval(timer);//点击时清除定时器，以让鼠标可以连续点击
        iNum = 0;
        timer = setInterval(function () {

            spans[iNum].style.top = Math.floor(iNum / 36) * 30 + n + 'px';
            spans[iNum].style.color = color;
            iNum++;
            if(iNum == spans.length){
                clearInterval(timer);
                alert("clock is end!")
            }
        }, 30);
        alert("the end!");
    }

    /*给按钮添加点击事件*/
    oBtn1.onclick = function () {
        click(240,"red");
    }
    oBtn2.onclick = function () {
        click(0,"");
    }
}