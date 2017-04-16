/**
 * Created by joy on 2017/4/16.
 */
window.onload = function () {
    var aP = document.getElementsByTagName("p");
    var aLi = document.getElementsByTagName("li");
    var aUl = document.getElementsByTagName("ul");

    for(var i = 0; i < aP.length; i++){
        aP[i].bOnOff = true;
        aP[i].index = i;
        aP[i].onclick = function () {
            for(var i= 0; i < aP.length; i ++){

                if(i !=this.index ){
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
                this.className = "";
                aUl[this.index].style.display = "none";
            }
            this.bOnOff = !this.bOnOff;

        }
    }

}
