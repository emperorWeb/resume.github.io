/*
 * @Description: 
 * @Author: Rieko
 * @LastEditors: Rieko
 * @PersonalStation: http://www.2019w.cn
 * @Date: 2019-08-10 19:08:26
 * @LastEditTime: 2019-09-07 23:37:24
 */

/* ===== PRELOADER  ===== */
$(window).on('load', function(){
  $(".loader-overlay").delay(500).fadeOut();
});

$(function (){

  let levelSkill ={
    50:"一般",
    60:"良好",
    80:"熟练",
    100:"精通"
  };

  //白色版本（index.html）设置知识技能 级别
  $('#knowledgeSkills ul li').each(function(index,item ){
    let level = $(this).attr('data-level');
    $(this).find('.w-span').append(levelSkill[level]).find(`span:nth-child(-n + ${level/10})`).css('backgroundColor',"#c0e3e7");
  
  });
  //黑色版本（index_black.html）设置知识技能 级别
  $('#knowledgeSkills_black ul li').each(function(index,item ){
    let level = $(this).attr('data-level');
    $(this).find('.w-span').append(levelSkill[level]).find(`span:nth-child(-n + ${level/10})`).css('backgroundColor',"#d14b4a");
  });

  //浏览器滚动条滚动 设置动画
  $(window).on('scroll',()=>{
    let wScrollTop = $(this).scrollTop();
    let userPopOffsetTop = $('.w-scroll-box').offset().top;
    let navOffsetLeft = $('.w-nav').offset().left;
    // console.log(userPopOffsetTop ,wScrollTop);
    if(userPopOffsetTop- wScrollTop<=20) {
      $('.w-scroll-box,.w-nav').addClass('w-scroll-box-animation');
      $('.w-nav').css({
          "left":navOffsetLeft
      });
    }
    if(wScrollTop<=44) {
      $('.w-scroll-box,.w-nav').removeClass('w-scroll-box-animation');
      $('.w-nav').css({
          "left":navOffsetLeft
      });
    }
  });

})
