$(".open-modal").click(function () {
    $(".modal").show();
    // $(".modal").slideDown();
    //클릭했을때 안내가 나타나는 기는
})

$(".close-modal").click(function () {
    $(".modal").hide();
    // $(".modal").slideup();
    //클릭했을때 안내가 지워지는 기는
})

$(".btn-gal").click(function () {
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("backgroundColor","#5f1c25");    
    $(".btn-notice").css("backgroundColor","#cccccc");    
    //클릭했을떄 색깔이 넘어가는기능 
})

$(".btn-notice").click(function () {
    $(".gal").hide();
    $(".notice").show();

    $(".btn-notice").css("backgroundColor","#5f1c25");    
    $(".btn-gal").css("backgroundColor","#cccccc");   
    //클릭했을떄 색깔이 넘어가는기능 
})

//#5f1c25

$(".gnb>li").mouseover(function() {
    // $(".sub").show();
    $(this).children(".sub").stop() .slideDown();
})

$(".gnb>li").mouseout(function() {
    // $(".sub").show();
    $(".sub").stop().slideUp();
    //스탑을 주고 기능을 사용후 스탑으로 멈춰서 연속적으로 누적되는걸 막음
})