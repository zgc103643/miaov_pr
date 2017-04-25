/**
 * Created by joy on 2017/4/26.--home
 */
$(document).ready(function(){
    //页面的Dom已经装载完成时，执行的代码
    $(".main > a,.hmain a").click(function(){
        //找到主菜单项对应的子菜单项
        var ulNode = $(this).next("ul");
        // //根据情况收缩菜单
        // if(ulNode=$.css("display") == "none"){
        // ulNode.css("display","block");
        // }else{
        // ulNode.css("display","none");
        // }

        // ulNode.show("normal");//设置展开的速度，可以是nomal,slow,fast
        // ulNode.hide();
        // ulNode.toggle();//toggle设置展开或者收缩
        //卷帘效果，向上或者向下
        // ulNode.slideDown();
        // ulNode.slideUp;
        ulNode.slideToggle();
    });
    //麻烦的方法
    // $(".hmain > a").hover(function(){
    // $(this).next("ul").slideDown();
    // }.Function(){
    // var ulNode=$(this).next("ul");
    // var timeoutId =setTimeout(function(){

// })
    // ulNode.slideUp();
    // },300);
    // ulNode.hover(function(){
    // clearTimeout(timeoutId);
    // }.function(){
    // $(this).slideUp();
    // });

    /********实现鼠标移动到指定主菜单后子菜单自动显示*****/

    $(".hmain").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });

});
/*
 *修改主菜单的指示图标随着子菜单的变化而变化
 *
 */
function changeIcon(mainNode) {
    if (mainNode) {
        if (mainNode.css("background-image").indexOf("collapsed.gif") >= 0) {
            mainNode.css("background-image","url('images/expanded.gif')");
        } else {
            mainNode.css("background-image","url('images/collapsed.gif')");
        }
    }
}