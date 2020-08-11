/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const navbar = document.querySelector('#header .container');
const hamburger = document.querySelector('#header .container .nav-list .hamburger');
const menu_list = document.querySelector('#header .container .nav-list ul');
const menu_items = document.querySelectorAll('#header .container .nav-list ul li a');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero_container = document.querySelector('#hero .container');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigation_position = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));

/* ------------------------------------------------        VARIABLES        ------------------------------------------------ */
var hero_section = true;

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */
// Mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu_list.classList.toggle('active');
});

menu_items.forEach(item => {
	item.addEventListener('click', () => {
        setTimeout(() => {
            hamburger.classList.toggle('active');
		    menu_list.classList.toggle('active');
        }, 150);
	});
});

// Scroll effects
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;

    // Header scroll effect
    if (scroll_position > navigation_position) {
        if (hero_section) {
            hero_section = false;
            navbar.classList.toggle('navigation');
        }
    } else {
        if (!hero_section) {
            hero_section = true;
            navbar.classList.toggle('navigation');
        }
    }

    // Background parallax effect
    var parallaxShift = scroll_position * 0.75;
    hero_container.style.backgroundPosition = '0px ' + parallaxShift + 'px';
});