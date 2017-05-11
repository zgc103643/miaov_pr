/**
 * Created by joy on 2017/4/25.--home
 */
window.onload = function () {
    var oSend = document.getElementById("send");
    var oInMes = document.getElementById("inMes");
    var i = 0;/*标识box的序号*/
    /*按钮*/
    oSend.onclick = function () {
        if(oInMes.value !=""){
            var sInMes = oInMes.value;
            //alert("sInMes:"+sInMes);
            var num = i % 2;
            createBox(num,sInMes);
            i ++;
            oInMes.value = "";
        }
    }
    oInMes.onkeyup = function (ev) {
        var ev = ev || event;
       if(oInMes.value != ""){
           if(ev.keyCode == 13 && ev.ctrlKey){
               var num = i % 2;
               createBox(num,this.value);
               i ++;
               oInMes.value = "";
           }
       }

    }
}

/*新建一个showbox*/
function createBox(i,str) {
    var oCon = document.getElementById("container");
    var oBox = document.createElement("div");

    oBox.setAttribute("class","show");

    var oLogo = document.createElement("div");
    oLogo.setAttribute("class","logo");
    oLogo.innerHTML = '<img src="images/logo'+(i+1)+'.png">';

    oBox.appendChild(oLogo);

    var oMes = document.createElement("div");
    oMes.setAttribute("class","mes-out");
    oMes.innerHTML = '<p>'+str+'</p>';

    oBox.appendChild(oMes);
    oCon.appendChild(oBox);
}
