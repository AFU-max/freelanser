window.onscroll = () => {
	const header = document.querySelector('.header');
	const Y = window.scrollY
	if (Y > 300) {
		header.classList.add('header_fixed');
	} else if (Y < 100) {
		header.classList.remove('header_fixed'); 
		header.classList.add('header_fixed-return');     
	}
}

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var overflow = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	menu.classList.toggle('menu_fixed');
	overflow.classList.toggle('overflow');
})
