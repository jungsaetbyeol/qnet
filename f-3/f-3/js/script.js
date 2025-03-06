$(function () {
  //   메뉴
  $(".navi > li").hover(function () {
    $(this).find(".submenu").stop().slideToggle(500);
    $(".submenu-bg").stop().slideToggle(500);
  });
  //   슬라이드
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width(); // 각 슬라이드의 너비

  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      // 애니메이션 후 첫 번째 슬라이드를 맨 뒤로 이동
      $(this).append($(this).find("li:first"));
      // 슬라이드의 위치를 0으로 초기화
      $(this).css({ marginLeft: 0 });
    });
  };

  setInterval(moveSlide, 3000); // 3초마다 슬라이드 이동
  // 탭메뉴
  $(".tabmenu > li > a").click(function(e){
e.preventDefault();
$(this).parent().addClass("active").siblings().removeClass("active")

  })
  // modal
  $(".notice li:first-child").click(function(){
    $("#modal").addClass("active")
  })
  $(".modal-btn").click(function(){
    $("#modal").removeClass("active")
  })
});
