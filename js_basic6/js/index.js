/**
 * Created by joy on 2017/4/16.
 */
window.onload = function () {
    var aDiv = document.getElementsByTagName("div");
    var aLi = document.getElementsByTagName("li");
    var aUl = document.getElementsByTagName("ul");


    for(var i = 0; i < aDiv.length; i ++){
        aDiv[i].bOnOff = false;//关
        aDiv[i].index = i;
        aDiv[i].onclick = function () {
            for(var i = 0; i < aDiv.length; i ++){
                for(var j = 0;j < aDiv.length;j ++){
                    aDiv[j].bOnOff = false;
                }

            }

        }
    }
    for(var j = 0; j < aLi.length; j ++){
        aLi[j].onmouseover = function () {
            for(var i = 0; i< aLi.length; i ++){
                aLi[i].style.backgroundColor = "transparent";
                this.style.backgroundColor = "yellow";
            }

        }
    }

    function listClose(obj) {
        obj.getElementsByTagName("ul")[0].style.display = "none";
        obj.getElementsByTagName("p")[0].style.backgroundColor = "blue";
    }
    function listOpen(obj) {
        obj.getElementsByTagName("ul")[0].style.display = "block";
        obj.getElementsByTagName("p")[0].style.backgroundColor = "orange";
    }
}