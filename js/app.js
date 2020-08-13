/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.querySelector('body');
const neon_items = document.querySelectorAll('.neon');

/* ------------------------------------------------      LANG ELEMENTS      ------------------------------------------------ */
const lang = document.querySelector('#lang');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const header = document.querySelector('#header');
const navbar = document.querySelector('#header .navbar');
const navlist = document.querySelector('#header .navbar .navlist');
const hamburger = document.querySelector('#header .navbar .hamburger');
const menu_items = document.querySelectorAll('#header .navbar .navlist li');
const header_brand = document.querySelector('#header .navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.querySelector('#hero');
const hero_h1 = document.querySelector('#hero .container .brand h1');
const hero_h2 = document.querySelector('#hero .container .brand h2');
const hero_a = document.querySelectorAll('#hero .container .brand a');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigation_position = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const flag_width = parseInt(getComputedStyle(document.body).getPropertyValue('--flag_width'));
const flag_height = parseInt(getComputedStyle(document.body).getPropertyValue('--flag_height'));

/* ------------------------------------------------       VARS/CONSTS       ------------------------------------------------ */
const mobile = window.innerWidth <= 1024;
const flag_rest_top = Math.floor(-lang.getBoundingClientRect().top - flag_height * 1.5);
const flag_rest_left = Math.ceil(window.innerWidth - lang.getBoundingClientRect().right + flag_width * 1.5);
const can_hover = parseInt(getComputedStyle(document.body).getPropertyValue('--can_hover')) == 1;

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */

function launchAnimation() {
    hero_h1.style.opacity = '0';
    hero_h2.style.opacity = '0';
    hero_a.forEach(item => item.style.opacity = '0');
    
    // Fade in brand
    setTimeout(() => {
        hero_h1.style.transition = 'opacity .5s linear';
        hero_h1.style.opacity = null;
    }, 1000);
    setTimeout(() => {
        hero_h2.style.transition = 'opacity .5s linear';
        hero_h2.style.opacity = null;
    }, 2500);
    setTimeout(() => {
        hero_a.forEach(item => item.style.transition = 'opacity .5s linear');
        hero_a.forEach(item => item.style.opacity = null);
    }, 4000);

    // Style cleanup
    setTimeout(() => {
        hero_h1.style.transition = null;
        hero_h2.style.transition = null;
        hero_a.forEach(item => item.style.transition = null);
    }, 5000);  
}

if (!getCookie('session')) {
    launchAnimation();
    if (mobile) {
        launchAnimationMobile();
    }
    else {
        launchAnimationDesktop();
    }
    setCookie('session', 'session');
}

if (window.scrollY > navigation_position) {
    navbar.classList.add('navigating');
}

// Translates page
(async() => {
    await loadLangs();
    var language = getCookie('lang');
    if (!language) language = navigator.language.split('-')[0];
    setCookie('lang', language);
    translatePage(language);
})();

// Scroll effects
document.addEventListener('scroll', () => {
    // Navbar navigation color
    if (window.scrollY > navigation_position) {
        navbar.classList.add('navigating');
    }
    else {
        navbar.classList.remove('navigating');
    }

    // Hero background parallax effect
    let parallaxShift = scroll_position * 0.75;
    hero.style.backgroundPositionY = `${parallaxShift}px`;
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024 ^ mobile) {
        window.location.reload();
    }
});

// Device-specific scripts
if (mobile) {
    mobileApp();
} else {
    desktopApp();
}