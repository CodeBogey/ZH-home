$(document).ready(function() {
  var mySwiper3 = new Swiper('#swiper3',{
    autoplay : 3000,//可选选项，自动滑动
    loop : true,//可选选项，开启循环
    mode : 'vertical'
  })
  var mySwiper1 = new Swiper('#swiper1',{
    autoplay : 3000,//可选选项，自动滑动
    loop : true,//可选选项，开启循环
    pagination : '.pagination'
  })
    var mySwiper2 = new Swiper('#swiper2',{
      autoplay : 3000,//可选选项，自动滑动
      loop : true,//可选选项，开启循环
      slidesPerView : 4,
      spaceBetween : 60,
    })
    $('#my-swiper-button-prev').click(function(){
      mySwiper2.swipePrev(); 
      })
    $('#my-swiper-button-next').click(function(){
      mySwiper2.swipeNext(); 
    })
  $("#closeRnav").click(function () {
    $(".fixed-nav").hide()
  })
  $(".tit span").hover(function () {
    $(".tit span").eq($(this).index()).addClass("active").siblings().removeClass("active")
    $(".col-2-r-ul").hide().eq($(this).index()).show()
  })
  $(".gsgg span").hover(function () {
    $(".gsgg span").eq($(this).index()).addClass("active").siblings().removeClass("active")
    $(".col-3-l-ul").hide().eq($(this).index()).show()
  })
  $(".bmkx span").hover(function () {
    $(".bmkx span").eq($(this).index()).addClass("active").siblings().removeClass("active")
    $(".col-3-r-ul").hide().eq($(this).index()).show()
  })
  $(".col-3-tab-nav span").on('click', function () {
    $(".col-3-tab-nav span").eq($(this).index()).addClass("col-3-active").siblings().removeClass("col-3-active")
    $(".tab-3").hide().eq($(this).index()).show()
  })
  $(".gk-top-l-tab span").hover(function () {
    $(".gk-top-l-tab span").eq($(this).index()).addClass("blue-active").siblings().removeClass("blue-active")
    $(".gf").hide().eq($(this).index()).show()
  })
  $(".fw-l-nav span").hover(function () {
    $(".fw-l-nav span").eq($(this).index()).addClass("blue-active").siblings().removeClass("blue-active")
    $(".fw").hide().eq($(this).index()).show()
  })
  $(".grsx-tab span").hover(function () {
    $(".grsx-tab span").eq($(this).index()).addClass("red-active").siblings().removeClass("red-active")
    $(".fenlei").hide().eq($(this).index()).show()
  })
  $(".frsx-tab span").hover(function () {
    $(".frsx-tab span").eq($(this).index()).addClass("red-active").siblings().removeClass("red-active")
    $(".faren").hide().eq($(this).index()).show()
  })
  $(".dc-tab span").hover(function () {
    $(".dc-tab span").eq($(this).index()).addClass("blue-active").siblings().removeClass("blue-active")
    $(".dchy").hide().eq($(this).index()).show()
  })
  $(".jl-r-tab span").hover(function () {
    $(".jl-r-tab span").eq($(this).index()).addClass("blue-active").siblings().removeClass("blue-active")
    $(".table").hide().eq($(this).index()).show()
  })
});