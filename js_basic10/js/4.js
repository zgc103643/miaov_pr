/**
 * Created by Administrator on 2017/4/26.--office
 */

window.onload=function () {
    var aUl = document.getElementsByTagName("ul");
    var aLi = document.getElementsByTagName("li");
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0; i < aDot.length; i++){
        aDot[i].index = i;
        aDot[i].onclick = function () {
            var n = this.index;//被点击的span的序号
            console.log("n:"+n);
            changeIcon(n);//序号之前的是“横线”,之后的是“加号”
            typeSrc();
            hideUl(n);
        }

    }
}

function changeIcon(iICon){
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0;i < aDot.length; i++){
        var oImg = aDot[i].getElementsByTagName("img")[0];
        if(i <= iICon){
            oImg.src="images/style1.png";
        }
        else{
            oImg.src="images/style2.png";

        }
    }
}

/*打印img的src值*/
function  typeSrc() {
    var aDot = document.getElementsByClassName("dot1");
    console.log(aDot.length);
    for(var i = 0; i < aDot.length; i++){
        console.log("i:" + i);
        var oImg = aDot[i].getElementsByTagName("img")[0];
        console.log(oImg.getAttribute("src"));
    }
}

/*如果是减号，一定显示；如果是加号，分两种情况，*/
function hideUl(iClick){
    var aUl = document.getElementsByTagName("ul");
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0; i < aDot.length;i ++){
        var oImg = aDot[i].getElementsByTagName("img")[0];
        if(oImg.getAttribute("src") =="images/style1.png"){
            aUl[i].style.display ='block';
        }
        else{
            var oImg1 = aDot[i-1].getElementsByTagName("img")[0];
            if(oImg1.getAttribute("src") =="images/style1.png"){
                aUl[i].style.display ='block';
            }
            else{
                aUl[i].style.display ='none';
            }
        }
    }
}

/*dot是横线显示ul，是加号隐藏ul（理解不正确）*/
function hideUl2() {
    var aUl = document.getElementsByTagName("ul");
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0; i < aDot.length;i ++){
        var oImg = aDot[i].getElementsByTagName("img")[0];
        console.log(oImg);
        if(oImg.getAttribute("src") =="images/style1.png" ){
            aUl[i].style.display ='block';
        }
        else if(oImg.getAttribute("src") =="images/style2.png" ){
            aUl[i].style.display ='none';
        }
        else{
            console.log("getAttribute nono");
        }
    }

}

