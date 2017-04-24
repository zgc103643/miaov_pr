/**
 * Created by joy on 2017/4/25.--home
 */
window.onload = function () {
    var oSend = document.getElementById("send");
    var i = 0;

    /* alert(1)*/
    console.log(1);

    oSend.onclick = function () {
        alert(1);
        console.log("num");
        alert(2);
        var oInMes = document.getElementById("inMes");
        var sInMes = oInMes.innerHTML;
        alert("sInMes:"+sInMes);
        var num = i % 2;
        createBox(num,sInMes);
        i ++;
    }
}

/*var i = 0;
function sendMes(){
    var oSend = document.getElementById("send");

   /!* alert(1)*!/
    console.log(1);

    oSend.onclick = function () {
        alert(1);
        console.log("num");
        alert(2);
        var oInMes = document.getElementById("inMes");
        var sInMes = oInMes.innerHTML;
        alert("sInMes:"+sInMes);
        var num = i % 2;
        createBox(num,sInMes);
        i ++;
    }
}*/

/*新建一个showbox*/
function createBox(i,str) {
    var oBox = document.createElement("div");
    oBox.setAttribute("className","show");

    var oLogo = document.createElement("div");
    oLogo.setAttribute("className","logo");
    oLogo.innerHTML = '<img src="images/logo'+i+'.png">';

    var oMes = document.createElement("div");
    oMes.setAttribute("className","mes-out");
    oMes.innerHTML = '<p>'+str+'</p>';
}
