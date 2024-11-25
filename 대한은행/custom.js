//메인메뉴 안에 있는 li태그에 마우스에 올렸을때 서브메뉴가 나타난다
$(".main-menu>li").mouseenter(function(){
    $(this).children(".sub-menu").show();
})

$(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").hide();
})

$("gallery").hide();


$(".btn-gallery").click(function(){
    $(".gallery").show();
    $(".news").hide();
})

$(".btn-news").click(function(){
    $(".gallery").hide();
    $(".news").show();
})

//open-modal(첫번째 공지사항)을 클릭했을때 modal이 show
$(".open-modal").click(function(){ 
    $(".modal").show(); 
})
//open-modal(닫기 버튼)을 클릭했을때 modal이 hide

$(".close-modal").click(function(){
    $(".modal").hide();
})
