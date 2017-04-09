/**
 * Created by joy on 2017/4/9.
 */
window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oCont = document.getElementById("cont");
    var aBox = oCont.getElementsByTagName("div");
    var iNum = 0;
    oBtn.onclick = function () {
        /*重置left和top值，使其全为0*/
        for (var i = 0; i < aBox.length; i++) {
            aBox[i].offsetLeft= 100;
            aBox[i].offsetTop = 0;
        }
        alert("left top");
        /*按第0下*/
        if (iNum % 4 == 0) {
            alert("true");
            for (var i = 0; i < aBox.length; i++) {
                aBox[i].offsetTop = 100 * i;
                if (i % 2 == 0 && i != 2) {
                    aBox[i].offsetLeft = 400;
                    alert('1');
                }
                else if (i % 2 == 1) {
                    aBox[i].offsetLeft = 300;
                }
                else {
                    aBox[i].offsetLeft = 200;
                }
            }

            for (var i = 0; i < aBox.length; i++) {
                aBox[i].style.left = this.offsetLeft + 'px';
                aBox[i].style.top = this.offsetTop + 'px';

            }

        }
        else if (iNum % 4 == 1) {
            for (var i = 0; i < aBox.length; i++) {
                aBox[i].offsetLeft = 100 * i;
                if (i % 2 == 0 && i != 2) {
                    aBox[i].offsetTop = 400;
                }
                else if (i % 2 == 1) {
                    aBox[i].offsetTop = 300;
                }
                else {
                    aBox[i].offsetTop = 200;
                }
            }

            for (var i = 0; i < aBox.length; i++) {
                aBox[i].style.left = this.offsetLeft + 'px';
                aBox[i].style.top = this.offsetTop + 'px';

            }
        }
        else if (iNum % 4 == 2) {
            for (var i = 0; i < aBox.length; i++) {
                aBox[i].offsetTop = 100 * i;
                if (i % 2 == 0 && i != 2) {
                    aBox[i].offsetLeft = 0;
                }
                else if (i % 2 == 1) {
                    aBox[i].offsetLeft = 100;
                }
                else {
                    aBox[i].offsetLeft = 200;
                }
            }
        }
        else if (iNum % 4 == 3) {
            for (var i = 0; i < aBox.length; i++) {
                aBox[i].offsetLeft = 100 * i;
                if (i % 2 == 0 && i != 2) {
                    aBox[i].offsetTop = 0;
                }
                else if (i % 2 == 1) {
                    aBox[i].offsetTop = 100;
                }
                else {
                    aBox[i].offsetTop = 200;
                }
            }
        }



    }

    iNum++;
    alert("iNum:" + iNum);
    alert(aBox[1].offsetLeft);



}