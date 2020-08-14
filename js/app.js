/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.querySelector('body');
const neon_items = document.querySelectorAll('.neon');
const message = document.getElementById('message');

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
const desktop_minWidth = 1366;
const mobile = window.innerWidth <= desktop_minWidth;
const flag_rest_top = Math.floor(-lang.getBoundingClientRect().top - flag_height * 1.5);
const flag_rest_left = Math.ceil(window.innerWidth - lang.getBoundingClientRect().right + flag_width * 1.5);
const can_hover = parseInt(getComputedStyle(document.body).getPropertyValue('--can_hover')) == 1;
var scroll_position = window.scrollY;

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */

function launchAnimation() {
    hero_h1.style.opacity = '0';
    hero_h2.style.opacity = '0';
    hero_a.forEach(item => item.style.opacity = '0');
    
    // Fade in brand
    setTimeout(() => {
        hero_h1.style.transition = 'opacity .5s linear';
        hero_h1.style.opacity = null;
        setTimeout(() => hero_h1.style.transition = null, 500); // Style cleanup
    }, 1000);
    setTimeout(() => {
        hero_h2.style.transition = 'opacity .5s linear';
        hero_h2.style.opacity = null;
        setTimeout(() => hero_h2.style.transition = null, 500); // Style cleanup
    }, 2500);
    setTimeout(() => {
        hero_a.forEach(item => item.style.transition = 'opacity .5s linear');
        hero_a.forEach(item => item.style.opacity = null);
        setTimeout(() => hero_a.forEach(item => item.style.transition = null), 500); // Style cleanup
    }, 4000);
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
    await loadLanguages();
    let language = getCookie('lang');
    if (!language) language = navigator.language.split('-')[0];
    setCookie('lang', language);
    translatePage(language);
})();

// Scroll effects
document.addEventListener('scroll', () => {
    // Navbar navigation color
    scroll_position = window.scrollY;
    if (scroll_position > navigation_position) {
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
    if (window.innerWidth <= desktop_minWidth ^ mobile) {
        window.location.reload();
    }
});

// Blue shadow effect
document.querySelectorAll('.neon').forEach(item => item.addEventListener('animationend', () => item.classList.remove('blueshadow_animation')));

document.querySelectorAll('.blueshadow_click').forEach(item => {
    if (item.classList.contains('neon')) {
        item.addEventListener('click', () => {
            item.classList.add('blueshadow_animation');
        });
    }
    else {
        item.addEventListener('click', () => {
            Array.from(item.getElementsByTagName('*')).forEach(child => {
                if (child.classList.contains('neon')) {
                    child.classList.add('blueshadow_animation');
                }
            })
        });
    }
});

// Device-specific scripts
if (mobile) {
    mobileApp();
} else {
    desktopApp();
}

/* ------------------------------------------------          UTILS          ------------------------------------------------ */
function copyToClipboard(id) {
    element = document.getElementById(id);
    let noselect = element.classList.contains('noselect');
    if (noselect) {
        element.classList.remove('noselect');
    }
    var range, selection, worked;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  
    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        if (noselect) {
            element.classList.add('noselect');
        }
    }
    catch { }
}

function phonenumberOnClick(x, y) {
    let selector = 'messages:copied';
    copyToClipboard('phonenumber');
    displayMessage(translateText(selector), x, y, document.getElementById('phonenumber')).setAttribute('data-lang', selector);
}

function emailOnClick(x, y) {
    let selector = 'messages:copied';
    copyToClipboard('emailaddress');
    displayMessage(translateText(selector), x, y, document.getElementById('emailaddress')).setAttribute('data-lang', selector);
}