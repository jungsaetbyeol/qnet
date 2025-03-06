$(function () {
  //   슬라이드
  let slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide-list").animate({ marginLeft: -100 * slideI + "%" }, 500);
  }, 3000);
 
});
