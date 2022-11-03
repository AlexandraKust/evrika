// мобильное меню
const menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
	const menuBody = document.querySelector('.navmenu');
	const headerPhone = document.querySelector('.header__phone');
	const headerBtns = document.querySelector('.header__btns');

	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
		headerPhone.classList.toggle('active');
		headerBtns.classList.toggle('active');
		document.body.classList.toggle('lock');
	});

}


// галочка в согласие
const check = document.querySelector('.form__checkbox');
const agree = document.querySelector('.form__agree');

agree.addEventListener("click", function (e) {
	check.classList.toggle('active');
});

// маска на ввод номера телефона
$("#phone").mask("+7(999)999-99-99");
$("#telephone").mask("+7(999)999-99-99");
$("#phone-number").mask("+7(999)999-99-99");

// установка объема литров топлива
const range = document.getElementById("range");
const output = document.getElementById("output");
output.innerHTML = range.value;

range.oninput = function () {
	output.innerHTML = this.value;
}

//certificates swiper
const certificates = new Swiper('.certificates__container', {
	loop: false,
	speed: 800,
	spaceBetween: 30,
	centeredSlides: false,
	slidesPerView: 4,
	simulateTouch: true,
	touchRatio: 1,

	mousewheel: {
		sensitivity: 1,
		EventTarget: '.certificates__container',
	},
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.certificates__swiper-arrow-next',
		prevEl: '.certificates__swiper-arrow-prev',
	},

});

//partners swiper
const partners = new Swiper('.partners__container', {
	loop: false,
	speed: 800,
	spaceBetween: 100,
	centeredSlides: false,
	// slidesPerView: 4,
	simulateTouch: true,
	touchRatio: 1,

	mousewheel: {
		sensitivity: 1,
		EventTarget: '.partners__container',
	},

	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.partners__pagination',
		clickable: true,
	},
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		990: {
			slidesPerView: 3,
		},
	},
});

//feedback swiper
const feedback = new Swiper('.feedback__container', {
	loop: false,
	speed: 800,
	spaceBetween: 30,
	centeredSlides: false,
	slidesPerView: 2,
	simulateTouch: true,
	touchRatio: 1,

	mousewheel: {
		sensitivity: 1,
		EventTarget: '.feedback__container',
	},
	keyboard: {
		enabled: true,
	},

	navigation: {
		nextEl: '.feedback__swiper-arrow-next',
		prevEl: '.feedback__swiper-arrow-prev',
	},

	breakpoints: {
		485: {
			slidesPerView: 1,
		},
	},

});