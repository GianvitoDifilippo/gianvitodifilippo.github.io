/* ------------------------------------------------     COMMON ELEMENTS     ------------------------------------------------ */
const body = document.body;
const neon_activator_items = document.querySelectorAll('.neon_activator');
const message = document.getElementById('message');

/* ------------------------------------------------     HEADER ELEMENTS     ------------------------------------------------ */
const header = document.querySelector('#header');
const navbar = document.querySelector('#header .navbar');
const navlist = document.querySelector('#header .navbar .navlist');
const hamburger = document.querySelector('#header .navbar .hamburger');
const menu_items = document.querySelectorAll('#header .navbar .navlist li');
const header_brand = document.querySelector('#header .navbar .brand');

/* ------------------------------------------------      HERO ELEMENTS      ------------------------------------------------ */
const hero = document.querySelector('#hero');
const hero_brand = document.querySelector('#hero .container .brand');
const hero_h1 = document.querySelector('#hero .container .brand h1');
const hero_h2 = document.querySelector('#hero .container .brand h2');
const hero_a = document.querySelectorAll('#hero .container .brand a');

/* ------------------------------------------------      CSS VARIABLES      ------------------------------------------------ */
const navigation_position = parseInt(getComputedStyle(document.body).getPropertyValue('--navigation_position'));
const neon_animation_duration = parseInt(getComputedStyle(document.body).getPropertyValue('--neon_animation_duration'));
const fadein_animation_duration = parseInt(getComputedStyle(document.body).getPropertyValue('--fadein_animation_duration'));

/* ------------------------------------------------       VARS/CONSTS       ------------------------------------------------ */
const desktop_minWidth = 1366;
const mobile = window.innerWidth <= desktop_minWidth;
const can_hover = parseInt(getComputedStyle(document.body).getPropertyValue('--can_hover')) == 1;
var scroll_position = window.scrollY;
var header_popin_handle = null;

/* ------------------------------------------------        FUNCTIONS        ------------------------------------------------ */

function header_popin()
{
    header.style.transition = 'transform .5s';
    hamburger.style.transition = 'transform .5s';
    header.classList.remove('hidden');
    header.classList.add('translation');
    header_popin_handle = null;
    setTimeout(() => {
        header.style = null;
        hamburger.style = null;
    }, 500);
}

function launchAnimation()
{
    function fadeIn(element, timeout)
    {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('fadein');
            setTimeout(() => element.classList.remove('fadein'), fadein_animation_duration);
        }, timeout);
    }

    header.classList.add('hidden');

    hero_h1.classList.add('hidden');
    hero_h2.classList.add('hidden');
    hero_a.forEach(item => item.classList.add('hidden'));

    fadeIn(hero_h1, 1000);
    fadeIn(hero_h2, 2500);
    hero_a.forEach(item => fadeIn(item, 4000));

    header_popin_handle = setTimeout(header_popin, 4500);
}

function phonenumberOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('phonenumber');
    displayMessage(translateText(selector), x, y, document.getElementById('phonenumber')).setAttribute('data-lang', selector);
}

function emailOnClick(x, y)
{
    let selector = 'messages:copied';
    copyToClipboard('emailaddress');
    displayMessage(translateText(selector), x, y, document.getElementById('emailaddress')).setAttribute('data-lang', selector);
}

/* ------------------------------------------------         SCRIPT          ------------------------------------------------ */


if (!getCookie('session')) {
    launchAnimation();
    
    setCookie('session', 'session');
}

// Translates page in preferred browser language
(async() => {
    let code = getCookie('lang');
    if (!code) code = navigator.language.split('-')[0];
    setCookie('lang', code);
    await translatePage(code);
})();

neon_activator_items.forEach(item => item.addEventListener('click', () => {
    let children = Array.from(item.getElementsByClassName('neon')).concat(Array.from(item.getElementsByClassName('neon_secondary')));
    if (item.classList.contains('neon') || item.classList.contains('neon_secondary')) children.push(item);
    children.forEach(child => {
        child.classList.add('neon_animation');
        setTimeout(() => child.classList.remove('neon_animation'), neon_animation_duration);
    });
}));

if (scroll_position > navigation_position) {
    navbar.classList.add('navigating');    
}

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

    // Shows header on scrolling if not popped in
    if (header_popin_handle != null) {
        clearTimeout(header_popin_handle);
        header_popin();
    }

    // Hero background parallax effect
    hero.style.backgroundPositionY = `${scroll_position * 0.6}px`;
});

if (mobile) {
    indexMobile();
}
else {
    indexDesktop();
}

body.classList.add('visible');