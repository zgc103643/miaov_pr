/**
 * Created by joy on 2017/4/25.--home
 */
window.onload = function () {
    var oSend = document.getElementById("send");
    var oInMes = document.getElementById("inMes");
    var i = 0;/*标识box的序号*/
    oSend.onclick = function () {
        var sInMes = oInMes.value;
        //alert("sInMes:"+sInMes);
        var num = i % 2;
        createBox(num,sInMes);
        i ++;
        oInMes.value = "";
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
