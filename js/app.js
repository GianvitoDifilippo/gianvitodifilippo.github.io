const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const hamburger_after = document.querySelector('.header .nav-bar .nav-list .hamburger::after');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const brand = document.querySelector('.brand h1');

const scroll_header_color = getComputedStyle(document.body).getPropertyValue('--scroll_header_color');
const hero_header_color = getComputedStyle(document.body).getPropertyValue('--hero_header_color');
const brand_display_initial = getComputedStyle(document.body).getPropertyValue('--brand_display_initial');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    hamburger_after.style.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = scroll_header_color;
        brand.style.display = 'block';
    } else {
        header.style.backgroundColor = hero_header_color;
        brand.style.display = brand_display_initial;
    }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
        setTimeout(() => {
            hamburger.classList.toggle('active');
		    mobile_menu.classList.toggle('active');
        }, 200);
	});
});