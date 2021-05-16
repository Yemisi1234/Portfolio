"use strick"
/*======================Sticky Header======================*/
window.onscroll = function () { stickyHeader() };

const headerSticky = document.getElementById('header-sticky');
const sticky = headerSticky.offsetTop;

function stickyHeader(){
	if(window.pageYOffset >= sticky){
		headerSticky.classList.add('sticky');
	} else{
		headerSticky.classList.remove('sticky');
	}
}

/*======================Menu burger======================*/
const headerBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		//document.body.classList.toggle('lock');
		headerBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

/*======================Smooth scroll======================*/
const menuLinks = document.querySelectorAll('.smooth-scroll[data-goto]');
if (menuLinks.length > 0){
	menuLinks.forEach(menuLinks =>{
		menuLinks.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBloclValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight +90;

			if (headerBurger.classList.contains('active')){
				headerBurger.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top:gotoBloclValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

/*======================Active Nav Link On Page Scroll======================*/
window.addEventListener("scroll", event => {
	const NavLinks = document.querySelectorAll(".menu__link");
	const fromTop = window.scrollY - 150;
	if(NavLinks.length >0){
		NavLinks.forEach(link => {
			const section = document.querySelector(link.hash);
			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				link.classList.add("menu__link-active");
			} else {
				link.classList.remove("menu__link-active");
			}
		});
	}
}); 


function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1500);
	});
}
/*===================Preloader=========================*/
loadData().then(() => {
	const preloaderEl = document.getElementById('preloader');
	const bodyLock = document.querySelector('body');
	preloaderEl.classList.add('hidden');
	preloaderEl.classList.remove('visible');
	bodyLock.classList.remove('lock');
});
/*=========================Animation====================================*/
loadData().then(() =>{
	animOnScroll();
	window.addEventListener('scroll', animOnScroll);
});
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}
/*=========================Modal Image====================================*/
const itemImg = document.querySelectorAll('.work__body');
const modal = document.querySelectorAll('.work__template');
const header = document.querySelector('.header');
if(itemImg.length > 0 && modal.length > 0){
	for (let i = 0; i < itemImg.length; i++) {
		itemImg[i].addEventListener("click", function () {
			modal[i].classList.add('work__active');
			document.body.classList.add('lock');
			header.classList.add('hide-header');
		});
		modal[i].addEventListener("click", function (event) {
			if (event.target == modal[i]) {
				modal[i].classList.remove('work__active');
				document.body.classList.remove('lock');
				header.classList.remove('hide-header');
			}
		});
	}
}
/*=========================Lazy Loading====================================*/
const lazeImg = document.querySelectorAll('.work__template-img img[data-src]');
if (lazeImg.length > 0){
	lazeImg.forEach(img =>{
		if (img.dataset.src){
			lazyLoading();
		}
	});
}
function lazyLoading(){
	for (let i = 0; i < itemImg.length; i++) {
		itemImg[i].addEventListener("click", function () {
			if (lazeImg[i].dataset.src) {
			lazeImg[i].src = lazeImg[i].dataset.src;
			lazeImg[i].removeAttribute('data-src');
			}
	});
}
}