/**
 * Created by joy on 2017/4/16.
 */
/*完整版*/
window.onload = function () {
    var aP = document.getElementsByTagName("p");
    var aLi = document.getElementsByTagName("li");
    var aUl = document.getElementsByTagName("ul");

    for(var i = 0; i < aP.length; i ++){
        aP[i].bOnOff = true;
        aP[i].index = i;
        aP[i].onclick = function () {
            for(var i = 0; i < aP.length; i ++){

                    if(i != this.index){
                        aP[i].className = "";
                        aP[i].bOnOff = true;
                        aUl[i].style.display = "none";
                    }

            }
            if(this.bOnOff){
                this.className = "active";
                aUl[this.index].style.display = "block";
            }
            else{
                this.className ="";
                aUl[this.index].style.display = "none";
            }
            this.bOnOff = !this.bOnOff;
        }
    }
    for(var i = 0; i < aLi.length; i ++){
        aLi[i].onmouseover = function () {
            for(var i = 0 ; i < aLi.length; i ++){
                aLi[i].style.backgroundColor = "transparent";
            }
            this.style.backgroundColor = "#ccc";
        }
        aLi[i].onmouseout = function () {
                this.style.backgroundColor = "transparent";
        }
    }
}

