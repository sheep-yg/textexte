$(window).ready(function(){

	var currentScrollValue = $(document).scrollTop();
	var stepValue = 1;


	// 오프닝페이지 메인 비주얼 && 챕터 1 약 움직임 //
	scrollAni();

	// 클릭 애니메이션 //
	clickAnimation();

	
	function clickAnimation() {

		// ------------ step1 ----------- //
		$('#step1').on("click", function(){	
			
			step1Active();

			if ( $('body').hasClass('main') ) {
				main1();
			}

			if ( $('body').hasClass('chapter1') ) {
				c1img101Ani1(); // 신문
				c1img102Ani1(); // 칼럼
				$('.book').attr("src", "./img/1/3-1.png"); // 책
				$('.drug').attr("src", "./img/1/4-1.png"); // 약
				$('.milk').attr("src", "./img/1/5-img/1/5-1_mockup.svg"); // 우유
				$('.doc').attr("src", "./img/1/6-1.png"); // 설명서
				$('.bug').attr("src", "./img/1/7-1.png"); // 벌레
			}
			stepValue = 1;
			console.log(stepValue);
		});

		// ------------ step2 ----------- //
		$('#step2').on("click",function(){	
			
			step2Active();

			if ( $('body').hasClass('chapter1') ) {
				c1img101Ani2(); // 신문
				c1img102Ani2(); // 칼럼
				$('.book').attr("src", "./img/1/3-2.png"); // 책
				$('.drug').attr("src", "./img/1/4-2.png"); // 약
				$('.milk').attr("src", "./img/1/5-2_mockup.svg"); // 우유
				$('.doc').attr("src", "./img/1/6-2.png"); // 설명서
				$('.bug').attr("src", "./img/1/7-2.png"); // 벌레
			}
			stepValue = 2;
			// console.log(stepValue);
		});



		// ------------ step3 ----------- //
		$('#step3').on("click",function(){	
			
			step3Active();

			if ( $('body').hasClass('chapter1') ) {
				c1img101Ani3(); // 신문
				c1img102Ani3(); // 칼럼
				$('.book').attr("src", "./img/1/3-3.png"); // 책
				$('.drug').attr("src", "./img/1/4-3.png"); // 약
				$('.milk').attr("src", "./img/1/5-3_mockup.svg"); // 우유
				$('.doc').attr("src", "./img/1/6-3.png"); // 설명서
				$('.bug').attr("src", "./img/1/7-3.png"); // 벌레
			}
			stepValue = 3;
			// console.log(stepValue);
		});

		// ------------ step4 ----------- //
		$('#step4').on("click",function(){	
			
			step4Active();

			if ( $('body').hasClass('main') ) {
				main4();
			}

			if ( $('body').hasClass('chapter1') ) {
				c1img101Ani4(); // 신문
				c1img102Ani4(); // 칼럼
				$('.book').attr("src", "./img/1/3-4.png"); //책
				$('.drug').attr("src", "./img/1/4-4.png"); // 약
				$('.milk').attr("src", "./img/1/5-4_mockup.svg"); // 우유
				$('.doc').attr("src", "./img/1/6-4.png"); // 설명서
				$('.bug').attr("src", "./img/1/7-4.png"); // 벌레
			}
			stepValue = 4;
			// console.log(stepValue);

		});	
	}
	mouseoverAni();
})




// ----------------------------------------------------------------------------------------------
function step1Active() {
	$('#step1').addClass('active');
	$('#step2').removeClass('active');
	$('#step3').removeClass('active');
	$('#step4').removeClass('active');

	$('#stepbar').css("width", "0px").css("background-color","#D38098");
}

function step2Active() {
	$('#step1').addClass('active');
	$('#step2').addClass('active');
	$('#step3').removeClass('active');
	$('#step4').removeClass('active');

	$('#stepbar').css("width", "83.3px").css("background-color","#D38098");
}

function step3Active() {
	$('#step1').addClass('active');
	$('#step2').addClass('active');
	$('#step3').addClass('active');
	$('#step4').removeClass('active');

	$('#stepbar').css("width", "180px").css("background-color","#D38098");
}

function step4Active() {
	$('#step1').addClass('active');
	$('#step2').addClass('active');
	$('#step3').addClass('active');
	$('#step4').addClass('active');

	$('#stepbar').css("width", "290px").css("background-color","#D38098");

}



