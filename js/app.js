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
const mobile = window.innerWidth <= 1024;
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
    if (window.innerWidth <= 1024 ^ mobile) {
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

function displayMessage(text, x, y, element) {
    let newMessage = message.cloneNode(false);
    document.body.appendChild(newMessage);
    newMessage.textContent = text;
    let xPos = 0;
    let yPos = 0;
    if (element) {
        msgWidth = newMessage.getBoundingClientRect().width;
        msgHeight = newMessage.getBoundingClientRect().height;
        var rect = element.getBoundingClientRect();
        xRules = x.split(',');
        yRules = y.split(',');
        xRules.forEach(rule => {
            let ruleNum = parseFloat(rule);
            if (isNaN(ruleNum)) {
                switch (rule) {
                    case 'center-left':
                        xPos += rect.left + rect.width * 0.5;
                        break;
                    case 'center-right':
                        xPos += rect.left + rect.width * 0.5 - msgWidth;
                        break;
                    case 'center':
                    case 'center-center':
                        xPos += rect.left + (rect.width - msgWidth) * 0.5;
                        break;
                    case 'right-left':
                        xPos += rect.right;
                        break;
                    case 'right-center':
                        xPos += rect.right - msgWidth * 0.5;
                        break;
                    case 'right':
                    case 'right-right':
                        xPos += rect.right - msgWidth;
                        break;
                    case 'left-center':
                        xPos += rect.left - msgWidth * 0.5;
                        break;
                    case 'left-right':
                        xPos += rect.left - msgWidth;
                        break;
                    case 'left':
                    case 'left-left':
                    default:
                        xPos += rect.left;
                        break;
                }
            }
            else {
                xPos += ruleNum;
            }
        });
        yRules.forEach(rule => {
            let ruleNum = parseFloat(rule);
            if (isNaN(ruleNum)) {
                switch (rule) {
                    case 'center-top':
                        yPos += rect.top + rect.height * 0.5;
                        break;
                    case 'center-bottom':
                        yPos += rect.top + rect.height * 0.5 - msgHeight;
                        break;
                    case 'center':
                    case 'center-center':
                        yPos += rect.top + (rect.height - msgHeight) * 0.5;
                        break;
                    case 'bottom-top':
                        yPos += rect.bottom;
                        break;
                    case 'bottom-center':
                        yPos += rect.bottom - msgHeight * 0.5;
                        break;
                    case 'bottom':
                    case 'bottom-bottom':
                        yPos += rect.bottom - msgHeight;
                        break;
                    case 'top-center':
                        yPos += rect.top - msgHeight * 0.5;
                        break;
                    case 'top-bottom':
                        yPos += rect.top - msgHeight;
                        break;
                    case 'top':
                    case 'top-top':
                    default:
                        yPos += rect.top;
                        break;
                }
            }
            else {
                yPos += ruleNum;
            }
        });
        xPos += window.scrollX;
        yPos += window.scrollY;
    }
    else {
        xPos = x;
        yPos = y;
    }
    newMessage.style.left = `${xPos}px`;
    newMessage.style.top = `${yPos}px`;
    newMessage.addEventListener('animationend', () => newMessage.remove());
    return newMessage;
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