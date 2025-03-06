$(function () {
  let slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide-list").animate({ marginTop: -350 * slideI + "px" }, 500);
  }, 3000);
});
