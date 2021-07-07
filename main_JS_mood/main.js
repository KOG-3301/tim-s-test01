$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 495)  {          /* 要滑動到選單的距離 */
       $('.dropdowns').addClass('navFixed');   /* 幫選單加上固定效果 */
    } else {
      $('.dropdowns').removeClass('navFixed'); /* 移除選單固定效果 */
    }
  });
});