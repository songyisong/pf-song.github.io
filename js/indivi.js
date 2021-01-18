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

new fullpage("#fullpage",{
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor: ['#fff', '#fff', '#fff', 'transparent'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    menu:'#menu',
    scrollingSpeed:1000    
});

$(".intro_white_wrap").click(function(){
    $(this).addClass("disable");
});

//menu
$(".logo > a").click(function() {
    if($("nav").hasClass("on")){ // nav실행
        $(this).parent().siblings("nav").removeClass("on");
    } else { //nav닫힘
        $(this).parent().siblings("nav").addClass("on");
    }
});
$('#menu > a').on('click', function() {
    $('#menu').removeClass('on');
});

//work swiper 
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