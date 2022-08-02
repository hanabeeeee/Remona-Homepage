
$(function(){
    $('#toggle').click(function(){
        $('#main-header nav').toggleClass('on')
    });

    // AOS 초기화
	AOS.init();

    // 모달창
    //열기
    $('#main-section2 .youtube img').click(function(){
        $('.modal').addClass('on')
    });

    //닫기
    $('.box .btn-close').click(function(){
        $('.modal').removeClass('on')
    });

}) //$
