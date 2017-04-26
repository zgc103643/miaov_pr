/**
 * Created by joy on 2017/4/27.--home
 */
window.onload=function () {
    var aUl = document.getElementsByTagName("ul");
    var aLi = document.getElementsByTagName("li");
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0; i < aDot.length; i++){
        aDot[i].index = i;
        aDot[i].flag = true;
        aDot[i].onclick = function () {
            var n = this.index;//被点击的span的序号
            console.log("click---n:"+n);
            /*flag*/
            for(var i = 0; i < aDot.length; i ++){
                /*之前减号，当前，取反*/
                if(i < this.index && i >= 0){
                    aDot [i].flag = false;
                }
                else if(i != this.index){
                    aDot[i].flag = true;
                }
                else{
                    console.log("aDot[this.index].flag--before:"+ aDot[this.index].flag);
                    aDot[this.index].flag = !aDot[this.index].flag;
                    console.log("aDot[this.index].flag:"+aDot[this.index].flag);
                }
            }
            console.log("this.index:"+this.index);



            /*flag*/

            changeIcon();
            /*typeSrc();*/
            hideUl();
        }

    }
}

/*根据flag，设定img的src*/
function changeIcon(){
    var aDot = document.getElementsByClassName("dot1");
    for(var i = 0;i < aDot.length; i++){
        var oImg = aDot[i].getElementsByTagName("img")[0];
        if(!aDot[i].flag){
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

/*根据src，显示与否。如果是减号，一定显示；如果是加号，分两种情况，*/
function hideUl(){
    var aUl = document.getElementsByTagName("ul");
    var aDot = document.getElementsByClassName("dot1");
    /*第一个永远显示*/
    aUl[0].style.display ='block';
    /*第一个永远显示*/
    for(var i = 1; i < aDot.length;i ++){
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
            /**/
        }
    }
}


