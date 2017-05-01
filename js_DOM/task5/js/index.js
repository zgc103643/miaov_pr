/**
 * Created by joy on 2017/5/1.--home
 */
window.onload = function () {
    var oTop = document.getElementById("top");
    var aSpan = oTop.getElementsByTagName("span");
    setLeft();
    for(var i = 0; i < aSpan.length;i ++){
        aSpan[i].index = i;
        aSpan[i].onclick = function () {
            selfMove(this,this.index);
            console.log('style.top'+this.style.top);
            console.log(this.index);


        }
    }
    function selfMove(obj,iIndex){
        var timer = null;
        var l = iIndex;
        var r = iIndex;
        //alert(iIndex);
        /*节点自己*/
        //aSpan[iIndex].style.top = 150 + 'px';---有transition时使用
        NodeMove(obj,200);
        timer = setInterval(function () {
            //l和r是外层函数定义的变量，可以直接用
            //定时器
            l = l -1;
            r = r + 1;
            if(l >= 0){
                //alert("l -1:" + (l - 1));
                //aSpan[l].style.top = 150 + 'px';---有transition时使用
                NodeMove(aSpan[l],200);
                console.log("l:" + l);

            }
            if(r < aSpan.length){
                //aSpan[r].style.top = 150 + 'px';---有transition时使用
                NodeMove(aSpan[r],200);
            }
            if(l == 0 && r == aSpan.length -1){
                clearInterval(timer);
                //alert("stop already!");
            }

        },200);
    }
}

//节点自己动
function selfMove2(obj,iIndex){
    var oTop = document.getElementById("top");
    var aSpan = oTop.getElementsByTagName("span");
    var timer = null;
    var l = iIndex;
    var r = iIndex;
    //alert(iIndex);
    /*节点自己*/
    //aSpan[iIndex].style.top = 150 + 'px';---有transition时使用
    NodeMove(obj,200);
    timer = setInterval(function () {
        //l和r是外层函数定义的变量，可以直接用
        //定时器
        l = l -1;
        r = r + 1;
        if(l >= 0){
            //alert("l -1:" + (l - 1));
            //aSpan[l].style.top = 150 + 'px';---有transition时使用
            NodeMove(aSpan[l],200);
            console.log("l:" + l);

        }
        if(r < aSpan.length){
            //aSpan[r].style.top = 150 + 'px';---有transition时使用
            NodeMove(aSpan[r],200);
        }
        if(l == 0 && r == aSpan.length -1){
            clearInterval(timer);
            //alert("stop already!");
        }

    },200);
}

//单个节点运动
function NodeMove(obj,iTarget) {

    var timer = null;
    timer = setInterval(function () {
        obj.style.top = parseInt(obj.style.top) + 15 + 'px';
        if(obj.offsetTop >= iTarget){
            obj.style.top = iTarget + 'px';
            clearInterval(timer);
        }
    },60);
}

//给节点设left值
function setLeft(){
    var oTop = document.getElementById("top");
    var aSpan = oTop.getElementsByTagName("span");
    for(var i = 0; i < aSpan.length; i++){
        aSpan[i].style.left = 60* i + 'px';
        aSpan[i].style.top = 0 + 'px';
    }
}