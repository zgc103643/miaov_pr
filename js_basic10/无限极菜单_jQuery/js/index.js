/**
 * Created by joy on 2017/4/26.--home
 */
$(document).ready(function(){

    //为导航设置默认高亮 与本菜单无关

    $("ul.Menue li.Menue_li:eq(0)").addClass("current")

    /*jquery menu 开始*/

    //为子菜单的最后一个li添加样式，适合为li添加下划线时去除最后一个的下划线

    $(".sub_menu").find("li:last-child").addClass("last")

    //遍历全部li，判断是否包含子菜单，如果包含则为其添加箭头指示状态

    $(".Menue li").each(function(){

        if($(this).find("ul").length!=0){$(this).find("a:first").addClass("hasmenu")}

    })



    //

    $(".Menue li").hover(function(){

        $(this).addClass("now");

        var menu = $(this);

        menu.find("ul.sub_menu:first").show();

    },function(){

        $(this).removeClass("now");

        $(this).find("ul.sub_menu:first").hide();

    });



    var submenu = $(".sub_menu").find(".sub_menu")

    submenu.css({left:"100px",top:"0px"})

    $(".sub_menu li").hover(function(){

        $(this).find("a:first").addClass("now")

        $(this).find("ul:first").show();

    },function(){

        $(this).find("a:first").removeClass("now")

        $(this).find("ul:first").hide()

    });

    /*jquery menu 结束*/

})
