/**
 * Created by joy on 2017/5/3.--home
 */
window.onload = function () {
    console.log(1);
    var oName = document.getElementById("name");
    var oSex = document.getElementById("sex");
    var oAge = document.getElementById("age");
    var aOptions  = oSex.getElementsByTagName("option");
    var oTab = document.getElementById("tab");//table

    /*点击提交按钮*/
    var oBtn1 = document.getElementById("btn1");
    oBtn1.onclick = function () {
        var aNum = oTab.getElementsByClassName("num");

        var sName = oName.value;
        var sSex = aOptions[oSex.selectedIndex].text;
        var iAge = oAge.value;

        /*计算iNum新方法*/
        /*求出数组的最大值，分aNum为空和不为空2种情况，为空时*/
        var iNum = 0;
        //alert(aNum.length);
        if(!aNum.length){
            iNum = 1;
        }
        else{
            var max = parseInt(aNum[0].innerHTML);
            for(var i = 0; i< aNum.length; i++){
                if(parseInt(aNum[i].innerHTML) >max ){
                    max=parseInt(aNum[i].innerHTML);
                }
            }
            iNum = max + 1;
        }
        /*计算iNum新方法*/

        if(sName==""){
            alert("请输入用户名！");
        }
        else if(iAge==""){
            alert("请输入年龄！");
        }
        else if( isNaN(iAge)){
            alert("年龄请输入数字！");
        }
        else{
            createTable(sName,sSex,iAge,iNum);
        }
        newIndex();
}

    /*点击排序按钮*/
    var oSort = document.getElementById("sort");
    var bOnOff = true;
    oSort.onclick = function () {
        var oOrder = document.getElementById("order");
        var oOptionsO = oOrder.getElementsByTagName("option");
        //alert(oOptionsO[oOrder.selectedIndex].value);
        if(oOptionsO[oOrder.selectedIndex].value == 'asd'){
            bOnOff = true;
        }
        else if(oOptionsO[oOrder.selectedIndex].value == 'des'){
            bOnOff = false;
        }
        sortTab(bOnOff);
        newIndex();
    }


    /*上移下移和删除*/
    upAndDown();

    /*设置颜色*/
    setColor();

    /*删除按钮*/
    var oDelAll= document.getElementById("delAll");
    oDelAll.onclick = function(){
        trIndex();
        var oTable = document.getElementById("tab");
        var aInput = oTable.tBodies[0].getElementsByTagName("input");
        var oTbody = oTable.tBodies[0];
        var aTr = oTable.tBodies[0].getElementsByTagName("tr");
        var arr=[];
        for(var i =0; i < aInput.length; i ++){
            if(aInput[i].checked){//选中的，被删除
                arr.push(i);
            }
        }
        //alert(arr.length);
        if(arr.length == 0){
            alert("请勾选按钮！");
        }
        else if(arr.length > 0){
            for(var i = 0; i < arr.length; i ++){
                for(var j = 0; j < aTr.length; j++){
                    if(aTr[j].index == arr[i]){
                        oTbody.removeChild(aTr[j]);
                    }
                }
            }
        }
        else{
            alert("怎么到这一步，错了！")
        }
        newIndex();
        setColor();
    }

    function trIndex() {
        var oTable = document.getElementById("tab");
        var aTr = oTable.tBodies[0].getElementsByTagName("tr");
        for(var i = 0; i < aTr.length; i++){
            aTr[i].index = i;
        }
    }

    /*全选按钮*/
    var oSelAll = document.getElementById("selAll");
    var oTable = document.getElementById("tab");
    var aTr = oTable.tBodies[0].getElementsByTagName("tr");
    var aInput = oTable.tBodies[0].getElementsByTagName("input");
    oSelAll.checked = false;
    oSelAll.onclick = function () {
        if(this.checked){
            //alert(aInput.length);
            for(var i = 0; i < aInput.length; i ++){
                aInput[i].checked = true;
            }
        }
        else{
            for(var i = 0; i < aInput.length; i ++){
                aInput[i].checked = false;
            }
        }
        setColor();
    }
}

//元素上移和下移
function upAndDown() {
    var oTab = document.getElementById("tab");//table
    var aBtn = oTab.tBodies[0].getElementsByTagName("button");
    //var oDelAll = document.getElementById("delAll");

    for(var i = 0; i < aBtn.length; i ++){
        aBtn[i].onclick = function () {
            newIndex();
            if(this.index % 3 == 0){
                fnTop(this.index);
            }
            else if(this.index % 3 == 1){
                alert(this.index);
                fnBottom(this.index);
            }
            else if(this.index % 3 == 2){
                delTab(this.index);
            }
            else{
                alert("怎么会执行到这一步呢？index值不对啊！");
            }
            newIndex();
        }
    }
}

