var Today = new Date();
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 495) { /* 要滑動到選單的距離 */
            $('.dropdowns').addClass('navFixed'); /* 幫選單加上固定效果 */
        } else {
            $('.dropdowns').removeClass('navFixed'); /* 移除選單固定效果 */
        }
    });
});

function copyFn(id) {
    if (id == "圖源一") {
        id = ""

    }
    var val = document.getElementById(id);
    window.getSelection().selectAllChildren(val);
    alert("複製成功")
    document.execCommand("Copy");

}
Today = new Date();

yy = Today.getFullYear();
mm = Today.getMonth() + 1;
dd = Today.getDate();

function mToday() {
    document.getElementById("mday").innerHTML = yy + "年" + mm + "月" + dd + "日";
}