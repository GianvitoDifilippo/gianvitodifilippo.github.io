/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.querySelector('body');
const neon_items = document.querySelectorAll('.neon');
const showlater = document.querySelectorAll('.showlater');

/* ------------------------------------------------      LANG ELEMENTS      ------------------------------------------------ */
const lang = document.querySelector('#lang');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const navbar = document.querySelector('#header .navbar');
const navlist = document.querySelector('#header .navbar .navlist');
const hamburger = document.querySelector('#header .navbar .hamburger');
const menu_items = document.querySelectorAll('#header .navbar .navlist li');
const header_brand = document.querySelector('#header .navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.querySelector('#hero');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigation_position = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const flag_width = parseInt(getComputedStyle(document.body).getPropertyValue('--flag_width'));
const flag_height = parseInt(getComputedStyle(document.body).getPropertyValue('--flag_height'));

/* ------------------------------------------------       VARS/CONSTS       ------------------------------------------------ */
var navigating = window.scrollY > navigation_position;
const mobile = window.innerWidth <= 1024;
const flag_rest_top = Math.floor(-lang.getBoundingClientRect().top - flag_height * 1.5);
const flag_rest_left = Math.ceil(window.innerWidth - lang.getBoundingClientRect().right + flag_width * 1.5);

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */
// Translates page
(async() => {
    await loadLangs();
    var language = navigator.language.split('-')[0];
    translatePage(language);
})();

// Shows hero brand and hamburger at opening
showlater.forEach(item => item.classList.add('visible'));

// Scroll effects
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

    // Navbar navigation color
    if (scroll_position > navigation_position) {
        if (!navigating) {
            navigating = true;
            navbar.classList.toggle('navigating');
        }
    }
    else {
        if (navigating) {
            navigating = false;
            navbar.classList.toggle('navigating');
        }
    }

    // Hero background parallax effect
    let parallaxShift = scroll_position * 0.75;
    hero.style.backgroundPositionY = `${parallaxShift}px`;
});

// Device-specific scripts
if (mobile) {
    mobileApp();
} else {
    desktopApp();
}