//向表中插元素
function createTable(sName,sSex,iAge,iNum) {
    var oTr = document.createElement('tr');
    var oTab = document.getElementById("tab");//table

    var oTd1 = document.createElement('td');//选择框
    oTd1.innerHTML = '<input type="checkbox">';
    oTd1.firstElementChild.addEventListener("click",function () {
        setColor();
    });
    oTr.appendChild(oTd1);

    var oTd2 = document.createElement('td');//编号
    oTd2.innerHTML = '<span class="num">'+iNum+'</span>';
    oTr.appendChild(oTd2);

    var oTd3 = document.createElement('td');//姓名
    oTd3.innerHTML = '<td class="name">'+sName+'</td>';
    oTr.appendChild(oTd3);

    var oTd4 = document.createElement('td');//性别
    oTd4.innerHTML = '<td class="sex">'+sSex+'</td>';
    oTr.appendChild(oTd4);

    var oTd5 = document.createElement('td');//年龄
    oTd5.innerHTML = '<td class="sex">'+iAge+'</td>';
    oTr.appendChild(oTd5);

    var oTd6 = document.createElement('td');//操作

    var oBtn1 = document.createElement("button");
    oBtn1.innerHTML="上移";
    oBtn1.className="up";
    oBtn1.index = (iNum-1) * 3;//初始化按钮的index值
    oBtn1.addEventListener("click",function () {
        fnTop(this.index);
    });
    oTd6.appendChild(oBtn1);

    var oBtn2 = document.createElement("button");
    oBtn2.innerHTML="下移";
    oBtn2.className="down";
    oBtn1.index = (iNum-1) * 3 + 1;//初始化按钮的index值
    oBtn2.addEventListener("click",function () {
        fnBottom(this.index);
    });
    oTd6.appendChild(oBtn2);

    var oBtn3 = document.createElement("button");
    oBtn3.innerHTML="删除";
    oBtn3.className="del";
    oBtn1.index = (iNum-1) * 3 + 2;//初始化按钮的index值
    oBtn3.addEventListener("click",function () {
        delTab(this.index);
    });
    oTd6.appendChild(oBtn3);
    oTr.appendChild(oTd6);

    oTab.tBodies[0].appendChild(oTr);
    setColor();
}

//表格排序
function sortTab(bOnOff) {
    var aNum = document.getElementsByClassName("num");
    var oTab = document.getElementById("tab");//table
    var aTr = oTab.tBodies[0].getElementsByTagName("tr");
    var arr = [];
    //表里面有值
    if(aNum.length){
        for(var i = 0; i < aNum.length; i ++){
            arr.push(parseInt(aNum[i].innerHTML));
        }
        if(bOnOff){//升序排
            arr.sort(function (a,b) {
                return a-b;
            })
            /*调试*/
            for(var i = 0; i < arr.length; i++){
                console.log('arr['+i+']:' + arr[i]);
                console.log(typeof arr[i]);
            }
            /*调试*/
            for(var i = 0; i < arr.length; i++){
                for(var j = 0; j < aNum.length; j++){
                    if(parseInt(aNum[j].innerHTML) == arr[i]){
                        oTab.tBodies[0].appendChild(aTr[j]);
                    }
                }
            }
            return arr[arr.length -1];
        }
        else{//降序排
            arr.sort(function (a,b) {
                return b-a;
            })
            for(var i = 0; i < arr.length; i++){
                for(var j = 0; j < aNum.length; j++){
                    if(parseInt(aNum[j].innerHTML) == arr[i]){
                        oTab.tBodies[0].appendChild(aTr[j]);
                    }
                }
            }
            return arr[0];
        }
    }
    else{ //表里面没值
        arr[0] = 0;
        return arr[0];
    }
    setColor();
}

//上移,除了第0个，其所在tr都插入到上一个tr前
function fnTop(index){
    var oTab = document.getElementById("tab");//table
    var oTbody = oTab.tBodies[0];
    var aTr = oTbody.rows;
    //alert("fntop");
    var t = parseInt(index/3);
    if(index > 0){
        oTbody.insertBefore(aTr[t],aTr[t-1])
    }else if(index == 0){
        oTbody.appendChild(aTr[0]);
    }
    else{
        alert("fnTop 函数的index错啦！")
    }
    newIndex();
    setColor();
}

//下移，0到倒数3，倒数2，最后1行
function fnBottom(index){
    //alert(index);
    //alert(typeof index);
    var oTab = document.getElementById("tab");//table
    var oTbody = oTab.tBodies[0];
    var aTr = oTbody.rows;
    var t = parseInt(index/3);
    //alert(aTr.length);
    if(t < aTr.length -2 ){
        oTbody.insertBefore(aTr[t],aTr[t+2])
    }
    else if(t== aTr.length - 2){
         oTbody.appendChild(aTr[t]);
    }
    else if(t == aTr.length - 1){
           oTbody.insertBefore(aTr[t],aTr[0])
    }
    else{
        alert("fnBottom 函数的index错啦！")
    }
    newIndex();
    setColor();
}

//删除
function delTab(index) {
      var oTab = document.getElementById("tab");//table
      var oTbody = oTab.tBodies[0];
      var aTr = oTbody.rows;
      var t = parseInt(index/3);
      oTbody.removeChild(aTr[t]);
    newIndex();
    setColor();
 }

/*更新元素的index值*/
function newIndex() {
    var oTab = document.getElementById("tab");//table
    var aBtn = oTab.tBodies[0].getElementsByTagName("button");
    for(var i = 0; i < aBtn.length; i++){
        aBtn[i].index = i;
    }
}

//隔行换色
function changeColor() {
    var oTable = document.getElementById("tab");
    var iLen = oTable.rows.length;
    console.log("iLen:"+iLen);
    //console.log(oTable.rows[0]);
    for(var i = 1; i < iLen; i++){
        if(i % 2 == 0){
            oTable.rows[i].style.background = "#88C9E9";
        }
        else{
            oTable.rows[i].style.background = "#FCFDFC";
        }
    }
}

/*选中时，设置颜色*/
function setColor() {
    var oTable = document.getElementById("tab");
    var aInput = oTable.tBodies[0].getElementsByTagName("input");
    console.log("aInput.length:"+ aInput.length);
    for(var i =0; i < aInput.length; i ++){
        if(aInput[i].checked){

            aInput[i].parentNode.parentNode.style.backgroundColor = "#FABDC9";
        }
        else{
            if(i%2 == 0){
                aInput[i].parentNode.parentNode.style.backgroundColor = "#FCFDFC";
            }
            else{
                aInput[i].parentNode.parentNode.style.backgroundColor = "#88C9E9";
            }
        }
    }
    newIndex();
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};