// 오프닝페이지 메인 비주얼 //
// 스크롤 값에 따라 이미지가 변화하도록! //
function scrollAni() {

	$(window).scroll(function(){

		var currentScrollValue = $(document).scrollTop();
		// console.log( currentScrollValue );


		if ( currentScrollValue < 2600 ) {

			$('.intro').css('position', 'sticky');
			$('.intro').css('top', '50px');

			// console.log("intro fixed");

		} else {

			$('.intro').css('position', 'relative');
			$('.intro').css('top', '287.5vh');

			// console.log("intro not fixed");

		};

		if ( currentScrollValue < 400 ) {

			$('.intro_1').css('display', 'block');
			$('.intro_2').css('display', 'none');
			$('.intro_3').css('display', 'none');
			$('.intro_4').css('display', 'none');

			$('.scroll_info_p').text("스크롤해서 계속 보기");
			$('.scroll_info_p').css('display', 'block');

		} else if ( currentScrollValue >= 400 && currentScrollValue < 1100 ) {

			$('.intro_1').css('display', 'none');
			$('.intro_2').css('display', 'block');
			$('.intro_3').css('display', 'none');
			$('.intro_4').css('display', 'none');

			$('.scroll_info_p').text("스크롤해서 계속 보기");

		} else if ( currentScrollValue >= 1100 && currentScrollValue < 1800 ) {

			$('.intro_1').css('display', 'none');
			$('.intro_2').css('display', 'none');
			$('.intro_3').css('display', 'block');
			$('.intro_4').css('display', 'none');

			$('.scroll_info_p').text("스크롤");
			$('.scroll_info_p').css('display', 'block');

		} else if ( currentScrollValue >= 1700 ) {

			$('.intro_1').css('display', 'none');
			$('.intro_2').css('display', 'none');
			$('.intro_3').css('display', 'none');
			$('.intro_4').css('display', 'block');

			$('.scroll_info_p').css('display', 'none');

		};

		// if ( $('body').hasClass('chapter1') ) { 
			
		// 	if ( scrollValue >= 5538 ) {
		// 		$('.chapter1_pill').addClass('pill_effect');
		// 	} else {
		// 		$('.chapter1_pill').removeClass('pill_effect');
		// 	}
	
		// }

	});
}




// main animation //

function main1() {

	$('.info_eyes').css('display', 'none');
	$('.blue1').text("상황 설명보다는 대사 위주로");

	$('info_emoji').css('display', 'none');
	$('.blue3').css('display', 'none');

	$('white_2').css('display', 'block');
	$('info_scroll').css('display', 'none');

	$('.blue5').text("초성만 남기고 줄여버리기");

	$('.blue6').text("중요도에 따라 글씨 크기 바꾸기");
	$('.blue6').css('font-size','0.9rem').css('top', '78rem');

	$('.wiki').css('display', 'block');
	$('.wik2i').css('display', 'none');

	$('.plus').css('display', 'none');
	$('.imgimg').css('display', 'none');
	$('.blue4').text("이미지와 짧은 글의 조합");

	$('.info_text_blind').css('display', 'none');
}

function main4() {

	$('.info_eyes').css('display', 'block');
	$('.blue1').text("말말말");
	$('.blue1').css('top', '37.8rem');

	$('info_emoji').css('display', 'block');
	$('.blue3').css('display', 'block');

	$('white_2').css('display', 'none');
	$('info_scroll').css('display', 'block');

	$('.blue5').text("ㅊㅅㅋㅈ");

	$('.blue6').text("중요한 건 크게");
	$('.blue6').css('font-size', '2.3rem').css('top', '79rem');

	$('.wiki').css('display', 'none');
	$('.wik2i').css('display', 'block');

	$('.plus').css('display', 'block');
	$('.imgimg').css('display', 'block');
	$('.blue4').text("글");

	$('.info_text_blind').css('display', 'block');
}




// footer hover chapter1 //
function mouseoverAni() {
	// chapter1 //
	$('#sticker_chapter1').on("mouseover", function(){
		$("#chapterImg2").addClass('hoverOther');
		$('#chapterImg3').addClass('hoverOther');
		//console.log("run");
	})
	$('#sticker_chapter1').on("mouseout", function(){
		$('#chapterImg2').removeClass('hoverOther');
		$('#chapterImg3').removeClass('hoverOther');
	})

	// chapter2 //
	$('#sticker_chapter2').on("mouseover", function(){
		$('#chapterImg1').addClass('hoverOther');
		$('#chapterImg3').addClass('hoverOther');
	})
	$('#sticker_chapter2').on("mouseout", function(){
		$('#chapterImg1').removeClass('hoverOther');
		$('#chapterImg3').removeClass('hoverOther');
	})

	// chapter3 //
	$('#sticker_chapter3').on("mouseover", function(){
		$('#chapterImg2').addClass('hoverOther');
		$('#chapterImg1').addClass('hoverOther');
	})
	$('#sticker_chapter3').on("mouseout", function(){
		$('#chapterImg2').removeClass('hoverOther');
		$('#chapterImg1').removeClass('hoverOther');
	})
}