//신문 애니메이션 -----------------------------------------------

function c1img101Ani1() {

	// 블러 효과 제거
	$('.h2_div li').removeClass('blurEffect');
	$('.h2_div li').css('opacity', '1');

	// '짧은신문' 되도록 이미지 주소 변화
	$('.shortnews').attr("src", "./img/1/1/shortnews_1.png");
	$('.shortnews').css( 'transform', 'scale(1.0)').css('transition', 'all 0.5s');

	// 본문 글씨들 생기게
	$('.news_span').css('opacity', '1');
	$('.news_span2').css('opacity', '1');
	$('.news_etc_text').css('opacity', '1');

	// 오늘의 단어 이미지 바꾸기
	$('.short_word').attr("src", "./img/1/1/short_word.png");
	$('.short_word').css( 'transform', 'scale(1.0)').css('transition', 'all .5s').css('display', 'block');

	// 비행기 변화 애니메이션
	$('.airplane_ai').removeClass('imgScale');
	$('.airplane_ai').animate( { opacity: 0}, 200);
	$('.airplane').animate( { opacity: 1}, 300);

	// 텍스트 변화
	$('.img101 .textmove').css( 'top', '0vw');
	$('.step3text').animate( { opacity: 0}, 600);
	$('.text_grid, .img101 .h2_div, .img101 h3, p').animate( {opacity: 1 }, 500)
	.removeClass('imgScale0')

	$('.trip, .calendar, .X2wk, .phone').animate({opacity: 0}, 500).addClass('imgScale0').removeClass('imgScale100');

}


function c1img101Ani2() {
	// 블러 효과
	$('.h2_div li').addClass('blurEffect');
	$('.h2_div li').css('opacity', '1');

	// '짧   문' 되도록 이미지 주소 변화
	$('.shortnews').attr("src", "./img/1/1/shortnews_2.png");
	$('.shortnews').css( 'transform', 'scale(1.0)').css('transition', 'all 0.5s');

	// 본문 글씨들 사라지게
	$('.news_span').css('opacity', '0').css('transition', 'all 1.5s');
	$('.news_span2').css('opacity', '1');
	$('.news_etc_text').css('opacity', '0').css('transition', 'all .5s .4s');

	// 오늘의 단어 이미지 바꾸기
	$('.short_word').attr("src", "./img/1/1/short_word_2.png");
	$('.short_word').css( 'transform', 'scale(1.0)').css('display', 'block');

	// 비행기 변화 애니메이션
	$('.airplane_ai').removeClass('imgScale');
	$('.airplane_ai').animate( { opacity: 0, top: '27vw', right: '33vw'}, 300);
	$('.airplane').addClass('imgScale');
	$('.airplane').animate( { opacity: 1}, 300);

	// 텍스트 변화
	$('.img101 .textmove').css( 'top', '0vw');
	$('.step3text').animate( { opacity: 0}, 600);
	$('.text_grid, .img101 .h2_div, .img101 h3, p').animate( {opacity: 1 }, 500)
	.removeClass('imgScale0')

	$('.trip, .calendar, .X2wk, .phone').animate({opacity: 0}, 500).addClass('imgScale0').removeClass('imgScale100');

}


function c1img101Ani3() {
	// 블러 효과
	$('.h2_div li').css('opacity', '0');
				
	// '짧   문' 이 작아지도록
	$('.shortnews').attr("src", "./img/1/1/shortnews_2.png");
	$('.shortnews').css( 'transform', 'scale(0.65)').css('transition', 'all .7s');

	// 본문 글씨들 더더더 사라지게
	$('.news_span').css('opacity', '0').css('transition', 'all 1.5s');
	$('.news_span2').css('opacity', '0').css('transition', 'all 1.5s');
	$('.news_etc_text').css('opacity', '0').css('transition', 'all .5s .4s');

	// 오늘의 단어 이미지 바꾸고 크기 줄이기
	$('.short_word').attr("src", "./img/1/1/short_word_3.png");
	$('.short_word').css( 'transform', 'scale(0.65)').css('transition', 'all .5s').css('display', 'block');

	// 비행기 변화 애니메이션
	$('.airplane_ai').addClass('imgScale');
	$('.airplane_ai').animate( { opacity: 1, top: '25vw', right: '30vw'}, 300);
	$('.airplane').addClass('imgScale');
	$('.airplane').animate( { opacity: 0}, 300);
	
	// 텍스트 변화
	$('.img101 .textmove').animate( {top: '10vw'}, 600);
	$('.step3text').animate( { opacity: 1}, 600);
	$('.text_grid, .img101 .h2_div, .img101 h3, .step3text, p').animate( {opacity: 1 }, 500)
	.removeClass('imgScale0')

	$('.trip, .calendar, .X2wk, .phone').animate({opacity: 0}, 500).addClass('imgScale0').removeClass('imgScale100');

}


function c1img101Ani4() {

	// 오늘의 단어 이미지 없애기
	$('.short_word').attr("src", "./img/1/1/short_word_3.png");
	$('.short_word').css( 'transform', 'scale(0)');

	setTimeout(function(){
		$('.short_word').css('display','none');
	}, 500);

	// 비행기 변화 애니메이션
	$('.airplane_ai').addClass('imgScale');
	$('.airplane_ai').animate( { opacity: 1, top: '25vw', right: '30vw'}, 300);
	$('.airplane').addClass('imgScale');
	$('.airplane').animate( { opacity: 0}, 300);

	// 텍스트 변화
	$('.img101 .text_grid, .img101 .h2_div, .img101 h3, .step3text, .img101 p').animate( {opacity: 0 }, 500)
	.addClass('imgScale0');

	$('.trip, .calendar, .X2wk, .phone').animate({opacity: 0}, 200).animate({opacity: 1}, 500).addClass('imgScale100').removeClass('imgScale0');
	

}


