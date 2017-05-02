/**
 * Created by joy on 2017/5/3.--home
 */
window.onload = function () {
    var oName = document.getElementById("name");
    var select = document.getElementById("sex");
    var options  = select.getElementsByTagName("option");
    alert(select.value);
    alert(select.options);
    alert(select.options[0].text);
    alert(select.selectedIndex);
}