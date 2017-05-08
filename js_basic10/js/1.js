/**
 * Created by joy on 2017/4/24.--home
 */
window.onload = function () {
    insetTable();
    changeColor();//表格隔行换色
    insertCol1();/*插入勾选框（第一列）*/
    insertCol2();/*插入删除列（最后一列）*/
    clickColor();/*勾选时，背景色变色*/
    clickAll();/*勾选“全选”时，全部选中*/
    deleteRow();/*点删除时，删除本行代码，其他行重新隔行换色*/
}
    var aData = [
        {
            "num": 1,
            "name": "雪碧",
            "price": 2.5,
            "count": 35
        },
        {
            "num": 2,
            "name": "芬达",
            "price": 3.5,
            "count": 50
        },
        {
            "num": 3,
            "name": "百事",
            "price": 3,
            "count": 45
        },
        {
            "num": 4,
            "name": "七喜",
            "price": 3,
            "count": 38
        },
        {
            "num": 5,
            "name": "可乐",
            "price": 2.5,
            "count": 35
        },
        {
            "num": 6,
            "name": "光明",
            "price": 4,
            "count": 46
        },
        {
            "num": 7,
            "name": "王老吉",
            "price": 5,
            "count": 80
        },
        {
            "num": 8,
            "name": "果粒橙",
            "price": 3,
            "count": 41
        },
        {
            "num": 9,
            "name": "养乐多",
            "price": 6,
            "count": 62
        },
        {
            "num": 10,
            "name": "雪碧",
            "price": 2.5,
            "count": 35
        },
        {
            "num": 11,
            "name": "简单",
            "price": 5.5,
            "count": 40
        },
        {
            "num": 12,
            "name": "被子",
            "price": 2.5,
            "count": 38
        }
    ];


//将aData中的内容插入到表格
    function insetTable() {
        var oTable = document.getElementById("tab");
        var oTbody = oTable.getElementsByTagName("tbody")[0];
        for(var i = 0; i < aData.length; i ++){
            var oTr = document.createElement("tr");
            for(var attr in aData[i]){
                var oTd = document.createElement("td");
                oTd.innerHTML = aData[i][attr];
                oTr.appendChild(oTd);
            }
            oTbody.appendChild(oTr);
        }

    }
//表格隔行换色
function changeColor() {
    var oTable = document.getElementById("tab");
/*    var oTbody = oTable.getElementsByTagName("tbody")[0];*/
    var iLen = oTable.rows.length;
    console.log("iLen:"+iLen);
    //console.log(oTable.rows[0]);
    for(var i = 1; i < iLen; i++){
        if(i % 2 == 0){
            oTable.rows[i].style.background = "#f3cfe8";
        }
        else{
            oTable.rows[i].style.background = "#f2f3cf";
        }
        /*oTable.rows[0].style.background = "#93e9f3";
        oTable.rows[1].style.background = "#e6dff3";*/
    }
}

/*插入勾选框（第一列）*/
function insertCol1() {
    var oTable = document.getElementById("tab");
    //var oTbody = oTable.getElementsByTagName("tbody")[0];
    var oTd = document.createElement("th");
    oTd.innerHTML = "选择";
    oTable.tHead.rows[0].insertBefore(oTd,oTable.tHead.rows[0].firstElementChild);
    //console.log(oTable.tHead.rows[0]);
    //console.log(typeof oTable.tHead.rows[0]);

    for(var i =0; i < aData.length; i ++){
        var oTd = document.createElement("td");
        var oInput = document.createElement("input");
        oInput.setAttribute("type","checkbox");
        oTd.appendChild(oInput);
        oTable.tBodies[0].rows[i].insertBefore(oTd,oTable.tBodies[0].rows[i].firstElementChild);
    }

}

/*插入删除列（最后一列）*/
function insertCol2() {
    var oTable = document.getElementById("tab");
    var oTd = document.createElement("th");
    oTd.innerHTML = "商品删除";
    oTable.tHead.rows[0].appendChild(oTd);
    for(var i = 0; i < aData.length; i ++){
        var oTd = document.createElement("td");
        oTd.innerHTML = "<a href='#'>商品删除</a>";
        oTable.tBodies[0].rows[i].appendChild(oTd);
    }
}

/*勾选时，背景色变色*/
function clickColor() {
    var oTable = document.getElementById("tab");
    var aRows = oTable.tBodies[0].rows;
    console.log("clickColor;");
    for(var i=0;i < aRows.length; i ++){
        aRows[i].firstElementChild.firstElementChild.onclick = function () {
            console.log("setColor;");
            setColor();
        }
    }
}

/*选中时，设置颜色*/
function setColor() {
    var oTable = document.getElementById("tab");
    var aInput = oTable.getElementsByTagName("input");
    console.log("aInput.length:"+ aInput.length);
   console.log("1");
    for(var i =0; i < aInput.length; i ++){
        if(aInput[i].checked){
            console.log("2");
            aInput[i].parentNode.parentNode.style.backgroundColor = "#b3cc5e";
        }
        else{
            if(i%2 == 0){
                aInput[i].parentNode.parentNode.style.backgroundColor = "#f2f3cf";
            }
            else{
                aInput[i].parentNode.parentNode.style.backgroundColor = "#f3cfe8";
            }
        }
    }
}

/*勾选“全选”时，全部选中*/
function clickAll() {
    var oIpt1 = document.getElementById("input1");
    var oTable = document.getElementById("tab");
    var aInput = oTable.getElementsByTagName("input");
    oIpt1.onclick = function () {
        if(!oIpt1.checked){
            oIpt1.checked = false;
            for(var i =0; i < aInput.length; i ++){
                aInput[i].checked=false;
            }
            setColor();
        }
        else{
            oIpt1.checked = true;
            for(var i =0; i < aInput.length; i ++){
                aInput[i].checked=true;
            }
            setColor();
        }
    }
}

/*点删除时，删除本行代码，其他行重新隔行换色*/
function deleteRow(){
    var oTable = document.getElementById("tab");
    var aA = oTable.getElementsByTagName("a");
    for(var i = 0; i < aA.length; i++){
        aA[i].onclick=function () {
            oTable.tBodies[0].removeChild(this.parentNode.parentNode);
            changeColor();/*点击事件之后的隔行换色，一定要放在点击事件里！*/
        }
    }
}