//칼럼 애니메이션 -----------------------------------------------
function c1img102Ani1() {

    // 제목 블러 효과
	$('.img102 h2 .column_span_h2').removeClass('blurEffect');
    $('.img102 h2').css('opacity', '1');

    // 본문 글씨
    $('.column_span').css('opacity', '1').css('transition', 'all 0.5s');
    $('.img_info').css('display', 'block').animate( {opacity:1}, 500);
    $('.column_span2, column_span2_big').css('opacity', '1').css('transition', 'all .5s');

    // 헤딩, 강조 글씨
    $('.mainText').animate( {opacity:0}, 100);
    $('.heading').animate( {opacity:1}, 500);

    // textboxmove
    $('.img102 .textmove').animate( {top: '0vw'}, 600);
    $('.column_span2').css('opacity', '1').css('transition', 'all 1.0s');
    $('.column_span2_big').css('font-size', '0.8rem').css('transition', 'all .6s');

    // img off
    $('.readymade_typo').addClass('imgScale0');

    // 4번째 이미지 변화들
    $('.gift').css('left', '0vw').css('transition', 'all 1.2s');

    $('.change, .trash, .moneytrash').animate({opacity:0}, 400);
    $('.change, .trash, .moneytrash').removeClass('imgScale');

    $('.artIs').css('display', 'none').removeClass('imgScale');
}


function c1img102Ani2() {

    // 제목 블러 효과
	$('.img102 .column_span_h2').removeClass('blurEffect');
    $('.img102 h2').css('opacity', '1');

    // 본문 글씨
	$('.column_span').css('opacity', '0').css('transition', 'all 1.5s');
    $('.img_info').animate( {opacity:0}, 500);

    setTimeout(function(){
		$('.img_info').css('display','none');
	}, 1000);

    // 헤딩, 강조 글씨
    $('.mainText').animate( {opacity:0}, 100);
    $('.heading').animate( {opacity:1}, 500);

    // textboxmove
    $('.img102 .textmove').animate( {top: '0vw'}, 600);
    $('.column_span2').css('opacity', '1').css('transition', 'all 1.0s');
    $('.column_span2_big').css('opacity', '1').css('font-size', '0.8rem').css('transition', 'all .6s');

    // img off
    $('.readymade_typo').removeClass('imgScale');
    $('.readymade_typo').addClass('imgScale0');

    // 4번째 이미지 변화들
    $('.gift').css('left', '0vw').css('transition', 'all 1.2s');

    $('.change, .trash, .moneytrash').animate({opacity:0}, 400);
    $('.change, .trash, .moneytrash').removeClass('imgScale');

    $('.artIs').css('display', 'none').removeClass('imgScale');
    
}


function c1img102Ani3() {

    // 제목 블러 효과
	$('.img102 .column_span_h2').addClass('blurEffect');
    $('.img102 h2').css('opacity', '1');

	// 본문 글씨
    $('.column_span').css('opacity', '0').css('transition', 'all 1.5s');
    $('.img_info').animate( {opacity:0}, 500);


    setTimeout(function(){
		$('.img_info').css('display','none');
	}, 1000);

    // 헤딩, 강조 글씨
    $('.mainText').animate( {opacity:1}, 500).css('left', '0vw').css('top', '-12vw').css('transition', 'all 1.2s');;;
    $('.heading').animate( {opacity:0}, 300);
    
    // textboxmove
    $('.img102 .textmove').animate( {top: '-17.7vw'}, 600);
    $('.column_span2_big').css('opacity', '1').css('font-size', '1.0rem').css('transition', 'all .6s');
    $('.column_span2').css('opacity', '0').css('transition', 'all 1.5s');
    $('.column_span3').css('opacity', '1').css('transition', 'all 1.5s');

    // img on
    $('.readymade_typo').css('opacity', '1');
    $('.readymade_typo').addClass('imgScale');
    $('.readymade_typo').removeClass('imgScale0');

    // 4번째 이미지 변화들
    $('.gift').css('left', '0vw').css('transition', 'all 1.2s');
    $('.readymade_typo').css('left', '28vw').css('transition', 'all 1.2s');

    $('.change, .trash, .moneytrash').animate({opacity:0}, 400);
    $('.change, .trash, .moneytrash').removeClass('imgScale');

    $('.artIs').css('display', 'none').removeClass('imgScale');
}


function c1img102Ani4() {

    // 제목 블러 효과
    $('.img102 .column_span_h2').addClass('blurEffect');

    // 본문 글씨
    $('.column_span, .column_span2, .column_span2_big, .img102 h2, .column_span3').css('opacity', '0').css('transition', 'all 1.5s');
    $('.img_info').animate( {opacity:0}, 500);

    // 헤딩, 강조 글씨
    $('.mainText').animate( {opacity:1}, 500).css('left', '-16vw').css('top', '-10vw').css('transition', 'all 1.2s');;
    $('.heading').animate( {opacity:0}, 300);

    // textboxmove
    $('.img102 .textmove').animate( {top: '-17.7vw'}, 600);

    // img on
    $('.readymade_typo').css('opacity', '1');
    $('.readymade_typo').addClass('imgScale');
    $('.readymade_typo').removeClass('imgScale0');


    // 4번째 이미지 변화들
    $('.gift').css('left', '-16vw').css('transition', 'all 1.2s');
    $('.readymade_typo').css('left', '19vw').css('transition', 'all 1.2s');

    $('.change, .trash, .moneytrash').animate({opacity:1}, 400);
    $('.change, .trash, .moneytrash').addClass('imgScale');

    $('.artIs').css('display', 'block').addClass('imgScale');
}