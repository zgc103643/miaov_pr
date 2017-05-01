/**
 * Created by joy on 2017/5/1.--home
 */
window.onload = function () {
    var oUl1 = document.getElementById("ul1");
    var oUl2 = document.getElementById("ul2");
    var oUl3 = document.getElementById("ul3");
    var str1 = oUl1.innerHTML;
    var str2 = oUl2.innerHTML;
    var str3 = oUl3.innerHTML;

    var aUl = document.getElementsByTagName("ul");
    for(var i = 0; i < aUl.length- 1; i ++){
        clickLi(aUl[i],i);
    }


   /* setIndex(oUl1);
    setIndex(oUl2);
    setIndex(oUl3);*/
   delLi(str1,str2,str3);

/*点击上面三个li时*/
function clickLi(ul,iNum){//ul是点击的li，iNum是li的序号

   var aLi = ul.getElementsByTagName("li");
   var aLi4 = aUl[3].getElementsByTagName("li");//ul3中的li
    ul.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            if(!(aLi4[iNum].innerHTML)){
                aLi4[iNum].innerHTML = target.innerHTML;
                target.innerHTML="";
            }
            else{
                alert("do something~");
            }
        }
    }
}
function clickLi2(ul,iNum){//ul是点击的li，iNum是li的序号

        var aLi = ul.getElementsByTagName("li");
        var aLi4 = aUl[3].getElementsByTagName("li");//ul3中的li
        for(var i = 0; i < aLi.length; i ++){
            aLi[i].onclick = function () {
                alert("1");
                if(!(aLi4[iNum].innerHTML)){
                    aLi4[iNum].innerHTML = this.innerHTML;
                    ul.removeChild(this);
                }
                else{
                    alert("do something~");
                }


            }
        }
    }
    
function delLi(str1,str2,str3) {
        /*var oUl = document.getElementsByTagName("ul");
        oUl[3].onclick = function (ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLowerCase() == 'li'){
                if()
            }
        }*/
        var oUl = document.getElementsByTagName("ul");
        var aLi = oUl[3].getElementsByTagName("li");//最下面一行li
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onclick = function () {

                if(this.index == 0){
                    oUl[0].innerHTML = str1;
                }
                else if(this.index == 1){
                    oUl[1].innerHTML = str2;
                }
                else if(this.index == 2){
                    oUl[2].innerHTML = str3;
                }
                else{
                    alert("something wrong...");
                }
                this.innerHTML = "";
            }
        }
    }
}

//给每个li加一个index
/*function setIndex(oUl) {
    var aLi = oUl.getElementsByTagName("li");
    for(var i = 0; i < aLi.length; i ++){
        aLi[i].index = i;
    }
}*/

/*点击最下面一行li时*/
