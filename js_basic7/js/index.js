/**
 * Created by joy on 2017/4/16.
 */
window.onload = function () {
    var oBtnOneL = document.getElementById("btnOneL");
    var oBtnOneR = document.getElementById("btnOneR");
    var oOneNum = document.getElementById("oneNum");
    var oOneCount =document.getElementById("count1");
    var oOnePrice = document.getElementById("price1");
    var iOne = 0;
    var iCount = 0;
    oBtnOneL.onclick = function () {
        iOne --;
        iCount -= parseInt(oOnePrice.innerHTML);
        //alert("l:iOne:"+iOne );
        if(iOne <= 0){
            iOne = 0;
            iCount = 0;
        }
        oOneNum.innerHTML =iOne;
        oOneCount.innerHTML = iCount;

    }
    oBtnOneR.onclick = function () {
        iOne ++;
        iCount += parseInt(oOnePrice.innerHTML);
        //alert("r:iOne:"+iOne );
        oOneNum.innerHTML =iOne;
        oOneCount.innerHTML = iCount;
    }

}
