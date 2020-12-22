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

$(".intro_white_wrap").click(function(){
    $(this).addClass("disable");
});
$(".logo > a").click(function() {
    if($("nav").hasClass("on")){ // nav실행
        $(this).parent().siblings("nav").removeClass("on");
    } else { //nav닫힘
        $(this).parent().siblings("nav").addClass("on");
    }
});

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