Splitting();



gsap.defaults({
    opacity:0,
    duration:1.5,
    ease:"power4.inOut",
});
var mTxt = gsap.timeline({
        scrollTrigger:{
        trigger:".section",
        markers:true,
        start:"top top",
        end:"200%", // 100% = bottom 
        scrub:true,
        pin:true
    }   
});
mTxt.from(".section .intro_txt .char",{
    x:-20,
    stagger:0.1
})

// 한줄로 표기
// gsap.from("#mainVisual .slogan .sub .word",{x:100, opacity:0, duration:1, ease:"power3", stagger:0.1, delay:0.5});


var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    //direction: 'vertical',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

});

// 메뉴


// $(".intro > .logo").on("mouseenter", function(){
//     $(this).find(".global_btns").stop().slideDown(250);
// });
// $(".intro > .logo").on("mouseleave", function(){
//     $(this).find(".global_btns").stop().slideUp(300);
// });

$(".another_white_wrap").click(function(){
    $(this).addClass("disable");
});
// 과제: 1. 지금 쓰여진 if문의 조건영역 안에 대체해서 쓸수잇는것들 찾기. 최소 2개
$(".logo > a").click(function() {
    if($("nav").hasClass("on")){ // nav실행
        $(this).parent().siblings("nav").removeClass("on");
    } else { //nav닫힘
        $(this).parent().siblings("nav").addClass("on");
    }
});
$(".global_item").off("click").on("click", function(){
    if($(".global_item").hasClass("active")){
        $(".global_item").removeClass("active");
    } else {
        $(".global_item").addClass("active");
    }
});


// $('.btn_all_menu').click(function(e){
//     e.preventDefault();
//     if( $(this).hasClass('active') ){
//     //	$('.allMenuWrap ').hide();
//         $('.allMenuWrap ').removeClass('show');
//         $('.btn_all_menu').removeClass('active');
//         $('.allMenu .hasDep2 .dep2').slideUp(250);
//     }else{
//     //	$('.allMenuWrap ').show();
//         $('.allMenuWrap ').addClass('show');
//         $('.btn_all_menu').addClass('active');
//     }
// });



// $("body").click(function(e){
//     if(!$("#menu").has(e.target).length){
//         mainMenuHide();
//     }
// });
/*
$('.logo').click(function() {
    $(this).toggleClass('active');
      $(this).next().toggleClass('open');
      $('body').toggleClass('clip');
});
$('#bg a').click(function() {
    $('#menu').removeClass('active');
    $('#bg').removeClass('open');
    $('body').removeClass('clip');
});
*/
// $(".logo > a").click(function() {
//     $(this).find("nav").removeClass("on");
// });


new fullpage("#fullpage",{
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor: ['#fff', '#fff', '#fff', 'transparent'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    menu:'#menu',
    scrollingSpeed:1000    
});

$('.p_list').mouseover(function (){
    $(this).addClass("on");
});
$('.p_list').mouseleave(function (){
    $(this).removeClass("on");
});