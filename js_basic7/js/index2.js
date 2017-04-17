/**
 * Created by joy on 2017/4/16.
 */
window.onload = function () {
    var aBtnL = document.getElementsByClassName("btnL");
    var aBtnR = document.getElementsByClassName("btnR");
    var aNum = document.getElementsByClassName("Num");
    var aCount =document.getElementsByClassName("count");
    var aPrice = document.getElementsByClassName("price");
    var aNumTemp = [0,0,0,0,0];//暂存商品数量
    var aCountTemp = [0,0,0,0,0];//暂存商品金额

    var oSumNum = document.getElementById("sumNum");
    var oSumCount = document.getElementById("sumCount");
    var iSumNUm = 0;
    var iSumCount = 0;

    var iExPrice = document.getElementById("ex_price");

    for(var i = 0; i < aBtnL.length;i ++ ){
        aBtnL[i].index = i;
        aBtnL[i].onclick =function () {
            var t =this.index;
            aNumTemp[t] --;
            aCountTemp[t] -= parseInt(aPrice[t].innerHTML);
            if(aNumTemp[t] <= 0){
                aNumTemp[t] = 0;
                aCountTemp[t] = 0;
            }
            aNum[t].innerHTML =aNumTemp[t];
            aCount[t].innerHTML = aCountTemp[t];
            calNum();
            calCount();
            maxPrice();
        }

    }
    for(var i = 0; i < aBtnR.length; i ++){
        aBtnR[i].index = i;
        aBtnR[i].onclick = function () {
            var r = this.index;
            aNumTemp[r] ++;
            aCountTemp[r] += parseInt(aPrice[r].innerHTML);
            aNum[r].innerHTML =aNumTemp[r];
            aCount[r].innerHTML = aCountTemp[r];
            calNum();
            calCount();
            maxPrice();
        }
    }


    Array.prototype.min = function () {
        var min = this[0];
        for(var i = 0; i < this.length; i ++){
            if(this[i] < min){
                min = this[i];
            }
        }
        return min;
    }

    function calNum() {
        iSumNUm = 0;
        for(var i = 0; i < aNumTemp.length;i ++){
            //alert(aNum[i]);
            iSumNUm += parseInt(aNumTemp[i]);
            console.log(aNumTemp[i]+ ",");
            }
            console.log("---line---")
            oSumNum.innerHTML = iSumNUm;
    }
    function  calCount() {
        var iSumCount = 0
        for(var i = 0;i < aCountTemp.length; i ++){
            iSumCount += parseInt(aCountTemp[i]);
        }
        oSumCount.innerHTML = iSumCount;
    }

    function maxPrice() {
        /*总金额/个数，值最大的就是最大单价*/
        var arr = [];
        var j = 0;
        for(var i = 0; i < aCountTemp.length; i ++){
            if(aCountTemp[i]){
                arr[j] = aCountTemp[i] / aNumTemp[i];
                j++;
            }
        }

        var max = arr[0];
        for(var i = 1; i < arr.length; i ++){
            if(max < arr[i])
                max = arr[i];
        }
        //alert(max) ;
        iExPrice.innerHTML = max;
    }
}