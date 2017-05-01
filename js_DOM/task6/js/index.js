/**
 * Created by joy on 2017/5/1.--home
 */
window.onload = function () {
    var oUl = document.getElementsByTagName("ul")[0];//第一个ul，最外层ul
    var aLi = $("#ul0").children();
    //alert(aLi.length);
    for(var i = 0; i < aLi.length; i ++){
        aLi[i].index = i;
        var aH2 = aLi[i].getElementsByTagName("h2");
        for(var j = 0; j < aH2.length; j ++){
            aH2[j].index = aLi[i].index;
            aH2[j].onclick = function () {
                hideNav(this);
                //hideSiblingsLi(this);
                //alert("this.index:--"+ this.index)
                hideOtherLi(this.index);
            }
        }
    }
}

var bFlag = true;
//把h2下面的ul隐藏或显示
function hideNav(obj) {
    if (obj.nextElementSibling) {
        obj.nextElementSibling.style.display = "block"

    }
    else{
        alert("no nextElementSibling!");
    }
}

//隐藏父li的兄弟节点中的ui
function hideSiblingsLi(obj){
 $(obj.parentNode).siblings().children().style.display = "none";
}

//隐藏aUl[0]下其他li
function hideOtherLi(iKey) {
    var oUl = document.getElementsByTagName("ul")[0];//第一个ul，最外层ul
    var aLi = $("#ul0").children();//最外层ul里的li
    for (var i = 0; i < aLi.length; i++) {
        if (i != iKey) {//aLi[iKey]除外
            aLi[i].getElementsByTagName("ul")[0].style.display = 'none';
        }
        else{
            aLi[i].getElementsByTagName("ul")[0].style.display = 'block';
        }
    }
}