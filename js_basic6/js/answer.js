/**
 * Created by joy on 2017/4/16.
 */
for(var i = 0;i<h3s.length;i++){
    h3s[i].onoff = true;
    h3s[i].index = i;
    h3s[i].onclick = function(){
        for (var i = 0; i < h3s.length; i++) {
//						除了点击的h3以外的所有h3
            if(i != this.index){
                h3s[i].className = "";
                uls[i].style.display = "none";
            }
        }


        if(this.onoff){
            this.className = "active";
            uls[this.index].style.display = "block";
        }else{
            this.className = "";
            uls[this.index].style.display = "none";
        }
        this.onoff = !this.onoff;
    }
}