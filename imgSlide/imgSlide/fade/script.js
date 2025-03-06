$(function () {
  let currentIndex = 0;
  // 초기 상태 설정: 첫 번째 이미지만 보이고 나머지는 숨김
  $(".slide-list > li").hide();
  $(".slide-list > li").eq(currentIndex).show();
  setInterval(function () {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    $(".slide-list > li").eq(currentIndex).siblings().fadeOut();
    $(".slide-list > li").eq(currentIndex).fadeIn();
  }, 3000);
});
